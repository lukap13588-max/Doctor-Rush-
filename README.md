# Doctor Rush v0.14 – ECONOMY & FINANCE

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei, damit der Download auf dem iPhone zuverlässig funktioniert.

## GitHub-Update

1. Ersetze im Doctor-Rush-Repository nur die bisherige `index.html`.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.14` öffnen.

---

# Neu in v0.14

## 💶 Echte Schicht-Finanzen

Nach jeder Schicht werden jetzt getrennt berechnet:

- Einnahmen
- Untersuchungs- und Materialkosten
- Personalkosten
- Betriebs- und Energiekosten
- Gewinn oder Verlust

## 🏥 Laufende Betriebskosten

Mit wachsender Klinik steigen auch die Fixkosten.

Berücksichtigt werden unter anderem:

- aktive Klinikräume
- Krankenhaus-Erweiterungen
- zusätzliche Patientenkapazität
- Grundbetrieb

## 🏦 Klinik-Rücklage

Du kannst Geld in 250-€-Schritten zurücklegen oder wieder entnehmen.

Wenn das normale Budget am Schichtende für Personal- oder Betriebskosten nicht reicht, wird automatisch zuerst die Rücklage genutzt.

Erst wenn Budget und Rücklage nicht reichen, verliert die Klinik Ruf.

## 🔧 Geräteverschleiß

Die technische Ausstattung besitzt jetzt einen Zustand von 10 bis 100 %.

Nach jeder Schicht entsteht abhängig von der Nutzung Verschleiß.

- ab 55 %: keine direkte Strafe
- unter 55 %: Untersuchungen können länger dauern und teurer werden
- unter 30 %: stärkere Zeit- und Kostenaufschläge

## 🔧 Wartung

Wartung verbessert den Technikzustand um 30 Prozentpunkte.

Die Kosten steigen mit Klinikgröße und Krankenhaus-Ausbau.

## 📑 Drei Klinikverträge

### 🤝 Versorgungsvertrag
- Kosten: 1.600 €
- Voraussetzung: 65 Ruf
- Bonus: +6 % Einnahmen aus Patientenfällen

### 📦 Einkaufspartnerschaft
- Kosten: 1.200 €
- Voraussetzung: 20 behandelte Patienten
- Bonus: zusätzlicher 8-%-Rabatt beim Medikamenteneinkauf

### 🔬 Forschungsförderung
- Kosten: 1.800 €
- Voraussetzung: 5 starke Diagnosen
- Bonus: +1 Forschungspunkt pro abgeschlossener Schicht

## 📊 Finanz-Dashboard

Neu auf der Startseite:

- letzte Einnahmen
- letzte Kosten
- letzter Gewinn/Verlust
- einzelne Kostenblöcke
- Rücklage
- Technikzustand
- Wartungskosten
- aktive Verträge
- geschätzte fixe Kosten der nächsten Schicht

## 🎯 Neue Tagesmission

**Profitabel arbeiten**

Mindestens 150 € operativen Gewinn in einer Schicht erreichen.

## 🏆 Neue Erfolge

### Sicherheitsnetz
2.000 € Rücklage aufbauen.

### Schwarze Zahlen
10 profitable Schichten abschließen.

### Gut vernetzt
Alle drei Klinikverträge abschließen.

## Technische Verbesserung

Eine alte interne Spielstand-Migrationsstelle aus früheren Versionen wurde bereinigt und an die richtige Stelle verschoben.

## Bestehende Systeme bleiben erhalten

- Personal 2.0
- Krankenhaus-Ausbau
- Patientenstabilität
- Diagnose 2.0 und Anamnese
- Klinik-Flow
- Klinikräume
- Medikamente
- Karriere
- Forschung
- Fallbuch
- Notfälle
- Eingriffe
- Missionen und Erfolge

## Technisch

- weiterhin nur **eine `index.html`**
- kein Service Worker
- keine externen JS-/CSS-Dateien
- Spielstand bleibt `doctorRushSaveV3`
- v0.13-Spielstand kompatibel
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
