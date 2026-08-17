# Doctor Rush v0.29 – THREE DIFFICULTIES

## Dateien
- `index.html`
- `README.md`

## GitHub-Update
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.29` öffnen.

# Kein Schicht-Countdown mehr
Ab v0.29 endet eine Schicht nicht mehr, weil eine Uhr auf 0 läuft. Du kannst lesen und überlegen, solange du möchtest. Simulierte Klinikzeit bleibt nur für Krankheitsverlauf und Befundlaufzeiten bestehen.

# Drei Schwierigkeitsstufen

## 🌱 Einsteiger
Für Spieler ohne medizinisches Vorwissen.

Sichtbar sind vor allem:
- Beschwerden
- grundlegende Vitalwerte
- vereinfachte Diagnoseauswahl
- vereinfachte Behandlungsauswahl

Zusätzlich:
- maximal drei Diagnoseoptionen
- maximal drei Behandlungsoptionen
- keine automatische Patientenverschlechterung
- keine Kollaps-Mechanik im Wartezimmer
- keine Anamnese-, Diagnostik-, Differentialdiagnose-, Konsil-, Dispositions- oder Reevaluationspflicht
- eigener kurzer Einsteiger-Leitfaden

## 🩺 Klinisch
Die Mittelstufe.

Enthalten:
- Patientenakte
- dynamische Vitalwerte
- Anamnese
- körperliche Untersuchung
- technische Diagnostik
- realistischere Diagnosealternativen
- Behandlung
- Reevaluation
- Disposition
- Sicherheitschecks / Übergabe
- klinische Qualitätswertung

Vereinfacht gegenüber Profi:
- keine verpflichtenden Differentialdiagnosen
- keine Diagnosesicherheit
- keine Konsile
- keine verzögerten Befunde
- technische Befunde erscheinen direkt
- Patienten verschlechtern sich deutlich langsamer
- mehr Toleranz im Wartezimmer

## 🧠 Profi
Das komplette Doctor-Rush-System.

Enthalten:
- Patientenakte
- dynamische Vitalwerte
- Patientenzustand
- Anamnese
- körperliche Untersuchung
- technische Diagnostik
- verzögerte Befunde
- paralleles Arbeiten während Befundlaufzeiten
- dringliche Befundmeldungen
- Differentialdiagnosen
- Diagnosesicherheit
- Konsile
- strukturierte Befundberichte
- Behandlung
- Therapieansprechen
- Reevaluation
- Disposition
- Allergie-/Risiko-/Follow-up-Checks
- vollständige klinische Qualitätswertung
- Notfall- und Eingriffsworkflow

# Schwierigkeit jederzeit ändern
Die Stufe kann auf der Startseite jederzeit geändert werden. Der Spielstand bleibt derselbe.

Neue Spieler starten auf **Einsteiger**. Alte v0.28-Spielstände mit aktiviertem Realismus werden automatisch auf **Profi** migriert.

# Zeit ist kein Spielgegner mehr
Klinische Abläufe können weiterhin eine simulierte Dauer haben. Das ist für Befundlaufzeiten und Krankheitsverlauf notwendig. Es gibt aber keinen Schicht-Countdown und kein Game Over wegen Zeitablauf.

# Weitere Anpassungen
- Zeitmission durch Patientenanzahl-Mission ersetzt.
- Wartezimmer-Upgrade zeigt nun Patientenkapazität statt Schichtzeit.
- Forschung Effizienz zeigt ihren XP-Effekt.
- Pflegepersonal reduziert den Zustandsverlust.
- Schichtereignisse verkürzen keine Schicht mehr.
- Flow zeigt klinischen Aufwand (AP) statt Restzeitdruck.

# Technisch
- eine `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.28-Spielstand kompatibel
- drei persistente Schwierigkeitsstufen
- kein Schichtende durch `timeLeft <= 0`
- kein Service Worker
- keine externen JS-/CSS-Dateien
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**

> Medizinische Inhalte bleiben vereinfachtes, fiktives Gameplay und ersetzen keine Ausbildung oder medizinische Beratung.
