# betterhomes — Dubai Property Market Webinar Programme Review

**W4 Results & W5 Recommendations · June 2026 · CONFIDENTIAL — Internal only**

A boardroom-quality, responsive HTML report for internal leadership and commercial teams. Built as a zero-build static site: no framework, no compile step, instant deploys.

## Project structure

```
betterhomes-webinar-report/
├── index.html    # Page structure — sections, nav, chart canvases
├── styles.css    # All styling — brand colours, cards, responsive + print rules
├── app.js        # Renders every section from REPORT data + Chart.js charts
├── data.js       # ★ ALL report content and numbers live here
├── vercel.json   # Security headers (noindex — internal report)
└── README.md
```

## Updating the report

**Edit `data.js` only.** Every number, headline, insight and decision lives in the `REPORT` object. Change a value there and the cards, charts and copy update automatically — no HTML or CSS knowledge needed.

## Run locally

No build step. Either open `index.html` directly in a browser, or serve it (recommended, matches production):

```bash
# any one of these
npx serve .
python -m http.server 3000
```

Then open http://localhost:3000

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Push this directory to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Webinar programme review — W4"
   git remote add origin https://github.com/<your-org>/betterhomes-webinar-report.git
   git push -u origin main
   ```
2. In [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset: **Other**. Build command: *(leave empty)*. Output directory: *(leave empty / root)*.
4. Deploy. Every push to `main` redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

> The report ships with `noindex` headers and a meta robots tag — it will not be indexed by search engines. For genuine confidentiality, enable **Vercel Deployment Protection** (password / SSO) in the project settings.

## Export to PDF

The report has print-friendly styling. Open it in a browser → **Print → Save as PDF** (enable "Background graphics" for the navy sections).

## Tech notes

- [Chart.js 4](https://www.chartjs.org/) via CDN — stacked bar, horizontal bar, donut.
- Inter typeface via Google Fonts.
- Semantic HTML, high-contrast colours, aria labels on all charts, reduced-motion support.
- Responsive: dashboard grid on desktop, stacked cards on mobile, hamburger nav under 640px.
