import { useState } from 'react'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docSections, docsEntries } from '@/content/docs'
import { SELLING_POINTS } from '@/content/about'
import type { DocStepImage } from '@/types/docs'

function StepImageCard({ image }: { image: DocStepImage }) {
  const [missing, setMissing] = useState(false)
  const src = image.src?.trim() || ''
  const showImage = Boolean(src) && !missing
  const fileHint = image.fileHint?.trim() || src

  return (
    <figure className={`docs-step-media${showImage ? '' : ' is-placeholder'}`}>
      {showImage ? (
        <img
          src={src}
          alt={image.alt}
          className="docs-step-media-image"
          loading="lazy"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="docs-step-media-placeholder" aria-label={image.alt}>
          <span className="docs-step-media-pill">Screenshot Slot</span>
          <span className="docs-step-media-placeholder-title">{image.placeholder ?? image.alt}</span>
          {fileHint ? <code className="docs-step-media-file">{fileHint}</code> : null}
          <span className="docs-step-media-placeholder-note">Drop a screenshot at this path to render it automatically.</span>
        </div>
      )}
      <figcaption className="docs-step-media-caption">{image.caption ?? image.alt}</figcaption>
    </figure>
  )
}

function StepImageGrid({ images }: { images?: DocStepImage[] }) {
  if (!images || images.length === 0) return null

  return (
    <div className="docs-step-media-grid">
      {images.map((image, index) => (
        <StepImageCard key={`${image.alt}-${index}`} image={image} />
      ))}
    </div>
  )
}

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

        {entry.kind === 'overview' ? (
          <div className="docs-overview">
            <div className="about-points-grid">
              {SELLING_POINTS.map((pt) => (
                <div key={pt.heading} className="about-point-card">
                  <span className="about-point-icon" aria-hidden="true">{pt.icon}</span>
                  <h3 className="about-point-heading">{pt.heading}</h3>
                  <p className="about-point-body">{pt.body}</p>
                </div>
              ))}
            </div>
            <NavLink to="/docs/quickstart" className="about-cta-primary">
              Get started →
            </NavLink>
          </div>
        ) : (
          <ol className="docs-steps" aria-label="Steps">
            {entry.body.map((step, index) => (
              <li key={step.title} className="docs-step">
                <div className="docs-step-number">{index + 1}</div>
                <div className="docs-step-body">
                  <div className="docs-step-title">{step.title}</div>
                  <div className="docs-step-desc">{step.description}</div>
                  <StepImageGrid images={step.images} />
                </div>
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  )
}

