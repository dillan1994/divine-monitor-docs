import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SELLING_POINTS } from '@/content/about'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import type { DocStepImage } from '@/types/docs'

const STATS: Array<{ value: string; sup?: string; label: string }> = [
  { value: 'History', label: 'Products, analytics and trends' },
  { value: 'Notifications', label: 'Rich, powerful yet simple' },
  { value: 'Global Console', label: 'Access your data easily, from anywhere.' },
  { value: 'Free tier', label: 'Generous.' },
]

const HOME_SCREENSHOTS: DocStepImage[] = [
  {
    src: '/docs-images/imported/divine-monitor-2026-03-30/products-full-light-grid.png',
    alt: 'Divine Monitor products view in light theme with product tiles',
  },
  {
    src: '/docs-images/imported/divine-monitor-2026-03-30/rfy-analytics-full-slate.png',
    alt: 'Divine Monitor analytics overview in slate theme',
  },
  {
    src: '/docs-images/imported/divine-monitor-2026-04-03/rfy-analytics-full-light-price.png',
    alt: 'Divine Monitor price analytics view in light theme',
  },
  {
    src: '/docs-images/imported/divine-monitor-2026-03-30/ai-analytics-reviews-full-slate.png',
    alt: 'Divine Monitor reviews analytics in slate theme',
  },
]

export function HomePage() {
  const [zoomImage, setZoomImage] = useState<DocStepImage | null>(null)

  useEffect(() => {
    if (!zoomImage) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomImage(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [zoomImage])

  return (
    <>
      <section className="hero">
        <div className="hero-eyebrow">Real-time Amazon Vine monitoring</div>
        <h1 className="hero-headline">
          <span className="hero-hl-white">Your Vine data,</span>
          <em className="hero-hl-italic">historic to real-time,</em>
          <span className="hero-hl-muted">wherever you are.</span>
        </h1>
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
            Feature rich and built for everyday Vine use
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
        <ScrollReveal delay={140} className="screenshot-grid">
          {HOME_SCREENSHOTS.map((shot, index) => (
            <figure className="screenshot-card" key={shot.src}>
              <button
                type="button"
                className="screenshot-card-button"
                onClick={() => setZoomImage(shot)}
                aria-label={`Open larger image: ${shot.alt}`}
              >
                <img
                  className="screenshot-card-image"
                  src={shot.src}
                  alt={shot.alt}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </button>
            </figure>
          ))}
        </ScrollReveal>
      </section>

      {zoomImage?.src ? (
        <div
          className="docs-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomImage.alt}
          onClick={() => setZoomImage(null)}
        >
          <button
            type="button"
            className="docs-image-lightbox-close"
            onClick={() => setZoomImage(null)}
            aria-label="Close image preview"
          >
            Close
          </button>
          <img
            src={zoomImage.src}
            alt={zoomImage.alt}
            className="docs-image-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}

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
