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
    title: 'Built by a Viner, for Viners',
    subtitle: 'A private tool that got too good to keep to myself.',
    ready: true,
  },
]

/* My Story paragraphs */
export const STORY_PARAGRAPHS = [
  {
    key: 'origin',
    text: "I'm a full-time Software Engineer and an Amazon Vine Voice living in London. For a long time I had a pretty embarrassing setup for staying on top of new products. It was a patchwork of generic auto-refresh extensions, complex regex trying to detect new products, and tweaking to avoid alerts for products I wasn't interested in, or that I had seen before. It worked to an extent, but was fragile. I wanted something that was reliable and simple - notifications that fired when they were supposed to, my own history I could check from any device, and something that just worked. So I built it.",
  },
  {
    key: 'growth',
    text: "That was years ago, and it stayed private for a long time. The moment it really clicked was when the notifications became genuinely good, e.g an alert for something I actually wanted, at the right moment, or daily review reminders (we're all busy!) summarising what was overdue, due soon, or rejected. Once it was working reliably, I kept thinking other Viners would get real value from it, so I rebuilt the whole thing properly (smarter extension, fully cloud-native backend) and decided to open it up.",
  },
  {
    key: 'safety',
    text: "I'm protective of my own Vine account, and that shapes everything I build. Refresh intervals are conservative by default. The extension backs off gracefully, has quiet windows, doesn't run hot. And there are things I won't build (one-click ordering, anything that pushes into grey areas) because I use this on my own account every day.",
  },
  {
    key: 'free-tier',
    text: "The free tier took a while to land on. Infrastructure costs are real, and the obvious move would have been to gate most things. But the Vine community has given me a lot, and I wanted to give something back worth using. So I absorbed the cost. RFY monitoring, product history, analytics, global dashboard access, all free. The core Vine page enhancements are free too. Things like hiding the opt-out button, now that one is personal. I know the anxiety of seeing it sitting there, waiting to be accidentally clicked. I wanted to remove that for anyone who gets knows the feeling.",
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
    heading: 'Real-time alerts',
    body: 'Get RFY and Search alerts, review reminders and more. Simple to configure. Filter out alerts that you don\'t want to see.',
  },
  {
    icon: '🌐',
    heading: 'Your data anywhere',
    body: 'Access your data anywhere via the Divine Monitor Console, via your browser. Up to 6 concurrent sessions on Pro.',
  },
  {
    icon: '🔔',
    heading: 'Multi-channel notifications',
    body: 'Push alerts to Telegram, Email, or Browser notifications. Configure per-module rules so you only hear about what matters.',
  },
  {
    icon: '📊',
    heading: 'Analytics that go deep',
    body: 'Track your personal RFY trends, account health, review stats, AI product counts and more.',
  },
  {
    icon: '📋',
    heading: 'Product history & review activity',
    body: 'Browse day-by-day product history and review activity without leaving the console.',
  },

  {
    icon: '🆓',
    heading: 'Free tier that\'s actually useful',
    body: 'RFY monitoring, 2 console sessions, analytics, and several Vine page quality-of-life improvements.',
  },
]