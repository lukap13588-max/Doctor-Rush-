# Doctor Rush v0.33 – ADVANCED DIAGNOSTICS & SANDBOX

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.33` öffnen.

# 🧪 Neuer Sandbox-Modus

Auf der Startseite gibt es jetzt einen dritten Spielmodus:

## Sandbox

Die Sandbox ist vollständig vom normalen Spielstand getrennt.

Beim Start wird dein aktueller Spielstand intern gesichert.

Für die Sandbox werden temporär freigeschaltet:

- alle Klinikräume
- alle Räume auf Maximallevel
- Labor
- Bildgebung
- Kardiologie
- Notfallbereich
- Eingriffsraum
- alle Krankenhaus-Großprojekte
- alle Personalrollen auf Maximallevel
- alle Forschungszweige Level 3
- alle Verträge
- voller Medikamentenbestand
- Technikzustand 100 %
- praktisch unbegrenztes Budget
- praktisch unbegrenzte Rücklage

Die Sandbox verwendet weiterhin den von dir gewählten Schwierigkeitsgrad.

Du kannst also Sandbox spielen als:

- 🌱 Einsteiger
- 🩺 Klinisch
- 🧠 Profi

## Spielstand-Schutz

Sandbox-Fortschritt wird nicht in `doctorRushSaveV3` geschrieben.

Wenn du die Sandbox verlässt, wird dein normaler Spielstand wiederhergestellt.

Geld, XP, Ruf, Erfolge und Karrierefortschritt aus der Sandbox zählen nicht für das Hauptspiel.

---

# 🩻 Advanced Visual Diagnostics

Die visuelle Diagnostik wurde erweitert.

## 📈 EKG
Weiterhin enthalten:
- normaler Rhythmus
- Tachykardie
- Bradykardie
- Vorhofflimmern
- ST-Hebungs-Muster

## 🩻 Röntgen
Weiterhin enthalten:
- normaler Thorax
- Infiltrat
- Pneumothorax
- Frakturhinweis

## 🧠 CT – NEU
CT-Untersuchungen wie:
- CT Kopf
- CT Abdomen
- CT-Angiografie

können jetzt ein eigenes stilisiertes CT-Fenster öffnen.

## 📡 Ultraschall – NEU
Ultraschall- und Sonografie-Untersuchungen erhalten jetzt ein eigenes kleines Ultraschallfenster.

## 🧪 Laborblatt – NEU
Laboruntersuchungen können jetzt als eigenes Laborblatt geöffnet werden.

Beispiele:
- Blutbild
- CRP
- Troponin
- D-Dimer
- Blutgasanalyse
- allgemeines Labor

Das Laborblatt zeigt die vorhandenen vereinfachten Spielbefunde strukturiert und markiert Auffälligkeiten.

---

# Unterschied nach Schwierigkeit

## 🌱 Einsteiger
Das Fenster erklärt relativ deutlich:
- was auffällig ist
- worauf man achten sollte

## 🩺 Klinisch
Das Spiel gibt Befundkontext, aber du musst die klinische Bedeutung stärker selbst ableiten.

## 🧠 Profi
Wichtige Änderung:

Der Profi-Modus zeigt im visuellen Fenster nicht mehr einfach die Diagnose als Überschrift.

Stattdessen musst du:
- Bild / Laborblatt ansehen
- Vitalwerte beachten
- Anamnese berücksichtigen
- körperliche Untersuchung einbeziehen
- deine Differentialdiagnosen bilden

Dadurch wird der Profi-Modus deutlich weniger „Multiple Choice mit Lösungshilfe“.

---

# Bestehende Systeme bleiben erhalten

- drei Schwierigkeitsgrade
- kein Schicht-Countdown
- kompakte klinische Tabs
- Live-Vitalmonitor
- dynamische Vitalwerte
- verzögerte Befunde
- Differentialdiagnosen
- Diagnosesicherheit
- Konsile
- Reevaluation
- Disposition
- Kampagne
- freie Schicht

## Technisch
- eine einzige `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.32-Spielstand kompatibel
- Sandbox überschreibt den Hauptspielstand nicht
- kein Service Worker
- keine externen JS-/CSS-Dateien
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK

> Bild- und Laborbefunde sind stilisierte, vereinfachte Spielsimulationen und kein medizinisches Referenzmaterial.
