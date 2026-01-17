# Copilot / AI Agent Instructions

This repository is a minimal Node.js API starter. The guidance below is focused and actionable so an AI coding agent can be immediately productive.

## Quick summary
- **Project type:** Node.js API using Express (single-file starter).
- **Primary entry:** [index.js](index.js)
- **Dependencies:** declared in [package.json](package.json) (`express` is present).
- **Docs:** [README.md](README.md) is minimal; no DB config or tests present.

## Big-picture architecture
- The repo currently contains a single application entrypoint (`index.js`) and `package.json`. Expect a single-process Express server. There are no subfolders or service boundaries yet; new features typically add files/folders (e.g., `routes/`, `controllers/`, `models/`).
- README mentions MongoDB but there is no MongoDB client or connection code in the repo. If adding DB code, include a clear `config/` or `.env` pattern and add `mongoose` or the chosen client to `package.json`.

## Developer workflows (explicit commands)
- Install dependencies: `npm install`
- Start the app (current repo): `node index.js` (no `start` script exists yet).
- Recommended: when adding scripts, update `package.json` and reflect them in `README.md`.

Example `package.json` script to add (if you create it):

```
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## Project-specific conventions & patterns
- Module style: keep using CommonJS (require/module.exports) unless the repo is explicitly migrated to ESM (`type": "module"` in `package.json`).
- File placement: add HTTP route handlers under `routes/` and business logic under `controllers/` when the project grows. Keep `index.js` minimal (server bootstrap + middleware + mount routes).
- Config: there is currently no `.env` or `config/` file. If you add environment-based config, follow the conventional `.env` + `config/index.js` approach and document it in `README.md`.

## Integration points & external deps
- The only declared dependency is `express`. Do not introduce external services without adding them to `package.json` and documenting setup steps (e.g., MongoDB URI, environment variables).
- If you add DB integration, add connection initialization (e.g., `db/connection.js`) and ensure graceful shutdown in `index.js`.

## Safety/compatibility notes for changes
- Avoid changing `package.json` `main` or converting to ESM without user approval.
- If adding linters, formatters, or dev tools, include install and run steps in `README.md`.
- Add tests under a `test/` folder and a `test` script in `package.json` if you create them.

## Files to inspect when working
- [index.js](index.js) — server entrypoint
- [package.json](package.json) — deps and scripts
- [README.md](README.md) — update when adding scripts or setup steps
- [.gitignore](.gitignore) — keep updated for node_modules, .env, etc.

---
If any section is unclear or you want the agent to follow stricter conventions (e.g., preferred folder layout, linting rules, or test framework), tell me and I will update these instructions accordingly.
