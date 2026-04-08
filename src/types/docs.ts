import type React from 'react'

export type DocSection = {
  key: string
  label: string
}

export type DocStepImage = {
  src?: string
  alt: string
  caption?: string
  className?: string
  placeholder?: string
  fileHint?: string
}

export type DocBodyStep = {
  title: string
  description: React.ReactNode
  images?: DocStepImage[]
  hideTextWhenImages?: boolean
  highlight?: 'accent'
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
  notice?: React.ReactNode
  kind?: 'overview'
  beta?: boolean
}
