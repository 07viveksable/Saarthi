from fastapi import FastAPI
from pydantic import BaseModel
import pickle, numpy as np, uvicorn, re
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SAARTHI API - Test Mode")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

print("Loading models...")

scheme_data     = pickle.load(open("models/scheme_classifier.pkl", "rb"))
scheme_pipeline = scheme_data["pipeline"]
scheme_le       = scheme_data["label_encoder"]
print("  ✅ Scheme Classifier loaded")

crisis_data     = pickle.load(open("models/crisis_predictor.pkl", "rb"))
crisis_model    = crisis_data["model"]
crisis_scaler   = crisis_data["scaler"]
crisis_le       = crisis_data["label_encoder"]
crisis_features = crisis_data["feature_columns"]
print("  ✅ Crisis Predictor loaded")

print("  ✅ Emotion Detector: keyword mode (no PyTorch needed)")
print("\nAll models ready!\n")

class TextInput(BaseModel):
    text: str

class ProfileInput(BaseModel):
    age: float = 40
    family_size: float = 4
    num_dependents: float = 2
    land_acres: float = 2.0
    education_years: float = 8
    is_male: float = 1
    monthly_income: float = 8000
    total_debt: float = 50000
    informal_debt: float = 0
    debt_to_income_ratio: float = 0.5
    has_savings: float = 1
    savings_months: float = 1
    has_bank_account: float = 1
    crop_loss_percent: float = 0
    consecutive_bad_seasons: float = 0
    has_crop_insurance: float = 0
    irrigation_access: float = 0
    crop_diversity: float = 2
    has_govt_scheme: float = 0
    social_support_score: float = 5
    access_to_credit_formal: float = 0
    access_to_credit_informal: float = 0
    recent_death_in_family: float = 0
    health_emergency: float = 0
    domestic_conflict: float = 0
    moneylender_pressure: float = 0
    drought_affected: float = 0
    flood_affected: float = 0
    legal_dispute: float = 0
    previous_crisis: float = 0
    isolation_score: float = 3
    hopelessness_score: float = 3
    disposable_income: float = 2000
    income_shock_estimate: float = 0
    formal_to_informal_ratio: float = 0

@app.get("/")
def home():
    return {"status": "SAARTHI API is running", "mode": "test"}

@app.post("/api/classify-scheme")
def classify_scheme(data: TextInput):
    text_clean   = re.sub(r'[^\w\s]', ' ', data.text.lower().strip())
    pred_encoded = scheme_pipeline.predict([text_clean])[0]
    pred_label   = scheme_le.inverse_transform([pred_encoded])[0]
    confidence   = scheme_pipeline.predict_proba([text_clean]).max()
    scheme_names = {
        "crop_insurance":   "PM Fasal Bima Yojana",
        "widow_pension":    "Indira Gandhi Widow Pension",
        "scholarship":      "National Scholarship Portal",
        "housing_pmay":     "PM Awas Yojana",
        "health_insurance": "Ayushman Bharat PM-JAY",
        "pm_kisan":         "PM Kisan Samman Nidhi",
        "ration_card":      "Public Distribution System",
        "old_age_pension":  "Indira Gandhi Old Age Pension",
    }
    return {
        "scheme":      pred_label,
        "scheme_name": scheme_names.get(pred_label, pred_label),
        "confidence":  round(float(confidence), 2)
    }

