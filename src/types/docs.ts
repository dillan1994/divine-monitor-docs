export type DocSection = {
  key: string
  label: string
}

export type DocBodyStep = {
  title: string
  description: string
}

export type DocsEntry = {
  slug: string
  title: string
  section: string
  summary: string
  readTime: string
  body: DocBodyStep[]
}
