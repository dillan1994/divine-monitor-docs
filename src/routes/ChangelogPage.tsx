import { Link } from 'react-router-dom'

export function ChangelogPage() {
  return (
    <div className="changelog-page">
      <div className="changelog-inner">
        <div className="section-eyebrow">Coming soon</div>
        <h1 className="changelog-title">Changelog</h1>
        <p className="changelog-body">
          Release notes and version history will appear here as Divine Monitor evolves.
        </p>
        <Link to="/" className="hero-cta-primary" style={{ display: 'inline-flex' }}>
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
