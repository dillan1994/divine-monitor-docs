import { PLAN_TIERS, PLAN_TIER_GROUPS } from '@/content/docs'
import type React from 'react'
import type { PlanTier, TierFeatureRow, TierGroup } from '@/types/docs'

function TierCell({ value, highlight }: { value: boolean | React.ReactNode; highlight?: boolean }) {
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
        <div className="plans-page-lede-row">
          <p className="plans-page-lede">
            Free gives you the full Divine Monitor data experience, including the extension, history and analytics, and full Global Console access. Plus is effectively the notifications tier, turning that data into actionable alerts across configurable channels like Telegram, email, and browser push, with extras like daily outstanding review digests, rejected review alerts, tier-change alerts, evaluation reminders, review-ratio warnings and more.
          </p>
          <a
            href="https://www.patreon.com/c/DivineMonitor/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-primary plans-page-upgrade"
          >
            Upgrade on Patreon
          </a>
        </div>
      </div>
      <PlansTable tiers={PLAN_TIERS} tierGroups={PLAN_TIER_GROUPS} />
    </div>
  )
}
