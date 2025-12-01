# Weihnachten im LA OLA - Adventskalender

Ein interaktiver Weihnachtskalender für das LA OLA Team mit Neon-Datenbank und Netlify-Hosting.

## 🎄 Features

- 24 Türchen mit Weihnachtsgeschichte
- Quiz-System mit 72 Fragen
- Challenge-System
- Datenbank-Integration mit Neon
- Netlify Functions für Backend-API

## 🚀 Setup

### 1. Neon-Datenbank einrichten

1. Gehe zu [Neon Console](https://console.neon.tech/)
2. Erstelle ein neues Projekt
3. Kopiere die Connection String (sieht aus wie: `postgresql://user:password@host/database`)
4. Führe das SQL-Schema aus: `database/schema.sql`

### 2. Netlify einrichten

1. Installiere Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Erstelle eine `.env` Datei (siehe `.env.example`):
```bash
DATABASE_URL=postgresql://user:password@host/database
```

3. Deploy zu Netlify:
```bash
netlify login
netlify init
netlify env:set DATABASE_URL "postgresql://user:password@host/database"
netlify deploy --prod
```

### 3. GitHub Repository

1. Erstelle ein neues Repository auf GitHub
2. Verbinde dein lokales Repository:
```bash
git remote add origin https://github.com/DEIN-USERNAME/weihnachten-laola.git
git branch -M main
git push -u origin main
```

3. Verbinde Netlify mit GitHub:
   - Gehe zu Netlify Dashboard
   - "Add new site" → "Import an existing project"
   - Wähle dein GitHub Repository
   - Setze Build command: (leer lassen)
   - Setze Publish directory: `.`
   - Füge Environment Variable hinzu: `DATABASE_URL`

## 📁 Projektstruktur

```
.
├── index.html              # Haupt-HTML-Datei
├── script.js               # Frontend-Logik für Adventskalender
├── quiz.js                 # Quiz-System
├── styles.css              # Styling
├── api.js                  # API-Helper-Funktionen
├── netlify.toml            # Netlify-Konfiguration
├── package.json            # Dependencies
├── database/
│   └── schema.sql          # Datenbank-Schema
└── netlify/
    └── functions/
        ├── db.js           # Datenbank-Verbindung
        ├── opened-doors.js # API für geöffnete Türchen
        ├── quiz-results.js # API für Quiz-Ergebnisse
        └── challenges.js   # API für Challenges
```

## 🔧 Lokale Entwicklung

1. Installiere Dependencies:
```bash
npm install
```

2. Starte Netlify Dev (mit lokalen Functions):
```bash
netlify dev
```

Die Seite läuft dann auf `http://localhost:8888`

## 📝 API Endpoints

### Geöffnete Türchen
- `GET /.netlify/functions/opened-doors` - Alle geöffneten Türchen abrufen
- `POST /.netlify/functions/opened-doors` - Türchen als geöffnet markieren

### Quiz-Ergebnisse
- `GET /.netlify/functions/quiz-results?day=X` - Quiz-Ergebnisse für Tag X
- `POST /.netlify/functions/quiz-results` - Quiz-Antwort speichern

### Challenges
- `GET /.netlify/functions/challenges` - Alle Challenges abrufen
- `POST /.netlify/functions/challenges` - Challenge als abgeschlossen markieren

## 🗄️ Datenbank-Schema

- `opened_doors` - Geöffnete Türchen pro User
- `quiz_results` - Quiz-Antworten und Ergebnisse
- `challenge_results` - Abgeschlossene Challenges
- `user_sessions` - User-Statistiken

## 🔐 Umgebungsvariablen

- `DATABASE_URL` - Neon-Datenbank Connection String

## 📦 Dependencies

- `@neondatabase/serverless` - Neon-Datenbank Client
- `netlify-cli` - Netlify CLI (dev)

## 🎯 Nächste Schritte

1. Neon-Datenbank einrichten und Schema ausführen
2. `.env` Datei mit DATABASE_URL erstellen
3. GitHub Repository erstellen und Code pushen
4. Netlify Site erstellen und mit GitHub verbinden
5. Environment Variable in Netlify setzen
6. Deploy!

## 📄 Lizenz

MIT


