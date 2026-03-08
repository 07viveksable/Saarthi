"""
SAARTHI — Backend API
Supports:
  - Model 1: Scheme Classifier       (ML — TF-IDF + Logistic Regression)
  - Model 2: Emotion Detector        (Deep Learning — indic-bert)
  - Model 3: Crisis Risk Predictor   (ML — Random Forest + Gradient Boosting)

Run:
  pip install fastapi uvicorn scikit-learn transformers torch
  python api.py
"""

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SAARTHI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# ── Load Models at Startup ────────────────────────────────────────────────────

print("Loading models...")

# Model 1: Scheme Classifier (ML)
scheme_model_data = pickle.load(open("models/scheme_classifier.pkl", "rb"))
scheme_pipeline   = scheme_model_data["pipeline"]
scheme_le         = scheme_model_data["label_encoder"]
print("  ✅ Scheme Classifier loaded")

# Model 2: Emotion Detector (Deep Learning — indic-bert)
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

DL_MODEL_PATH = "models/emotion_detector_dl"
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

emotion_metadata  = pickle.load(open("models/emotion_detector_dl.pkl", "rb"))
emotion_tokenizer = AutoTokenizer.from_pretrained(DL_MODEL_PATH)
emotion_model     = AutoModelForSequenceClassification.from_pretrained(DL_MODEL_PATH)
emotion_model     = emotion_model.to(device)
emotion_model.eval()

ID2LABEL     = emotion_metadata["id2label"]
severity_map = emotion_metadata["severity_map"]
MAX_LENGTH   = emotion_metadata.get("max_length", 128)
print(f"  ✅ Emotion Detector (indic-bert) loaded on {device}")

# Model 3: Crisis Predictor (ML)
crisis_model_data = pickle.load(open("models/crisis_predictor.pkl", "rb"))
crisis_model      = crisis_model_data["model"]
crisis_scaler     = crisis_model_data["scaler"]
crisis_le         = crisis_model_data["label_encoder"]
crisis_features   = crisis_model_data["feature_columns"]
print("  ✅ Crisis Predictor loaded")

print("\nAll models ready! Starting server...\n")


# ── Request/Response Models ───────────────────────────────────────────────────

class TextInput(BaseModel):
    text: str

class ProfileInput(BaseModel):
    # Core demographics
    age: float = 40
    family_size: float = 4
    num_dependents: float = 2
    land_acres: float = 2.0
    education_years: float = 8
    is_male: float = 1
    # Financial
    monthly_income: float = 8000
    total_debt: float = 50000
    informal_debt: float = 0
    debt_to_income_ratio: float = 0.5
    has_savings: float = 1
    savings_months: float = 1
    has_bank_account: float = 1
    # Crop
    crop_loss_percent: float = 0
    consecutive_bad_seasons: float = 0
    has_crop_insurance: float = 0
    irrigation_access: float = 0
    crop_diversity: float = 2
    # Social
    has_govt_scheme: float = 0
    social_support_score: float = 5
    access_to_credit_formal: float = 0
    access_to_credit_informal: float = 0
    # Risk events
    recent_death_in_family: float = 0
    health_emergency: float = 0
    domestic_conflict: float = 0
    moneylender_pressure: float = 0
    drought_affected: float = 0
    flood_affected: float = 0
    legal_dispute: float = 0
    previous_crisis: float = 0
    # Psychosocial
    isolation_score: float = 3
    hopelessness_score: float = 3
    # Derived
    disposable_income: float = 2000
    income_shock_estimate: float = 0
    formal_to_informal_ratio: float = 0


# ── Endpoints ─────────────────────────────────────────────────────────────────

@app.get("/")
def home():
    return {
        "status": "SAARTHI API is running",
        "models": {
            "scheme_classifier": "ML (TF-IDF + Logistic Regression)",
            "emotion_detector":  f"Deep Learning (indic-bert) on {device}",
            "crisis_predictor":  "ML (Random Forest Ensemble)"
        }
    }


@app.post("/api/classify-scheme")
def classify_scheme(data: TextInput):
    """
    Classifies which welfare scheme matches the user's query.
    Returns scheme name and confidence score.
    """
    import re
    text_clean = re.sub(r'[^\w\s]', ' ', data.text.lower().strip())

    pred_encoded = scheme_pipeline.predict([text_clean])[0]
    pred_label   = scheme_le.inverse_transform([pred_encoded])[0]
    confidence   = scheme_pipeline.predict_proba([text_clean]).max()

    # Human-readable scheme names
    scheme_names = {
        "crop_insurance":   "PM Fasal Bima Yojana (Crop Insurance)",
        "widow_pension":    "Indira Gandhi National Widow Pension",
        "scholarship":      "National Scholarship Portal",
        "housing_pmay":     "PM Awas Yojana (Housing Scheme)",
        "health_insurance": "Ayushman Bharat PM-JAY",
        "pm_kisan":         "PM Kisan Samman Nidhi",
        "ration_card":      "Public Distribution System (Ration Card)",
        "old_age_pension":  "Indira Gandhi National Old Age Pension",
    }

    return {
        "scheme":      pred_label,
        "scheme_name": scheme_names.get(pred_label, pred_label),
        "confidence":  round(float(confidence), 2)
    }


@app.post("/api/detect-emotion")
def detect_emotion(data: TextInput):
    """
    Detects emotional state using fine-tuned indic-bert.
    Understands Hindi, Hinglish, and mixed language.
    Returns emotion class, severity level, and recommended action.
    """
    inputs = emotion_tokenizer(
        data.text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=MAX_LENGTH
    ).to(device)

    with torch.no_grad():
        outputs = emotion_model(**inputs)
        probs   = torch.softmax(outputs.logits, dim=1)[0]
        pred_id = probs.argmax().item()

    pred_label = ID2LABEL[str(pred_id)] if str(pred_id) in ID2LABEL else ID2LABEL[pred_id]
    confidence = float(probs[pred_id])

    # All class probabilities
    all_probs = {
        ID2LABEL[str(i)] if str(i) in ID2LABEL else ID2LABEL[i]: round(float(p), 3)
        for i, p in enumerate(probs)
    }

    sev_info = severity_map.get(pred_label, {})

    return {
        "emotion":     pred_label,
        "severity":    sev_info.get("severity", "NONE"),
        "action":      sev_info.get("action", "standard"),
        "confidence":  round(confidence, 2),
        "all_scores":  all_probs
    }


@app.post("/api/predict-crisis")
def predict_crisis(data: ProfileInput):
    """
    Predicts crisis risk from citizen profile data.
    Used for proactive outreach before crisis happens.
    """
    values = [[getattr(data, col, 0) for col in crisis_features]]
    values_scaled = crisis_scaler.transform(values)

    pred_encoded = crisis_model.predict(values_scaled)[0]
    pred_label   = crisis_le.inverse_transform([pred_encoded])[0]
    proba        = crisis_model.predict_proba(values_scaled)[0]
    confidence   = float(proba.max())

    all_probs = {
        crisis_le.inverse_transform([i])[0]: round(float(p), 3)
        for i, p in enumerate(proba)
    }

    # Recommended actions per risk level
    actions = {
        "high_risk":   "Immediate outreach call — connect to counselor and scheme officer",
        "medium_risk": "Schedule welfare check-in call within 48 hours",
        "low_risk":    "Standard scheme recommendations"
    }

    return {
        "risk_level":  pred_label,
        "confidence":  round(confidence, 2),
        "all_scores":  all_probs,
        "action":      actions.get(pred_label, "Monitor")
    }


# ── Run Server ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
