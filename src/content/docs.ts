import type { DocSection, DocsEntry } from '@/types/docs'

export const docSections: DocSection[] = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'extensions', label: 'Extension' },
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
      { name: 'Free', price: 'Free', sub: '' },
      { name: 'Plus', price: 'GBP 4.99', sub: '+ VAT / month', highlight: true },
      { name: 'Pro', price: 'GBP 9.99', sub: '+ VAT / month' },
    ],
    tierGroups: [
      {
        label: 'Extension',
        features: [
          { label: 'Chrome extension & RFY monitoring', free: true, plus: true, pro: true },
          { label: 'Disable Vine opt-out button', free: true, plus: true, pro: true },
          { label: 'RFY refresh interval', free: 'Locked', plus: 'Configurable', pro: 'Configurable' },
          { label: 'Search refresh interval', free: 'System-managed', plus: 'System-managed', pro: 'System-managed' },
          { label: 'Sound alerts (browser audio on new RFY items)', free: false, plus: false, pro: true },
          { label: 'Quiet windows (reduced monitoring cadence during set hours)', free: true, plus: true, pro: true },
          {
            label: 'Space saving mode (hide lower-page ads/history, side order flyer, and RFY/AFA categories)',
            free: true,
            plus: true,
            pro: true,
          },
          {
            label: 'Space saving mode plus (hide deals header, trim vertical space, compact product tiles)',
            free: false,
            plus: true,
            pro: true,
          },
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
          { label: 'Theme options (Slate default)', free: 'Slate', plus: 'Slate + Light + Dark', pro: 'Slate + Light + Dark' },
        ],
      },
      {
        label: 'Monitoring Modules',
        features: [
          { label: 'RFY monitoring', free: true, plus: true, pro: true },
          { label: 'Search monitoring', free: false, plus: true, pro: true },
          { label: 'Account monitoring', free: false, plus: true, pro: true },
          { label: 'AI (all items) monitoring', free: false, plus: true, pro: true },
          { label: 'Review monitoring', free: false, plus: false, pro: true },
        ],
      },
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
          { label: 'RFY alerts (recommended feed)', free: false, plus: true, pro: true },
          { label: 'Search alerts (keyword feed)', free: false, plus: true, pro: true },
          { label: 'Account alerts (status + ratios)', free: false, plus: true, pro: true },
          { label: 'Reviews alerts (daily digest + not-approved)', free: false, plus: true, pro: true },
          { label: 'Telegram alerts (delivery channel)', free: false, plus: true, pro: true },
          { label: 'Email alerts (delivery channel)', free: false, plus: true, pro: true },
          { label: 'Browser push alerts (delivery channel)', free: false, plus: true, pro: true },
          { label: 'Exclude title/category filters (noise control)', free: false, plus: true, pro: true },
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
    slug: 'space-saving-mode',
    title: 'Vine Page Enhancements',
    section: 'extensions',
    summary: 'Everything the extension does to the Vine page UI — Space Saving Mode, opt-out protection, and layout cleanup.',
    readTime: '4 min read',
    body: [
        {
        title: 'Disable Vine opt-out button',
        description:
          'The extension disables the Vine opt-out button on your Amazon Vine pages across all tiers, active from the moment the extension is installed. This prevents accidental opt-out with no configuration required — the button remains visible but cannot be clicked.',
      },
      {
        title: 'Space Saving Mode (base)',
        description:
          'Available on all tiers. Space Saving Mode hides Amazon ads and browsing history in the lower portion of the page, hides the side order flyer, and removes the category sections on RFY and AFA pages to reclaim horizontal space.',
      },
      {
        title: 'Space Saving Mode Plus',
        description:
          'Available on Plus and Pro. Builds on the base mode by also hiding the Amazon deals header at the top of the page, reducing extra vertical whitespace between elements, and compacting product tiles — significantly transforming the default Vine tab layout.',
      }
    ],
  },
  {
    slug: 'rfy-monitoring',
    title: 'RFY Monitoring',
    section: 'extensions',
    summary: 'How the extension monitors the RFY queue in the background, configures refresh intervals, refreshes your open Vine tab, and alerts you instantly with sound on Pro.',
    readTime: '6 min read',
    body: [
      {
        title: 'Background RFY monitoring',
        description:
          'The extension refreshes your RFY feed in the background, with no open Vine tab required. New products are detected and written to the Divine Monitor Console automatically. This is the core monitoring mechanism that runs at all times while the extension is enabled.',
      },
      {
        title: 'Randomized refresh intervals',
        description:
          'Polling intervals are deliberately randomized within a range rather than fixed to a single value, avoiding predictable request patterns. On Free the range is system-managed and locked. On Plus and Pro you can adjust the interval target via the extension popup — the popup shows your active range so you always know the current cadence.',
      },
      {
        title: 'Visible Vine tab refresh',
        description:
          'Optionally, you can opt to have a visible RFY tab refreshing which means you have an up to date RFY page in front of you at all times. Also overlays a timer on the Vine page to indicate when the next refresh and to indicate it is being actively refreshed. Incredibly powerful for an all in one solution without the need for any third party auto-refresh extensions..',
      },
      {
        title: 'Sound alerts (Pro)',
        description:
          'On Pro, when a refresh cycle detects new RFY items, you can enbable the extension to play a browser audio alert immediately. Sound alerts are instant — they fire the moment new items are found (faster than push, email, or Telegram notifications which go through a processing pipeline). If you are sitting in front of a device running the extension, sound alerts are the fastest possible signal and is an incredibly powerful feature.',
      },
      {
        title: 'RFY quiet window',
        description:
          'To reduce activity overnight (or for your time window of choice), you can configure a quiet window in the extension popup under the RFY section. During a quiet window the polling cadence drops significantly. Monitoring does not stop — it just checks less often. Sound alerts still fire if new items are detected during the window.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: extension popup RFY section with interval control; popup with LIVE tab indicator active; popup sound alert toggle in Pro state; popup RFY quiet hours configured.',
        images: [
          {
            src: '/docs-images/extension/popup-rfy-interval-control.png',
            alt: 'Extension popup RFY interval control',
          },
          {
            src: '/docs-images/extension/popup-rfy-live-indicator.png',
            alt: 'Extension popup LIVE tab refresh indicator',
          },
          {
            src: '/docs-images/extension/popup-sound-alert-toggle.png',
            alt: 'Extension popup sound alert toggle on Pro',
          },
          {
            src: '/docs-images/extension/popup-rfy-quiet-hours.png',
            alt: 'Extension popup RFY quiet hours configured',
          },
        ],
      },
    ],
  },
  {
    slug: 'search-monitoring',
    title: 'Search Monitoring',
    section: 'extensions',
    summary: 'How Search monitoring works, the difference between Spread and Burst modes, system-managed intervals, and quiet windows for Search.',
    readTime: '6 min read',
    body: [
      {
        title: 'What is Search monitoring?',
        description:
          'Search monitoring tracks custom search terms via the native Vine search mechanism. You define the search terms you care about in the extension popup, and the extension handles the rest via two modes, \'Spread\' and \'Burst\' (more info below). New matching products appear in Divine Monitor Console alongside RFY items. Search monitoring is available on Plus and Pro.',
      },
      {
        title: 'Spread mode',
        description:
          'In Spread mode the extension rotates through one search terms per cycle. This distributes polling load and gives every term consistent coverage. Spread is a safe default and a good choice for balanced, steady monitoring across all your terms.',
      },
      {
        title: 'Burst mode',
        description:
          'In Burst mode, the extension refreshes multiple defined search terms per cycle. This concentrates multiple search terms into a tighter window for faster detection, at the cost of higher short-term activity. Burst mode includes automatic cooldown on repeated failures to maintain safe operation.',
      },
      {
        title: 'System-managed intervals',
        description:
          'Unlike RFY, Search refresh intervals are always system-managed and are not user-configurable on any tier. Intervals are randomized within a system-defined range to maintain safe, sustainable request patterns across all users. This keeps Search monitoring reliable and within acceptable usage boundaries regardless of how many terms you are tracking.',
      },
      {
        title: 'Search quiet window',
        description:
          'Search has its own quiet window, configured independently of RFY. Set it in the extension popup under the Search section. During a quiet window the Search cadence drops significantly but does not stop entirely.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: extension popup Search section with terms list; Spread mode selected; Burst mode selected; Search quiet hours configured.',
        images: [
          {
            src: '/docs-images/extension/popup-search-terms-list.png',
            alt: 'Extension popup Search terms list',
          },
          {
            src: '/docs-images/extension/popup-search-spread-mode.png',
            alt: 'Extension popup Search spread mode selected',
          },
          {
            src: '/docs-images/extension/popup-search-burst-mode.png',
            alt: 'Extension popup Search burst mode selected',
          },
          {
            src: '/docs-images/extension/popup-search-quiet-hours.png',
            alt: 'Extension popup Search quiet hours configured',
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
