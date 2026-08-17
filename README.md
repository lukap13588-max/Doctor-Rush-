# Doctor Rush v0.31 – COMPACT CLINICAL UI

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.31` öffnen.

# Hauptänderung

Der Patientenbildschirm war wieder zu lang.

Ab v0.31 wird der Patientenfall in feste Bereiche aufgeteilt:

- 👤 Übersicht
- 💬 Anamnese
- 🩺 Untersuchung
- 🧪 Diagnostik
- ✅ Entscheidung

**Immer nur ein Bereich ist gleichzeitig geöffnet.**

Die Leiste bleibt beim Scrollen sichtbar.

## Einsteiger
Einsteiger sehen nur:
- Übersicht
- Entscheidung

## Klinisch / Profi
Alle fünf Bereiche sind verfügbar.

## Übersicht
Enthält je nach Schwierigkeit:
- Patientenakte
- Patientenweg
- Patientenzustand
- Notfallbereich
- Einsteiger-Hilfe

Der Live-Vitalmonitor bleibt direkt bei der Patientenkarte.

## Anamnese
Nur die Anamnese ist offen.
Danach führt ein Button direkt zur Untersuchung.

## Untersuchung
Nur die körperliche Untersuchung ist offen.
Danach direkt zur Diagnostik.

## Diagnostik
Enthält:
- Untersuchungen
- Befunde
- klinische Arbeitsgrundlage
- Profi-Differentialdiagnosen
- Konsile
- verzögerte Befunde

## Entscheidung
Enthält:
- Arbeitsdiagnose
- Behandlung
- Eingriff
- Reevaluation
- Disposition
- Übergabe
- Fallabschluss

## Patientenkarte
Dauerhaft sichtbar bleiben nur die wichtigsten Dinge:
- Patient
- Beschwerden
- Dringlichkeit
- Vitalmonitor

Die ausführliche Patientenakte liegt im Tab Übersicht.

## Technisch
- eine `index.html`
- Save-Key `doctorRushSaveV3`
- v0.30-Spielstand kompatibel
- Live-Vitalmonitor bleibt erhalten
- drei Schwierigkeitsstufen bleiben erhalten
- kein Schicht-Countdown
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Medizinische Inhalte sind vereinfachtes, fiktives Gameplay.
