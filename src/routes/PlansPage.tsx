import { PLAN_TIERS, PLAN_TIER_GROUPS } from '@/content/docs'
import type { PlanTier, TierFeatureRow, TierGroup } from '@/types/docs'

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

export function PlansPage() {
  return (
    <div className="plans-page">
      <div className="plans-page-header">
        <h1 className="plans-page-title">Tiers &amp; Features</h1>
        <p className="plans-page-lede">A simple comparison of what Free, Plus, and Pro include in the current rollout.</p>
      </div>
      <PlansTable tiers={PLAN_TIERS} tierGroups={PLAN_TIER_GROUPS} />
    </div>
  )
}