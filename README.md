# Doctor Rush v0.13 – STAFF 2.0

## Dateien

- `index.html`
- `README.md`

Die `README.md` liegt zusätzlich als ZIP bei, damit der Download auf dem iPhone zuverlässig funktioniert.

## GitHub-Update

1. Im Doctor-Rush-Repository die bisherige `index.html` ersetzen.
2. Commit speichern.
3. Doctor Rush einmal mit `?v=0.13` öffnen.

---

# Neu in v0.13

## 👥 Personal 2.0

Deine Mitarbeiter sind jetzt echte Teammitglieder mit:

- eigenem Namen
- Level
- Erfahrungspunkten
- Müdigkeit
- absolvierten Schichten
- Gehalt
- individueller Rolle und Bonus

Die bisherigen Mitarbeiter aus deinem Spielstand werden automatisch übernommen.

## ⭐ Erfahrung und automatische Entwicklung

Nach jeder Schicht sammeln Mitarbeiter XP.

Wie viel XP sie bekommen, hängt von ihrer tatsächlichen Arbeit ab:

- Pflegekraft und Arztassistent: behandelte Patienten
- Labortechniker: Labornutzung
- Radiologie-Techniker: Bildgebung
- Notfallpfleger: Notfallversorgung

Bei genug XP steigt ein Mitarbeiter automatisch bis maximal Level 3 auf.

## 😴 Müdigkeit

Nach jeder Schicht steigt die Müdigkeit.

Stark beanspruchtes Personal wird schneller müde.

Hohe Müdigkeit schwächt die tatsächlichen Boni des Mitarbeiters.

## 🛌 Erholung

Mitarbeiter können im Personalbereich gezielt Erholung bekommen.

- kostet Klinikbudget
- reduziert Müdigkeit um 35 Punkte
- stellt dadurch einen größeren Teil der Leistung wieder her

## 💶 Gehälter

Jeder Mitarbeiter hat jetzt ein Gehalt pro Schicht.

Höhere Level kosten mehr.

Die Personalkosten werden am Ende der Schicht automatisch abgezogen.

Reicht das Budget nicht:

- Geld fällt nicht unter 0 €
- die Klinik verliert 2 Ruf

## 📊 Neues Personal-Dashboard

Es zeigt:

- Anzahl Mitarbeiter
- Gesamtgehalt pro Schicht
- durchschnittliche Müdigkeit
- Namen
- Level
- XP
- Müdigkeit
- Gehalt
- Leistung
- absolvierte Schichten
- Rollenbonus

## 👥 Team während der Schicht

In laufenden Schichten werden jetzt die persönlichen Namen angezeigt.

Außerdem siehst du direkt die Müdigkeit des Teams.

## 📈 Schichtauswertung

Neu:

- Personalkosten
- mögliche Beförderungen
- Warnung bei Gehaltsengpass

## 🎯 Neue Tagesmission

**Gutes Personalmanagement**

- mindestens 2 Mitarbeiter
- höchstens 55 % durchschnittliche Müdigkeit

## 🏆 Neue Erfolge

### Stammteam
Ein Mitarbeiter absolviert 10 Schichten.

### Arbeitgeber
Insgesamt 5.000 € Personalgehälter bezahlen.

## Bestehende Systeme bleiben erhalten

- Krankenhaus-Ausbau
- Patientenstabilität
- Diagnose 2.0 und Anamnese
- Klinik-Flow
- Klinikräume
- Medikamente
- Karriere
- Spezialisierungen
- Forschung
- Fallbuch
- Notfall-Protokolle
- Eingriffe
- Missionen und Erfolge

## Technisch

- weiterhin nur **eine `index.html`**
- kein Service Worker
- keine externen JS-/CSS-Dateien
- Spielstand bleibt `doctorRushSaveV3`
- v0.12-Spielstand kompatibel
- JavaScript-Syntaxprüfung: **OK**
- One-File-Prüfung: **OK**

> Die medizinischen Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
