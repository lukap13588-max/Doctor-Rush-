# Doctor Rush v0.25 – CLINICAL REALISM 2.0

## Dateien

- `index.html`
- `README.md`

Die README liegt zusätzlich als ZIP bei.

## GitHub-Update

1. Die bisherige `index.html` im Doctor-Rush-Repository ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.25` öffnen.

---

# Was ist neu?

v0.25 verändert nicht nur die Anzeige, sondern den gesamten Patientenablauf.

## Neuer realistischer Ablauf

1. Anamnese
2. Körperliche Untersuchung
3. Diagnostik
4. Diagnose
5. Behandlung
6. Disposition & Sicherheitscheck

Damit endet ein Fall nicht mehr automatisch nach Diagnose und Behandlung.

---

# 🩺 Körperliche Untersuchung

Zwischen Anamnese und technischer Diagnostik gibt es jetzt eine eigene klinische Untersuchung.

Je nach Falltyp stehen passende Untersuchungen zur Verfügung.

Beispiele:

- Allgemeinzustand
- Kreislauf / Perfusion
- Lunge
- Herzrhythmus
- neurologischer Kurzstatus
- Abdomen
- Nierenlager
- Gefäßstatus
- Hautbefund
- Funktion / Beweglichkeit

Die Untersuchungen:

- kosten kein Geld
- benötigen aber Zeit
- liefern eigene Befunde
- verbessern die klinische Arbeitsgrundlage

Damit ist „sofort alle Tests anklicken“ deutlich weniger sinnvoll.

---

# 🧠 Evidenz-Score neu berechnet

Der klinische Evidenz-Score berücksichtigt jetzt:

- Anamnese
- körperliche Untersuchung
- technische Diagnostik

Ein vollständiger Fall erfordert damit nicht mehr nur Fragen + Labor/Bildgebung.

---

# ❤️ Dynamischer Vitaltrend

Der Realismusbereich zeigt jetzt zusätzlich einen Vital-/Zustandstrend.

Mögliche Anzeigen:

- → stabil
- ↘ verschlechtert
- ↗ verbessert

Der Trend basiert auf dem bereits vorhandenen dynamischen Patientenzustand.

Zeitverlust, Stabilisierung, Notfallprotokolle und Behandlung können ihn beeinflussen.

---

# 🏥 Disposition

Im Realismusmodus muss jetzt nach Diagnose und Behandlung entschieden werden, wie es mit dem Patienten weitergeht.

Mögliche Entscheidungen:

## 🏠 Ambulant
Entlassung mit weiterer ambulanter Betreuung / Verlaufskontrolle.

## 👀 Beobachtung
Kurzüberwachung und erneute klinische Beurteilung.

## 🛏️ Stationär
Weiterbehandlung auf einer geeigneten Station.

## 🚨 Akutbereich
Unmittelbare Übergabe an einen höher überwachten Akutbereich.

Die passende Disposition wird aus Dringlichkeit, Diagnose und dem vereinfachten Fallkontext bestimmt.

Eine falsche Disposition verhindert im erweiterten Realismus jetzt einen perfekten Fall.

---

# ✅ Sicherheitschecks

Vor dem Fallabschluss kannst du zwei Sicherheitschecks durchführen:

- Allergien geprüft
- Medikation / Risiken geprüft

Sie sind nicht zwingend nötig, um den Fall technisch abzuschließen.

Aber sie verbessern die klinische Qualitätswertung deutlich.

Damit lohnt es sich erstmals wirklich, die Patientenakte zu beachten.

---

# 📊 Klinische Qualität 2.0

Die Qualitätswertung ist jetzt strenger.

Berücksichtigt werden:

- richtige Diagnose
- richtige Behandlung
- richtige Disposition
- Anamnese
- körperliche Untersuchung
- technische Diagnostik
- gezielte statt wahlloser Tests
- Sicherheitschecks
- bei dringenden Fällen optional das Notfallprotokoll

Damit kann ein Fall medizinisch korrekt diagnostiziert sein und trotzdem nur eine mittelmäßige Qualitätswertung bekommen, wenn der Ablauf schlecht war.

---

# ✅ Perfekter Fall ist jetzt anspruchsvoller

Im Realismusmodus bedeutet „perfekt“ jetzt:

- Diagnose richtig
- Behandlung richtig
- Disposition richtig

Sicherheitschecks und saubere klinische Arbeit beeinflussen zusätzlich die Qualitätswertung.

---

# 📄 Klinischer Kurzbrief erweitert

Der Kurzbrief enthält jetzt zusätzlich:

- körperliche Untersuchung
- Disposition
- Sicherheitscheck
- Qualitätswertung

---

# 🏆 Neue Erfolge

## Richtiger nächster Schritt
20 korrekte Dispositionsentscheidungen.

## Sicherheitsroutine
Bei 10 Fällen beide Sicherheitschecks vollständig durchführen.

---

# Neue Statistiken

Gespeichert werden jetzt zusätzlich:

- korrekte Dispositionen
- Anzahl körperlicher Untersuchungsaktionen
- vollständige Sicherheitschecks
- besonders saubere Realismusfälle

---

# Kampagne und Freie Schicht

Clinical Realism 2.0 gilt weiterhin für beide Spielmodi.

## Kampagne
Story + Karriere + realistischer klinischer Ablauf.

## Freie Schicht
Klinikmanagement + realistischer klinischer Ablauf.

---

# Technisch

- weiterhin eine einzige `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.24-Spielstand kompatibel
- keine externen JS-/CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: OK
- One-File-Prüfung: OK
- keine Medikamentendosierungen hinzugefügt

> Die medizinischen Inhalte sind vereinfachtes, fiktives Gameplay und keine medizinische Beratung oder Behandlungsanweisung.
