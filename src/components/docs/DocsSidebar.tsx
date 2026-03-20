import { NavLink } from 'react-router-dom'
import { docSections, docsEntries } from '@/content/docs'

/**
 * Sidebar navigation for the docs layout.
 * Groups entries by section and renders a section header + link list for each.
 */
export function DocsSidebar() {
  return (
    <aside className="docs-sidebar" aria-label="Docs navigation">
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
