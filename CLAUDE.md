# CLAUDE.md

Source for gh.21stark.com, an Astro Starlight site. See `README.md` for the layout.

## Rules

- **Every change is a pull request.** Merging to `main` publishes to GitHub Pages; never push to `main`.
- **`npm run build` must pass** before you open a pull request. CI runs the same build.
- **Policy pages are what a store listing promises.** Each claim must match the product's code (what it reads, where
  it sends it, what it stores). Change one only with the product's code in front of you, and update its "Last
  updated" line. A Chrome Web Store listing links to each privacy page, so never move or rename one.
- **New pages go in the sidebar.** Pages are listed by hand in `astro.config.mjs`.
- **Accessible by default.** One `h1` per page (the frontmatter `title`), ordered headings, link text that names its
  target (never three "Privacy policy" links side by side), and the colours in `src/styles/21stark.css`, which meet
  WCAG AA contrast.
