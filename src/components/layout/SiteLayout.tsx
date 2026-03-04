import { NavLink } from 'react-router-dom'
import type { PropsWithChildren } from 'react'
import { ConstellationCanvas } from '@/components/common/ConstellationCanvas'

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <>
      {/* Fixed ambient glows — rendered once, persist across route changes */}
      <div className="glows" aria-hidden="true">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
      </div>

      {/* Animated dot constellation — fixed full-viewport canvas */}
      <ConstellationCanvas />

      {/* Fixed top navigation */}
      <nav className="site-nav" aria-label="Primary">
        <NavLink to="/" className="nav-brand" end>
          <span className="nav-brand-name">Divine Monitor</span>
          <span className="nav-brand-pip" aria-hidden="true" />
        </NavLink>

        <div className="nav-tabs" role="tablist">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
          >
            Docs
          </NavLink>
          <NavLink
            to="/changelog"
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
          >
            Changelog
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
          >
            FAQs
          </NavLink>
        </div>

        <NavLink to="/docs/quickstart" className="nav-cta">
          Get Started
        </NavLink>
      </nav>

      {/* Page content — each route manages its own layout below the nav */}
      <div className="site-content">{children}</div>
    </>
  )
}
