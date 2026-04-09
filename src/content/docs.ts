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
      { label: 'Amazon review multi-photo upload button', free: true, plus: true, pro: true },
      { label: 'Custom RFY refresh interval', free: false, plus: true, pro: true },
      { label: 'Quiet windows (reduced monitoring cadence during set hours)', free: true, plus: true, pro: true },
      { label: 'Space saving mode (hide lower-page ads/history, side order flyer, and RFY/AFA categories)', free: true, plus: true, pro: true },
      { label: 'Space saving mode plus (hide deals header, trim vertical space, compact product tiles)', free: true, plus: true, pro: true },
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
      { label: 'All Items monitoring', free: false, plus: true, pro: true },
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
    summary: 'Real-time RFY alerts, smart notifications, account/review reminders and deep analytics — built by a Viner, for Viners.',
    readTime: '2 min read',
    kind: 'overview',
    body: [],
  },
  {
    slug: 'how-it-works',
    title: 'How does it work?',
    section: 'getting-started',
    summary: 'A simple overview of the extension, backend, and Console so you can see where data is collected, processed, and used.',
    readTime: '3 min read',
    body: [
      {
        title: 'The extension is the collection layer',
        description:
          'The Divine Monitor Chrome extension acts as the collection layer. Once installed and signed into your Divine Monitor account, it safely checks supported Amazon Vine pages for RFY, Search, Reviews, Account, and other monitoring data.',
      },
      {
        title: 'Data is fetched from Vine pages',
        description:
          'When monitoring is enabled, the extension fetches data from the relevant Amazon Vine pages and sends the data to the Divine Monitor backend. That includes the data required to power live feeds, history, analytics, and alerts. Product price and metadata is also captured to allow richer analytics and insights.',
      },
      {
        title: 'The backend processes and stores the data',
        description:
          'The Divine Monitor backend receives that incoming data, processes, transforms, and persists, allowing it to drive the various views in the Console. This is what separates collection from viewing: the machine running the extension is responsible for fetching, while the Divine Monitor backend handles the processing, storage, and live feeds.',
      },
      {
        title: 'The Console is where the data becomes useful',
        description: React.createElement('span', null,
          'The ',
          React.createElement('a', { href: 'https://app.divinemonitor.com/', target: '_blank', rel: 'noreferrer' }, 'Divine Monitor Console'),
          ' is where that processed data becomes useful. It is the part of Divine Monitor used to view live product feeds, RFY and Search monitoring, analytics, product history, notification controls, and the rest of the platform.'
        ),
      },
      {
        title: 'Collection and access are intentionally separate',
        description:
          'The extension does not need to be the same device used to check Divine Monitor. It can stay signed in on a browser or machine left running in the background, while the Console can be opened from another device whenever needed. That separation is what makes Divine Monitor accessible from anywhere, rather than tying the experience to the machine doing the fetching, and is also what separates Divine Monitor from every other Vine extension. There is more overhead, complexity and cost associated with this approach, however the flexibility it offers is clear.',
      },
      {
        title: 'Flow overview',
        description: '',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/how-it-works-flow-diagram.svg',
            alt: 'Diagram showing data flowing from the extension to the Divine Monitor backend and into the Console',
          },
        ],
      },
    ],
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
        description: 'Install the Google Chrome extension and sign-in. From here you can start enabling your feeds. To work reliably, I\'d recommend installing the extension  onto a browser/pc/machine that is on 24/7. The browser must be open, but the extension will do its job in the background - i.e, Vine pages do not need to be open.',
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
    slug: 'products-tab-walkthrough',
    title: 'Products Tab Walkthrough',
    section: 'monitoring',
    summary: 'How to use single-day search, multi-day lookbacks, grid/table views, live feed, filters, and info icons.',
    readTime: '8 min read',
    body: [
      {
        title: 'Switch between single-day and multi-day views',
        description:
          'Use the Date picker to view your products for a single day. Open Multi-day lookback to see multiple days worth of data at once (particularly useful in the tabular view). The options available will vary with tier.',
      },
      {
        title: 'Filter the Products by type (RFY or Search)',
        description:
          'Pick any day and then filter by feed using All, RFY, or Search. Search feed access is tier-gated.',
      },
        {
        title: 'Explore captured product metadata',
        description:
          'Every product is stored with its price, seller, brand, and category (including sub-category) at the time it was seen. This metadata is exposed in both tile and table mode.',
      },
      {
        title: 'The \'LIVE\' indicator',
        description:
          'LIVE means this tab is actively listening for new products identified by the extension - no manual refreshing of the Console required',
      },
      {
        title: 'Use grid and table modes',
        description:
          'Grid is best for browsing products quickly/at a glance. Table is best for sorting and filtering by title, seller, price etc.',
      },
      {
        title: 'Resize product tiles and inspect info icons',
        description:
          'Tile size control is available in grid mode. Use the info icon on products to see sent/skipped/failed notification details.',
      },
      {
        title: 'Coming soon: AI drops',
        highlight: 'accent',
        description:
          'Coming soon: I\'ve been playing with the idea of adding an AI Drops feature within the Products tab which would be a live view of all new products as they appear during a drop. The aim would be to see all new items as they drop, as a live feed, and naturally you\'d be able to access this easily from anywhere via the Console.',
      },
      {
        title: 'Products tab in action',
        description:
          'Use these views as your baseline: slate-theme tiles for fast browsing and light-theme table mode for detailed sorting.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/products/products-feed-filter-pills.png',
            alt: 'Products slate-theme tile view',
          },
          {
            src: '/docs-images/products/products-grid-and-table-views.png',
            alt: 'Products light-theme table view',
          },
        ],
      },
    ],
  },
  {
    slug: 'extension-popup',
    title: 'Extension Guide',
    section: 'extensions',
    summary: 'A walkthrough of the extension settings — the control panel for all monitoring, interval, and alert settings.',
    readTime: '5 min read',
    body: [
      {
        title: 'Opening the popup for quick-settings',
        description:
          'Click the Divine Monitor icon in your Chrome toolbar to open the popup for the quick-settings. If the icon is not visible, click the extensions puzzle piece and pin Divine Monitor. The popup is the quick control for toggling on and off the extension, RFY/Search, and adding in new search terms.',
      },
      {
        title: 'Global enable/disable',
        description:
          'The toggle at the top of the popup enables or disables all monitoring globally. When disabled, none of your Vine data will be monitored and will therefore not appear in the Console.',
      },
      {
        title: 'Per-feed status indicators',
        description:
          'Below the global toggle, each feed — RFY, Search, Reviews, Account, and All Items — shows its current status. A green indicator means the feed is actively polling. A quiet-mode indicator means the feed is running at reduced cadence inside a quiet window. A grey indicator means the feed is paused or unavailable on your tier.',
      },
      {
        title: 'RFY and Search feed sections',
        description:
          'Expand the RFY or Search section to access deeper controls. For RFY, configure refresh intervals (tiered feature) and quiet windows (free tier). For Search (plus tier), swap between "Spread" and "Burst" (pro tier) mode, toggle quiet window, and add/remove search terms.',
      },
      {
        title: 'Managing Search terms',
        description:
          'Expand the Search section to add or remove search terms. Plus supports up to 5 terms and Pro supports up to 10. Choose Spread or Burst mode per the Search Monitoring doc.',
      },
    ],
  },
  {
    slug: 'space-saving-mode',
    title: 'Vine Page Enhancements',
    section: 'extensions',
    summary: 'Everything the extension does to the Vine page UI —  opt-out protection, multi-photo upload for reviews, and Space Saving Mode.',
    notice: React.createElement('span', null,
      React.createElement('span', { 'aria-hidden': 'true' }, 'ⓘ '),
      'These enhancements will remain completely free, I have no intention of charging for these improvements. As a Viner I understand how much time we spend on these pages and how these little improvements can make a huge difference.'
    ),
    readTime: '4 min read',
    body: [
      {
        title: 'Disable Vine opt-out button',
        description:
          'The extension disables the Vine opt-out button on your Amazon Vine pages across all tiers, active from the moment the extension is installed. This prevents accidental opt-out with no configuration required — the button remains visible but cannot be clicked.',
      },
      {
        title: 'Amazon review multi-photo upload',
        description:
          'Adds a "Multi-Photo Upload" button to the review creation page, so you can bulk-pick photos in one go instead of the painful one-by-one process we are all used to. It respects Amazon\'s current photo limit. It can be disabled in the extension settings.',
      },
      {
        title: 'Vine page enhancements (Space Saving)',
        description:
          'Space Saving Mode hides Amazon ads and browsing history in the lower portion of the page, hides the side order flyer, and removes the category sections on RFY and AFA pages to reclaim horizontal space. It also hides the Amazon deals header at the top of the page, reduces extra vertical whitespace between elements, and compacts product tiles — significantly transforming the default Vine tab layout.',
      },
      {
        title: 'Enhancement screenshots',
        description:
          'Screenshots showing the disabled opt-out button, multi-photo upload, and the Vine page before and after Space Saving Mode is applied.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/space-saving-before.png',
            alt: 'Space Saving mode before view',
            caption: 'Before',
          },
          {
            src: '/docs-images/extension/space-saving-after.png',
            alt: 'Space Saving mode after view',
            caption: 'After',
          },
          {
            src: '/docs-images/extension/extension-opt-out-button.png',
            alt: 'Amazon Vine opt-out button disabled by the extension',
            caption: 'Opt-out protection',
            className: 'docs-step-media--light',
          },
          {
            src: '/docs-images/extension/extension-review-photo-multi-upload.png',
            alt: 'Amazon review form showing the Divine Monitor multi-photo upload button',
            caption: 'Multi-photo upload',
          },
        ],
      },
    ],
  },
  {
    slug: 'rfy-monitoring',
    title: 'RFY Monitoring',
    section: 'extensions',
    summary: 'Everything about RFY monitoring configuration via the extension',
    readTime: '6 min read',
    body: [
      {
        title: 'Background RFY monitoring',
        description:
          'The extension refreshes your RFY feed in the background, with no open Vine tab required. New products are detected and written to the Divine Monitor Console automatically. This is the core monitoring mechanism that runs at all times while the extension is enabled (can be disabled at any time).',
      },
      {
        title: 'Notifications',
        description:
          'On Plus tier and above, RFY notifications can be configured so new matches are delivered in real time. Telegram notifications are supported on Plus and Pro, and Pro also adds email and browser push channels. Exclusions can be specified to reduce noise from unwanted categories/subcategories or keyword matches in titles.',
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
        title: 'RFY quiet window',
        description:
          'To reduce activity overnight (or for your time window of choice), you can configure a quiet window in the extension popup under the RFY section. During a quiet window the polling cadence drops significantly. Monitoring does not stop — it just checks less often. ',
      },
      {
        title: 'RFY screenshots',
        description:
          'Popup and settings views for RFY monitoring.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/rfy-extension-popup.png',
            alt: 'Extension popup with the RFY section expanded',
            caption: 'RFY popup',
            className: 'docs-step-media--portrait',
          },
          {
            src: '/docs-images/extension/rfy-extension-settings.png',
            alt: 'Divine Monitor extension RFY settings page',
            caption: 'RFY settings',
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
            'Search monitoring adds extra requests because each saved term needs checking. \'Spread\' and \'Burst\' both exist so you can choose how that activity is paced: Spread keeps it slower, smoother and safer, while Burst is faster but busier for short periods. The two modes exist to give you as much control as possible.'
          )
        ),
      },
      {
        title: 'Notifications',
        description:
          'Search monitoring is a Plus tier feature, so notifications can be configured to alert you when your saved search terms find new matches. Telegram notifications are available on Plus tier, and Pro also supports email and browser push notifications.',
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
        title: 'Search screenshots',
        description:
          'Popup and settings views for Search monitoring.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/search-extension-popup.png',
            alt: 'Extension popup with the Search section expanded',
            caption: 'Search popup',
            className: 'docs-step-media--portrait',
          },
          {
            src: '/docs-images/extension/search-extension-settings.png',
            alt: 'Divine Monitor extension Search settings page',
            caption: 'Search settings',
          },
        ],
      },
    ],
  },
  {
    slug: 'marketplace-support',
    title: 'Marketplace Support',
    section: 'extensions',
    beta: true,
    summary: 'Which Amazon Vine marketplaces Divine Monitor supports, how marketplace detection works, and what to expect if a feature is not yet available in your region.',
    notice:
      'Divine Monitor has been developed solely by a UK Viner and has therefore not yet been tested in other regions. Support has been added, but bugs may still be encountered. If you run into any bugs, please contact me via the form in the Divine Monitor Console.',
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
          'The extension detects your active marketplace automatically from the Amazon page URL — no manual configuration required.',
      },
      {
        title: 'Feature availability by marketplace',
        description:
          'Most features are available across marketplaces. Some features — such as Account monitoring and Review monitoring — will be rolled out progressively.',
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
        title: 'Analytics tab structure',
        description:
          'Top-level tabs are RFY, Account, Search, Reviews, and All Items.',
      },
      {
        title: 'Choose how much historic analytics you see',
        description:
          'You can choose how much history you want to see via the day selectors.',
      },
      {
        title: 'Use RFY preset views for focused analysis',
        description:
          'RFY includes four preset views: Overview (daily/hourly counts, heatmap, subcategories, brands), Price & Value (recommended value, price mix, signal trends), Timing Patterns (date-hour heatmap, weekday-hour heatmap, hourly and day-of-week breakdowns), and Catalog Mix (top categories, subcategories, brands, sellers). Each view is pre-arranged for a specific analytical focus, however charts can still be moved around and resized.',
      },
      {
        title: 'Resize and save your layout',
        description:
          'Open layout settings, enter edit mode, drag/resize widgets, then save. Layout preferences are saved per-view — each preset and the Custom view remembers its own arrangement independently.',
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
          'Use chart tooltips to understand what each chart is trying to show you. The expand button on each chart allows you to see the data more clearly.',
      },
      {
        title: 'RFY analytics and layouts in action',
        description:
          'This pair shows the live analytics experience across light and slate themes with the view and layout controls visible.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/analytics/analytics-main-subtabs.png',
            alt: 'RFY analytics in light theme',
          },
          {
            src: '/docs-images/analytics/analytics-rfy-view-tabs.png',
            alt: 'RFY analytics in slate theme',
          },
          {
            src: '/docs-images/analytics/analytics-rfy-price-light.png',
            alt: 'RFY price analytics in light theme',
          },
          {
            src: '/docs-images/analytics/analytics-rfy-price-slate.png',
            alt: 'RFY price analytics in slate theme',
          },
        ],
      },
    ],
  },
