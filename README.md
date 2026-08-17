# Doctor Rush v0.32 – VISUAL DIAGNOSTICS

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Danach einmal mit `?v=0.32` öffnen.

# Hauptneuerung

Doctor Rush hat jetzt erstmals **visuelle Diagnostik**.

Bestimmte Untersuchungen erzeugen nicht nur Textbefunde, sondern zusätzlich ein kleines Bildfenster.

## Enthalten in v0.32

### 📈 EKG-Fenster
Je nach Fall erscheinen visuelle EKG-Befunde, zum Beispiel:
- unauffälliges EKG
- Sinustachykardie
- Bradykardie
- Vorhofflimmern
- ST-Hebungs-Muster / STEMI

### 🩻 Röntgen-Fenster
Je nach Fall erscheinen visuelle Röntgenbilder, zum Beispiel:
- unauffälliger Thorax
- Pneumonie / Infiltrat
- Pneumothorax
- Frakturhinweis

## So funktioniert es

Wenn eine passende Untersuchung durchgeführt wurde, erscheint im Befundbereich ein Button:

**Bild ansehen**

Darüber öffnet sich ein eigenes Fenster.

## Schwierigkeit

### 🌱 Einsteiger
- einfache Erklärung
- Fokus: auffällig vs. unauffällig

### 🩺 Klinisch
- Bild + schriftlicher Befund
- mehr Kontext zur Interpretation

### 🧠 Profi
- Bild bleibt wichtiges Interpretationselement
- keine komplette Lösung wird direkt vorgegeben
- gedacht als Teil des klinischen Reasonings

## UI

Die Bilddiagnostik öffnet sich als eigenes Fenster über dem Spiel – ähnlich wie der Vitalmonitor.

Schließen über:
- X oben rechts
- Tippen außerhalb
- Escape auf Geräten mit Tastatur

## Bestehende Systeme bleiben erhalten
- kompakte klinische Tabs
- drei Schwierigkeitsstufen
- Live-Vitalmonitor
- kein Schicht-Countdown
- Kampagne und freie Schicht

## Technisch
- weiterhin nur eine `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.31-Spielstände kompatibel
- keine externen Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Alle Bildbefunde sind stilisierte, fiktive Spielsimulationen und kein echtes medizinisches Referenzmaterial.
