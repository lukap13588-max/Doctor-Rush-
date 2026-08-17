# Doctor Rush v0.30 – LIVE VITAL MONITOR

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.30` öffnen.

# Neu in v0.30

Die Vitalwerte stehen nicht mehr dauerhaft groß im Patientenbildschirm.

Stattdessen gibt es einen kompakten Button:

**❤️ Vitalmonitor öffnen**

Beim Antippen öffnet sich ein kleines Monitor-Fenster über dem Spiel.

Dadurch wird die Patientenoberfläche ruhiger und wirkt mehr wie eine echte klinische App.

## 🌱 Einsteiger
Der Monitor bleibt bewusst einfach.

Gezeigt werden:
- Puls
- Sauerstoffsättigung
- Blutdruck
- Temperatur

Zusätzlich gibt es einen kurzen verständlichen Hinweis, ob die Werte im Spiel insgesamt stabil oder auffällig wirken.

Kein Patientenzustandsverfall wird eingeblendet.

## 🩺 Klinisch
Der Monitor zeigt:
- Puls
- SpO₂
- Blutdruck
- Atemfrequenz
- Temperatur
- Schmerzscore
- Patientenzustand
- Verlaufstrend

Die Werte reagieren auf den dynamischen Patientenzustand.

## 🧠 Profi
Zusätzlich zum vollständigen Monitor werden angezeigt:
- Patientenzustand 0–100
- Verlaufstrend
- ausstehende Befunde
- Anzahl Reevaluations-Checks
- Status der Stabilisierung

Damit kann ein Profi den Zustand kompakt kontrollieren, ohne durch die komplette Patientenakte scrollen zu müssen.

## Live-Fenster
Solange das Fenster geöffnet ist, wird die Anzeige regelmäßig aus dem aktuellen Spielzustand aktualisiert.

Der Monitor erfindet dabei keine zufälligen Werte. Änderungen entstehen aus dem bereits vorhandenen dynamischen Patientenzustand und den Aktionen im Spiel.

## Bedienung
Das Fenster kann geschlossen werden durch:
- X oben rechts
- Tippen außerhalb des Fensters
- Escape auf Geräten mit Tastatur

## Mobile UI
Die ursprüngliche große Vitalwerte-Zeile ist standardmäßig eingeklappt.

Der Monitor ist für kleine Handybildschirme optimiert.

## Technisch
- eine einzige `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.29-Spielstand kompatibel
- alle drei Schwierigkeitsstufen unterstützt
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Die Vitalwerte sind Teil einer fiktiven Spielsimulation und keine medizinische Überwachung.
