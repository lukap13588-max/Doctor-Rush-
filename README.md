# Doctor Rush v0.34 – REAL MEDICAL IMAGING

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.34` öffnen.

# 🩻 Realistischere medizinische Bilder

Die wichtigsten visuellen Befunde bestehen jetzt nicht mehr nur aus stilisierten SVG-Zeichnungen.

Vier realistisch wirkende Trainingsaufnahmen sind direkt in die `index.html` eingebettet:

- Thorax-Röntgen mit rechtsbasaler Pneumonie
- Thorax-Röntgen mit linksseitigem Pneumothorax
- Handgelenk-/Unterarm-Röntgen mit distaler Radiusfraktur
- 12-Kanal-EKG mit ST-Hebungs-Muster

Die Bilder benötigen keine zusätzlichen Dateien auf GitHub.

## Bild-Zoom

Im Diagnostik-Fenster kann eine realistische Aufnahme angetippt werden.

Dadurch wird sie vergrößert und kann im Fenster genauer betrachtet werden.

Erneutes Antippen setzt die Darstellung zurück.

## Automatische Bildauswahl

Doctor Rush entscheidet anhand des Falles und des Befundes, welches Bild angezeigt wird.

Beispiele:

- `Röntgen Thorax` + Infiltrat → Pneumonie-Aufnahme
- `Röntgen Thorax` + Pneumothorax → Pneumothorax-Aufnahme
- Handgelenk-Röntgen + Fraktur → Fraktur-Aufnahme
- 12-Kanal-EKG + ST-Hebungen → realistischeres STEMI-EKG

Alle anderen Befunde verwenden weiterhin die vorhandenen Fallback-Grafiken.

# Zwei neue Patientenfälle

## Lukas W. – Pneumothorax
Ein akuter Fall mit:
- plötzlichem Brustschmerz
- Dyspnoe
- erniedrigter SpO₂
- abgeschwächtem Atemgeräusch
- realistischem Thorax-Röntgen

## Julia F. – distale Radiusfraktur
Ein Verletzungsfall mit:
- Sturz auf die ausgestreckte Hand
- Schwellung
- Bewegungseinschränkung
- DMS-Kontrolle
- realistischem Röntgen in zwei Ebenen

# Schwierigkeitsgrade bleiben erhalten

## 🌱 Einsteiger
Das Bild wird stärker erklärt.

## 🩺 Klinisch
Bild + schriftlicher Befund müssen gemeinsam bewertet werden.

## 🧠 Profi
Die Diagnose wird im Bildfenster weiterhin bewusst nicht direkt vorgegeben.

# Bestehende Systeme bleiben erhalten

- Sandbox-Modus
- Kampagne
- freie Schicht
- drei Schwierigkeitsstufen
- kein Schicht-Countdown
- kompakte klinische Tabs
- Live-Vitalmonitor
- visuelle Diagnostik
- CT
- Ultraschall
- Laborblatt
- Differentialdiagnosen
- Konsile
- Reevaluation
- Disposition

# Technisch

- weiterhin eine einzige `index.html`
- alle 4 Bilder Base64-intern eingebettet
- keine separaten Bilddateien auf GitHub nötig
- Save-Key bleibt `doctorRushSaveV3`
- v0.33-Spielstand kompatibel
- kein Service Worker
- keine externen JS-/CSS-Dateien
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Die Aufnahmen sind KI-generierte, stilisierte Trainingsbilder für das Spiel und kein medizinisches Referenzmaterial.
