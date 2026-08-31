# AGENTS.md

Lume static site (Deno) deployed to GitHub Pages. Site content is in Spanish —
keep all copy, posts, and UI text in Spanish.

## Commands

- `make dev` — dev server with live reload (`deno task serve`)
- `make build` — build site to `output/` (`deno task build`)
- `make fmt` — format (`deno fmt`: 4-space indent, width 80, semicolons)

CI runs `deno check` and `deno fmt --check` on push/PR to `main`; both must
pass. Deploy happens automatically on push to `main` from `output/`.

## Layout

- `src/` is the only source. `output/` is generated — never edit it.
- Pages: `src/*.page.jsx` (JSX via `lume/jsx-runtime`, no React import needed).
  Layouts in `src/_includes/`, components in `src/components/`, site metadata in
  `src/_data.yml`.
- Posts: markdown in `src/posts/post-N.md` with frontmatter `type: post`,
  `draft: false`, `layout: postLayout.jsx`, `tags`, `description`, `image` (path
  under `/img/`), `date` (YYYY-MM-DD).
- Drafts: `.md` files in `drafts/` (gitignored). To publish, move to
  `src/posts/` and set `draft: false`.
- Images go in `src/public/img/`; static files referenced via `site.add(...)` in
  `_config.ts`.

## Gotchas

- Code fence highlighting: highlight.js languages are registered explicitly in
  `_config.ts` (`code_highlight({languages})`). Add the import + map entry there
  for any new language, or fences render unstyled.
- Lume version is pinned in `deno.json` imports (`lume/` jsdelivr URL) —
  upgrades are edits there, not a package install. Run `deno task lume upgrade`
  to update.
- URLs are slugified with Spanish accents stripped (`slugify_urls` in
  `_config.ts`) — don't hand-write URLs with accents.
