# Doctor Rush v0.9 – CLINIC FLOW 2.0

## Dateien

Wie vereinbart:

- `index.html`
- `README.md`

Zusätzlich gibt es die `README.md` wieder als ZIP für den sicheren Download auf dem iPhone.

## GitHub-Update

1. Öffne dein Doctor-Rush-Repository.
2. Ersetze nur die vorhandene `index.html`.
3. Commit speichern.
4. Öffne deine GitHub-Pages-Seite danach einmal mit `?v=0.9`.

---

## Neu in v0.9

### 🏥 Echter Patientenfluss

Patienten durchlaufen jetzt sichtbar verschiedene Stationen.

Typischer Ablauf:

**Triage → Behandlungsraum → Labor / Bildgebung / Kardiologie / Notaufnahme / Eingriffsraum → Entlassung**

Welche Stationen angezeigt werden, hängt vom jeweiligen Patientenfall ab.

### 🧭 Live-Patientenweg

Während eines Falls siehst du:

- aktuelle Station
- bereits erledigte Stationen
- noch offene Stationen
- aktuelle Fallzeit
- aktuellen Flow-Score

Untersuchungen markieren automatisch die tatsächlich verwendete Station.

Beispiele:

- Blutbild → Labor
- Röntgen / CT / Ultraschall → Bildgebung
- EKG → Kardiologie
- Notfall-Protokoll → Notaufnahme
- Eingriffs-Minigame → Eingriffsraum

### 📊 Klinikbetrieb-Dashboard

Auf der Startseite gibt es einen neuen Bereich **Klinikbetrieb**.

Er zeigt die letzte Schicht:

- durchschnittlicher Flow-Score
- behandelte Patienten
- durchschnittliche Fallzeit
- größten Engpass
- Stationsauslastung

### 🚧 Stationsauslastung

Für jede Station wird gespeichert, wie oft sie in der letzten Schicht genutzt wurde.

Stark beanspruchte Stationen werden als hohe Auslastung markiert.

### 💰 Flow-Bonus

Effiziente Patientenwege bringen zusätzlich Geld:

- Flow 90–100 → +25 €
- Flow 78–89 → +15 €
- Flow 65–77 → +8 €

### 🏥 Live-Betrieb im Wartezimmer

Im Wartezimmer siehst du während der laufenden Schicht:

- Nutzung von Triage
- Behandlungsraum
- Labor
- Bildgebung
- Kardiologie
- Notaufnahme
- Eingriffsraum

Die aktuell stärkste Auslastung wird hervorgehoben.

### 📋 Fallauswertung erweitert

Nach jedem Patienten erscheinen zusätzlich:

- Klinik-Flow
- Flow-Bewertung
- Fallzeit
- Flow-Bonus

### 📈 Schichtauswertung erweitert

Nach jeder Schicht erscheinen:

- durchschnittlicher Klinik-Flow
- durchschnittliche Fallzeit
- größter Engpass

### 🎯 Neue Tagesmission

**Klinikfluss**
- durchschnittlichen Flow von mindestens 80 erreichen

### 🏆 Neue Erfolge

**Perfekter Ablauf**
- eine Schicht mit mindestens 90 Flow beenden

**Volle Auslastung**
- 6 Patienten in einer Schicht behandeln

## Bestehende Systeme bleiben erhalten

- Wartezimmer und Triage
- stabiler Fallabschluss
- Klinikräume
- Medikamente und Apotheke
- Arztkarriere
- Personal
- Spezialisierungen
- Forschung
- Fallbuch
- Notfall-Protokolle
- Notfall-Skill
- Eingriffsraum
- Eingriffs-Minigames
- Schicht-Ereignisse
- Tagesmissionen
- Erfolge
- Geld, XP und Ruf

## Technisch

- weiterhin nur eine `index.html`
- kein Service Worker
- keine externe JavaScript-Datei
- keine externe CSS-Datei
- Spielstand bleibt `doctorRushSaveV3`
- v0.8-Spielstand kompatibel
- JavaScript-Syntaxprüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
