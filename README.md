# API Documentation

Scalar-powered OpenAPI documentation site with automated GitHub Pages deployment.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) LTS (v20+)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
.github/workflows/deploy.yml   — GitHub Actions workflow for Pages deployment
docs/openapi/                   — Source OpenAPI YAML files (edit these to update API spec)
  openapi.yaml                  — Root entry point for the split spec
  components/                   — Reusable schemas, parameters, security schemes
  paths/                        — Endpoint definitions
  tags/                         — Tag definitions
src/                            — Frontend source code
  main.js                       — Scalar initialization + logo setup
  style.css                     — Header styles + brand variables
  assets/                       — Static assets (logo, favicon) — processed by Vite
    logo.svg                    — Replace with your own logo
    favicon.ico                 — Replace with your own favicon
index.html                      — HTML entry point with custom header
vite.config.js                  — Vite configuration
package.json                    — Dependencies and scripts
api.yaml                        — ⚠️ GENERATED file — do not edit manually
.env.example                    — Environment variable template
.gitignore                      — Git ignore rules
```

> **Important:** `api.yaml` in the repo root is a **generated file**. It is rebuilt automatically during every `npm run build` and `npm run dev`. The source of truth is `docs/openapi/openapi.yaml` and its referenced files. Never edit `api.yaml` manually.

---

## How to Customize Branding

1. **Logo** — Replace `src/assets/logo.svg` with your logo file (SVG or PNG). If you use PNG, update the import in `src/main.js` accordingly:
   ```js
   import logoUrl from './assets/logo.png'
   ```

2. **Favicon** — Replace `src/assets/favicon.ico` with your real favicon.

3. **Colors & Sizing** — Open `src/style.css` → find the `BRAND VARIABLES` block at the top → change colors and sizing:
   ```css
   :root {
     --brand-primary: #000000;    /* header background */
     --brand-secondary: #ffffff;  /* header text */
     --brand-accent: #0066ff;     /* links and hover */
     --header-height: 56px;
     --logo-height: 32px;
   }
   ```

4. **Page Title & Meta** — Open `index.html` → find all `<!-- CUSTOMIZE -->` comments → update the page title, meta description, and navigation link hrefs.

5. **Scalar Theme** — Open `src/main.js` → find the Scalar config object → change `theme` or add CSS to `customCss` to override Scalar's internal styles. Available themes:
   - `default` | `moon` | `purple` | `solarized` | `bluePlanet` | `saturn` | `kepler` | `mars` | `deepSpace` | `none`

---

## How to Update the API Spec

1. Edit files inside `docs/openapi/`
2. Run `npm run bundle` to regenerate `api.yaml` locally and preview changes
3. Push to `main` — GitHub Actions automatically rebuilds and redeploys

---

## GitHub Pages Setup (One-Time)

Before the first deploy, you need to enable GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Push any commit to `main` — the workflow will run and deploy
5. Your docs will be live at: `https://<your-username>.github.io/<your-repo-name>/`

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Bundle spec + start Vite dev server with hot reload |
| `npm run build` | Bundle spec + production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run bundle` | Only bundle YAML → `api.yaml` (no dev server) |

---

## Scalar Configuration Reference

All Scalar configuration options are in `src/main.js` with inline comments explaining each one.

Full documentation: [https://github.com/scalar/scalar](https://github.com/scalar/scalar)
