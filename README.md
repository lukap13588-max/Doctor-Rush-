# Doctor Rush v0.42 – IMAGING QUALITY PASS

Diese Version verbessert gezielt die **Bildqualität** im Spiel.

## Neu in v0.42
- Bilder nicht mehr nur eingebettet / komprimiert, sondern als **separate Asset-Dateien**
- deutlich bessere Qualität für:
  - **EKG mit ST-Hebungen**
  - **Thorax-Röntgen Pneumonie**
  - **Thorax-Röntgen Pneumothorax**
  - **Handgelenk-Fraktur-Röntgen**
  - **CT Kopf normal**
  - **CT Kopf mit Blutung**
  - **Ultraschall Gallenblase mit Steinen**
  - **FAST / RUQ Ultraschall**
- Bildvorschauen im Dock jetzt mit **`contain` statt `cover`**, damit die Befunde nicht mehr so abgeschnitten wirken.

## Wichtiger Hinweis für GitHub
Diese Version braucht **nicht nur `index.html`**, sondern auch den Ordner **`assets/`**.

Du musst also hochladen:
- `index.html`
- `README.md` (optional)
- den kompletten Ordner `assets/`

## Inhalt des assets-Ordners
- `assets/ekg_stemi.png`
- `assets/xray_pneumonia.png`
- `assets/xray_pneumothorax.png`
- `assets/xray_fracture.png`
- `assets/ct_head_normal.png`
- `assets/ct_head_bleed.png`
- `assets/us_gallstones.png`
- `assets/us_fast.png`

## Empfehlung
Am einfachsten den kompletten ZIP-Ordner entpacken und **alles zusammen** auf GitHub ersetzen / hochladen.
