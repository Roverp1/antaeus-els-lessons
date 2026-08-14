# English tutoring

Static HTML course: lessons, exercises, and reference sheets. Served as-is by GitHub Pages.

## Deploy

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
3. Every push republishes the site. No build step, no Actions.

## Adding a lesson

1. Create `lessons/0004-....html` (or an `exercises/` / `reference/` page).
2. Commit. The pre-commit hook regenerates `index.html` automatically.

## Git hooks

The pre-commit hook regenerates the index from `lessons/`, `exercises/`, and `reference/`. Enable it once per clone:

```sh
scripts/setup-git-hooks
# or: git config core.hooksPath .githooks
```

`git commit --no-verify` and GitHub web edits skip the hook, so the index can go stale after those. Run `scripts/build-index` manually to fix.
