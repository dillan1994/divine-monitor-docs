import type { DocSection, DocsEntry } from '@/types/docs'

export const docSections: DocSection[] = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'monitoring', label: 'Monitoring' },
  { key: 'settings', label: 'Settings' },
]

export const docsEntries: DocsEntry[] = [
  {
    slug: 'quickstart',
    title: 'Quickstart',
    section: 'getting-started',
    summary: 'Get from install to first monitored item fast, with only the essentials.',
    readTime: '5 min read',
    body: [
      {
        title: 'Install and sign in',
        description: 'Install the Chrome extension, then sign in to your Divine Monitor dashboard.',
      },
      {
        title: 'Check your plan features',
        description:
          'Open Account to confirm your current tier and unlocked features (for example Search, AI analytics, and Reviews).',
      },
      {
        title: 'Configure notifications',
        description:
          'Go to Notifications, enable channels you want, then set your feed preferences and timezone.',
      },
      {
        title: 'Open Products and start monitoring',
        description:
          'Use the date picker and feed pills (All, RFY, Search) to focus the feed you care about.',
      },
      {
        title: 'Validate everything is working',
        description:
          'Look for the Live indicator on today\'s Products view and send a test notification from the Notifications page.',
      },
    ],
  },
  {
    slug: 'plans',
    title: 'Plans & Features',
    section: 'getting-started',
    summary: 'A simple comparison of what Free, Plus, and Pro include in the current rollout.',
    readTime: '4 min read',
    kind: 'plans',
    body: [],
    planTiers: [
      { name: 'Free', price: 'Free', sub: 'forever' },
      { name: 'Plus', price: 'GBP 4.99', sub: '+ VAT / month', highlight: true },
      { name: 'Pro', price: 'GBP 9.99', sub: '+ VAT / month' },
    ],
    tierGroups: [
      {
        label: 'History & Lookbacks',
        features: [
          { label: 'Products date navigation history', free: '1 week', plus: '1 month', pro: '3 months' },
          { label: 'Products multi-day lookback window', free: '1 day', plus: '3 days', pro: '7 days' },
          { label: 'Main analytics history window', free: '1 week', plus: '1 month', pro: '3 months' },
        ],
      },
      {
        label: 'Notifications',
        features: [
          { label: 'RFY alerts (recommended feed)', free: true, plus: true, pro: true },
          { label: 'Search alerts (keyword feed)', free: false, plus: true, pro: true },
          { label: 'Account alerts (status + ratios)', free: false, plus: true, pro: true },
          { label: 'Reviews alerts (daily digest + not-approved)', free: false, plus: false, pro: true },
          { label: 'Telegram alerts (delivery channel)', free: false, plus: true, pro: true },
          { label: 'Email alerts (delivery channel)', free: false, plus: false, pro: true },
          { label: 'Browser push alerts (delivery channel)', free: false, plus: false, pro: true },
          { label: 'Exclude title/category filters (noise control)', free: false, plus: false, pro: true },
        ],
      },
      {
        label: 'Dashboard & Sessions',
        features: [
          { label: 'Global web dashboard access (feature availability depends on tier)', free: true, plus: true, pro: true },
          { label: 'Concurrent web dashboard sessions (active browser connections)', free: '2 browser sessions', plus: '4 browser sessions', pro: '6 browser sessions' },
          { label: 'Products tab: grid/table views, sorting, and filtering', free: true, plus: true, pro: true },
          { label: 'RFY analytics layouts (resizable grid)', free: true, plus: true, pro: true },
          { label: 'Saved analytics layout preferences', free: true, plus: true, pro: true },
          { label: 'Configurable refresh behavior', free: true, plus: true, pro: true },
          { label: 'Theme options (Slate default)', free: 'Slate', plus: 'Slate + Light + Dark', pro: 'Slate + Light + Dark' },
        ],
      },
      {
        label: 'Monitoring Modules',
        features: [
          { label: 'Chrome extension & RFY monitoring', free: true, plus: true, pro: true },
          { label: 'Search monitoring', free: false, plus: true, pro: true },
          { label: 'Account monitoring analytics', free: false, plus: true, pro: true },
          { label: 'AI (all items) monitoring', free: false, plus: true, pro: true },
          { label: 'Review monitoring', free: false, plus: false, pro: true },
        ],
      },
    ],
  },
  {
    slug: 'products-tab-walkthrough',
    title: 'Products Tab Walkthrough',
    section: 'monitoring',
    summary: 'How to use single-day search, multi-day lookbacks, grid/table views, live feed, filters, and info icons.',
    readTime: '8 min read',
    body: [
      {
        title: 'Switch between single-day and multi-day views',
        description:
          'Use the Date picker for a single day. Open Multi-day lookback for rolling windows that end on your selected date.',
      },
      {
        title: 'Run individual day checks',
        description:
          'Pick any day and then filter by feed using All, RFY, or Search. Search feed access is tier-gated.',
      },
      {
        title: 'Understand Live and Passive indicators',
        description:
          'Live means this tab is actively streaming new products. Passive means this tab mirrors another active tab to reduce duplicate reads.',
      },
      {
        title: 'Use grid and table modes',
        description:
          'Grid is best for browsing cards quickly. Table is best for sorting and filtering by title, seller, price, and seen times.',
      },
      {
        title: 'Resize product tiles and inspect info icons',
        description:
          'Tile size control is available in grid mode. Use the info icon on products to see sent/skipped/failed notification details.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: products header with date controls; multi-day panel expanded; feed pills in use; grid vs table examples; a product info popover open.',
        images: [
          {
            src: '/docs-images/products/products-header-date-controls.png',
            alt: 'Products header with date controls',
          },
          {
            src: '/docs-images/products/products-multi-day-lookback-panel.png',
            alt: 'Products multi-day lookback panel expanded',
          },
          {
            src: '/docs-images/products/products-feed-filter-pills.png',
            alt: 'Products feed filter pills for all, RFY, and search',
          },
          {
            src: '/docs-images/products/products-grid-and-table-views.png',
            alt: 'Products grid and table view examples',
          },
          {
            src: '/docs-images/products/products-notification-info-popover.png',
            alt: 'Products notification info popover open',
          },
        ],
      },
    ],
  },
  {
    slug: 'analytics-tabs-and-layouts',
    title: 'Analytics Tabs And Layouts',
    section: 'monitoring',
    summary: 'Walk through analytics tabs, RFY views, windows, resizing, and saved layout settings.',
    readTime: '10 min read',
    body: [
      {
        title: 'Learn the analytics tab structure',
        description:
          'Top-level tabs are RFY, Account, Search, Reviews, and AI. Some tabs appear only when your plan includes access.',
      },
      {
        title: 'Pick a time window',
        description:
          'Use standard windows for RFY/Search/Account/Reviews and dedicated lookback windows for AI monitoring.',
      },
      {
        title: 'Use RFY views for focused analysis',
        description:
          'RFY includes Overview, Price and Value, Timing Patterns, Catalog Mix, and Custom. Use Custom when you want full widget control.',
      },
      {
        title: 'Resize and save your layout',
        description:
          'Open layout settings, enter edit mode, drag/resize widgets, then save. You can also set your preferred RFY view as default.',
      },
      {
        title: 'Use chart help and expand actions',
        description:
          'Use chart tooltips and expand buttons for deeper reading before you move to another subtab.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: analytics main tab strip; RFY view strip; layout settings open; widget resize in progress; saved custom layout state.',
        images: [
          {
            src: '/docs-images/analytics/analytics-main-subtabs.png',
            alt: 'Analytics main subtabs',
          },
          {
            src: '/docs-images/analytics/analytics-rfy-view-tabs.png',
            alt: 'RFY view tabs inside analytics',
          },
          {
            src: '/docs-images/analytics/analytics-layout-settings-open.png',
            alt: 'Analytics layout settings open',
          },
          {
            src: '/docs-images/analytics/analytics-widget-resize.png',
            alt: 'Analytics widget resize in progress',
          },
          {
            src: '/docs-images/analytics/analytics-saved-custom-layout.png',
            alt: 'Analytics custom layout saved state',
          },
        ],
      },
    ],
  },
  {
    slug: 'account-monitoring',
    title: 'Account Monitoring',
    section: 'monitoring',
    summary: 'How to monitor Vine account health using the Account analytics tab.',
    readTime: '6 min read',
    body: [
      {
        title: 'Open Analytics -> Account',
        description:
          'This view focuses on Vine account health metrics, not product feed browsing.',
      },
      {
        title: 'Read core KPIs',
        description:
          'Track Vine status, review-to-order ratio, insightfulness, media rate, and eval-period progress.',
      },
      {
        title: 'Review trend charts',
        description:
          'Use trend cards to understand direction over time, then expand charts for detail when needed.',
      },
      {
        title: 'Use eval period comparison',
        description:
          'Compare periods side by side to spot improvement or risk early.',
      },
      {
        title: 'Marketplace rollout note',
        description:
          'If this tab is unavailable in your marketplace, the UI will show a coming-soon message.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: KPI row; one expanded trend chart; eval period comparison table; coming-soon state (if available in staging).',
        images: [
          {
            src: '/docs-images/account-monitoring/account-kpi-row.png',
            alt: 'Account monitoring KPI row',
          },
          {
            src: '/docs-images/account-monitoring/account-expanded-trend-chart.png',
            alt: 'Account monitoring expanded trend chart',
          },
          {
            src: '/docs-images/account-monitoring/account-eval-period-comparison.png',
            alt: 'Account monitoring eval period comparison table',
          },
          {
            src: '/docs-images/account-monitoring/account-coming-soon-state.png',
            alt: 'Account monitoring coming soon message',
          },
        ],
      },
    ],
  },
  {
    slug: 'review-monitoring',
    title: 'Review Monitoring',
    section: 'monitoring',
    summary: 'Track review state, due pressure, and review alerts from Reviews and Analytics.',
    readTime: '8 min read',
    body: [
      {
        title: 'Use the Reviews page for queue management',
        description:
          'Filter by state and quality, search by title, and keep your active review queue tidy.',
      },
      {
        title: 'Configure review alerts',
        description:
          'From Reviews and Notifications, set daily digest preferences and not-approved alerts.',
      },
      {
        title: 'Use Analytics -> Reviews for pressure tracking',
        description:
          'Watch due buckets (Overdue, Today, Tomorrow, <7 days, Safe) and use journey-board filters to focus work.',
      },
      {
        title: 'Know access requirements',
        description:
          'Review monitoring is available on Pro. If not available in your marketplace yet, a coming-soon state is shown.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: Reviews filter bar; review cards list; review alerts panel; Reviews analytics due tiles; journey board filtered state.',
        images: [
          {
            src: '/docs-images/reviews/reviews-filter-bar.png',
            alt: 'Reviews filter bar',
          },
          {
            src: '/docs-images/reviews/reviews-card-list.png',
            alt: 'Reviews card list',
          },
          {
            src: '/docs-images/reviews/reviews-alert-settings.png',
            alt: 'Reviews alert settings panel',
          },
          {
            src: '/docs-images/reviews/reviews-analytics-due-tiles.png',
            alt: 'Reviews analytics due tiles',
          },
          {
            src: '/docs-images/reviews/reviews-journey-board-filtered.png',
            alt: 'Reviews journey board in filtered state',
          },
        ],
      },
    ],
  },
  {
    slug: 'ai-all-items-monitoring',
    title: 'AI (All Items) Monitoring',
    section: 'monitoring',
    summary: 'Follow all-items behavior over time using the AI analytics tab.',
    readTime: '6 min read',
    body: [
      {
        title: 'Open Analytics -> AI',
        description:
          'AI monitoring focuses on all-items volume and category movement over your selected lookback window.',
      },
      {
        title: 'Select lookback window',
        description:
          'Switch between shorter and longer windows to compare immediate movement with broader trends.',
      },
      {
        title: 'Read the two core AI charts',
        description:
          'Use product count plus velocity overlays for pace changes, and category trends for mix changes.',
      },
      {
        title: 'Adjust chart controls and layout',
        description:
          'Toggle velocity mode and legend visibility, then edit layout to match your own monitoring style.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: AI tab with window selector; AI product counts with velocity toggle; category chart with legend; AI layout edit mode.',
        images: [
          {
            src: '/docs-images/ai/ai-window-selector.png',
            alt: 'AI analytics window selector',
          },
          {
            src: '/docs-images/ai/ai-product-counts-velocity-toggle.png',
            alt: 'AI product counts chart with velocity toggle',
          },
          {
            src: '/docs-images/ai/ai-category-chart-legend.png',
            alt: 'AI category chart with legend enabled',
          },
          {
            src: '/docs-images/ai/ai-layout-edit-mode.png',
            alt: 'AI analytics layout edit mode',
          },
        ],
      },
    ],
  },
  {
    slug: 'notifications-configuration',
    title: 'Notifications Configuration',
    section: 'settings',
    summary: 'Configure channels, RFY/Search/Reviews/Account rules, daily digests, and recent delivery activity.',
    readTime: '9 min read',
    body: [
      {
        title: 'Use Notifications subtabs',
        description:
          'Work through Channels, Feeds, and Recent Activity in order so setup and validation stay simple.',
      },
      {
        title: 'Configure channels by plan',
        description:
          'Telegram is available on Plus and Pro. Email and browser push are available on Pro.',
      },
      {
        title: 'Set global preferences',
        description:
          'Set timezone and global enable/disable. Title and category exclusion filters are available on Pro.',
      },
      {
        title: 'Set feed and account/review rules',
        description:
          'Control RFY/Search/Reviews/Account alert toggles, plus daily digest schedule, review time limit, and not-approved alerts.',
      },
      {
        title: 'Validate with Recent Activity',
        description:
          'Filter by channel and status to confirm sent, skipped, and failed deliveries after any change.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: channels cards; global preferences with exclusion chips; feed toggles; daily digest schedule fields; recent activity table with filters.',
        images: [
          {
            src: '/docs-images/notifications/notifications-channels-cards.png',
            alt: 'Notifications channels cards',
          },
          {
            src: '/docs-images/notifications/notifications-global-preferences-exclusions.png',
            alt: 'Notifications global preferences with exclusions',
          },
          {
            src: '/docs-images/notifications/notifications-feed-toggles.png',
            alt: 'Notifications feed toggles',
          },
          {
            src: '/docs-images/notifications/notifications-digest-schedule-fields.png',
            alt: 'Notifications daily digest schedule fields',
          },
          {
            src: '/docs-images/notifications/notifications-recent-activity-table.png',
            alt: 'Notifications recent activity table',
          },
        ],
      },
    ],
  },
  {
    slug: 'account-page',
    title: 'Account Page',
    section: 'settings',
    summary: 'Manage profile, plan, billing connection, and active browser sessions.',
    readTime: '6 min read',
    body: [
      {
        title: 'Review profile and plan',
        description:
          'Use the profile card for account identity details and the plan card for your enabled capabilities.',
      },
      {
        title: 'Connect or reconnect billing',
        description:
          'Use the Billing card to connect your Patreon account and confirm plan sync status.',
      },
      {
        title: 'Manage active sessions',
        description:
          'Use Active sessions to refresh session state and disconnect devices you no longer want connected. Session limits are Free: 2, Plus: 4, Pro: 6 concurrent web sessions.',
      },
      {
        title: 'Sign out safely',
        description:
          'Sign out from the Account page when you are done, especially on shared devices.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: profile card; plan card feature list; billing card connection state; active sessions card with disconnect action.',
        images: [
          {
            src: '/docs-images/account-page/account-profile-card.png',
            alt: 'Account page profile card',
          },
          {
            src: '/docs-images/account-page/account-plan-feature-list.png',
            alt: 'Account page plan feature list',
          },
          {
            src: '/docs-images/account-page/account-billing-connection-state.png',
            alt: 'Account page billing connection state',
          },
          {
            src: '/docs-images/account-page/account-active-sessions-card.png',
            alt: 'Account page active sessions card',
          },
        ],
      },
    ],
  },
]

