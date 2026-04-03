# Divine Monitor Docs Site

Standalone React/Vite app for the public docs and landing site at `docs.divinemonitor.com`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build emits `dist/404.html` as a copy of `dist/index.html` so client-side route refreshes work on GitHub Pages.

## Docs Rendering Standards

When updating docs content or docs rendering (`src/content/docs.ts` and `src/routes/DocsPage.tsx`), follow these rules:

- Step order must always match `entry.body` order in `src/content/docs.ts`.
- React list keys for steps must be deterministic and unique per doc entry (`${entry.slug}-${index}`), not `step.title`.
- Visible step numbering must be monotonic and derived during render from displayed sections only.
- Image steps are regular numbered sections by default.
- Use `hideTextWhenImages: true` only for intentional photo-only hero/gallery blocks.
- Do not apply global "hide title/description for image steps" behavior.

Any PR touching docs step rendering should verify:

- `search-monitoring` still shows separate numbered sections for `Spread mode` and `Burst mode`.
- No docs page shows out-of-order or duplicated step numbers.

## Domain and Pages setup

- `public/CNAME` is set to `docs.divinemonitor.com`
- In GitHub repository Settings > Pages, set Source to **GitHub Actions**
- Add DNS CNAME record: `docs` -> `<your-github-username>.github.io`
- Enable HTTPS in Pages settings
