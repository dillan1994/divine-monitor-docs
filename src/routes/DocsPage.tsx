import { Navigate, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docSections, docsEntries } from '@/content/docs'

export function DocsPage() {
  const { slug } = useParams<{ slug?: string }>()

  if (!slug) {
    return <Navigate to={`/docs/${docsEntries[0].slug}`} replace />
  }

  const entry = docsEntries.find((doc) => doc.slug === slug)

  if (!entry) {
    return <Navigate to="/docs/quickstart" replace />
  }

  const section = docSections.find((s) => s.key === entry.section)

  return (
    <div className="docs-page">
      <DocsSidebar />

      <main className="docs-main">
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <span>Docs</span>
          <span className="docs-breadcrumb-sep">/</span>
          <span>{section?.label ?? entry.section}</span>
          <span className="docs-breadcrumb-sep">/</span>
          <span className="docs-breadcrumb-current">{entry.title}</span>
        </nav>

        <h1 className="docs-title">{entry.title}</h1>
        <p className="docs-meta">{entry.readTime}</p>
        <p className="docs-lede">{entry.summary}</p>

        <ol className="docs-steps" aria-label="Steps">
          {entry.body.map((step, index) => (
            <li key={step.title} className="docs-step">
              <div className="docs-step-number">{index + 1}</div>
              <div className="docs-step-body">
                <div className="docs-step-title">{step.title}</div>
                <div className="docs-step-desc">{step.description}</div>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}
