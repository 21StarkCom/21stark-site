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
| `src/styles/21stark.css` | The theme: it imports a `@21starkcom/themes` file and `@21starkcom/static-kit/starlight.css`, and holds no colour value |
| `.npmrc` | Reads `@21starkcom` packages from GitHub Packages with `NODE_AUTH_TOKEN`, and fails an install script that `allowScripts` does not name |
| `astro.config.mjs` | Site settings and the sidebar. Add new pages to the sidebar here |

## Work on it

```bash
gh auth refresh -s read:packages          # once: the token needs read:packages
NODE_AUTH_TOKEN=$(gh auth token) npm ci
npm run dev       # local preview at http://localhost:4321
npm run build     # the same build CI runs
```

## Rules

The rules for changing the site live in [`CLAUDE.md`](CLAUDE.md).
