# Doctor Rush v0.28 – DYNAMIC PATIENTS & RESULTS

## Dateien
- `index.html`
- `README.md`

## GitHub
1. Alte `index.html` ersetzen.
2. Commit speichern.
3. Einmal mit `?v=0.28` öffnen.

# Neu in v0.28

## 🫀 Dynamische Patienten
Puls, Sauerstoffsättigung, Blutdruck, Atemfrequenz und Schmerzscore reagieren jetzt auf den dynamischen Patientenzustand.

Verschlechtert sich der Zustand, verändern sich auch die angezeigten Vitalwerte. Stabilisierung und passende Versorgung können den Verlauf wieder verbessern.

## 🧪 Diagnostik ist nicht mehr sofort fertig
Im Realismusmodus wird eine technische Untersuchung zuerst angeordnet.

Die Anordnung benötigt ungefähr eine Minute. Anschließend läuft eine simulierte Befundzeit.

Labor, Bildgebung und andere technische Untersuchungen erscheinen dadurch nicht mehr sofort.

## ⏳ Befund-Warteschlange
Die neue Diagnostikübersicht zeigt:
- angeordnete Untersuchung
- Fachbereich
- simulierte Laufzeit
- verbleibende Zeit
- fertige Befunde

## Parallel arbeiten
Während ein Befund läuft, kannst du weiter:
- Anamnese führen
- körperlich untersuchen
- andere Diagnostik anordnen
- Differentialdiagnosen bilden
- stabilisieren

Wenn dabei genügend Zeit vergeht, treffen Befunde automatisch ein.

## Auf Befunde warten
Mit „Bis zum nächsten Befund warten“ springt die Spielzeit genau bis zum nächstfertigen Ergebnis.

Währenddessen kann sich der Patient weiter verschlechtern.

## 🚨 Dringliche Befundmeldungen
Bestimmte Befunde können als dringlich markiert werden. Sie lösen eine sichtbare Warnung aus und erscheinen im klinischen Verlauf.

## 📊 Befundmanagement
Die Qualitätswertung berücksichtigt nun, ob selbst angeordnete Untersuchungen auch wirklich abgeschlossen und berücksichtigt wurden.

Ein Fall kann Diagnose, Behandlung und Disposition korrekt haben und trotzdem nicht perfekt sein, wenn noch selbst angeordnete Befunde ausstehen.

## Perfekter Fall
Im Realismusmodus gilt ein Fall nun nur als vollständig perfekt, wenn:
- Diagnose korrekt
- Behandlung korrekt
- Disposition korrekt
- alle angeordneten Befunde eingetroffen

## 📄 Kurzbrief
Der klinische Kurzbrief zeigt jetzt zusätzlich:
- aktuelle dynamische Vitalwerte
- Anzahl angeordneter Befunde
- Anzahl bereits eingetroffener Ergebnisse

## 🏆 Neue Erfolge
### Befunde im Blick
30 zeitverzögerte Befunde vollständig einlaufen lassen.

### Alarm erkannt
10 dringliche Befundmeldungen erhalten.

## Weiterhin enthalten
- Patientenakte
- körperliche Untersuchung
- strukturierte Labor- und Bildgebungsbefunde
- Differentialdiagnosen
- Diagnosesicherheit
- Konsile
- Reevaluation
- Disposition
- Übergabe / Follow-up
- klinische Qualitätswertung
- Kampagne
- freie Schicht

## Technisch
- nur eine `index.html`
- Save-Key bleibt `doctorRushSaveV3`
- v0.27-Spielstand kompatibel
- kein Service Worker
- keine externen JS-/CSS-Dateien
- JavaScript-Syntaxprüfung: **OK**
- keine Medikamentendosierungen hinzugefügt

> Sämtliche medizinischen Inhalte sind vereinfachtes, fiktives Gameplay und keine medizinische Beratung.
