import { NavLink } from 'react-router-dom'
import type { PropsWithChildren } from 'react'

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" aria-hidden="true" />
          <span>Divine Monitor</span>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
            Home
          </NavLink>
          <NavLink to="/docs" className={({ isActive }) => (isActive ? 'active' : '')}>
            Docs
          </NavLink>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  )
}
