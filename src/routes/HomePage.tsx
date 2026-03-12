import { Link, NavLink } from 'react-router-dom'
import { ScrollReveal } from '@/components/common/ScrollReveal'

const CAPABILITIES = [
  {
    icon: '\u{1F514}',
    title: 'Rich Notifications',
    body: 'RFY alerts are available on all tiers. Search and account alerts are available on Plus and Pro. Reviews alerts (daily digest + not-approved) are available on Pro.',
  },
  {
    icon: '\u{1F6D2}',
    title: 'RFY & Search Tracking',
    body: 'Monitor RFY in real time on all tiers, and add Search monitoring on Plus and Pro.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Analytics Insights',
    body: 'Use analytics with plan-based history windows: 1 week (Free), 1 month (Plus), and 3 months (Pro).',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Product History',
    body: 'Browse product history by tier with date navigation and multi-day lookbacks in the Products tab.',
  },
  {
    icon: '\u2B50',
    title: 'Review Monitoring',
    body: 'Review monitoring and reviews alerts are available on Pro. Plus and Pro include account monitoring analytics.',
  },
  {
    icon: '\u{1F310}',
    title: 'Access & Sessions',
    body: 'Use the web dashboard with tiered concurrent session limits: 2 browser sessions (Free), 4 (Plus), and 6 (Pro).',
  },
] as const

const STATS: Array<{ value: string; sup?: string; label: string }> = [
  { value: 'RFY', label: 'Monitoring on all tiers' },
  { value: '2/4/6', label: 'Web dashboard sessions (Free/Plus/Pro)' },
  { value: '3', label: 'Notification channels supported' },
  { value: '3', sup: 'mo', label: 'Max analytics history (Pro)' },
]

const DOCS_PREVIEW_STEPS = [
  {
    title: 'Install and sign in',
    desc: 'Install the Chrome extension, then sign in to your Divine Monitor dashboard.',
  },
  {
    title: 'Check your plan features',
    desc: 'Open Account to confirm your tier and unlocked features (for example Search, AI analytics, and Reviews).',
  },
  {
    title: 'Configure notifications',
    desc: 'Open Notifications and enable channels and alert rules for the feeds and modules included in your tier.',
  },
] as const

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-eyebrow">Real-time Amazon Vine monitoring</div>
        <h1 className="hero-l1">Unified, notified,</h1>
        <h1 className="hero-l2">always in control.</h1>
        <div className="hero-rule">
          <div className="hero-rule-line" />
          <div className="hero-rule-diamond" />
        </div>
        <p className="hero-body">
          Monitor your RFY queue and Search terms as they update. Receive instant, rich
          notifications across email, push, and Telegram - configured in seconds, not hours. Explore
          deep historic analytics, browse your recommendation history, and track outstanding reviews
          from one modern web dashboard.
        </p>
        <div className="hero-actions">
          <Link to="/docs/quickstart" className="hero-cta-primary">
            Read the docs &rarr;
          </Link>
          <NavLink to="/changelog" className="hero-cta-secondary">
            View changelog &rarr;
          </NavLink>
        </div>
      </section>

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

      <section className="caps-section" aria-labelledby="caps-heading">
        <ScrollReveal>
          <div className="section-eyebrow">Platform capabilities</div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="section-heading" id="caps-heading">
            Unified and notified - built for serious Vine voices.
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
          <div className="docs-preview-sidebar" aria-hidden="true">
            <span className="docs-preview-section-label">Getting Started</span>
            <span className="docs-preview-link docs-preview-link--active">Quickstart &rarr;</span>
            <Link to="/docs/plans" className="docs-preview-link">
              Plans & Features
            </Link>
            <div className="docs-preview-sep" />
            <span className="docs-preview-section-label">Monitoring</span>
            <Link to="/docs/products-tab-walkthrough" className="docs-preview-link">
              Products Tab
            </Link>
            <Link to="/docs/analytics-tabs-and-layouts" className="docs-preview-link">
              Analytics Tabs
            </Link>
            <Link to="/docs/review-monitoring" className="docs-preview-link">
              Review Monitoring
            </Link>
            <div className="docs-preview-sep" />
            <span className="docs-preview-section-label">Settings</span>
            <Link to="/docs/notifications-configuration" className="docs-preview-link">
              Notifications
            </Link>
            <Link to="/docs/account-page" className="docs-preview-link">
              Account Page
            </Link>
          </div>

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
              Get from install to first monitored item fast, with only the essentials.
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
              Open full docs &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </section>

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
