import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="home-grid">
      <article className="hero-card">
        <p className="eyebrow">Monitoring + Analytics</p>
        <h1>Documentation and launch surface for Divine Monitor.</h1>
        <p>
          Keep architecture notes, runbooks, and onboarding guides in one place while the main dashboard
          remains focused on operations.
        </p>
        <div className="hero-actions">
          <Link to="/docs/quickstart" className="button-primary">
            Open Quickstart
          </Link>
          <Link to="/docs/architecture" className="button-secondary">
            System Architecture
          </Link>
        </div>
      </article>

      <article className="signal-card" aria-label="Project status">
        <h2>Site purpose</h2>
        <ul>
          <li>Public landing page for `docs.divinemonitor.com`</li>
          <li>Versioned docs content in a dedicated frontend app</li>
          <li>Independent deploy pipeline on GitHub Pages</li>
        </ul>
      </article>
    </section>
  )
}
