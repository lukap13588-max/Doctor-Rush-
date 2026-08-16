# Doctor Rush v0.22 – PROMOTION REVIEW

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei.

## GitHub-Update

1. Im Doctor-Rush-Repository nur die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.22` öffnen.

---

# Neu in v0.22

## 🎓 Erste echte Beförderung

Nach deinem ersten eigenen Stationsbereich folgt jetzt eine offizielle Karrierebeurteilung.

Deine bisherige persönliche Kampagne fließt direkt in die Bewertung ein.

Berücksichtigt werden:

- Autonomie
- Mentor-Vertrauen bei Dr. Hartmann
- erste Rotationswertung
- Stationswertung
- Beziehung zu Mia
- Beziehung zu Leon

Damit beginnt die Beförderung nicht bei 0 – deine bisherige Story hat echte Auswirkungen.

---

# 📋 Beförderungsreview

Das Review besteht aus vier Abschnitten.

## 1. Ausgangslage

Dr. Hartmann fasst deine bisherige Entwicklung zusammen.

Du siehst deinen Basiswert aus:

- Rotation
- Station
- Autonomie
- Mentor-Vertrauen
- Teambeziehungen

## 2. Selbstreflexion

Du wirst gefragt, was du aus schwierigen Diensten gelernt hast.

Du kannst:

- eigene Fehler reflektieren
- hauptsächlich auf Ergebnisse verweisen
- Verantwortung bei anderen suchen

Die Wahl beeinflusst:

- Review-Score
- Leadership
- Mentor-Vertrauen
- teilweise Beziehungen

## 3. Führungssituation

Mia und Leon stehen wieder für zwei unterschiedliche Arbeitsstile.

Du entscheidest, wie du sie als zukünftige Führungskraft einsetzen würdest.

Die stärkste Antwort versucht nicht einfach, einen Kollegen zu bevorzugen, sondern beide Stärken sinnvoll einzusetzen.

## 4. Entscheidung

Am Ende erhältst du deine Bewertung.

---

# 🏅 Drei mögliche Review-Ergebnisse

## Mit Auszeichnung

Sehr starke bisherige Karriere + gute Review-Entscheidungen.

## Bestanden

Du erfüllst die Erwartungen an den nächsten Karriereschritt.

## Mit Entwicklungsplan

Du steigst ebenfalls auf, bekommst aber im Story-Kontext zusätzliche Entwicklungsziele.

Der Fortschritt wird also nicht dauerhaft blockiert.

---

# 👨‍⚕️ Assistenzarzt → Stationsarzt

Nach Abschluss des Reviews steigst du in der persönlichen Kampagne auf:

**STATIONSARZT**

Der neue Titel wird anschließend angezeigt:

- im Arztprofil
- im Karrierebereich
- auf dem Kampagnenbutton

---

# 🧭 Neues Leadership-System

Dein Arzt besitzt jetzt zusätzlich einen dauerhaften Leadership-Wert.

Leadership wird beeinflusst durch:

- Selbstreflexion
- Teamführung
- Beförderungswertung

Spätere Story-Kapitel können Leadership wieder verwenden.

---

# ⏱️ Stationsarzt-Bonus

Nach deiner Beförderung erhältst du in Kampagnen-Schichten:

**+2 Minuten**

Dieser Bonus gilt nur im Kampagnenmodus.

Freie Schichten bleiben vollständig unabhängig.

---

# 🎁 Beförderungsbonus

Bei normalem Bestehen:

- +1.800 €
- +550 XP
- +6 Ruf
- +6 Forschungspunkte
- +3 Prestige

Bei einer Beförderung mit Auszeichnung:

- +2.200 €
- +700 XP
- +8 Ruf
- +6 Forschungspunkte
- +3 Prestige

---

# 🏆 Neue Erfolge

## Nächste Stufe

Steige zum Stationsarzt auf.

## Mit Auszeichnung

Schließe das erste Beförderungsreview mit Auszeichnung ab.

---

# 🔧 Technische Verbesserungen

## Anamnese jetzt wirklich 100/100

Seit Diagnose 2.0 war der maximal erreichbare Anamnese-Hinweiswert intern nur 90/100.

Das ist jetzt korrigiert.

Neue Verteilung:

- Startwert: 15
- Frage 1: +30
- Frage 2: +25
- Frage 3: +20
- Frage 4: +10

Maximal:

**100/100**

## Robuster Klinik-Flow

Beim Laden eines Patienten wird die Stationsnutzung jetzt zur Sicherheit initialisiert, falls ein älterer oder ungewöhnlicher Spielstand den Flow-Zustand nicht vollständig enthält.

## Schutz gegen doppelten Fallabschluss

Mehrfaches schnelles Tippen auf „Fall abschließen“ kann denselben Patienten nicht mehr gleichzeitig mehrfach abrechnen.

---

# Persönlicher Karriereweg

Die Timeline enthält jetzt:

1. Erster Dienst
2. Woche 1
3. Team
4. Rotation
5. Station
6. Beförderung

Danach bist du **Stationsarzt**.

---

# ⚡ Freie Schicht bleibt getrennt

Die persönliche Beförderung und der Stationsarzt-Zeitbonus gelten nur im Kampagnenmodus.

Freie Schichten bleiben:

- ohne Story-Pflicht
- ohne persönlichen Rangbonus
- sofort spielbar
- klassisches Klinikmanagement

---

# Technisch

- weiterhin nur **eine `index.html`**
- Save-Key bleibt `doctorRushSaveV3`
- v0.21-Spielstand kompatibel
- Beförderung, Leadership und Review-Ergebnis werden gespeichert
- keine externen JavaScript- oder CSS-Dateien
- kein Service Worker
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**
- Anamnese-Maximum: **100/100**
- Doppeltipp-Schutz: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
