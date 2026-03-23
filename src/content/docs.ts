import React from 'react'
import type { DocSection, DocsEntry, PlanTier, TierGroup } from '@/types/docs'

export const PLAN_TIERS: PlanTier[] = [
  { name: 'Free', price: 'Free', sub: '' },
  { name: 'Plus', price: 'GBP 4.99', sub: '+ VAT / month', highlight: true },
  { name: 'Pro', price: 'GBP 9.99', sub: '+ VAT / month' },
]

export const PLAN_TIER_GROUPS: TierGroup[] = [
  {
    label: 'Extension',
    features: [
      { label: 'RFY monitoring', free: true, plus: true, pro: true },
      { label: 'Search terms monitoring', free: false, plus: '5 terms (spread mode)', pro: '10 terms (burst mode)' },
      { label: 'Account monitoring', free: false, plus: true, pro: true },
      { label: 'Review monitoring', free: false, plus: false, pro: true },
      { label: 'Disable Vine opt-out button', free: true, plus: true, pro: true },
      { label: 'Custom RFY refresh interval', free: false, plus: true, pro: true },
      { label: 'Instant sound alerts for new RFY items', free: false, plus: false, pro: true },
      { label: 'Quiet windows (reduced monitoring cadence during set hours)', free: true, plus: true, pro: true },
      { label: 'Space saving mode (hide lower-page ads/history, side order flyer, and RFY/AFA categories)', free: true, plus: true, pro: true },
      { label: 'Space saving mode plus (hide deals header, trim vertical space, compact product tiles)', free: false, plus: true, pro: true },
    ],
  },
  {
    label: 'Console & Sessions',
    features: [
      { label: 'Global Console', free: true, plus: true, pro: true },
      { label: 'Concurrent Console sessions (active browser connections)', free: '2 browser sessions', plus: '4 browser sessions', pro: '6 browser sessions' },
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
      { label: 'Product history', free: '1 week', plus: '1 month', pro: '3 months' },
      { label: 'Product multi-day lookback window', free: '1 day', plus: '3 days', pro: '7 days' },
      { label: 'Analytics history', free: '1 week', plus: '1 month', pro: '3 months' },
    ],
  },
  {
    label: 'Notifications',
    features: [
      { label: 'RFY', free: false, plus: true, pro: true },
      { label: 'Search (keyword feed)', free: false, plus: true, pro: true },
      { label: 'Account alerts (status + ratios)', free: false, plus: true, pro: true },
      { label: 'Exclude title/category filters (noise control)', free: false, plus: true, pro: true },
      { label: 'Telegram alerts (delivery channel)', free: false, plus: true, pro: true },
      { label: 'Reviews alerts (daily digest + not-approved)', free: false, plus: false, pro: true },
      { label: 'Email alerts (delivery channel)', free: false, plus: false, pro: true },
      { label: 'Browser push alerts (delivery channel)', free: false, plus: false, pro: true },

    ],
  },
]

export const docSections: DocSection[] = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'extensions', label: 'Extension' },
  { key: 'monitoring', label: 'Monitoring' },
  { key: 'settings', label: 'Settings' },
]

