# Doctor Rush v0.37 – FULL WORKSTATION UI

Diese Version baut den Patientenbildschirm strukturell nach der gewünschten Referenzoberfläche um.

## Neu
- komplette obere Krankenhaus-/Statusleiste mit Doctor-Rush-Branding
- Schwierigkeit, Krankenhaus, Bewertung, Ruf, Konto, Tag und Uhrzeit oben
- linke vertikale Navigation: Übersicht, Anamnese, Untersuchung, Diagnostik, Entscheidung, Vitalmonitor
- große Patientenkarte im Workstation-Stil
- Vitalwerte direkt neben dem Patienten
- Verdachtsdiagnosen direkt im Kopfbereich
- helle zentrale Patientenakte / klinischer Arbeitsbereich
- rechte Spalte mit Befunden und echten Schnellaktionen
- permanente Diagnostik-Leiste unten mit bis zu fünf Studien
- visuelle Untersuchungen können direkt aus dem Dock geöffnet werden
- untere Klinikstatusleiste mit Wartezimmer, behandelter Anzahl, nächstem Patienten und Notfallalarm
- responsive Version für Handy und Tablet

## Spielmechanik
Die vorhandenen Systeme bleiben erhalten:
- Kampagne
- Freie Schicht
- Sandbox
- Einsteiger / Klinisch / Profi
- kein Schicht-Countdown
- Vitalmonitor
- EKG, Röntgen, CT, Ultraschall, Labor
- Radiology Workstation
- Differentialdiagnosen
- Behandlung, Reevaluation und Disposition

## GitHub
1. `index.html` ersetzen
2. Commit speichern
3. Seite einmal mit `?v=0.37` öffnen

## Technisch
- eine einzige `index.html`
- Save-Key weiterhin `doctorRushSaveV3`
- v0.36-Spielstände kompatibel
- keine externen JS-/CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
