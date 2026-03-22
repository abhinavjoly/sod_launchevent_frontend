# SOD Club Quiz Platform
**Semiconductors for Optoelectronic Devices · BMSIT & M**
> RESEARCH · INDUSTRIAL CONNECT · ENGINEER

---

## Project Structure

```
sod-quiz-platform/
├── frontend/          ← React app (Vite)
│   ├── src/
│   │   └── App.jsx    ← Main application
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/           ← Flask API
│   ├── app.py         ← All routes
│   ├── requirements.txt
│   └── README.md
│
├── .gitignore
└── README.md
```

---

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
# Runs on http://localhost:5000
```

---

## Team

- **Frontend** — React + Vite
- **Backend** — Python Flask + SQLite
- **Auth** — JWT + bcrypt

> See `backend/README.md` for full API documentation and the contract sheet.