export const docsEntries: DocsEntry[] = [
  {
    slug: 'why-divine-monitor',
    title: 'Why Divine Monitor',
    section: 'getting-started',
    summary: 'Real-time RFY alerts, smart notifications, and deep analytics — built by a Viner, for Viners.',
    readTime: '2 min read',
    kind: 'overview',
    body: [],
  },
  {
    slug: 'quickstart',
    title: 'Quickstart',
    section: 'getting-started',
    summary: 'Get from install to first monitored item fast, with only the essentials.',
    readTime: '5 min read',
    body: [
      {
        title: 'Sign up',
        description: React.createElement('span', null,
          'Open up the ',
          React.createElement('a', { href: 'https://app.divinemonitor.com/', target: '_blank', rel: 'noreferrer' }, 'Divine Monitor Console'),
          ' and sign up for an account.'
        ),
      },
      {
        title: 'Install extension and sign in',
        description: 'Install the Google Chrome extension and sign-in. From here you can start enabling your feeds. To work reliably, the extension must be installed onto a browser/pc/machine that is on 24/7. The browser must be open, but the extension will do its job in the background - i.e, Vine pages do not need to be open.',
      },
      {
        title: 'Explore the Console',
        description:
          'Familiarise yourself with the core features of the Console - Products tab and history, grid/tabular view, the various analytics charts.',
      },
      {
        title: 'Check your plan features via the Console',
        description:
          'Open Account to confirm your current tier and unlocked features (some features such as Search, Reviews and Account monitoring are limited to paid tiers).',
      },
    ],
  },
  {
    slug: 'marketplace-support',
    title: 'Marketplace Support',
    section: 'getting-started',
    beta: true,
    summary: 'Which Amazon Vine marketplaces Divine Monitor supports, how marketplace detection works, and what to expect if a feature is not yet available in your region.',
    readTime: '3 min read',
    body: [
      {
        title: 'Supported marketplaces',
        description:
          'Divine Monitor supports Amazon Vine across 12 marketplaces: US, CA, UK, DE, FR, IT, ES, JP, AU, SG, BR, and MX. The extension and Divine Monitor Console work across all of these.',
      },
      {
        title: 'Automatic marketplace detection',
        description:
          'The extension detects your active marketplace automatically from the Amazon page URL — no manual configuration required. If you participate in multiple marketplaces, the extension adjusts to whichever one you are currently browsing.',
      },
      {
        title: 'Feature availability by marketplace',
        description:
          'Most features are available across all supported marketplaces. Some features — such as Account monitoring and Review monitoring — are rolling out progressively. If a feature is not yet available in your marketplace, the relevant tab or section in the Divine Monitor Console will display a coming-soon message rather than showing an error.',
      },
      {
        title: 'Primary marketplace',
        description:
          'Your account is associated with a primary marketplace, which determines how your data is stored and displayed in the Console. Contact support if you need to change your primary marketplace.',
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
    slug: 'extension-popup',
    title: 'Extension Popup Guide',
    section: 'extensions',
    summary: 'A walkthrough of every section in the extension popup — the control panel for all monitoring, interval, and alert settings.',
    readTime: '5 min read',
    body: [
      {
        title: 'Opening the popup',
        description:
          'Click the Divine Monitor icon in your Chrome toolbar to open the popup. If the icon is not visible, click the extensions puzzle piece and pin Divine Monitor. The popup is the primary control panel for everything the extension does.',
      },
      {
        title: 'Global enable/disable',
        description:
          'The toggle at the top of the popup enables or disables all monitoring globally. When disabled, no feed polling occurs and no data is written to the Console. Per-feed controls are only active when the global toggle is on.',
      },
      {
        title: 'Per-feed status indicators',
        description:
          'Below the global toggle, each feed — RFY, Search, Reviews, Account, and AI — shows its current status. A green indicator means the feed is actively polling. A quiet-mode indicator means the feed is running at reduced cadence inside a quiet window. A grey indicator means the feed is paused or unavailable on your tier.',
      },
      {
        title: 'RFY and Search feed sections',
        description:
          'Expand the RFY or Search section to access interval controls (Plus/Pro for RFY), mode selection (Search only), quiet window times, and the sound alert toggle (Pro, RFY only). Changes take effect on the next polling cycle.',
      },
      {
        title: 'Managing Search terms',
        description:
          'Expand the Search section to add or remove search terms. Plus supports up to 5 terms and Pro supports up to 10. Choose Spread or Burst mode per the Search Monitoring doc. The term list and mode selection persist across browser sessions.',
      },
      {
        title: 'Force-fetch for Reviews and Account',
        description:
          'The Reviews and Account feeds run on longer cycles by default. Use the force-fetch buttons in their respective popup sections to trigger an immediate data refresh outside the normal schedule — useful after completing reviews or expecting an account status change.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: popup open with global toggle on; per-feed status row; RFY section expanded with interval control; Search section with terms list; force-fetch buttons for Reviews and Account.',
        images: [
          {
            src: '/docs-images/extension/popup-global-toggle.png',
            alt: 'Extension popup global enable toggle',
          },
          {
            src: '/docs-images/extension/popup-feed-status-row.png',
            alt: 'Extension popup per-feed status indicators',
          },
          {
            src: '/docs-images/extension/popup-rfy-section-expanded.png',
            alt: 'Extension popup RFY section expanded',
          },
          {
            src: '/docs-images/extension/popup-search-terms-list.png',
            alt: 'Extension popup Search terms list',
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
    readTime: '3 min read',
    body: [
      {
        title: 'What is Search monitoring?',
        description: React.createElement(React.Fragment, null,
          'Search monitoring tracks custom search terms via the native Vine search mechanism. You define the search terms you care about in the extension popup, and the extension handles the rest via two modes, \'Spread\' and \'Burst\' (more info below). New matching products appear in Divine Monitor Console alongside RFY items. Search monitoring is available on Plus and Pro.',
          React.createElement('div', { className: 'docs-inline-notice' },
            React.createElement('strong', null, 'Important: '),
            'Search monitoring adds extra requests because each saved term needs checking. \'Spread\' and \'Burst\' both exist so you can choose how that activity is paced: Spread keeps it slower, smoother and safer, while Burst is faster but busier for short periods.'
          )
        ),
      },
      {
        title: 'Spread mode',
        description:
          '\'Spread\' checks one of your search terms per round, separating each with a random delay between 30-60s. This keeps activity smooth and gives all terms fair attention over time.',
        images: [
          {
            src: '/docs-images/extension/search-mode-spread-diagram.svg',
            alt: 'Spread mode diagram showing hat, umbrella, and bottle checked one at a time in sequence',
          },
        ],
      },
      {
        title: 'Burst mode',
        description:
          '\'Burst\' checks multiple search terms per round. A short random pause is added between each term. After all terms have been searched, a random delay between 30-60s begins before the next burst starts. This approach allows for faster detection, but creates higher short-term activity. There are several safety mechanisms built in to address this.',
        images: [
          {
            src: '/docs-images/extension/search-mode-burst-diagram.svg',
            alt: 'Burst mode diagram showing hat, umbrella, and bottle checked together with short random pauses between each term',
          },
        ],
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
        title: 'Use RFY preset views for focused analysis',
        description:
          'RFY includes four preset views: Overview (daily/hourly counts, heatmap, subcategories, brands), Price & Value (recommended value, price mix, signal trends), Timing Patterns (date-hour heatmap, weekday-hour heatmap, hourly and day-of-week breakdowns), and Catalog Mix (top categories, subcategories, brands, sellers). Each view is pre-arranged for a specific analytical focus.',
      },
      {
        title: 'Use the Custom view for full widget control',
        description:
          'The Custom view gives you a blank canvas populated with all available widgets. Arrange, resize, show, or hide any widget to build your own analysis layout. Use the bookmark icon to set Custom as your default view so it loads first every time you open RFY Analytics.',
      },
      {
        title: 'Resize and save your layout',
        description:
          'Open layout settings, enter edit mode, drag/resize widgets, then save. Layout preferences are saved per-view — each preset and the Custom view remembers its own arrangement independently.',
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
    slug: 'search-analytics',
    title: 'Search Analytics',
    section: 'monitoring',
    summary: 'How to use the Search analytics tab to understand your keyword feed — time windows, the widget grid, and saving layouts.',
    readTime: '6 min read',
    body: [
      {
        title: 'Open Analytics → Search',
        description:
          'The Search analytics tab is available on Plus and Pro. It provides the same draggable, resizable widget grid as RFY analytics, scoped to data from your Search monitoring feed. If you have no search terms configured yet, see the Search Monitoring doc first.',
      },
      {
        title: 'Pick a time window',
        description:
          'Use the time window selector to set the lookback period for all widgets on the tab. Available windows follow your plan limits: 1 week on Free, 1 month on Plus, and up to 1 year on Pro.',
      },
      {
        title: 'Read the widget grid',
        description:
          'Search analytics widgets include per-term breakdowns, daily and hourly product counts, category and brand distributions, and price analysis — mirroring the RFY analytics structure but filtered to your Search feed data. Widgets only show data for the terms that were active during the selected window.',
      },
      {
        title: 'Customise and save your layout',
        description:
          'Enter layout edit mode to drag and resize widgets. Save the layout to persist your arrangement. The Search analytics layout is saved independently from your RFY layout so changes to one do not affect the other.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: Search analytics tab selected; time window selector open; widget grid with at least two widgets visible; layout edit mode active.',
        images: [
          {
            src: '/docs-images/analytics/search-analytics-tab.png',
            alt: 'Search analytics tab selected',
          },
          {
            src: '/docs-images/analytics/search-analytics-widget-grid.png',
            alt: 'Search analytics widget grid',
          },
          {
            src: '/docs-images/analytics/search-analytics-layout-edit.png',
            alt: 'Search analytics layout edit mode',
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
        title: 'Track due pressure in Analytics → Reviews',
        description:
          'Analytics → Reviews shows due-pressure tiles at the top: Overdue, Due Today, Due Tomorrow, Due within 7 days, and Safe. Click any tile to filter the view below to only reviews in that bucket. KPI cards above the tiles give totals for total reviews, not yet reviewed, pending approval, approval rate, and average final review time.',
      },
      {
        title: 'Use the Review Journey Board',
        description:
          'Below the due-pressure tiles, the Journey Board is a kanban-style view of all in-flight reviews across three columns: Not Yet Reviewed, Completed Pending, and Completed Pending Approval. Use it to see exactly where each review sits in its lifecycle at a glance. Combine a due-pressure filter with the board to focus on overdue or at-risk items without losing sight of the full queue.',
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
          'The Recent Activity tab shows a full delivery history for all notification events. Filter by channel (email, push, Telegram) and by status (sent, skipped, failed) to confirm your setup is working after any configuration change. Each row shows the event type, channel used, delivery status, and timestamp — use this to diagnose missing or unexpected notifications.',
      },
      {
        title: 'Notification replay (Beta)',
        description:
          'Failed notifications can be replayed from Recent Activity. This feature is currently in beta and still in active development and testing — availability may vary and behaviour may change in future releases.',
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
    slug: 'notification-filters',
    title: 'Notification Filters',
    section: 'settings',
    summary: 'Use keyword and category exclude filters to reduce notification noise and focus alerts on items you actually care about.',
    readTime: '5 min read',
    body: [
      {
        title: 'What notification filters do',
        description:
          'Notification filters let you suppress alerts for products that match patterns you define. Instead of receiving a notification for every new RFY or Search item, filters let you skip items whose titles contain certain keywords or whose categories you are not interested in. Filters apply to outgoing notifications — products still appear in the Divine Monitor Console feed.',
      },
      {
        title: 'Keyword exclude filters',
        description:
          'Add keywords or phrases to the title exclude list in Notifications → Channels → Global Preferences. When a new product\'s title contains any of your excluded keywords, its notification is suppressed. Matching is case-insensitive. Use this to block categories of items by name — for example, a brand you never order from or a product type that always shows up but never interests you.',
      },
      {
        title: 'Category exclude filters',
        description:
          'Add Amazon Vine category names to the category exclude list in the same Global Preferences panel. Notifications for products in any excluded category are suppressed. Category names are matched against the product\'s detected category at the time of detection.',
      },
      {
        title: 'Pro requirement',
        description:
          'Keyword and category exclude filters are available on Pro. On Free and Plus the filter controls are visible but locked. Filters apply across all notification channels — email, push, and Telegram — simultaneously.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: Global Preferences panel with keyword exclude chips added; category exclude chips added; a Pro-locked state (for comparison); filter panel with both lists non-empty.',
        images: [
          {
            src: '/docs-images/notifications/notifications-keyword-exclude-chips.png',
            alt: 'Notifications keyword exclude chips',
          },
          {
            src: '/docs-images/notifications/notifications-category-exclude-chips.png',
            alt: 'Notifications category exclude chips',
          },
        ],
      },
    ],
  },
  {
    slug: 'notification-devices',
    title: 'Browser Push & Device Management',
    section: 'settings',
    summary: 'How to set up browser push notifications, register devices, and manage your device list on Pro.',
    readTime: '4 min read',
    body: [
      {
        title: 'What browser push notifications require',
        description:
          'Browser push notifications are available on Pro. They deliver alerts directly to your browser on any registered device, even when the Divine Monitor Console tab is not open, as long as the browser is running. Each device you want to receive push alerts on must be registered separately.',
      },
      {
        title: 'Registering a device',
        description:
          'Open Notifications → Channels and expand the Browser Push card. Click Enable push on this device to register your current browser. Your browser will prompt you to allow notifications — you must accept for push to work. Once registered, the device appears in your device list.',
      },
      {
        title: 'Device limit',
        description:
          'Pro supports up to 3 registered browser push devices. If you reach the limit, you must remove an existing device before adding a new one. The device list shows each registered device with the browser and approximate registration time.',
      },
      {
        title: 'Removing a device',
        description:
          'In the device list, click Remove next to any device you no longer want to receive push alerts. The device is deregistered immediately — push notifications to that browser will stop on the next event. You can re-register the same device later if needed.',
      },
      {
        title: 'Screenshot checklist',
        description:
          'Capture: Browser Push card with device list showing one registered device; device limit reached state (3 devices); remove button on a device; browser notification permission prompt.',
        images: [
          {
            src: '/docs-images/notifications/push-device-list-one-registered.png',
            alt: 'Browser push device list with one registered device',
          },
          {
            src: '/docs-images/notifications/push-device-limit-reached.png',
            alt: 'Browser push device limit reached state',
          },
          {
            src: '/docs-images/notifications/push-device-remove-button.png',
            alt: 'Browser push device remove button',
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
