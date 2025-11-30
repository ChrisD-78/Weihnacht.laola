# Neon-Datenbank Setup

## Projekt-Informationen
- **Project ID**: `small-breeze-91156918`
- **Project Name**: (zu vergeben)

## Schritt-für-Schritt Anleitung

### 1. Connection String finden

1. Gehe zu https://console.neon.tech/
2. Öffne dein Projekt `small-breeze-91156918`
3. Klicke auf "Connection Details" oder "Connect"
4. Kopiere die Connection String (sieht aus wie):
   ```
   postgresql://username:password@ep-xxxx-xxxx.region.aws.neon.tech/dbname?sslmode=require
   ```

### 2. Datenbank-Schema ausführen

1. In der Neon Console, gehe zum SQL Editor
2. Öffne die Datei `database/schema.sql` aus diesem Projekt
3. Kopiere den gesamten Inhalt
4. Füge ihn in den SQL Editor ein
5. Klicke auf "Run" oder drücke Ctrl+Enter

Das Schema erstellt folgende Tabellen:
- `opened_doors` - Geöffnete Türchen
- `quiz_results` - Quiz-Ergebnisse  
- `challenge_results` - Challenge-Ergebnisse
- `user_sessions` - User-Statistiken

### 3. Connection String für Netlify vorbereiten

Die Connection String sollte so aussehen:
```
postgresql://username:password@ep-xxxx-xxxx.region.aws.neon.tech/dbname?sslmode=require
```

**Wichtig**: Kopiere die komplette Connection String inklusive `?sslmode=require`

### 4. In Netlify konfigurieren

1. Gehe zu deinem Netlify Dashboard
2. Wähle deine Site aus
3. Gehe zu "Site settings" → "Environment variables"
4. Füge eine neue Variable hinzu:
   - **Key**: `DATABASE_URL`
   - **Value**: Deine komplette Neon Connection String
5. Klicke auf "Save"
6. Führe einen neuen Deploy durch (oder warte auf automatischen Deploy)

### 5. Testen

Nach dem Deploy kannst du testen:
1. Öffne deine Netlify-URL
2. Öffne ein Türchen im Adventskalender
3. Prüfe in der Neon Console, ob in der Tabelle `opened_doors` ein Eintrag erscheint

## Troubleshooting

### Connection String funktioniert nicht
- Stelle sicher, dass `sslmode=require` enthalten ist
- Prüfe, ob die Connection String vollständig kopiert wurde
- In Neon Console: Prüfe ob das Projekt aktiv ist

### Tabellen fehlen
- Führe das Schema erneut aus
- Prüfe in der Neon Console unter "Tables" ob die Tabellen existieren

### API-Fehler in Netlify
- Prüfe die Netlify Function Logs
- Stelle sicher, dass `DATABASE_URL` als Environment Variable gesetzt ist
- Prüfe ob die Connection String korrekt ist

## Nützliche Links

- Neon Console: https://console.neon.tech/
- Neon Docs: https://neon.tech/docs
- Netlify Dashboard: https://app.netlify.com/

