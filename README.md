# Doctor Rush v0.36 – VISUAL REDESIGN

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Danach einmal mit `?v=0.36` öffnen.

# Was neu ist

Diese Version bringt eine große optische Überarbeitung, damit Doctor Rush deutlich näher an den Konzeptbildern wirkt.

## Neue Optik
- dunklere, hochwertigere Klinik-/Dashboard-Optik
- größere Desktop-/Management-Game-Anmutung
- neuer Command-Bar-Header mit:
  - Schwierigkeit
  - Krankenhaus-Stufe
  - Ruf
  - Konto
  - Tag
- deutlich stärker panelisierte UI
- modernere Karten, Schatten, Konturen und Statusflächen

## Wartezimmer neu strukturiert
- Top-Bereich wie in einer Klinik-Leitstelle
- zweigeteiltes Layout
- Patientenliste links
- Klinikbetrieb / Flow / Hinweise rechts

## Behandlungsscreen neu strukturiert
Der Behandlungsscreen ist jetzt deutlich näher an den gesendeten Bildern:

- linke Seitenleiste mit Schnellnavigation
- linker Bereich für Patientenzusammenfassung
- großer Mittelbereich für den klinischen Workflow
- rechte Seitenkarte für Quick Actions und Live-Status
- sticky Aktionsbereich für Fallabschluss

## Neue Sidebar im Fallscreen
Schnellzugriff auf:
- Übersicht
- Anamnese
- Untersuchung
- Diagnostik
- Entscheidung
- Vitalmonitor

## Live-Statuskarte
Im rechten Bereich werden zusätzlich laufend kompakt gezeigt:
- Schichtfortschritt
- aktueller Patient
- Zustand
- aktueller Abschnitt / Raum

# Bestehende Funktionen bleiben erhalten
- Radiology Workstation
- eigene Bildbefundung
- Sandbox
- Kampagne
- freie Schicht
- drei Schwierigkeitsstufen
- kein Countdown
- Realismusmodus
- CT / Ultraschall / Labor / EKG / Röntgen
- Vitalmonitor

# Technisch
- weiterhin eine einzige `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.35-Spielstand kompatibel
- keine externen Dateien
- kein Service Worker

> Diese Version ist vor allem ein großer visueller Umbau in Richtung der gezeigten Konzeptbilder.
