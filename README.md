# Doctor Rush v0.8 – PROCEDURES & OPERATIONS

## Dateien

Wie vereinbart:

- `index.html`
- `README.md`

Zusätzlich gibt es die `README.md` wieder als ZIP für den sicheren Download auf dem iPhone.

## GitHub-Update

1. Öffne dein Doctor-Rush-Repository.
2. Ersetze nur die vorhandene `index.html`.
3. Commit speichern.
4. Öffne die GitHub-Pages-Seite einmal mit `?v=0.8`.

---

## Neu in v0.8

### 🛠️ Neuer Eingriffsraum

Die Klinik bekommt einen achten Raum:

**Eingriffsraum**

- Freischaltung: 2.200 €
- Level 1 bis 3
- höhere Level geben mehr Eingriffsbonus
- höhere Level sparen Zeit bei Eingriffs-Minigames

Wichtig:
Patientenfälle bleiben auch ohne freigeschalteten Eingriffsraum spielbar.
Nur das zusätzliche Minigame ist dann gesperrt.

### 🛠️ Eingriffs-Minigame

Bestimmte Patientenfälle haben jetzt einen optionalen vereinfachten Eingriff.

Du musst mehrere Schritte in der richtigen Reihenfolge auswählen.

Beispiele der abstrakten Schritte:

- Vorbereitung
- Durchführung
- Abschlusskontrolle

Das Minigame enthält bewusst keine detaillierte echte Operationsanleitung.

**Erfolgreicher Eingriff:**
- Geldbonus
- +20 XP
- +1 Forschungspunkt
- bessere Eingriffs-Statistik

**Fehler:**
- -1 Ruf
- Zeitverlust

Das normale Diagnostizieren und der Fallabschluss werden nicht blockiert.

### 🧑‍⚕️ Eingriffs-Skill

Neue Rangfolge:

- Basis
- Routiniert
- Eingriffs-Profi
- OP-Team
- Spezialist

Angezeigt werden:

- erfolgreich abgeschlossene Eingriffe
- Trefferquote
- perfekte Eingriffe

### 🆕 5 neue Fälle

- Schnittverletzung
- Hautabszess
- Schulterluxation
- Fremdkörper in der Hand
- Akute Cholezystitis

Akute Cholezystitis ist als seltener Fall markiert.

### 📖 Fallbuch erweitert

Fälle mit Eingriff werden zusätzlich mit **EINGRIFF** markiert.

### 🎯 Neue Tagesmission

- 2 Eingriffe in einer Schicht erfolgreich abschließen.

### 🏆 Neue Erfolge

**Ruhige Hand**
- 10 Eingriffe erfolgreich

**OP-Zentrum**
- Eingriffsraum auf Level 3

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
- v0.7-Spielstand kompatibel
- JavaScript-Syntaxprüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
