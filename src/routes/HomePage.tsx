import { Link, NavLink } from 'react-router-dom'
import { SELLING_POINTS } from '@/content/about'
import { ScrollReveal } from '@/components/common/ScrollReveal'

const STATS: Array<{ value: string; sup?: string; label: string }> = [
  { value: 'RFY', label: 'Monitoring on all tiers' },
  { value: '2/4/6', label: 'Console sessions (Free/Plus/Pro)' },
  { value: '3', label: 'Notification channels supported' },
  { value: '3', sup: 'mo', label: 'Max analytics history (Pro)' },
]


export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-eyebrow">Real-time Amazon Vine monitoring</div>
        <h1 className="hero-l1">Your Vine data,</h1>
        <h1 className="hero-l2">historic to real-time, wherever you are.</h1>
        <div className="hero-rule">
          <div className="hero-rule-line" />
          <div className="hero-rule-diamond" />
        </div>
        <p className="hero-body">
          Divine Monitor gives you a globally accessible Console for real-time updates,
          long-term trends, and rich analytics, with simple but powerful notification controls
          across email, push, and Telegram, configured in minutes.
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
            Feature rich and powerful - even on free tier
          </h2>
        </ScrollReveal>
        <div className="caps-grid">
          {SELLING_POINTS.map((cap, i) => (
            <ScrollReveal key={cap.heading} className="cap-card" delay={50 + i * 70}>
              <div className="cap-card-icon" aria-hidden="true">
                {cap.icon}
              </div>
              <h3 className="cap-card-title">{cap.heading}</h3>
              <p className="cap-card-body">{cap.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="screenshot-section" aria-labelledby="screenshot-heading">
        <ScrollReveal>
          <div className="section-eyebrow">Analytics</div>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="section-heading" id="screenshot-heading">
            Your Vine data, visualised.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140} className="screenshot-placeholder">
          <div className="screenshot-placeholder-inner">
            {/* Replace with <img src="/screenshots/analytics.png" alt="Divine Monitor analytics dashboard" /> */}
            <span className="screenshot-placeholder-label">Analytics dashboard screenshot coming soon</span>
          </div>
        </ScrollReveal>
      </section>

      <footer className="site-footer">
        <span className="site-footer-brand">Divine Monitor</span>
        <div className="site-footer-links">
          <a href="https://docs.divinemonitor.com">docs.divinemonitor.com</a>
          <Link to="/changelog">Changelog</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://divinemonitor.com">Status</a>
          <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </>
  )
}
