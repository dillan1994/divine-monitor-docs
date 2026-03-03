import { Link, NavLink } from 'react-router-dom'
import { ScrollReveal } from '@/components/common/ScrollReveal'

const CAPABILITIES = [
  {
    icon: '🔔',
    title: 'Rich Notifications',
    body: 'Email, push, and Telegram — set up in seconds. Granular per-filter rules so you only hear about what matters to you, when it matters.',
  },
  {
    icon: '🛒',
    title: 'RFY & Search Tracking',
    body: 'Monitor your Recommended For You queue and keyword searches in real-time. Items surface the instant they appear on Vine.',
  },
  {
    icon: '📊',
    title: 'Deep Historic Analytics',
    body: 'Trend charts and long-term patterns across your full Vine history — with data going as far back as your account allows.',
  },
  {
    icon: '📋',
    title: 'Recommendation History',
    body: 'Every item you were ever recommended — searchable, filterable, and permanently available in your personal dashboard.',
  },
  {
    icon: '⭐',
    title: 'Outstanding Reviews',
    body: 'Clear visibility into pending and overdue reviews at a glance. Stay compliant without the mental overhead.',
  },
  {
    icon: '🌐',
    title: 'Access Anywhere',
    body: 'A fully responsive web dashboard — your Vine data on any device, any browser, from anywhere in the world.',
  },
] as const

const STATS: Array<{ value: string; sup?: string; label: string }> = [
  { value: 'RFY', label: 'Real-time queue tracking' },
  { value: '<1', sup: 's', label: 'Alert delivery latency' },
  { value: '∞', label: 'Historic data retained' },
  { value: '3', label: 'Notification channels' },
]

const DOCS_PREVIEW_STEPS = [
  {
    title: 'Create your account & sign in',
    desc: 'Register at divinemonitor.com and log in to access your personal dashboard.',
  },
  {
    title: 'Connect your notification channels',
    desc: 'Head to Settings → Notifications and connect email, push, or Telegram. Each takes under a minute.',
  },
  {
    title: 'Set your filters & go live',
    desc: 'Configure your RFY alert rules and search terms. Dashboard and notifications activate immediately.',
  },
]

export function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-eyebrow">Real-time Amazon Vine monitoring</div>
        <h1 className="hero-l1">Unified, notified,</h1>
        <h1 className="hero-l2">always in control.</h1>
        <div className="hero-rule">
          <div className="hero-rule-line" />
          <div className="hero-rule-diamond" />
        </div>
        <p className="hero-body">
          Monitor your RFY queue and Search terms as they update. Receive{' '}
          <strong>instant, rich notifications</strong> across email, push, and Telegram —
          configured in seconds, not hours. Explore deep historic analytics, browse your complete
          recommendation history, and track outstanding reviews, all from one{' '}
          <strong>modern web dashboard</strong> accessible from any browser, anywhere.
        </p>
        <div className="hero-actions">
          <Link to="/docs/quickstart" className="hero-cta-primary">
            Read the docs →
          </Link>
          <NavLink to="/changelog" className="hero-cta-secondary">
            View changelog →
          </NavLink>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <div className="stats-row" role="list" aria-label="Platform stats">
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} className="stat-cell" delay={i * 100}>
            <div className="stat-value" role="listitem">
              {stat.value}
              {stat.sup && <sup>{stat.sup}</sup>}
            </div>
            <div className="stat-label">{stat.label}</div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Platform Capabilities ──────────────────────────────── */}
      <section className="caps-section" aria-labelledby="caps-heading">
        <ScrollReveal>
          <div className="section-eyebrow">Platform capabilities</div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="section-heading" id="caps-heading">
            Unified and notified — built for serious Vine voices.
          </h2>
        </ScrollReveal>
        <div className="caps-grid">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} className="cap-card" delay={50 + i * 70}>
              <div className="cap-card-icon" aria-hidden="true">
                {cap.icon}
              </div>
              <h3 className="cap-card-title">{cap.title}</h3>
              <p className="cap-card-body">{cap.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Docs Preview ───────────────────────────────────────── */}
      <section className="docs-preview-section" aria-labelledby="docs-preview-heading">
        <ScrollReveal>
          <div className="section-eyebrow">Documentation</div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="section-heading" id="docs-preview-heading">
            Everything you need, clearly documented.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140} className="docs-preview-shell">
          {/* Sidebar preview */}
          <div className="docs-preview-sidebar" aria-hidden="true">
            <span className="docs-preview-section-label">Getting Started</span>
            <span className="docs-preview-link docs-preview-link--active">Quickstart →</span>
            <Link to="/docs/notifications-setup" className="docs-preview-link">
              Notifications Setup
            </Link>
            <Link to="/docs/rfy-filters" className="docs-preview-link">
              RFY Filters
            </Link>
            <div className="docs-preview-sep" />
            <span className="docs-preview-section-label">Features</span>
            <Link to="/docs/analytics" className="docs-preview-link">
              Analytics
            </Link>
            <Link to="/docs/rec-history" className="docs-preview-link">
              Rec History
            </Link>
            <Link to="/docs/account-status" className="docs-preview-link">
              Account Status
            </Link>
            <div className="docs-preview-sep" />
            <span className="docs-preview-section-label">Reference</span>
            <Link to="/docs/configuration" className="docs-preview-link">
              Configuration
            </Link>
          </div>

          {/* Content preview */}
          <div className="docs-preview-main">
            <div className="docs-breadcrumb">
              <span>Docs</span>
              <span className="docs-breadcrumb-sep">/</span>
              <span>Getting Started</span>
              <span className="docs-breadcrumb-sep">/</span>
              <span className="docs-breadcrumb-current">Quickstart</span>
            </div>
            <h2 className="docs-preview-title">Quickstart</h2>
            <p className="docs-preview-meta">5 min read</p>
            <p className="docs-preview-lede">
              Get up and running in minutes. Connect your account, configure your notification
              channels, and start monitoring your Vine queue.
            </p>
            <ol className="docs-steps" aria-label="Quickstart steps">
              {DOCS_PREVIEW_STEPS.map((step, i) => (
                <li key={step.title} className="docs-step">
                  <div className="docs-step-number">{i + 1}</div>
                  <div className="docs-step-body">
                    <div className="docs-step-title">{step.title}</div>
                    <div className="docs-step-desc">{step.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/docs/quickstart" className="docs-preview-cta">
              Open full docs →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="site-footer">
        <span className="site-footer-brand">Divine Monitor</span>
        <div className="site-footer-links">
          <a href="https://docs.divinemonitor.com">docs.divinemonitor.com</a>
          <Link to="/changelog">Changelog</Link>
          <a href="https://divinemonitor.com">Status</a>
        </div>
      </footer>
    </>
  )
}
