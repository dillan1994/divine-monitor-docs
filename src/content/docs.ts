import type { DocsEntry } from '@/types/docs'

export const docsEntries: DocsEntry[] = [
  {
    slug: 'quickstart',
    title: 'Quickstart',
    summary: 'Spin up Divine Monitor and connect your account in a few minutes.',
    body: [
      'Create your account and sign in to the dashboard.',
      'Connect notification channels you want to use first (email, push, or Telegram).',
      'Set your initial filters and refresh cadence, then validate data in Products and Analytics.',
    ],
  },
  {
    slug: 'architecture',
    title: 'Architecture',
    summary: 'Understand how listeners, storage, and dashboard layers work together.',
    body: [
      'Ingestion jobs collect feed updates and push normalized records into backend services.',
      'The API layer serves scoped data for the dashboard, analytics, and alerting surfaces.',
      'The React dashboard consumes typed endpoints and renders feature-focused routes for operators.',
    ],
  },
  {
    slug: 'operations',
    title: 'Operations',
    summary: 'Standard operating checks for uptime, alerts, and deployment safety.',
    body: [
      'Use health endpoints and logs to confirm listener heartbeat after each deploy.',
      'Validate notification channel configuration before enabling automated deliveries.',
      'Track incidents in runbooks and keep test credentials/environment docs up to date.',
    ],
  },
]
