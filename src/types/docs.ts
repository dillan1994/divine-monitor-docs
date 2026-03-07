export type DocSection = {
  key: string
  label: string
}

export type DocBodyStep = {
  title: string
  description: string
}

export type TierFeatureRow = {
  label: string
  free: boolean | string
  plus: boolean | string
  pro: boolean | string
}

export type TierGroup = {
  label: string
  features: TierFeatureRow[]
}

export type PlanTier = {
  name: string
  price: string
  sub: string
  highlight?: boolean
}

export type DocsEntry = {
  slug: string
  title: string
  section: string
  summary: string
  readTime: string
  body: DocBodyStep[]
  kind?: 'plans'
  planTiers?: PlanTier[]
  tierGroups?: TierGroup[]
}
