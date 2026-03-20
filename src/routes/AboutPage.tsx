import { Navigate, NavLink, useParams } from 'react-router-dom'
import { aboutSections, SELLING_POINTS, STORY_PARAGRAPHS, STORY_VALUES } from '@/content/about'

/* ─────────────────────────────────────────────────────────────────
   Sidebar
   ───────────────────────────────────────────────────────────────── */
function AboutSidebar() {
  return (
    <aside className="docs-sidebar" aria-label="About navigation">
      <span className="docs-sidebar-section">About</span>
      {aboutSections.map((s) => (
        <NavLink
          key={s.slug}
          to={`/about/${s.slug}`}
          className={({ isActive }) => `docs-sidebar-link${isActive ? ' active' : ''}`}
        >
          {s.label}
          <span className="docs-sidebar-arrow">→</span>
        </NavLink>
      ))}
    </aside>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Overview section — actual content
   ───────────────────────────────────────────────────────────────── */
function OverviewSection() {
  return (
    <div className="about-overview">
      {/* Hero lede */}
      <p className="about-lede">
        Divine Monitor keeps Amazon sellers one step ahead — instant RFY alerts, smart analytics,
        and notification channels that fit your workflow. Whether you're on the free tier or Pro,
        you always know what's happening with your products.
      </p>

      {/* Selling points grid */}
      <div className="about-points-grid">
        {SELLING_POINTS.map((pt) => (
          <div key={pt.heading} className="about-point-card">
            <span className="about-point-icon" aria-hidden="true">{pt.icon}</span>
            <h3 className="about-point-heading">{pt.heading}</h3>
            <p className="about-point-body">{pt.body}</p>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="about-cta-row">
        <NavLink to="/docs/quickstart" className="about-cta-primary">
          Get started free →
        </NavLink>
        <NavLink to="/docs" className="about-cta-secondary">
          Read the docs
        </NavLink>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   My Story section
   ───────────────────────────────────────────────────────────────── */
function StorySection() {
  return (
    <div className="about-story">
      {STORY_PARAGRAPHS.map((p) => (
        <p key={p.key} className="about-story-para">{p.text}</p>
      ))}

      <div className="about-story-values">
        {STORY_VALUES.map((v) => (
          <div key={v.label} className="about-story-value">
            <span aria-hidden="true">{v.icon}</span>
            {v.label}
          </div>
        ))}
      </div>

      <div className="about-story-contact">
        <p className="about-story-contact-text">
          Have an idea, some feedback, or just want to say hello? I'd like to hear it.
        </p>
        <NavLink to="/contact" className="about-cta-primary">
          Get in touch →
        </NavLink>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Placeholder section — for sections not yet written
   ───────────────────────────────────────────────────────────────── */
function PlaceholderSection({ subtitle }: { subtitle: string }) {
  return (
    <div className="about-placeholder">
      <div className="about-placeholder-inner">
        <span className="about-placeholder-icon" aria-hidden="true">✦</span>
        <p className="about-placeholder-lede">{subtitle}</p>
        <p className="about-placeholder-note">Content coming soon.</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Main page
   ───────────────────────────────────────────────────────────────── */
export function AboutPage() {
  const { slug } = useParams<{ slug: string }>()

  // Default to overview
  if (!slug) {
    return <Navigate to="/about/overview" replace />
  }

  const section = aboutSections.find((s) => s.slug === slug)
  if (!section) {
    return <Navigate to="/about/overview" replace />
  }

  return (
    <div className="docs-page">
      <AboutSidebar />

      <main className="docs-main">
        {/* Breadcrumb */}
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <span className="docs-bc-seg">About</span>
          <span className="docs-bc-sep" aria-hidden="true">/</span>
          <span className="docs-bc-seg docs-bc-current">{section.label}</span>
        </nav>

        <h1 className="docs-title">{section.title}</h1>
        <p className="docs-lede">{section.subtitle}</p>

        {section.slug === 'overview' ? (
          <OverviewSection />
        ) : section.slug === 'story' ? (
          <StorySection />
        ) : (
          <PlaceholderSection subtitle={section.subtitle} />
        )}
      </main>
    </div>
  )
}