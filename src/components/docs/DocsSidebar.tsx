import { NavLink } from 'react-router-dom'
import { docsEntries } from '@/content/docs'

export function DocsSidebar() {
  return (
    <aside className="docs-sidebar" aria-label="Docs sections">
      <p className="sidebar-title">Documentation</p>
      <ul>
        {docsEntries.map((entry) => (
          <li key={entry.slug}>
            <NavLink
              to={`/docs/${entry.slug}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {entry.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
