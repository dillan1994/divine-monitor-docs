import { Navigate, useParams } from 'react-router-dom'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { docSections, docsEntries } from '@/content/docs'
import type { PlanTier, TierFeatureRow, TierGroup } from '@/types/docs'

function TierCell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  const cls = `plans-row-cell${highlight ? ' plans-row-cell--highlight' : ''}`
  if (value === true) return <div className={cls}><span className="plans-check">✓</span></div>
  if (value === false) return <div className={cls}><span className="plans-cross">—</span></div>
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
                </div>
              </li>
            ))}
          </ol>
        )}
      </main>
    </div>
  )
}
