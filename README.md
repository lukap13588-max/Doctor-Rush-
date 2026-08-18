# Doctor Rush v0.35 – RADIOLOGY WORKSTATION

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.35` öffnen.

# Größte Änderung

Visuelle Diagnostik ist jetzt nicht mehr nur „Bild öffnen und Text lesen“.

Auf **Klinisch** und **Profi** musst du eine Aufnahme zuerst selbst interpretieren.

Erst danach wird der schriftliche Trainingsbefund freigeschaltet.

## Neue Bildbefundung

Je nach Untersuchungsart bekommst du passende Interpretationsmöglichkeiten.

### EKG
- Sinusrhythmus
- Sinustachykardie
- Vorhofflimmern
- Bradykardie
- ST-Hebungs-Muster

### Röntgen
- unauffällige Aufnahme
- Infiltrat / Verdichtung
- Pneumothorax
- Fraktur

### CT
- kein Akutbefund
- intrakranielle Blutung
- ischämischer Befund
- embolischer / Gefäßbefund

### Ultraschall
- unauffälliger Befund
- Konkrement / Stein
- entzündliche Veränderung
- freie Flüssigkeit

### Labor
- weitgehend unauffällig
- entzündliche Konstellation
- Herz-/Ischämiemarker auffällig
- Stoffwechsel-/Glukoseauffälligkeit

# Schwierigkeit

## 🌱 Einsteiger
Der Befund bleibt direkt erklärt.

## 🩺 Klinisch
Du musst zuerst eine Interpretation wählen.
Danach bekommst du sofort Feedback und den schriftlichen Befund.

## 🧠 Profi
Du musst zuerst selbst befunden.
Die Lösung wird im Bildfenster **nicht sofort verraten**.
Der endgültige Abgleich erscheint erst in der Fallauswertung.

# DICOM-/Workstation-Werkzeuge

Das Diagnostikfenster hat jetzt zusätzliche Werkzeuge:

- Helligkeit − / +
- Kontrast − / +
- Invertierung
- Reset

Außerdem werden angezeigt:

- Serie
- simulierte Aufnahmezeit
- Seitenmarker L / R
- Bildqualität

Der bestehende Bild-Zoom bleibt erhalten.

# Qualitätswertung

Die korrekte visuelle Befundung fließt jetzt in die klinische Qualitätswertung ein.

Im Profi-Modus reicht es damit nicht mehr, die richtige Diagnose einfach auswendig zu kennen.

# Drei neue bildbasierte Fälle

## Erika S. – Vorhofflimmern
Mit:
- unregelmäßigem Puls
- 12-Kanal-EKG
- bild-/kurvenbasierter Interpretation

## Peter A. – intrazerebrale Blutung
Mit:
- akutem Kopfschmerz
- neurologischer Auffälligkeit
- CT Kopf nativ

## Nadine H. – Cholelithiasis
Mit:
- rechtsseitigem Oberbauchschmerz
- Ultraschall Oberbauch
- Konkrement-/Steinbefund

# Neue Erfolge

## Befunder
20 visuelle Befundungen dokumentieren.

## Scharfer Blick
In 10 Fällen alle visuellen Untersuchungen korrekt befunden.

# Weiterhin enthalten

- realistischere eingebettete Röntgen- und EKG-Aufnahmen aus v0.34
- Sandbox
- Kampagne
- Freie Schicht
- drei Schwierigkeitsstufen
- kein Countdown
- Live-Vitalmonitor
- kompakte Tabs
- CT
- Ultraschall
- Laborblatt
- verzögerte Befunde
- Differentialdiagnosen
- Konsile
- Reevaluation
- Disposition

## Technisch

- weiterhin eine einzige `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.34-Spielstand kompatibel
- keine externen Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Bildbefunde bleiben vereinfachte bzw. KI-generierte Trainingsdarstellungen und sind kein medizinisches Referenzmaterial.
