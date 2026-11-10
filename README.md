# Mi Estudio
Flashcard study app (installable PWA, works offline, updates itself when opened online).

- `catalog.json` — list of study guides, grouped by grade.
- `guides/<id>.json` — one study guide: subjects → topics (decks) → cards + notes.
- Students pick their grade, subscribe to a guide and choose their subjects. Progress and subscriptions stay on the device.

To add a guide: create `guides/<id>.json` and add its entry to `catalog.json`.
