import { NavLink } from 'react-router-dom'
import { docSections, docsEntries } from '@/content/docs'

/**
 * Sidebar navigation for the docs layout.
 * Groups entries by section and renders a section header + link list for each.
 */
export function DocsSidebar({ onClose }: { onClose?: () => void }) {
  return (
    <aside id="docs-sidebar-nav" className="docs-sidebar" aria-label="Docs navigation">
      <div className="docs-sidebar-mobile-head">
        <span className="docs-sidebar-mobile-title">Docs</span>
        <button
          type="button"
          className="docs-sidebar-close"
          aria-label="Close docs navigation"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {docSections.map((section, sectionIndex) => {
        const entries = docsEntries.filter((e) => e.section === section.key)
        if (entries.length === 0) return null

        return (
          <div key={section.key}>
            {sectionIndex > 0 && <div className="docs-sidebar-sep" />}
            <span className="docs-sidebar-section">{section.label}</span>
            {entries.map((entry) => (
              <NavLink
                key={entry.slug}
                to={`/docs/${entry.slug}`}
                className={({ isActive }) =>
                  `docs-sidebar-link${isActive ? ' active' : ''}`
                }
              >
                <span className="docs-sidebar-link-text">
                  {entry.title}
                  {entry.beta && <span className="docs-sidebar-beta">Beta</span>}
                </span>
                <span className="docs-sidebar-arrow">→</span>
              </NavLink>
            ))}
          </div>
        )
      })}
    </aside>
  )
}
