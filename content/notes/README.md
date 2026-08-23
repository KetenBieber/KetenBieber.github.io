# Notes folder

Drop PDF or Markdown files in this folder and redeploy the site. They will appear on `/notes` automatically.

Optionally add a JSON file with the same name, for example `world-models.pdf` and `world-models.json`:

```json
{
  "title": "World Models — Reading Notes",
  "description": "Notes on representation learning, prediction and action.",
  "date": "2026-08-23",
  "categories": ["VLA", "Robotics", "Paper Reading"],
  "tags": ["World Models", "Robotics"],
  "featured": true
}
```

Only the PDF is required. Without JSON, the title is generated from its filename.

Available categories:

`LLM`, `VLM`, `VLA`, `Robotics`, `RL`, `Paper Reading`, `Learning Note`, `Programming Learning`, `Project Recording`.

One note can belong to multiple categories. The old single `category` field remains supported.