@app.post("/api/detect-emotion")
def detect_emotion(data: TextInput):
    text = data.text.lower()
    crisis_keywords = [
    # English
    "end my life", "want to die", "no hope", "suicide",
    "no way out", "nothing left", "I want to die",
    "better off without me", "planning to hurt",
    # Roman Hindi (transliteration)
    "marna", "khatam ho gaya", "jeena nahi",
    "koi rasta nahi", "jeene se thak",
    "marna behtar", "koi nahi hai", "sab khatam",
    "main nahi rehna", "pesticide", "aaj raat kuch",
    # Devanagari Hindi (actual script) ← NEW
    "कोई रास्ता नहीं",
    "सब खत्म हो गया",
    "जीना नहीं चाहता",
    "मरना बेहतर है",
    "कोई उम्मीद नहीं",
    "जिंदगी से थक गया",
    "मेरा कोई नहीं",
    "सब कुछ खत्म",
    "मैं नहीं रहना चाहता",
    "आज रात कुछ कर लूंगा",
    # Devnagri Marathi
    "कोणताही मार्ग नाही",
    "सगळं संपलं",
    "जगणं नको",
    "मरण बरं",
    "कोणी नाही",
    "आशा नाही",
    "थकलो आहे",
    "सहन होत नाही",
    ]
    distressed_keywords = [
    # English
    "worried", "stressed", "helpless", "debt", "no money",
    "cannot afford", "cant afford", "struggling", "suffering",
    "crops destroyed", "crop destroyed", "crop failed",
    "crops failed", "crop damage", "crops damaged",
    "flood damaged", "destroyed by rain", "harvest wiped",
    "no support", "alone", "lost everything",
    # Roman Hindi
    "pareshan", "darr", "tension", "karz", "khana nahi",
    "paisa nahi", "naukri gayi", "fasal barbad",
    "bahut mushkil", "neend nahi", "rona",
    # Devanagari Hindi ← NEW
    "फसल बर्बाद",
    "पैसे नहीं",
    "खाना नहीं",
    "बहुत परेशान",
    "कर्ज",
    "नौकरी गई",
    "मदद नहीं",
    "अकेला हूं",
    "बहुत तनाव",
    "नींद नहीं",
    "डर लग रहा",
    "घर नहीं",
    "बीमार है",
    "इलाज नहीं",
    # DEvnagri Marathi
    "पीक बरबाद",
    "पैसे नाहीत",
    "खायला नाही",
    "खूप त्रास",
    "कर्ज",
    "नोकरी गेली",
    "मदत नाही",
    "एकटा आहे",
    "भीती वाटते",
    "झोप नाही",
    ]
    hopeful_keywords = [
    # English
    "apply", "scheme", "better", "happy", "help",
    "relief", "approval", "support", "good",
    # Roman Hindi
    "umeed", "khushi", "mili", "milega", "apply karna",
    "madad", "theek hoga", "kaam mila",
    # Devanagari Hindi ← NEW
    "उम्मीद",
    "खुशी",
    "मदद मिली",
    "ठीक हो जाएगा",
    "आवेदन करना",
    "योजना",
    "अच्छा लग रहा",
    # Devnagri Marathi
    "आशा आहे",
    "मदत मिळाली",
    "ठीक होईल",
    "अर्ज करायचा",
    "योजना",
    "आनंद",
]
    if any(k in text for k in crisis_keywords):
        return {
            "emotion":    "crisis",
            "severity":   "CRITICAL",
            "action":     "immediate_counselor_transfer",
            "confidence": 0.90
        }
    elif any(k in text for k in distressed_keywords):
        return {
            "emotion":    "distressed",
            "severity":   "HIGH",
            "action":     "priority_scheme_recommendation",
            "confidence": 0.85
        }
    elif any(k in text for k in hopeful_keywords):
        return {
            "emotion":    "hopeful",
            "severity":   "LOW",
            "action":     "standard_assistance",
            "confidence": 0.80
        }
    else:
        return {
            "emotion":    "neutral",
            "severity":   "NONE",
            "action":     "information_provision",
            "confidence": 0.75
        }

@app.post("/api/predict-crisis")
def predict_crisis(data: ProfileInput):
    values        = [[getattr(data, col, 0) for col in crisis_features]]
    values_scaled = crisis_scaler.transform(values)
    pred_encoded  = crisis_model.predict(values_scaled)[0]
    pred_label    = crisis_le.inverse_transform([pred_encoded])[0]
    proba         = crisis_model.predict_proba(values_scaled).max()
    actions = {
        "high_risk":   "Immediate outreach call recommended",
        "medium_risk": "Schedule welfare check-in within 48 hours",
        "low_risk":    "Standard scheme recommendations"
    }
    return {
        "risk_level": pred_label,
        "confidence": round(float(proba), 2),
        "action":     actions.get(pred_label, "Monitor")
    }

import httpx

class QuestionInput(BaseModel):
    question: str
    language: str = "English"

@app.post("/api/ask")
async def ask_question(data: QuestionInput):
    system_prompt = (
        "You are SAARTHI, a friendly AI assistant for Indian government welfare schemes. "
        "Answer the user question helpfully and concisely in " + data.language + ". "
        "Focus only on: government welfare schemes, PM Kisan, Ayushman Bharat, PMAY housing, "
        "widow pension, scholarships, ration card, documents needed, application process. "
        "Keep answers under 80 words. Do NOT use markdown or bullet points. "
        "Speak naturally as you would to a rural Indian citizen."
    )
    full_prompt = system_prompt + "\n\nUser: " + data.question + "\nSAARTHI:"
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            res = await client.post(
                "http://localhost:11434/api/generate",
                json={"model": "llama3.2", "prompt": full_prompt, "stream": False}
            )
            data_json = res.json()
            return {"answer": data_json.get("response", "").strip()}
    except Exception as e:
        return {"answer": "", "error": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)