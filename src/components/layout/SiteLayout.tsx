import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { ConstellationCanvas } from '@/components/common/ConstellationCanvas'

const NAV_ITEMS: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/', label: 'Home', end: true },
  { to: '/docs', label: 'Docs' },
  { to: '/plans', label: 'Tiers' },
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'FAQs' },
]

const MOBILE_UA_RE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

export function SiteLayout({ children }: PropsWithChildren) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const deviceClass = MOBILE_UA_RE.test(navigator.userAgent) ? 'mobile' : 'desktop'
    document.documentElement.dataset.deviceClass = deviceClass
  }, [])

  return (
    <div className="site-shell">
      {/* Fixed ambient glows - rendered once, persist across route changes */}
      <div className="glows" aria-hidden="true">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
      </div>

      {/* Animated dot constellation - fixed full-viewport canvas */}
      <ConstellationCanvas />

      {/* Fixed top navigation */}
      <nav className="site-nav" aria-label="Primary">
        <NavLink to="/" className="nav-brand" end>
          <span className="nav-brand-name">Divine Monitor</span>
          <span className="nav-brand-pip" aria-hidden="true" />
        </NavLink>

        <div className="nav-tabs" role="tablist">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://app.divinemonitor.com"
            className="nav-console-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Console -&gt;
          </a>
          <NavLink to="/docs/quickstart" className="nav-cta">
            Get Started
          </NavLink>
        </div>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </nav>

      <button
        type="button"
        className={`nav-mobile-backdrop${isMenuOpen ? ' open' : ''}`}
        aria-label="Close menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-primary-nav"
        className={`nav-mobile-drawer${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="nav-mobile-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={`mobile-${item.to}`}
              to={item.to}
              className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
              end={item.end}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-mobile-actions">
          <a
            href="https://app.divinemonitor.com"
            className="nav-mobile-console-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Console -&gt;
          </a>
          <NavLink
            to="/docs/quickstart"
            className="nav-mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </NavLink>
        </div>
      </aside>

      {/* Page content - each route manages its own layout below the nav */}
      <div className="site-content">{children}</div>

      <footer className="site-footer">
        <div className="site-footer-brand">Divine Monitor</div>
        <div className="site-footer-links">
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </div>
  )
}
