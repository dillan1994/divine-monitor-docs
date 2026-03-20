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
    text: "I'm a full-time software engineer and an Amazon Vine member. For a while my setup for staying on top of new products was genuinely embarrassing: a patchwork of auto-refresh extensions, complex regex trying to detect new listings, and constant tweaking to avoid duplicate alerts for things I wasn't even interested in. It kind of worked, but it was fragile. I wanted something that actually held together: notifications that fired when they should, history I could check from any device, simple enough to just use. So I built it.",
  },
  {
    key: 'growth',
    text: "That was years ago, and it stayed private for a long time. The moment it really clicked was when the notifications became genuinely good. An alert for something I actually wanted, at the right moment. But it wasn't just RFY.. I'm busy and reviews slip easily, so getting a daily notification of exactly what was overdue, due soon, or rejected, became something I relied on. Once it was working reliably, I kept thinking other Viners would get real value from it, so I rebuilt the whole thing properly (smarter extension, fully cloud-native backend) and opened it up.",
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
    heading: 'Real-time RFY alerts',
    body: 'Know the moment your product enters or exits a Recommended for You feed — on every tier, no polling delays.',
  },
  {
    icon: '🔔',
    heading: 'Multi-channel notifications',
    body: 'Push alerts to Email, Discord, or Slack. Configure per-module rules so you only hear about what matters.',
  },
  {
    icon: '📊',
    heading: 'Analytics that go deep',
    body: 'Track RFY trends, search placement, and account health over 1 week, 1 month, or 3 months depending on your plan.',
  },
  {
    icon: '📋',
    heading: 'Product & review history',
    body: 'Browse day-by-day product history and review activity without leaving the console.',
  },
  {
    icon: '🌐',
    heading: 'Console anywhere',
    body: 'The Divine Monitor Console works in your browser. Up to 6 concurrent sessions on Pro — share access with your team.',
  },
  {
    icon: '🆓',
    heading: 'Free tier that\'s actually useful',
    body: 'RFY monitoring, 2 console sessions, and core notifications — no credit card required to get started.',
  },
]