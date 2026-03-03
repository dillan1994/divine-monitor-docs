import { Navigate, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docsEntries } from '@/content/docs'

export function DocsPage() {
  const { slug } = useParams<{ slug?: string }>()

  if (!slug) {
    return <Navigate to={`/docs/${docsEntries[0].slug}`} replace />
  }

  const entry = docsEntries.find((doc) => doc.slug === slug)

  if (!entry) {
    return <Navigate to="/docs/quickstart" replace />
  }

  return (
    <section className="docs-grid">
      <DocsSidebar />
      <article className="docs-article">
        <p className="eyebrow">{entry.summary}</p>
        <h1>{entry.title}</h1>
        <ol>
          {entry.body.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </article>
    </section>
  )
}
