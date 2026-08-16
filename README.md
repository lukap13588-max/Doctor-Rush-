# Doctor Rush v0.16 – UI & GAME MODES

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei, damit sie sich auf dem iPhone zuverlässig speichern lässt.

## GitHub-Update

1. Im Doctor-Rush-Repository nur die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.16` öffnen.

---

# Die zwei großen Änderungen

## 1. Schluss mit dem endlosen Dashboard

Doctor Rush besitzt jetzt eine feste mobile Navigation am unteren Bildschirmrand:

- 🏠 Home
- 🏥 Klinik
- 👥 Team
- 🎯 Karriere
- 💶 Finanzen

Die Systeme sind auf diese Seiten verteilt, statt alle untereinander zu stehen.

### Home

Nur noch Spielmodus, Budget, Ruf, XP, Klinik-Level, Tagesmission und Schnellzugriffe.

### Klinik

Krankenhaus-Ausbau, Klinik-Flow, Räume, Apotheke und Management-Upgrades.

### Team

Personal 2.0 mit Namen, Level, XP, Müdigkeit, Gehältern und Erholung.

### Karriere

Zusätzlich unterteilt in:

- **Kampagne**
- **Mein Arzt**
- **Wissen**

Damit werden Forschung, Fallbuch, Skills und Kampagne nicht mehr gleichzeitig als endlose Seite angezeigt.

### Finanzen

Gewinn/Verlust, Rücklage, Betriebskosten, Wartung und Klinikverträge.

---

# 🚀 Performance verbessert

Bisher wurde beim Speichern häufig das komplette Home-Dashboard neu aufgebaut – sogar während einer laufenden Patientenbehandlung.

Das passiert jetzt nicht mehr.

Während einer Schicht wird Home nicht ständig im Hintergrund gerendert. Auf Home selbst wird nur der aktuell sichtbare Bereich aktualisiert.

Das sollte Doctor Rush besonders auf dem iPhone deutlich flüssiger machen.

---

# 2. Zwei Spielmodi

## 👨‍⚕️ Kampagne

Du spielst deinen eigenen Arzt.

Im Kampagnenbereich kannst du deinem Arzt einen Namen geben.

Kampagnen-Schichten werden separat gekennzeichnet mit:

- Name des Arztes
- aktuellem Kapitel
- Kampagnenmodus

Die bestehende Kapitel-Kampagne bleibt erhalten.

Der nächste Schritt ist **v0.17 – Campaign Prologue**:

- persönlicher erster Arbeitstag
- Start als Assistenzarzt
- Oberarzt und Story-Dialoge
- erster eigener Patient
- Entscheidungen aus Sicht deines Arztes
- später Facharzt → Oberarzt → Chefarzt → eigene Klinik

## ⚡ Freie Schicht

Der bisherige schnelle Modus bleibt erhalten.

Direkt starten, Patienten behandeln, Geld verdienen, Personal entwickeln und die Klinik frei ausbauen – ohne Story-Zwang.

---

# 👨‍⚕️ Eigenes Arztprofil

Im Kampagnenbereich kann der Name deines Arztes geändert werden.

Dieser Name erscheint anschließend in Kampagnen-Schichten.

---

## Bestehende Systeme bleiben erhalten

- Kampagnenkapitel und Prestige
- Finanzen
- Rücklage
- Wartung
- Klinikverträge
- Personal 2.0
- Krankenhaus-Ausbau
- Patientenstabilität
- Diagnose 2.0
- Anamnese
- Klinik-Flow
- Klinikräume
- Apotheke
- Forschung
- Fallbuch
- Notfälle
- Eingriffe
- Missionen
- Erfolge

## Technisch

- weiterhin nur **eine `index.html`**
- Save-Key bleibt `doctorRushSaveV3`
- v0.15-Spielstand kompatibel
- keine externen JS-/CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**
- alte Voll-Dashboard-Renderkette entfernt: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
