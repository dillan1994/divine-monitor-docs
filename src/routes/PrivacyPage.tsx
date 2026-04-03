import type React from 'react'

export function PrivacyPage() {
  return (
    <div className="terms-page">
      <div className="terms-inner">
        <div className="terms-header">
          <div className="section-eyebrow">Legal</div>
          <h1 className="terms-title">Privacy Policy</h1>
          <p className="terms-subtitle">
            This policy explains what Divine Monitor collects, how it is used, and
            how the Chrome extension and web service handle your data.
          </p>
          <div className="terms-meta-row">
            <span className="terms-meta-item">
              <span className="terms-meta-label">Last updated</span>
              <span className="terms-meta-value">3 April 2026</span>
            </span>
            <span className="terms-meta-sep" aria-hidden="true" />
            <span className="terms-meta-item">
              <span className="terms-meta-label">Version</span>
              <span className="terms-meta-value">1.0</span>
            </span>
            <span className="terms-meta-sep" aria-hidden="true" />
            <span className="terms-meta-item">
              <span className="terms-meta-label">Jurisdiction</span>
              <span className="terms-meta-value">United Kingdom / GDPR</span>
            </span>
          </div>
        </div>

        <div className="terms-notice">
          <div className="terms-notice-icon" aria-hidden="true">i</div>
          <p>
            This Privacy Policy applies to the Divine Monitor website, web app,
            and Chrome extension. It covers data collected directly from you,
            data processed when the extension monitors Amazon Vine pages, and
            data stored locally in your browser as part of normal product use.
          </p>
        </div>

        <div className="terms-toc">
          <div className="terms-toc-label">Contents</div>
          <ol className="terms-toc-list">
            {TOC_ITEMS.map((item, index) => (
              <li key={item.anchor}>
                <a href={`#${item.anchor}`} className="terms-toc-link">
                  <span className="terms-toc-num">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="terms-sections">
          {SECTIONS.map((section, index) => (
            <section className="terms-section" id={section.anchor} key={section.anchor}>
              <div className="terms-section-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="terms-section-body">
                <h2 className="terms-section-heading">{section.title}</h2>
                <div className="terms-section-content">{section.content}</div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

const TOC_ITEMS = [
  { anchor: 'controller', label: 'Who controls your data' },
  { anchor: 'collect', label: 'What we collect' },
  { anchor: 'local-storage', label: 'What stays in your browser' },
  { anchor: 'use', label: 'How we use the data' },
  { anchor: 'share', label: 'Who we share it with' },
  { anchor: 'legal-basis', label: 'Legal bases' },
  { anchor: 'retention', label: 'Retention' },
  { anchor: 'choices', label: 'Your choices and rights' },
  { anchor: 'security', label: 'Security' },
  { anchor: 'contact', label: 'Contact' },
]

const SECTIONS: Array<{ anchor: string; title: string; content: React.ReactNode }> = [
  {
    anchor: 'controller',
    title: 'Who controls your data',
    content: (
      <>
        <p>
          Divine Monitor is the controller of the personal data described in this
          policy when we decide why and how that data is processed.
        </p>
        <p>
          Divine Monitor is independently operated by its creator under the
          Divine Monitor name.
        </p>
        <p>
          If you have questions about this policy or how your data is handled,
          you can contact <a href="mailto:support@divinemonitor.com" className="terms-inline-link">support@divinemonitor.com</a>.
        </p>
      </>
    ),
  },
  {
    anchor: 'collect',
    title: 'What we collect',
    content: (
      <>
        <p>We collect and process the following categories of data.</p>
        <p>
          <strong>Account and sign-in data.</strong> When you sign in to Divine
          Monitor, we process your account identifier, email address, sign-in
          provider, and session/authentication data needed to keep the service
          working.
        </p>
        <p>
          <strong>Amazon Vine monitoring data.</strong> If you enable monitoring,
          the Chrome extension reads Amazon Vine and related Amazon pages that you
          are already authorised to access in your own browser session. Depending
          on the features you use, this can include product details, search terms
          you configure, review information, order information, account summary
          information, and marketplace or locale information.
        </p>
        <p>
          <strong>Review monitoring data.</strong> If you enable review tracking,
          the extension may process information shown on Amazon review pages, such
          as product references, dates, statuses, and related page links.
        </p>
        <p>
          <strong>Order and account snapshot data.</strong> If you enable order or
          account monitoring, the extension may process order details and account
          summary information made available to you on supported Amazon pages.
        </p>
        <p>
          <strong>AI category count data.</strong> If you enable AI category
          scraping, the extension may process category names, counts, and related
          page context from supported Amazon Vine pages.
        </p>
        <p>
          <strong>Technical and diagnostic data.</strong> The extension may send
          limited diagnostics to Divine Monitor, such as error details, request
          context, marketplace context, and extension version information.
        </p>
        <p>
          <strong>Support data.</strong> If you contact support, we may process
          the details you provide, such as your email address, message content,
          screenshots, and any logs you intentionally submit.
        </p>
      </>
    ),
  },
  {
    anchor: 'local-storage',
    title: 'What stays in your browser',
    content: (
      <>
        <p>
          The extension stores data locally in Chrome to operate correctly and to
          preserve your settings between sessions.
        </p>
        <p>
          This local data can include your extension settings, configured search
          terms, background and UI preferences, recent monitoring state, and
          cached data needed for the extension to work smoothly and avoid
          duplicate processing.
        </p>
        <p>
          The extension also stores your Divine Monitor authentication state in
          Chrome local storage, including your account identifier, email address,
          sign-in provider, session/authentication data, and related expiry
          information.
        </p>
      </>
    ),
  },
  {
    anchor: 'use',
    title: 'How we use the data',
    content: (
      <>
        <p>We use this data to provide and operate Divine Monitor.</p>
        <p>
          This includes authenticating your account, applying your plan
          entitlements, monitoring Amazon Vine pages you choose to monitor,
          syncing monitoring events to your Divine Monitor account, generating
          dashboards and analytics, diagnosing failures, enforcing usage limits,
          improving stability, and responding to support requests.
        </p>
        <p>
          We do not collect Amazon passwords through the extension. The extension
          works using the Amazon pages already available in your own browser
          session.
        </p>
      </>
    ),
  },
  {
    anchor: 'share',
    title: 'Who we share it with',
    content: (
      <>
        <p>
          We share data only where needed to provide the service or comply with
          law.
        </p>
        <p>
          <strong>Service providers.</strong> Divine Monitor uses third-party
          providers to help with authentication, hosting, storage, delivery, and
          support of the service.
        </p>
        <p>
          <strong>Authentication providers.</strong> Sign-in may involve external
          identity providers you choose to use.
        </p>
        <p>
          <strong>Websites you choose to monitor.</strong> The extension makes
          requests to supported Amazon domains using your own browser session.
        </p>
        <p>
          We do not sell your personal data. We do not share extension data with
          advertisers for advertising purposes.
        </p>
      </>
    ),
  },
  {
    anchor: 'legal-basis',
    title: 'Legal bases',
    content: (
      <>
        <p>
          Where UK GDPR or EU GDPR applies, we generally rely on the following
          legal bases:
        </p>
        <p>
          <strong>Contract.</strong> Processing needed to provide the Divine
          Monitor service you asked us to provide.
        </p>
        <p>
          <strong>Legitimate interests.</strong> Processing needed to secure,
          improve, monitor, and support the service, provided those interests are
          not overridden by your rights.
        </p>
        <p>
          <strong>Legal obligation.</strong> Processing needed to comply with
          applicable law.
        </p>
      </>
    ),
  },
  {
    anchor: 'retention',
    title: 'Retention',
    content: (
      <>
        <p>
          We keep personal data for as long as reasonably necessary to operate the
          service, maintain user accounts, provide support, enforce the Terms, and
          meet legal or accounting requirements.
        </p>
        <p>
          Some operational data is short-lived by design, while other service
          records may be retained for longer while your account remains active.
        </p>
        <p>
          Data stored locally in your browser remains under your control and can
          be removed by clearing extension storage or uninstalling the extension.
        </p>
      </>
    ),
  },
  {
    anchor: 'choices',
    title: 'Your choices and rights',
    content: (
      <>
        <p>
          You can choose which monitoring features to enable, configure search
          terms and quiet windows, sign out of the extension, or uninstall the
          extension at any time.
        </p>
        <p>
          If you are in the UK, EEA, or another jurisdiction with applicable
          privacy rights, you may have rights to request access, correction,
          deletion, restriction, objection, or portability, subject to the limits
          set by law.
        </p>
        <p>
          To make a privacy request, contact{' '}
          <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
            support@divinemonitor.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    anchor: 'security',
    title: 'Security',
    content: (
      <>
        <p>
          We use reasonable technical and organisational measures to protect the
          data we process. No system can be guaranteed to be completely secure,
          but we work to limit access, reduce unnecessary data collection, and
          protect service data in transit and at rest where applicable.
        </p>
      </>
    ),
  },
  {
    anchor: 'contact',
    title: 'Contact',
    content: (
      <>
        <p>
          For privacy questions, requests, or complaints, contact{' '}
          <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
            support@divinemonitor.com
          </a>
          .
        </p>
        <p>
          For general product support, you can use the contact page at{' '}
          <a href="/contact" className="terms-inline-link">/contact</a> or email{' '}
          <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
            support@divinemonitor.com
          </a>
          .
        </p>
      </>
    ),
  },
]
