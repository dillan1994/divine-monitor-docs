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

## Domain and Pages setup

- `public/CNAME` is set to `docs.divinemonitor.com`
- In GitHub repository Settings > Pages, set Source to **GitHub Actions**
- Add DNS CNAME record: `docs` -> `<your-github-username>.github.io`
- Enable HTTPS in Pages settings
