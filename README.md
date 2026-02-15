# SAARTHI - Emotionally Intelligent Civic AI Infrastructure

## Project Overview
SAARTHI (Smart AI-Assisted Resource & Transformation Hub for India) is a production-grade, emotionally intelligent civic AI infrastructure designed to eliminate welfare exclusion for citizens in emerging economies.

## Architecture

### Backend (FastAPI)
- **Language**: Python 3.11+
- **Framework**: FastAPI
- **Database**: PostgreSQL 15+
- **Cache**: Redis
- **Queue**: Celery + RabbitMQ
- **Search**: Elasticsearch

### Frontend (React + TypeScript)
- **Framework**: React 18+
- **Language**: TypeScript 5+
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Voice**: Web Speech API

## Project Structure

```
saarthi/
├── backend/                    # FastAPI backend
│   ├── app/
│   │   ├── api/               # API routes
│   │   ├── core/              # Core configuration
│   │   ├── db/                # Database models & migrations
│   │   ├── engines/           # 10 core engines
│   │   ├── schemas/           # Pydantic schemas
│   │   ├── services/          # Business logic
│   │   ├── utils/             # Utilities
│   │   └── main.py            # Application entry
│   ├── tests/                 # Test suite
│   ├── alembic/               # Database migrations
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── store/             # Redux store
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utilities
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml          # Docker orchestration
├── .env.example               # Environment variables template
└── README.md
```

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local frontend development)
- Python 3.11+ (for local backend development)

### Environment Setup

1. Clone the repository
2. Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

3. Start all services:

```bash
docker-compose up -d
```

4. Run database migrations:

```bash
docker-compose exec backend alembic upgrade head
```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs
   - Admin Dashboard: http://localhost:3000/admin

## Core Engines

### 1. Voice Processing Engine
- Speech-to-Text (Google Cloud Speech API)
- Text-to-Speech (Amazon Polly)
- Intent detection (Rasa NLU)
- Multilingual support (23+ languages)

### 2. Citizen Identity Engine
- Phone number-based identity
- Aadhaar integration (encrypted)
- Family tree mapping
- Document management

### 3. Scheme Eligibility Engine
- Rule-based eligibility calculation
- 14,000+ schemes database
- Benefit stack optimization
- Mutually exclusive detection

### 4. Document Intelligence Engine
- OCR (Tesseract + Google Vision API)
- Structured data extraction
- Document validation
- Expiry tracking

### 5. Emotional AI Engine
- Voice sentiment analysis
- Crisis keyword detection
- Distress level classification
- Counselor routing

### 6. Life Event Engine
- Event detection (death, birth, job loss)
- Proactive outreach triggers
- Benefit recalculation
- Timeline tracking

### 7. Welfare Credit Score Engine
- Composite scoring algorithm (0-200)
- Benefit continuity tracking
- Lender API integration
- Score explanation generation

### 8. Life Simulation Engine
- Monte Carlo modeling
- Multi-year trajectory prediction
- Decision scenario comparison
- Voice-optimized presentation

### 9. Transparency Engine
- SMS audit trail
- Blockchain-lite hash chain
- Appeal management
- Public dashboards

### 10. Governance Analytics Engine
- Real-time KPI tracking
- District-level performance
- Bias detection
- Impact measurement

## API Documentation

Full API documentation available at: http://localhost:8000/docs

### Key Endpoints

#### Authentication
- `POST /api/v1/auth/register` - Register new citizen
- `POST /api/v1/auth/login` - Login (OTP-based)
- `POST /api/v1/auth/verify-otp` - Verify OTP

#### Citizens
- `GET /api/v1/citizens/profile` - Get citizen profile
- `PUT /api/v1/citizens/profile` - Update profile
- `POST /api/v1/citizens/documents` - Upload document

#### Schemes
- `GET /api/v1/schemes/eligible` - Get eligible schemes
- `POST /api/v1/schemes/optimize` - Optimize benefit stack
- `POST /api/v1/schemes/apply` - Apply for scheme

#### Voice
- `POST /api/v1/voice/speech-to-text` - Convert speech to text
- `POST /api/v1/voice/text-to-speech` - Convert text to speech
- `POST /api/v1/voice/analyze-emotion` - Analyze emotional state

#### Credit Score
- `GET /api/v1/credit-score` - Get welfare credit score
- `GET /api/v1/credit-score/breakdown` - Get score breakdown

## External API Keys Required

Add these to your `.env` file:

```env
# Speech Services
GOOGLE_CLOUD_SPEECH_API_KEY=your_key_here
AMAZON_POLLY_ACCESS_KEY=your_key_here
AMAZON_POLLY_SECRET_KEY=your_key_here

# OCR Services
GOOGLE_VISION_API_KEY=your_key_here
TESSERACT_PATH=/usr/bin/tesseract

# SMS Gateway
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_PHONE_NUMBER=your_number_here

# Government APIs
AADHAAR_API_KEY=your_key_here
UMANG_API_KEY=your_key_here
DIGILOCKER_API_KEY=your_key_here

# Weather API
IMD_API_KEY=your_key_here

# Maps API
GOOGLE_MAPS_API_KEY=your_key_here
```

## ML Model Integration

### Emotional AI Model
Location: `backend/app/engines/emotional_ai/models/`

Required model files:
- `emotion_cnn.h5` - Pre-trained emotion detection CNN
- `emotion_labels.json` - Emotion label mappings

Training pipeline: `backend/scripts/train_emotion_model.py`

### NLP Models
Location: `backend/app/engines/voice_processing/models/`

Required:
- Rasa NLU model for intent detection
- Custom NER models for Indic languages

## Database Schema

### Core Tables
- `citizens` - Citizen profiles
- `documents` - Document storage
- `schemes` - Welfare schemes database
- `citizen_benefits` - Benefit applications & status
- `interactions` - Call/interaction logs
- `welfare_credit_scores` - Credit score history
- `life_simulations` - Simulation results
- `emotional_flags` - Crisis detection logs

See `backend/app/db/models/` for complete schema definitions.

## Security

- JWT-based authentication
- Role-based access control (RBAC)
- AES-256 encryption for PII
- TLS 1.3 for all communications
- OWASP Top 10 compliance
- Regular security audits

## Monitoring & Logging

- Prometheus metrics: http://localhost:9090
- Grafana dashboards: http://localhost:3001
- ELK Stack for centralized logging
- Sentry for error tracking

## Testing

### Backend Tests
```bash
cd backend
pytest tests/ -v --cov=app
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Deployment

### Production Deployment
1. Configure production environment variables
2. Build Docker images
3. Deploy to Kubernetes cluster
4. Configure load balancer
5. Set up monitoring & alerting

See `deployment/` directory for Kubernetes manifests.

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

Copyright © 2026 SAARTHI Foundation. All rights reserved.

## Contact

- Email: info@saarthi.gov.in
- Website: www.saarthi.gov.in
- Helpline: 1800-SAARTHI

## Acknowledgments

Built with support from:
- World Bank Digital Development Partnership
- Bill & Melinda Gates Foundation
- Government of India
