# Doctor Rush: Clinic Life v0.3.1

Diese Version enthält den Update-/Cache-Fix für GitHub Pages und iPhone.

## Was wurde geändert?

- Der alte Service-Worker-Offline-Cache wird entfernt.
- Doctor Rush registriert danach keinen dauerhaften Seiten-Cache mehr.
- `style.css` und `game.js` werden versionsabhängig geladen.
- `version.json` ermöglicht ab jetzt eine automatische Versionsprüfung.
- Wenn später z. B. v0.4 online ist, erkennt v0.3.1 die neue Versionsnummer und lädt die Seite mit einem neuen Versionsparameter.
- Der Spielstand aus v0.3 (`doctorRushSaveV3`) bleibt erhalten.

## Einmaliger Wechsel von v0.3 auf v0.3.1

1. Alle Dateien dieser ZIP in dein GitHub-Pages-Verzeichnis hochladen/ersetzen.
2. Wichtig: auch die neue Datei `version.json` hochladen.
3. Nach dem GitHub-Pages-Deployment die Seite EINMAL so öffnen:
   `DEINE-ADRESSE/?v=0.3.1`
4. Danach kannst du wieder die normale Adresse ohne Zusatz verwenden.

Ab diesem Stand sollten zukünftige Updates wesentlich zuverlässiger erscheinen.

Hinweis: Medizinische Inhalte sind vereinfachtes Gameplay und keine medizinische Beratung.
