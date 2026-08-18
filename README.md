# Doctor Rush v0.39 – LIVE VITALS + IMAGING

## Neu in v0.39

### Realistischere Bildgebung
Neue eingebettete Trainingsbilder für:
- CT Kopf mit intrazerebraler Blutung
- CT Kopf ohne groben Akutbefund
- Ultraschall Gallenblase mit Gallensteinen
- FAST / RUQ Ultraschall mit freier Flüssigkeit

Die neuen Aufnahmen erscheinen automatisch bei passenden Fällen. Die bisherigen Röntgen- und EKG-Bilder bleiben erhalten.

### Live-Vitalwerte
Während ein Patient geöffnet ist, verändern sich die Vitalwerte fortlaufend:
- Puls
- Blutdruck
- Atemfrequenz
- SpO₂
- Temperatur
- Schmerz

Die Werte schwanken nicht nur zufällig, sondern berücksichtigen weiterhin den Patientenzustand und die Dringlichkeit des Falls. Bei instabileren Patienten werden die Schwankungen stärker.

Die Live-Werte aktualisieren sich ungefähr alle 1,5 Sekunden in:
- Patienten-Header / Workstation
- Vitalmonitor
- klinischer Vitalwert-Anzeige
- Patientenakte

Behandlungen, Stabilisierung und Verschlechterungen des Patientenzustands wirken weiterhin auf die Werte.

## Technisch
- Basis: v0.38.1 HOTFIX
- Save-Key bleibt `doctorRushSaveV3`
- bestehender Spielstand bleibt kompatibel
- weiterhin nur eine `index.html`
- CT-/Ultraschallbilder sind in die HTML-Datei eingebettet
- keine externen Bilddateien nötig
- JavaScript-Syntaxprüfung: OK
- optimierte Dateigröße: ca. 1,6 MB

## GitHub Pages
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Seite mit `?v=0.39` öffnen.

> Die Bildgebung ist eine Spiel-/Trainingssimulation und kein medizinisches Referenzmaterial.
