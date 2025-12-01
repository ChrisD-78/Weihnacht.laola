# Open Graph Image erstellen

Um ein schönes Preview-Bild für Social Media zu erstellen, gibt es mehrere Möglichkeiten:

## Option 1: Online-Tool verwenden

1. Gehe zu https://www.canva.com/ oder https://og-image.vercel.app/
2. Erstelle ein Bild mit 1200x630px
3. Verwende die Datei `create-og-image.html` als Vorlage für das Design
4. Speichere als `og-image.png` im Hauptverzeichnis

## Option 2: Screenshot der HTML-Vorlage

1. Öffne `create-og-image.html` im Browser
2. Mache einen Screenshot (1200x630px)
3. Speichere als `og-image.png`

## Option 3: Mit Node.js und Puppeteer (für Entwickler)

```bash
npm install puppeteer
node generate-og-image.js
```

## Option 4: Netlify OG Image Generation

Falls du Netlify verwendest, kannst du auch eine Serverless Function erstellen, die das Bild dynamisch generiert.

## Empfohlene Inhalte für das Bild:

- **Titel**: "Weihnachten im LA OLA"
- **Untertitel**: "Das große Weihnachtsdesaster"
- **Emojis**: 🎄💥🏊‍♂️🎅🔥
- **Farben**: Rot, Grün, Gold (Weihnachtsfarben)
- **Größe**: 1200x630px (Standard für Open Graph)

Die Meta-Tags sind bereits in `index.html` eingefügt und verweisen auf `og-image.png`.


