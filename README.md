# Doctor Rush v0.24 – CLINICAL REALISM

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei.

## GitHub-Update

1. Im Doctor-Rush-Repository nur die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.24` öffnen.

---

# Ziel von v0.24

Diese Version baut bewusst keine neue Story-Stufe.

Stattdessen wird das eigentliche Patienten-Gameplay realistischer.

Der Realismus entsteht vor allem durch:

- klinischen Ablauf
- Patientenakte
- zusätzliche Vitalparameter
- plausiblere Differentialdiagnosen
- gezieltere Diagnostik
- Dokumentation
- Qualitätsbewertung

Es werden bewusst keine Medikamentendosierungen oder detaillierten medizinischen Handlungsanweisungen eingebaut.

---

# 🩺 Erweiterter Realismus

Auf der Startseite gibt es jetzt einen Schalter:

## Realismus: ERWEITERT

Dieser Modus ist nach dem Update standardmäßig aktiviert.

Du kannst ihn jederzeit deaktivieren.

Bei deaktiviertem Realismus bleibt der klassische Doctor-Rush-Ablauf erhalten.

---

# 📋 Neue Patientenakte

Jeder normale Patientenfall besitzt jetzt eine aufklappbare Patientenakte.

Sie zeigt im Spiel:

- Triage-Einstufung
- Allergien
- Dauermedikation
- relevante Vorerkrankungen
- Risikoprofil
- zusätzliche Vitalwerte

Die Akte ist einklappbar, damit das mobile Layout nicht wieder unnötig lang wird.

---

# ❤️ Mehr Vitalwerte

Zusätzlich zu Puls, Temperatur, Sauerstoffsättigung und Blutdruck gibt es jetzt:

- Atemfrequenz
- vereinfachte Schmerzskala 0–10

Die zusätzlichen Werte werden für jeden Fall passend zu Dringlichkeit und Falltyp erzeugt.

---

# 🟢🟡🔴 Vitalwerte werden bewertet

Vitalwerte bekommen im erweiterten Realismus eine visuelle Spielbewertung:

- normal
- auffällig
- deutlich auffällig

Dadurch erkennst du schneller, ob ein Patient physiologisch stabil wirkt.

Die Bewertung dient nur dem Spiel und ersetzt keine reale medizinische Beurteilung.

---

# 🧠 Plausiblere Differentialdiagnosen

Bisher waren einige falsche Diagnosemöglichkeiten sehr offensichtlich.

Im erweiterten Realismus verwendet das Spiel jetzt fallbezogene Differentialdiagnose-Pools.

Beispiele:

## Atemwege
- Pneumonie
- Asthma-Exazerbation
- COPD-Exazerbation
- Lungenembolie
- Panikattacke

## Neurologie
- Migräne
- Schlaganfall
- Hirnblutung
- Lagerungsschwindel
- Gehirnerschütterung

## Bauch
- Appendizitis
- Gastroenteritis
- Gallenkolik
- Cholezystitis
- Pankreatitis
- Nierenstein

Die richtige Diagnose bleibt immer enthalten.

Die Reihenfolge wird pro Patient deterministisch gemischt.

---

# 🔬 Untersuchungen wirken klinischer

Untersuchungen sind jetzt sichtbar kategorisiert:

- KLINISCH
- LABOR
- BILDGEBUNG
- KARDIO

Befunde erscheinen als Befundbericht.

Kosten und Zeit bleiben erhalten, weil Doctor Rush weiterhin auch ein Klinikmanagement-Spiel ist.

---

# 🎯 Gezielte Diagnostik statt Test-Spam

Das Spiel merkt sich, ob du bei stabilen Patienten sehr früh Untersuchungen anordnest, bevor eine vernünftige klinische Grundlage vorhanden ist.

Bei dringenden Patienten wird frühe Akutdiagnostik nicht auf dieselbe Weise bewertet.

---

# 📊 Klinische Arbeitsgrundlage

Vor der Diagnose gibt es einen neuen kompakten Bereich.

Der Evidenz-Score 0–100 entsteht aus:

- Anamnese
- Anzahl erhobener Befunde
- klinischer Dokumentation

Er verrät nicht die richtige Diagnose.

---

# ✅ Klinische Qualitätswertung

Am Ende jedes Falls erhältst du zusätzlich eine klinische Qualität von 0–100.

Sie berücksichtigt:

- richtige Diagnose
- passende Behandlung
- Qualität der klinischen Arbeitsgrundlage
- gezielte statt wahlloser Diagnostik
- bei dringenden Fällen teilweise auch korrektes Notfallprotokoll

Bewertungen:

- EXZELLENT
- SEHR GUT
- SOLIDE
- AUSREICHEND
- LÜCKENHAFT

Sehr sauber gespielte Fälle geben einen kleinen zusätzlichen XP-Bonus.

---

# 📄 Klinischer Kurzbrief

Nach jedem Fall kannst du einen kompakten fiktiven Kurzbrief aufklappen.

Er enthält:

- Patient
- Triage
- Leitsymptom
- Vitalwerte
- Anamnese
- erhobene Befunde
- Arbeitsdiagnose
- Versorgungsentscheidung
- klinische Qualitätswertung

---

# 🏆 Neue Erfolge

## Klinisch sauber
Schließe 10 Fälle mit mindestens 80 klinischer Qualität ab.

## Saubere Dokumentation
Erreiche in einem Fall mindestens 95 klinische Qualität.

---

# Kampagne UND freie Schicht

Der erweiterte klinische Realismus gilt für beide Modi:

## Kampagne
Persönliche Karriere + realistischer Patientenworkflow.

## Freie Schicht
Schnelles Klinikmanagement + realistischer Patientenworkflow.

---

# Technisch

- weiterhin nur **eine `index.html`**
- Save-Key bleibt `doctorRushSaveV3`
- v0.23-Spielstand kompatibel
- Realismus bei alten Spielständen automatisch aktiviert
- keine externen JavaScript- oder CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**
- keine Medikamentendosierungen hinzugefügt
- richtige Diagnose bleibt in jedem Realismus-Differential enthalten

> Sämtliche medizinischen Inhalte sind vereinfachtes, fiktives Gameplay und keine medizinische Beratung.
