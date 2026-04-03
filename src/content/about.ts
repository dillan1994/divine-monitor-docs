/* ─────────────────────────────────────────────────────────────────
   About page — sections & content
   ───────────────────────────────────────────────────────────────── */

export interface AboutSection {
  slug: string
  label: string
  /** Single-word category shown in the sidebar header */
  group: string
  /** Short heading shown in the main area */
  title: string
  /** One-line subtitle / lede */
  subtitle: string
  /** Whether this section has real content (false = placeholder) */
  ready: boolean
}

export const aboutSections: AboutSection[] = [
  {
    slug: 'story',
    label: 'My Story',
    group: 'About',
    title: 'Built for myself, shared with you',
    subtitle: 'A private tool that I felt got too good to keep to myself.',
    ready: true,
  },
]

/* My Story paragraphs */
export const STORY_PARAGRAPHS = [
  {
    key: 'origin',
    text: "I'm a full-time Software Engineer and an Amazon Vine Voice living in London. For a long time I my setup for monitoring my Vine feeds was a mess of generic auto-refresh extensions, complex regex trying to detect new products, and tweaking to avoid alerts for products I wasn't interested in or I'd already seen before. It worked to an extent, but was fragile, and I wanted something that was reliable and simple - notifications that fired when they were supposed to, my own history I could check from any device, and something that was simple and just worked. So I built it.",
  },
  {
    key: 'growth',
    text: "That was years ago, and it stayed private for a long time. The moment it really clicked was when the notifications became genuinely good, e.g an alert for something I actually wanted, at the right moment, or daily review reminders summarising what I need to action immediately. Once it was working reliably, I kept thinking other Viners would get real value from it, so I rebuilt the whole thing to be smarter and more resilient, and decided to open it up.",
  },
  {
    key: 'safety',
    text: "I'm protective of my own Vine account, and that shapes everything I build. Refresh intervals are conservative by default. The extension backs off gracefully, has quiet windows, doesn't run hot. And there are things I won't build (one-click ordering, anything that pushes into grey areas) because I use this on my own account every day.",
  },
  {
    key: 'free-tier',
    text: "The free tier took a while to decide on as the infrastructure and maintenance costs are real.. the obvious move would have been to gate most things. But the Vine community has given me a lot, and I saw this as an opportunity to give something back worth using. So I absorbed a lot of the cost. RFY monitoring, product history, analytics, global dashboard access, all free. The core Vine page enhancements are free too (hiding distracting elements, optimising space, multi photo upload during reviews). Things like hiding the opt-out button, now that one is personal. I know the anxiety of seeing it sitting there, waiting to be accidentally clicked. I wanted to remove that for anyone who gets the same feeling.",
  },
]

export const STORY_VALUES = [
  { icon: '🛡️', label: 'Safety first, always' },
  { icon: '✦', label: 'Simple over clever' },
  { icon: '🆓', label: 'Generous free access' },
  { icon: '🛠️', label: 'Built for myself, shared with you' },
]

/* Overview selling points — used by the Overview section */
export interface SellingPoint {
  icon: string
  heading: string
  body: string
}

export const SELLING_POINTS: SellingPoint[] = [
  {
    icon: '⚡',
    heading: 'Real-time alerts - multiple channels',
    body: 'Get RFY and Search alerts, review reminders and more. Simple to configure. Filter out alerts that you don\'t want to see. Available via Telegram app, Email, or Browser push notifications.',
  },
  {
    icon: '🌐',
    heading: 'Your data anywhere',
    body: 'Access your Vine data from anywhere via the Divine Monitor Console — a rich, interactive web dashboard.',
  },
  {
    icon: '📊',
    heading: 'Analytics that go deep',
    body: 'Track RFY trends, account health, review stats, All Items product counts, and more. Dig into price history, brands, sellers, and categories — and see how they shift over time.',
  },

  {
    icon: '🆓',
    heading: 'Free tier that\'s actually useful',
    body: 'RFY monitoring, product metadata capture, Vine history accessible from anywhere, analytics and several Vine page quality-of-life improvements. All for free.',
  },
  {
    icon: '🏷️',
    heading: 'Rich product metadata',
    body: 'Every product is captured with price, seller, brand, and category — including sub-category. Tracked over time, these details reveal patterns that a simple product list never could.',
  },

]
