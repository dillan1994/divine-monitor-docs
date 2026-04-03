import type React from 'react'

export function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-inner">
        <div className="terms-header">
          <div className="section-eyebrow">Legal</div>
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-subtitle">
            These terms govern your use of the Divine Monitor website, app, and
            browser extension.
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

        {/* Intro banner */}
        <div className="terms-notice">
          <div className="terms-notice-icon" aria-hidden="true">§</div>
          <p>
            These Terms &amp; Conditions ("<strong>Terms</strong>") govern your access to and use of
            Divine Monitor ("<strong>the Service</strong>"). By creating an
            account, installing the extension, or otherwise using the Service,
            you agree to be bound by these Terms and our{' '}
            <a href="/privacy" className="terms-inline-link">
              Privacy Policy
            </a>
            . If you do not agree, do not use the Service.
          </p>
          <p>
            Divine Monitor is independently operated by its creator under the
            Divine Monitor name.
          </p>
        </div>

        <div className="terms-toc">
          <div className="terms-toc-label">Contents</div>
          <ol className="terms-toc-list">
            {TOC_ITEMS.map((item, i) => (
              <li key={item.anchor}>
                <a href={`#${item.anchor}`} className="terms-toc-link">
                  <span className="terms-toc-num">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="terms-sections">
          {SECTIONS.map((section, idx) => (
            <section className="terms-section" id={section.anchor} key={section.anchor}>
              <div className="terms-section-num" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="terms-section-body">
                <h2 className="terms-section-heading">{section.title}</h2>
                <div className="terms-section-content">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="terms-footer-note">
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
              support@divinemonitor.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Table of contents items ─────────────────────────────────────────── */
const TOC_ITEMS = [
  { anchor: 'definitions', label: 'Definitions' },
  { anchor: 'eligibility', label: 'Eligibility &amp; Account Registration' },
  { anchor: 'service', label: 'Description of Service' },
  { anchor: 'acceptable-use', label: 'Acceptable Use' },
  { anchor: 'subscriptions', label: 'Subscriptions &amp; Billing' },
  { anchor: 'intellectual-property', label: 'Intellectual Property' },
  { anchor: 'data-privacy', label: 'Data Privacy &amp; GDPR' },
  { anchor: 'data-retention', label: 'Data Retention' },
  { anchor: 'third-parties', label: 'Third-Party Services' },
  { anchor: 'disclaimers', label: 'Disclaimers &amp; Limitation of Liability' },
  { anchor: 'indemnification', label: 'Indemnification' },
  { anchor: 'termination', label: 'Termination' },
  { anchor: 'changes', label: 'Changes to These Terms' },
  { anchor: 'governing-law', label: 'Governing Law' },
  { anchor: 'contact', label: 'Contact Information' },
]

/* ─── Section content ──────────────────────────────────────────────────── */
const SECTIONS: Array<{ anchor: string; title: string; content: React.ReactNode }> = [
  {
    anchor: 'definitions',
    title: 'Definitions',
    content: (
      <>
        <p>For the purposes of these Terms:</p>
        <dl className="terms-dl">
          <dt>"Service"</dt>
          <dd>
            Refers to the Divine Monitor platform, including the website, web
            app, browser extension, and related features we make available.
          </dd>
          <dt>"User" / "you"</dt>
          <dd>
            Any individual or entity that accesses or uses the Service, whether
            on a free or paid plan.
          </dd>
          <dt>"Content"</dt>
          <dd>
            Any data, text, information, or materials you submit to or through
            the Service.
          </dd>
          <dt>"Personal Data"</dt>
          <dd>
            Any information relating to an identified or identifiable natural person, as defined
            under the UK GDPR and EU GDPR.
          </dd>
        </dl>
      </>
    ),
  },
  {
    anchor: 'eligibility',
    title: 'Eligibility & Account Registration',
    content: (
      <>
        <p>
          You must be at least 18 years old, or otherwise capable of entering
          into a binding agreement in your jurisdiction, to use the Service. If
          you create an account, you must provide accurate information and keep
          it up to date.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and for activity that occurs under your account. We may
          suspend or restrict accounts that are fraudulent, misleading, or used
          in breach of these Terms.
        </p>
      </>
    ),
  },
  {
    anchor: 'service',
    title: 'Description of Service',
    content: (
      <>
        <p>
          Divine Monitor provides monitoring, analytics, and alerting tools for
          supported Amazon Vine workflows. Features, limits, and availability may
          vary by plan, account status, region, and technical compatibility.
        </p>
        <p>
          We may add, remove, modify, or suspend parts of the Service from time
          to time. Where practical, we will give reasonable notice of material
          changes, but we may act immediately where required for security,
          stability, legal compliance, or third-party dependency changes.
        </p>
      </>
    ),
  },
  {
    anchor: 'acceptable-use',
    title: 'Acceptable Use',
    content: (
      <>
        <p>You agree not to use the Service to:</p>
        <ul className="terms-list">
          <li>Violate any applicable law or regulation</li>
          <li>Use the Service in a way that infringes third-party rights or breaches third-party rules that apply to you</li>
          <li>Attempt to gain unauthorised access to any part of the Service or related systems</li>
          <li>Interfere with security, billing, rate limits, or feature controls</li>
          <li>Introduce malware, automated abuse, or other harmful code or behaviour</li>
          <li>Copy, resell, sublicense, or commercially exploit the Service except as expressly permitted by us</li>
          <li>Use the Service in a way that creates unreasonable load, instability, or operational risk</li>
        </ul>
        <p>
          We may investigate suspected misuse and take proportionate action,
          including warnings, throttling, suspension, or termination.
        </p>
      </>
    ),
  },
  {
    anchor: 'subscriptions',
    title: 'Subscriptions & Billing',
    content: (
      <>
        <p>
          Some parts of the Service are offered on a paid subscription basis.
          Current pricing, billing intervals, feature limits, and plan details
          are shown on the pricing page, checkout, or inside the app.
        </p>
        <p>
          If you start a paid subscription, you authorise us or our payment
          processor to charge the applicable fees and taxes using your selected
          payment method. Subscriptions renew automatically unless cancelled
          before the next renewal date. Except where required by law or expressly
          stated otherwise, fees are non-refundable once a billing period has
          started.
        </p>
      </>
    ),
  },
  {
    anchor: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <>
        <p>
          We and our licensors retain all rights, title, and interest in and to
          the Service, including the software, visual design, branding,
          documentation, and underlying materials, except for rights expressly
          granted to you in these Terms.
        </p>
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable licence to use the Service for your own
          personal or internal business use. You retain rights in content you
          submit, but you grant us the rights reasonably needed to host, process,
          and display that content to operate the Service.
        </p>
      </>
    ),
  },
  {
    anchor: 'data-privacy',
    title: 'Data Privacy & GDPR',
    content: (
      <>
        <p>
          We handle personal data in accordance with applicable data protection
          law, including the UK GDPR, the Data Protection Act 2018, and, where
          applicable, the EU GDPR.
        </p>
        <p>
          For our own service operations, Divine Monitor generally acts as the
          controller of the personal data described in the Privacy Policy. Our
          lawful bases commonly include contract, legitimate interests, legal
          obligation, and consent where required.
        </p>
        <p>
          Depending on your circumstances, you may have rights to be informed,
          access your data, correct inaccurate data, request erasure, restrict
          processing, obtain portability, and object to certain processing. To
          exercise these rights, contact us at{' '}
          <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
            support@divinemonitor.com
          </a>
          .
        </p>
        <p>
          Full details of how we collect, use, and protect your Personal Data are set out in our{' '}
          <a href="/privacy" className="terms-inline-link">
            Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    anchor: 'data-retention',
    title: 'Data Retention',
    content: (
      <>
        <p>
          We retain personal data for as long as reasonably necessary to provide
          the Service, maintain security, resolve disputes, meet legal or
          accounting obligations, and enforce these Terms. Some operational data
          is short-lived by design, while account-related records may be retained
          for longer while your account remains active and for a reasonable
          period afterwards.
        </p>
        <p>
          More detail about retention is set out in our{' '}
          <a href="/privacy" className="terms-inline-link">
            Privacy Policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    anchor: 'third-parties',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          The Service may rely on or connect with third-party providers and
          third-party websites, including payment providers, authentication
          providers, hosting infrastructure, and supported websites you choose to
          monitor. Your use of those third-party services may also be governed by
          their own terms and privacy policies.
        </p>
        <p>
          We are not responsible for third-party services, third-party site
          availability, or third-party policy changes, except to the extent
          required by law.
        </p>
      </>
    ),
  },
  {
    anchor: 'disclaimers',
    title: 'Disclaimers & Limitation of Liability',
    content: (
      <>
        <p>
          The Service is provided "as is" and "as available" without warranty of any kind, express
          or implied. We do not warrant that the Service will be uninterrupted, error-free, or
          free of harmful components.
        </p>
        <p>
          To the maximum extent permitted by law, we are not liable for indirect,
          incidental, special, consequential, or punitive losses, or for loss of
          profits, revenue, business, goodwill, or data. Our total liability for
          claims arising out of or relating to the Service or these Terms will
          not exceed the greater of (a) the amount you paid us in the 12 months
          before the event giving rise to the claim, or (b) GBP 100.
        </p>
        <p>
          Nothing in these Terms shall limit our liability for death or personal injury caused by
          our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot
          be excluded or limited by law. If you are a consumer, your mandatory
          statutory rights are unaffected.
        </p>
      </>
    ),
  },
  {
    anchor: 'indemnification',
    title: 'Indemnification',
    content: (
      <>
        <p>
          If you use the Service on behalf of a business, or for commercial
          purposes, you agree to indemnify and hold us harmless against claims,
          liabilities, losses, and reasonable costs arising from your unlawful
          use of the Service, your breach of these Terms, or your infringement of
          a third party’s rights.
        </p>
      </>
    ),
  },
  {
    anchor: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>
          We may suspend, restrict, or terminate access to the Service if you
          materially breach these Terms, fail to pay amounts due, create security
          or legal risk, misuse the Service, or if continued provision is no
          longer reasonably possible.
        </p>
        <p>
          You may stop using the Service at any time. If you have an account, you
          may request closure or deletion through the Service or by contacting
          support. Clauses that by their nature should survive termination, such
          as payment, intellectual property, liability, and dispute provisions,
          will continue to apply.
        </p>
      </>
    ),
  },
  {
    anchor: 'changes',
    title: 'Changes to These Terms',
    content: (
      <>
        <p>
          We may update these Terms from time to time. If we make a material
          change, we will post the updated Terms and, where appropriate, provide
          additional notice in the Service or by email. Your continued use of the
          Service after the updated Terms take effect means you accept them.
        </p>
      </>
    ),
  },
  {
    anchor: 'governing-law',
    title: 'Governing Law',
    content: (
      <>
        <p>
          These Terms are governed by the laws of England and Wales. The courts
          of England and Wales will have jurisdiction over disputes arising out
          of or relating to these Terms, except where mandatory consumer law in
          your place of residence gives you the right to bring a claim elsewhere.
        </p>
      </>
    ),
  },
  {
    anchor: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>
          If you have any questions or requests about these Terms, please contact
          us:
        </p>
        <div className="terms-contact-block">
          <div className="terms-contact-row">
            <span className="terms-contact-label">Email</span>
            <a href="mailto:support@divinemonitor.com" className="terms-inline-link">
              support@divinemonitor.com
            </a>
          </div>
          <div className="terms-contact-row">
            <span className="terms-contact-label">Page</span>
            <a href="/contact" className="terms-inline-link">
              Contact page
            </a>
          </div>
        </div>
      </>
    ),
  },
]
