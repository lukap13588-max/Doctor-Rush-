# Doctor Rush v0.11 – PATIENT CONDITION

## Dateien

Wie vereinbart:

- `index.html`
- `README.md`

Zusätzlich gibt es die `README.md` wieder als ZIP für den sicheren Download auf dem iPhone.

## GitHub-Update

1. Öffne dein Doctor-Rush-Repository.
2. Ersetze nur die vorhandene `index.html`.
3. Commit speichern.
4. Öffne die GitHub-Pages-Seite danach einmal mit `?v=0.11`.

---

## Neu in v0.11

### ❤️‍🩹 Dynamischer Patientenzustand

Jeder Patient bekommt während der Behandlung einen sichtbaren Zustandswert von **0 bis 100**.

Startwerte hängen von der Dringlichkeit ab:

- leichte Fälle starten stabil
- mittlere Fälle starten niedriger
- dringende Fälle starten deutlich gefährdeter

Der Zustand verändert sich während des Falls.

### ⏱️ Zeit hat jetzt Konsequenzen

Zeitaufwendige Aktionen können den Zustand verschlechtern:

- Anamnese
- Untersuchungen
- Notfallversorgung
- Eingriffe

Dringende Patienten verlieren schneller Stabilität als leichte Fälle.

### 🛡️ Monitoring & Stabilisierung

Du kannst einmal pro Fall eine allgemeine **Monitoring-&-Stabilisierungsaktion** ausführen.

Sie:

- kostet 4 Minuten
- verbessert den Zustand
- reduziert danach die weitere Verschlechterung
- ist besonders wertvoll bei dringenden Patienten

Das ist bewusst abstrakt gehalten und keine reale medizinische Anleitung.

### 🚨 Notfall-Protokolle wirken auf den Zustand

Richtiges Notfall-Protokoll:
- verbessert den Patientenzustand

Fehler:
- verschlechtert ihn zusätzlich

### 🛠️ Eingriffe wirken auf den Zustand

Erfolgreiche Eingriffe:
- verbessern den Zustand

Fehler:
- verschlechtern ihn

### 💊 Behandlung entscheidet mit

Die richtige Behandlung verbessert den Zustand am Ende deutlich.

Eine falsche Behandlung verschlechtert ihn.

### 💰 Stabilitätsbonus

Gute Endzustände bringen zusätzlich Geld:

- ab 70: Bonus
- ab 80: höherer Bonus
- ab 90: maximaler Bonus

### 🛟 Rettungswertung

Wenn ein Patient zwischenzeitlich unter 50 fällt und am Ende wieder mindestens 65 erreicht, zählt der Fall als **gerettet**.

### 📊 Neues Dashboard

Auf der Startseite gibt es jetzt **Patientenstabilität**.

Angezeigt werden:

- stabil beendete Fälle
- gerettete Patienten
- bester Endzustand
- Stabilitäts-Rang

Ränge:

- Basis
- Aufmerksam
- Stabilisierer
- Krisenfest
- Intensiv-Profi

### 🆕 3 neue Fälle

- Dehydratation
- Schwere Pneumonie
- Migräne mit Aura

### 📋 Fallauswertung erweitert

Nach jedem Patienten siehst du:

- Endzustand
- Stabil / Kritisch / Gerettet
- Stabilitätsbonus

### 📈 Schichtauswertung erweitert

Am Schichtende:

- durchschnittlicher Patientenzustand
- Anzahl stabil beendeter Fälle
- Anzahl geretteter Patienten

### 🎯 Neue Tagesmission

**Stabile Station**
- 4 Patienten in einer Schicht stabil beenden

### 🏆 Neue Erfolge

**Ruhige Station**
- 20 Patienten insgesamt stabil beenden

**Krisenmanager**
- 5 Patienten nach kritischer Verschlechterung retten

## Bestehende Systeme bleiben erhalten

- Diagnose 2.0
- Anamnese
- Klinik-Flow
- Wartezimmer und Triage
- Klinikräume
- Medikamente
- Arztkarriere
- Personal
- Spezialisierungen
- Forschung
- Fallbuch
- Notfall-Protokolle
- Eingriffe
- Tagesmissionen
- Erfolge
- Geld, XP und Ruf

## Technisch

- weiterhin nur eine `index.html`
- kein Service Worker
- keine externe JavaScript-Datei
- keine externe CSS-Datei
- Spielstand bleibt `doctorRushSaveV3`
- v0.10-Spielstand kompatibel
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
