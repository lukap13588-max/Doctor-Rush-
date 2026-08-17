# Doctor Rush v0.27 – DIAGNOSTIC REASONING

## Dateien

- `index.html`
- `README.md`

Die README liegt zusätzlich als ZIP bei.

## GitHub-Update

1. Die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.27` öffnen.

---

# Hauptziel

v0.27 macht das diagnostische Denken realistischer. Der Spieler wählt nicht mehr nur eine Diagnose, sondern baut vorher eine priorisierte Differentialdiagnose auf und gibt anschließend seine Diagnosesicherheit an.

# 🧠 Differentialdiagnosen

Im Realismusmodus kannst du bis zu drei mögliche Diagnosen priorisieren.

Die Reihenfolge zählt:

1. führende Differentialdiagnose
2. zweite Möglichkeit
3. dritte Möglichkeit

Die klinische Qualitätswertung berücksichtigt jetzt, ob die korrekte Diagnose überhaupt in deiner Differentialliste vorkam und ob du sie an die Spitze gesetzt hast.

# 🎯 Diagnosesicherheit

Nach Auswahl deiner Arbeitsdiagnose gibst du an, wie sicher du bist:

- NIEDRIG
- MITTEL
- HOCH

Das Spiel bewertet die Kalibrierung. Hohe Sicherheit bei einer korrekten, gut belegten Diagnose wird belohnt. Hohe Sicherheit bei einer falschen Diagnose verschlechtert die Qualitätswertung stärker.

# 📞 Fachkonsil

Optional kannst du eine zweite Einschätzung anfordern.

- kostet 45 €
- kostet 3 Minuten
- nennt nicht direkt die richtige Diagnose
- gibt eine fachbezogene Einschätzung zur Befundkonstellation

Ein Konsil ist besonders sinnvoll bei dringenden, unklaren oder klinisch noch schwach belegten Fällen. Wahlloses Konsilieren bringt keinen maximalen Qualitätsbonus.

# 📊 Strukturierte Befundberichte

Labor, EKG und Bildgebung werden im Realismusmodus strukturierter dargestellt.

Beispiele:

- Blutbild mit getrennten Befundzeilen
- Entzündungsmarker
- Glukose
- Urinbefunde
- kardiale Marker
- EKG-Rhythmus / Beurteilung
- Bildgebung / Beurteilung

Es werden bewusst keine verbindlichen Referenzbereiche oder Dosierungsanweisungen eingebaut.

# 🕒 Zeitlicher Krankheitsverlauf

Die Patientenakte enthält jetzt zusätzlich einen Verlaufseintrag, zum Beispiel:

- akuter Beginn
- subakuter Verlauf
- zunehmende Beschwerden
- stabiler kurzer Verlauf

Damit kann die zeitliche Entwicklung stärker in die klinische Entscheidung einbezogen werden.

# ✅ Klinische Qualität 4.0

Die Qualitätswertung berücksichtigt jetzt zusätzlich:

- Differentialdiagnosen
- Rang der korrekten Differentialdiagnose
- Diagnosesicherheit
- Kalibrierung der Sicherheit
- sinnvolle Nutzung eines Konsils
- Anamnese
- körperliche Untersuchung
- technische Diagnostik
- Behandlung
- Reevaluation
- Disposition
- Übergabe / Follow-up

Damit wird der Weg zur Diagnose deutlich wichtiger als nur die richtige Endantwort.

# 📄 Kurzbrief erweitert

Der klinische Kurzbrief enthält jetzt zusätzlich:

- priorisierte Differentialdiagnosen
- Arbeitsdiagnose
- Diagnosesicherheit
- ggf. angefordertes Konsil

# 🏆 Neue Erfolge

## Differentialdiagnostiker
20-mal die richtige Diagnose als führende Differentialdiagnose priorisieren.

## Gut kalibriert
15-mal die Diagnosesicherheit passend einschätzen.

# Technisch

- weiterhin nur eine `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.26-Spielstand kompatibel
- keine externen JS-/CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK
- keine neuen Medikamentendosierungen

> Die medizinischen Inhalte sind vereinfachtes, fiktives Gameplay und keine medizinische Beratung.
