import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docSections, docsEntries } from '@/content/docs'
import type { DocStepImage, PlanTier, TierFeatureRow, TierGroup } from '@/types/docs'

function TierCell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  const cls = `plans-row-cell${highlight ? ' plans-row-cell--highlight' : ''}`
  const CHECKMARK = '\u2713'
  const DASH = '\u2014'
  if (value === true) return <div className={cls}><span className="plans-check">{CHECKMARK}</span></div>
  if (value === false) return <div className={cls}><span className="plans-cross">{DASH}</span></div>
  return <div className={cls}><span className="plans-value">{value}</span></div>
}

function PlansTable({ tiers, tierGroups }: { tiers: PlanTier[]; tierGroups: TierGroup[] }) {
  return (
    <div className="plans-wrap">
      <div className="plans-table">
        <div className="plans-header">
          <div className="plans-header-feature" />
          {tiers.map((tier) => (
            <div key={tier.name} className={`plans-header-tier${tier.highlight ? ' plans-header-tier--highlight' : ''}`}>
              <div className="plans-tier-name">{tier.name}</div>
              <div className="plans-tier-price">{tier.price}</div>
              <div className="plans-tier-sub">{tier.sub}</div>
            </div>
          ))}
        </div>

        {tierGroups.map((group) => (
          <div key={group.label} className="plans-group">
            <div className="plans-group-label">{group.label}</div>
            {group.features.map((feature: TierFeatureRow) => (
              <div key={feature.label} className="plans-row">
                <div className="plans-row-label">{feature.label}</div>
                <TierCell value={feature.free} />
                <TierCell value={feature.plus} highlight />
                <TierCell value={feature.pro} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

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

        {entry.kind === 'plans' && entry.planTiers && entry.tierGroups ? (
          <PlansTable tiers={entry.planTiers} tierGroups={entry.tierGroups} />
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

