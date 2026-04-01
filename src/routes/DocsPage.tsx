import { useEffect, useState } from 'react'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docSections, docsEntries } from '@/content/docs'
import { SELLING_POINTS } from '@/content/about'
import type { DocStepImage } from '@/types/docs'

type ZoomImage = {
  src: string
  alt: string
}

function StepImageCard({
  image,
  onZoom,
}: {
  image: DocStepImage
  onZoom: (image: ZoomImage) => void
}) {
  const [missing, setMissing] = useState(false)
  const src = image.src?.trim() || ''
  const showImage = Boolean(src) && !missing
  const fileHint = image.fileHint?.trim() || src
  const isSvg = src.toLowerCase().endsWith('.svg')

  return (
    <figure className={`docs-step-media${showImage ? '' : ' is-placeholder'}${isSvg ? ' docs-step-media--diagram' : ''}`}>
      {showImage ? (
        <button
          type="button"
          className="docs-step-media-zoom"
          onClick={() => onZoom({ src, alt: image.alt })}
          aria-label={`Open larger image: ${image.alt}`}
        >
          <img
            src={src}
            alt={image.alt}
            className="docs-step-media-image"
            loading="lazy"
            onError={() => setMissing(true)}
          />
        </button>
      ) : (
        <div className="docs-step-media-placeholder" aria-label={image.alt}>
          <span className="docs-step-media-pill">Screenshot Slot</span>
          <span className="docs-step-media-placeholder-title">{image.placeholder ?? image.alt}</span>
          {fileHint ? <code className="docs-step-media-file">{fileHint}</code> : null}
          <span className="docs-step-media-placeholder-note">Drop a screenshot at this path to render it automatically.</span>
        </div>
      )}
      {!isSvg ? <figcaption className="docs-step-media-caption">{image.caption ?? image.alt}</figcaption> : null}
    </figure>
  )
}

function StepImageGrid({
  images,
  onZoom,
}: {
  images?: DocStepImage[]
  onZoom: (image: ZoomImage) => void
}) {
  if (!images || images.length === 0) return null

  return (
    <div className="docs-step-media-grid">
      {images.map((image, index) => (
        <StepImageCard key={`${image.alt}-${index}`} image={image} onZoom={onZoom} />
      ))}
    </div>
  )
}

export function DocsPage() {
  const { slug } = useParams<{ slug?: string }>()
  const [zoomImage, setZoomImage] = useState<ZoomImage | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [slug])

  useEffect(() => {
    if (!isSidebarOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isSidebarOpen])

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

  if (!slug) {
    return <Navigate to={`/docs/${docsEntries[0].slug}`} replace />
  }

  const entry = docsEntries.find((doc) => doc.slug === slug)

  if (!entry) {
    return <Navigate to="/docs/quickstart" replace />
  }

  const section = docSections.find((s) => s.key === entry.section)

  return (
    <div className={`docs-page${isSidebarOpen ? ' docs-sidebar-open' : ''}`}>
      <button
        type="button"
        className={`docs-sidebar-backdrop${isSidebarOpen ? ' open' : ''}`}
        aria-label="Close docs navigation"
        aria-hidden={!isSidebarOpen}
        tabIndex={isSidebarOpen ? 0 : -1}
        onClick={() => setIsSidebarOpen(false)}
      />
      <DocsSidebar onClose={() => setIsSidebarOpen(false)} />

      <main className="docs-main">
        <button
          type="button"
          className="docs-sidebar-toggle"
          aria-label="Open docs navigation"
          aria-expanded={isSidebarOpen}
          aria-controls="docs-sidebar-nav"
          onClick={() => setIsSidebarOpen(true)}
        >
          Browse Docs
        </button>
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
        {entry.notice ? <div className="docs-entry-notice">{entry.notice}</div> : null}

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
            {entry.body.map((step, index) => {
              const hasImages = Boolean(step.images?.length)

              return (
              <li key={step.title} className={`docs-step${hasImages ? ' docs-step--visual' : ''}`}>
                <div className="docs-step-number">{index + 1}</div>
                <div className="docs-step-body">
                  {!hasImages ? <div className="docs-step-title">{step.title}</div> : null}
                  {!hasImages ? <div className="docs-step-desc">{step.description}</div> : null}
                  <StepImageGrid images={step.images} onZoom={setZoomImage} />
                </div>
              </li>
            )})}
          </ol>
        )}
      </main>
      {zoomImage ? (
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
    </div>
  )
}
