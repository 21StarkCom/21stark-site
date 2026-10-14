# gh.21stark.com

Source for [gh.21stark.com](https://gh.21stark.com): policies and guides for the 21Stark fleet's products, starting
with the privacy policies the Huginn extensions' Chrome Web Store listings link to.

Built with [Astro Starlight](https://starlight.astro.build), on the same pattern as Evinced's marketplace-site.
Every push to `main` publishes to GitHub Pages through `.github/workflows/site.yml`; every pull request must build.
The custom domain is a CNAME in the `stark21-com` zone, managed in `ev-infra-group` (`infra/dns-21stark.tf`).

## Layout

| Path | What lives there |
| --- | --- |
| `src/content/docs/policies/<product>/` | Privacy pages, one folder per product |
| `src/styles/21stark.css` | Theme colours |
| `astro.config.mjs` | Site settings and the sidebar. Add new pages to the sidebar here |

## Work on it

```bash
npm ci
npm run dev       # local preview at http://localhost:4321
npm run build     # the same build CI runs
```

## Rules

The rules for changing the site live in [`CLAUDE.md`](CLAUDE.md).
