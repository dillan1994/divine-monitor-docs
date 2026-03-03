import type { DocSection, DocsEntry } from '@/types/docs'

export const docSections: DocSection[] = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'features', label: 'Features' },
  { key: 'reference', label: 'Reference' },
]

export const docsEntries: DocsEntry[] = [
  {
    slug: 'quickstart',
    title: 'Quickstart',
    section: 'getting-started',
    summary: 'Get up and running in minutes. Connect your account, configure notifications, and start monitoring your Vine queue.',
    readTime: '5 min read',
    body: [
      {
        title: 'Create your account & sign in',
        description: 'Register at divinemonitor.com and log in to access your personal dashboard.',
      },
      {
        title: 'Connect your notification channels',
        description:
          'Head to Settings → Notifications and connect email, push, or Telegram. Each takes under a minute to configure.',
      },
      {
        title: 'Set your filters & go live',
        description:
          'Configure your RFY alert rules and search terms. Your dashboard and notifications activate immediately.',
      },
    ],
  },
  {
    slug: 'notifications-setup',
    title: 'Notifications Setup',
    section: 'getting-started',
    summary: 'Configure email, push, and Telegram alerts with granular per-filter rules so you only hear about what matters.',
    readTime: '7 min read',
    body: [
      {
        title: 'Choose your channels',
        description:
          'Divine Monitor supports email, web push, and Telegram. Enable any combination — each channel is independent.',
      },
      {
        title: 'Configure Telegram',
        description:
          'Create a bot via @BotFather, paste the token into Settings, then start a conversation with your bot to link it to your account.',
      },
      {
        title: 'Set per-filter rules',
        description:
          'Each alert filter can have its own notification settings. Silence low-priority searches while keeping push enabled for RFY.',
      },
      {
        title: 'Test your setup',
        description:
          'Use the Send Test notification button to verify delivery across all enabled channels before going live.',
      },
    ],
  },
  {
    slug: 'rfy-filters',
    title: 'RFY Filters',
    section: 'getting-started',
    summary: 'Narrow your Recommended For You queue with keyword, category, and ETV filters to surface only the items you want.',
    readTime: '6 min read',
    body: [
      {
        title: 'Understanding RFY',
        description:
          'Your RFY queue is polled continuously. New items appear in your dashboard the moment they surface on Vine.',
      },
      {
        title: 'Create a filter',
        description:
          'Navigate to Filters → New RFY Filter. Add keywords, set category inclusions or exclusions, and define an optional ETV range.',
      },
      {
        title: 'Enable notifications per filter',
        description:
          'Toggle which notification channels fire for each filter. A high-ETV filter might deserve push + Telegram; a broad filter, email only.',
      },
      {
        title: 'Review filter performance',
        description:
          'The Filters page shows match counts over time so you can tune conditions to reduce noise without missing items.',
      },
    ],
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    section: 'features',
    summary: 'Trend charts and long-term patterns across your full Vine history, updated continuously.',
    readTime: '4 min read',
    body: [
      {
        title: 'Dashboard overview',
        description:
          'The Analytics tab surfaces daily item counts, ETV trends, and category breakdowns across any date range you choose.',
      },
      {
        title: 'Historic trends',
        description:
          'All data is retained indefinitely. Zoom out to see patterns across months or years of Vine activity.',
      },
      {
        title: 'Exporting data',
        description:
          'Export any chart or dataset to CSV directly from the Analytics page for offline analysis or archiving.',
      },
    ],
  },
  {
    slug: 'rec-history',
    title: 'Recommendation History',
    section: 'features',
    summary: 'Every item you were ever recommended — searchable, filterable, and permanently available in your dashboard.',
    readTime: '3 min read',
    body: [
      {
        title: 'Browsing your history',
        description:
          'The History page lists every Vine recommendation ever captured for your account, newest first.',
      },
      {
        title: 'Search & filter',
        description:
          'Full-text search across titles and ASINs. Filter by date range, category, ETV, or whether you ordered the item.',
      },
      {
        title: 'Item detail view',
        description:
          'Click any item to see when it first appeared in your queue, how long it stayed available, and its ETV at the time.',
      },
    ],
  },
  {
    slug: 'account-status',
    title: 'Account Status',
    section: 'features',
    summary: 'Clear visibility into outstanding reviews, tier status, and compliance at a glance.',
    readTime: '3 min read',
    body: [
      {
        title: 'Outstanding reviews',
        description:
          'The Account Status page lists all items pending or overdue for review, sorted by age so the most urgent surface first.',
      },
      {
        title: 'Tier & quota tracking',
        description:
          'See your current Vine tier, remaining quota for the period, and a projection based on recent activity.',
      },
      {
        title: 'Compliance alerts',
        description:
          'Enable compliance notifications to receive reminders before reviews go overdue — giving you time to act before it affects your standing.',
      },
    ],
  },
  {
    slug: 'configuration',
    title: 'Configuration',
    section: 'reference',
    summary: 'Full reference for all settings, polling intervals, and advanced customisation options.',
    readTime: '8 min read',
    body: [
      {
        title: 'Polling intervals',
        description:
          'Control how frequently Divine Monitor checks for new RFY items and search results. Shorter intervals increase responsiveness but consume more quota.',
      },
      {
        title: 'Notification rate limiting',
        description:
          'Set a minimum gap between alerts for any single filter to avoid notification fatigue during busy periods.',
      },
      {
        title: 'Data retention',
        description:
          'By default all data is kept indefinitely. You can configure automatic pruning of recommendation history older than a specified date.',
      },
      {
        title: 'API access',
        description:
          'Generate personal API tokens in Settings → API to query your data programmatically or integrate with external tools.',
      },
    ],
  },
]
