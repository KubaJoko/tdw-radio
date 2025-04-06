# TDW Radio

Prosty projekt radia zsynchronizowanego czasowo.

## Struktura
- `index.html` – interfejs odtwarzacza
- `script.js` – logika JS
- `generate_playlist.php` – generuje playlistę JSON z folderu `music`
- `sync.php` – podaje aktualny utwór i czas rozpoczęcia
- `music/demo.mp3` – przykładowy plik MP3 (placeholder)

## Użycie
1. Wrzuć pliki na serwer.
2. Odpal `generate_playlist.php` aby stworzyć `playlist.json`.
3. Otwórz `index.html`.

Gotowe!