//   {
//     slug: 'search-analytics',
//     title: 'Search Analytics',
//     section: 'monitoring',
//     summary: 'How to use the Search analytics tab to understand your keyword feed — time windows, the widget grid, and saving layouts.',
//     readTime: '6 min read',
//     body: [
//       {
//         title: 'Open Analytics → Search',
//         description:
//           'The Search analytics tab is available on Plus and Pro. It provides the same draggable, resizable widget grid as RFY analytics, scoped to data from your Search monitoring feed. If you have no search terms configured yet, see the Search Monitoring doc first.',
//       },
//       {
//         title: 'Pick a time window',
//         description:
//           'Use the time window selector to set the lookback period for all widgets on the tab. Available windows follow your plan limits: 1 week on Free, 1 month on Plus, and up to 1 year on Pro.',
//       },
//       {
//         title: 'Read the widget grid',
//         description:
//           'Search analytics widgets include per-term breakdowns, daily and hourly product counts, category and brand distributions, and price analysis — mirroring the RFY analytics structure but filtered to your Search feed data. Widgets only show data for the terms that were active during the selected window.',
//       },
//       {
//         title: 'Customise and save your layout',
//         description:
//           'Enter layout edit mode to drag and resize widgets. Save the layout to persist your arrangement. The Search analytics layout is saved independently from your RFY layout so changes to one do not affect the other.',
//       },
//       {
//         title: 'Screenshot checklist',
//         description:
//           'Capture: Search analytics tab selected; time window selector open; widget grid with at least two widgets visible; layout edit mode active.',
//         images: [
//           {
//             src: '/docs-images/analytics/search-analytics-tab.png',
//             alt: 'Search analytics tab selected',
//           },
//           {
//             src: '/docs-images/analytics/search-analytics-widget-grid.png',
//             alt: 'Search analytics widget grid',
//           },
//           {
//             src: '/docs-images/analytics/search-analytics-layout-edit.png',
//             alt: 'Search analytics layout edit mode',
//           },
//         ],
//       },
//     ],
//   },
  {
    slug: 'account-monitoring',
    title: 'Account Monitoring',
    section: 'monitoring',
    summary: 'Monitor your Vine account via the Account analytics tab.',
    readTime: '6 min read',
    body: [
      {
        title: 'Read core KPIs',
        description:
          'Check Vine tier (Silver, Gold), review-to-order ratio, insightfulness, media rate, and eval-period progress.',
      },
      {
        title: 'Review trend charts',
        description:
          'Where possible, these stats are charted to understand how they change over time',
      },
        {
        title: 'Alerting (Beta)',
        description:
          'Currently alerts on insightfulness score changes - more coming soon.',
      },
      {
        title: 'Use eval period comparison (beta)',
        description:
          'Compare periods side by side to spot improvement or risk early.',
      },
      {
        title: 'Account analytics in action',
        description:
          'Use these paired screenshots to anchor the walkthrough across light and slate themes.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/account-monitoring/account-analytics-full-light.png',
            alt: 'Account analytics in light theme',
          },
          {
            src: '/docs-images/account-monitoring/account-analytics-full-slate.png',
            alt: 'Account analytics in slate theme',
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
        title: 'Review Journey Board',
        description:
          'The Journey Board is a kanban-style view of all in-flight reviews across three columns: Not Yet Reviewed, Submitted, and Pending Approval. Use it to see exactly where each review sits in its lifecycle at a glance. Also works in tandem with the clickable RAG tiles to quickly see the exact products requiring attention.',
      },
      {
        title: 'Count of reviews due in x days',
        description:
          'Shows several RAG tiles with counts of reviews due, eg overdue, due today, due tomorrow etc, to quickly see what is urgent at a glance. Clicking each filters the Journey board. ',
      },
      {
        title: 'Review monitoring in action',
        description:
          'A quick light-vs-slate visual comparison of the Reviews experience across analytics tiles and the review list.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/reviews/reviews-journey-board-light.png',
            alt: 'Review monitoring board in light theme',
          },
          {
            src: '/docs-images/reviews/reviews-journey-board-slate.png',
            alt: 'Review monitoring board in slate theme',
          },
        ],
      },
    ],
  },
  {
    slug: 'ai-all-items-monitoring',
    title: 'All Items Monitoring',
    section: 'monitoring',
    summary: 'Follow all-items behavior over time using the All Items analytics tab.',
    readTime: '6 min read',
    body: [
      {
        title: 'All Items monitoring ',
        description:
          'Exposes metrics on All Items total counts, counts by product, identifies drop times and exposes heatmaps.',
      },
      {
        title: 'Total Counts',
        description:
          'Captures counts every 15 minutes, and charts the drop velocity to identify drop events (whether big or small). Powerful when viewed over time to observe when drops are occurring. ',
      },
      {
        title: 'Counts by category',
        description:
          'Similar to Total Counts, except charts the count of each particular category every 15 minutes. Can show or hide the legend and expand the chart for easier viewing.',
      },
      {
        title: 'Top Drops (Events)',
        description:
          'Identifies the largest drop events in your selected time window',
      },
      {
        title: 'All Items analytics in action',
        description:
          'Use these paired screenshots to anchor the walkthrough: light-theme overview and slate-theme velocity-focused view.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/ai/ai-window-selector.png',
            alt: 'All Items analytics in light theme',
          },
          {
            src: '/docs-images/ai/ai-product-counts-velocity-toggle.png',
            alt: 'All Items analytics in slate theme',
          },
        ],
      },
    ],
  },
  {
    slug: 'notifications-configuration',
    title: 'Notifications Configuration',
    section: 'settings',
    summary: 'Configure active notification channels and feeds.',
    readTime: '9 min read',
    body: [
              {
        title: 'Set global preferences',
        description:
          'Set timezone (which will be used for scheduled alerts) and global enable/disable.',
      },
      {
        title: 'Telegram',
        description:
          'Links your Telegram account, lets you enable/disable the channel, and supports test sends for instant mobile delivery.',
      },
        {
        title: 'Email',
        description:
          'Sends notifications to your supplied email address for enabled feeds',
      },
      {
        title: 'Browser Notifications',
        description: React.createElement(React.Fragment, null,
          'Registers this browser/device for real-time push alerts, with per-device management and test sends. See ',
          React.createElement('a', { href: '/docs/notification-devices' }, 'Browser Push & Device Management'),
          ' for the full setup guide.'
        ),
      },
      {
        title: 'Product Alerts',
        description:
          'Controls whether RFY and Search product sources can trigger notifications on enabled channels.',
      },
      {
        title: 'Review Alerts',
        description:
          'Master toggle for the Reviews feed, including digest and rejected-review notifications.',
      },
      {
        title: 'Review Digest',
        description:
          'Schedules recurring summaries of outstanding reviews at various points in the future (eg overdue, due today, due tomorrow etc) with configurable frequency and review window.',
      },
      {
        title: 'Review Alerts',
        description:
          'Sends notifications when a review is marked as not approved so you can respond quickly.',
      },
      {
        title: 'Account Alerts',
        description:
          'Master toggle for account-monitoring notifications and related account event alerts.',
      },
      {
        title: 'Evaluation period monitoring',
        description:
          'Sets how many weeks before your evaluation date account-alert monitoring should become active.',
      },
      {
        title: 'Evaluation period reminders',
        description:
          'Sends reminders as your evaluation date approaches, with daily or weekly cadence. Useful as a reminder if you want to get all reviews cleared.',
      },
      {
        title: 'Ratio warning alerts',
        description:
          'Notifies when your review-to-order ratio drops below warning thresholds during the configured monitoring window. Critical if you\'re trying to maintain Gold and your evaluation date is approaching',
      },
      {
        title: 'Other account alerts',
        description:
          'Controls additional account notifications such as insightfulness changes and anniversary reminders.',
      },
      {
        title: 'Validate with Recent Activity',
        description:
          'The Recent Activity tab shows a full delivery history for all notification events. Filter by channel (email, push, Telegram) and by status (sent, skipped, failed) to confirm your setup is working after any configuration change. Each row shows the event type, channel used, delivery status, and timestamp — use this to diagnose missing or unexpected notifications.',
      },
      {
        title: 'Notifications configuration screenshots',
        description:
          'Channel and feed configuration views in both light and slate themes.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/notifications-channels-light.png',
            alt: 'Notifications configuration channels view in light theme',
            caption: 'Channels light',
            className: 'docs-step-media--notification-screen',
          },
          {
            src: '/docs-images/extension/notifications-feeds-slate.png',
            alt: 'Notifications configuration feeds view in slate theme',
            caption: 'Feeds slate',
            className: 'docs-step-media--notification-screen',
          },
          {
            src: '/docs-images/extension/review-digest-email.png',
            alt: 'Review digest notification shown in email',
            caption: 'Review digest email',
            className: 'docs-step-media--notification-screen',
          },
          {
            src: '/docs-images/extension/review-digest-telegram.jpeg',
            alt: 'Review digest notification shown in Telegram',
            caption: 'Review digest Telegram',
            className: 'docs-step-media--notification-screen',
          },
        ],
      },
    ],
  },
  {
    slug: 'notification-filters',
    title: 'Notification Filters',
    section: 'settings',
    summary: 'Define keyword and category exclusions to reduce notification noise and focus alerts on items you actually care about.',
    readTime: '5 min read',
    body: [
      {
        title: 'What notification filters do',
        description:
          'Instead of receiving a notification for every new RFY or Search item, filters let you skip items whose titles contain certain keywords or whose categories you are not interested in. Filters apply to notifications only, products still appear in the Divine Monitor Console feed.',
      },
      {
        title: 'Title exclude filters',
        description:
          'When a product\'s title contains any of your excluded keywords, its notification is suppressed. Matching is case-insensitive.',
      },
      {
        title: 'Category exclude filters',
        description:
          'Similar to title filters, except the match is on category or sub-categories. ',
      },
      {
        title: 'Notification filter screenshots',
        description:
          'Excluded keyword filters configured in the Notifications settings.',
        hideTextWhenImages: true,
        images: [
          {
            src: '/docs-images/extension/notification-exclude-keywords.png',
            alt: 'Notification filters page showing excluded title keywords',
            caption: 'Excluded title keywords',
            className: 'docs-step-media--half',
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
          'Browser push notifications are available on Pro. They deliver alerts directly to your browser on any registered device, even when the Divine Monitor Console tab is not open, as long as the browser is running. These notifications are heavily dependent on browser and machine level notification settings.',
      },
      {
        title: 'Registering a device',
        description:
          'Open Notifications → Channels and expand the Browser Push card. Click Enable push on this device to register your current browser. Your browser will prompt you to allow notifications — you must accept for push to work. Once registered, the device appears in your device list.',
      },
      {
        title: 'Device limit',
        description:
          'If you reach the limit of registered devices, you must remove an existing device before adding a new one. The device list shows each registered device with the browser and approximate registration time.',
      },
      {
        title: 'Removing a device',
        description:
          'In the device list, click Remove next to any device you no longer want to receive push alerts. The device is deregistered immediately — push notifications to that browser will stop on the next event. You can re-register the same device later if needed.',
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
        title: 'Connect or reconnect to Patreon',
        description:
          'Use the Billing card to connect your Patreon account and confirm your tier. Ensure you\'re logged into your Patreon account already on the same browser, subscribe to tier of your choice, then you can connect your Divine Monitor account via the Connect button. ',
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
    ],
  },
]
