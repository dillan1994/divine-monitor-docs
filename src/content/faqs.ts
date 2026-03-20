export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What is Divine Monitor?',
    answer:
      'Divine Monitor is a notification and analytics platform for your Vine account, designed to turn account activity into actionable insights. \
      Whether it\'s monitoring product drops, staying on top of reviews, tracking changes to your account status, or simply viewing your own \
      historic recommendations, Divine Monitor has been designed to do this all in the most simple, user-friendly way possible.',
  },
  {
    question: 'How can I view my data?',
    answer:
      'Divine Monitor includes a rich, modern web-based global dashboard you can access from any browser. \
       Concurrent browser sessions are tier-based: Free supports up to 2 browsers, Plus up to 4, and Pro up to 6.',
  },
    {
    question: 'Does it support alerting and notifications?',
    answer:
      'Yes, and this is where Divine Monitor shines. You can configure notifications for your RFY feed, custom Search terms, outstanding review reminders, \
      changes to account status, and more! Notifications are currently supported via Telegram, Email, and multi-device browser notifications. \
      Most importantly, the setup is designed to be simple, perfect for non-technical users.',
  },
    {
    question: 'What are the analytics?',
    answer:
      'This is a core Divine Monitor feature. It provides rich, customisable metrics and visualisations that break down your product recommendations over time, to reveal \
       insights into your personal algorithm that would otherwise be hard to track. For example: Which products is Amazon recommending to you? \
       Which categories and brands appear most? What times and days bring your most valuable recommendations? And how do these trends shift over \
       a week, month, or longer? This is just a glimpse of what Divine Monitor can uncover.',
  },
    {
    question: 'Is it safe?',
    answer:
      'The Chrome extension is designed to safely extract and store only the data needed, with everything else handled in the global Console. \
      What sets Divine Monitor apart is its account-safe approach: no one-click ordering, no direct Amazon API calls, and full control over \
      how data is collected through the customisable extension.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Open the Docs tab and follow the Quickstart guide. You can go from setup to first monitored event in a few minutes.',
  },

]
