# Doctor Rush v0.19 – SPECIALIZATION & RELATIONSHIPS

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei.

## GitHub-Update

1. Im Doctor-Rush-Repository nur die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.19` öffnen.

---

# Neu in v0.19

## 🧭 Erste Fachrichtungspräferenz

Nach deiner ersten Arbeitswoche beginnt eine neue persönliche Kampagnenphase.

Dr. Hartmann fragt dich erstmals, welche Rotation dich besonders interessiert.

Du kannst wählen:

### 🩺 Allgemeinmedizin
- Story: +6 Kommunikation
- Kampagnenbonus: +5 % XP in Kampagnen-Schichten

### 🚑 Notfallmedizin
- Story: +7 Stresssicherheit
- Kampagnenbonus: +8 % Geld bei dringenden Fällen in Kampagnen-Schichten

### ❤️ Kardiologie
- Story: +7 klinisches Denken
- Kampagnenbonus: +8 % Geld bei passenden Herzfällen in Kampagnen-Schichten

### 🔬 Diagnostik
- Story: +5 klinisches Denken und +3 Effizienz
- Kampagnenbonus: Untersuchungen in Kampagnen-Schichten 5 % günstiger

Diese Entscheidung ist zunächst deine persönliche **Kampagnen-Rotationspräferenz** als Assistenzarzt.

Das bestehende allgemeine Spezialisierungs-/Karrieresystem bleibt erhalten.

---

# 🤝 Zwei neue wiederkehrende Kollegen

## 👩🏼‍⚕️ Mia Berger

Assistenzärztin.

Charakter:
- ruhig
- gründlich
- teamorientiert

## 👨🏻‍⚕️ Leon Wagner

Assistenzarzt.

Charakter:
- ehrgeizig
- schnell
- direkt

Beide besitzen einen dauerhaften Beziehungswert von 0 bis 100.

---

# 🌿 Beziehungen verändern sich

Deine Story-Entscheidungen können:

- Mia näher an dich binden
- Leon näher an dich binden
- einen Kollegen verärgern
- beide Beziehungen gleichzeitig verbessern

Die Beziehungen bleiben gespeichert und können in späteren Story-Kapiteln verwendet werden.

---

# 🎬 Neue Story-Phase

Die neue Kampagnenphase besteht aus vier Abschnitten.

## 1. Das neue Team

Du lernst Mia und Leon kennen.

Du entscheidest, ob du:

- teamorientiert auftrittst
- Konkurrenz suchst
- zunächst neutral bleibst

## 2. Rotationsgespräch

Dr. Hartmann fragt nach deiner Fachrichtungspräferenz.

Deine Wahl beeinflusst deine persönlichen Arztwerte und spätere Kampagnenboni.

## 3. Gemeinsamer Fall

Mia und Leon wollen denselben stabilen Trainingsfall unterschiedlich angehen.

Du kannst:

- beide Ansätze verbinden
- Mia unterstützen
- Leon unterstützen

Das verändert die Beziehungen sichtbar.

## 4. Feedback

Dr. Hartmann fasst zusammen, wie sich dein Arbeitsstil entwickelt.

Du siehst:

- deine gewählte Fachrichtungspräferenz
- Beziehung zu Mia
- Beziehung zu Leon
- mögliche spätere Story-Konsequenzen

---

# 🎁 Belohnung

Nach Abschluss der Story-Phase erhältst du:

- +900 €
- +300 XP
- +4 Ruf
- +3 Forschungspunkte
- +2 Prestige

---

# 🎮 Beziehungen beeinflussen Kampagnen-Schichten

Hohe Beziehungen geben erstmals kleine echte Gameplay-Vorteile.

## Mia ab 70 Beziehung

- +3 Minuten in Kampagnen-Schichten

Begründung im Spiel:
bessere Teamabstimmung.

## Leon ab 70 Beziehung

- +3 % XP in Kampagnen-Schichten

Begründung im Spiel:
gegenseitiger Leistungsantrieb.

Diese Boni gelten **nicht** für Freie Schichten.

---

# 🏆 Neue Erfolge

## Mein Weg

Schließe die neue Story-Phase ab und wähle eine Fachrichtungspräferenz.

## Starkes Team

Erreiche sowohl bei Mia als auch bei Leon mindestens 65 Beziehungspunkte.

---

# 🎯 Neuer Kampagnenablauf

Der persönliche Kampagnenweg ist jetzt:

1. Prolog
2. Erster Arbeitstag
3. Erste Arbeitswoche
4. Team & Fachrichtungspräferenz
5. Normale Kampagnen-Schichten
6. langfristige Kampagnenkapitel

Der Kampagnenbutton erkennt automatisch, wo du weiterspielen musst.

---

# ⚡ Freie Schicht bleibt getrennt

Alle neuen Fachrichtungs- und Beziehungsboni aus v0.19 werden nur aktiv, wenn `run.mode === campaign`.

Freie Schichten bleiben:

- ohne Story-Zwang
- ohne Mia-/Leon-Boni
- ohne Kampagnen-Fokusbonus
- weiterhin sofort spielbar

---

# Bestehende Systeme bleiben erhalten

- 5-Bereich-Navigation
- Freie Schicht / Kampagne
- eigener Arzt
- Kampagnen-Prolog
- erste Arbeitswoche
- Arztwerte
- Mentor-Vertrauen
- 6 Kampagnenkapitel
- Prestige
- Finanzen
- Personal 2.0
- Krankenhaus-Ausbau
- Diagnose 2.0
- Patientenstabilität
- Klinik-Flow
- Forschung
- Fallbuch
- Notfälle
- Eingriffe
- Missionen
- Erfolge

## Technisch

- weiterhin nur **eine `index.html`**
- Save-Key bleibt `doctorRushSaveV3`
- v0.18-Spielstand kompatibel
- Beziehungen und Fachrichtungspräferenz werden gespeichert
- Kampagnenboni sind gegen Freie Schichten abgegrenzt
- keine externen JavaScript- oder CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
