import type React from 'react'

export function TermsPage() {
  return (
    <div className="terms-page">
      <div className="terms-inner">
        <div className="terms-header">
          <div className="section-eyebrow">Legal</div>
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using Divine Monitor.
          </p>
          <div className="terms-meta-row">
            <span className="terms-meta-item">
              <span className="terms-meta-label">Last updated</span>
              <span className="terms-meta-value">20 March 2026</span>
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
            Divine Monitor ("<strong>the Service</strong>") operated by{' '}
            <strong>[Company Name]</strong> ("<strong>we</strong>", "<strong>us</strong>", or
            "<strong>our</strong>"). By creating an account or using the Service, you agree to be
            bound by these Terms and our{' '}
            <a href="/privacy" className="terms-inline-link">
              Privacy Policy
            </a>
            . If you do not agree, do not use the Service.
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
            <a href="mailto:legal@divinemonitor.com" className="terms-inline-link">
              legal@divinemonitor.com
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
            Refers to the Divine Monitor platform, including the web application, browser
            extension, API, and any associated software made available by us.
          </dd>
          <dt>"User" / "you"</dt>
          <dd>
            Any individual or entity that accesses or uses the Service, whether on a free or paid
            plan.
          </dd>
          <dt>"Content"</dt>
          <dd>
            Any data, text, information, or materials you submit to or through the Service.
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
          <strong>[Placeholder]</strong> — You must be at least 16 years of age to use the Service.
          By registering an account, you represent that all information you provide is accurate and
          complete. You are responsible for maintaining the confidentiality of your login credentials
          and for all activity that occurs under your account.
        </p>
        <p>
          We reserve the right to suspend or terminate any account that we reasonably believe has
          been registered with false information or is being used in violation of these Terms.
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
          <strong>[Placeholder]</strong> — Divine Monitor is a monitoring and alerting platform that
          tracks changes to online content and notifies users in real time. The specific features
          available to you depend on your subscription tier (Free, Pro, or Elite).
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the Service at any
          time with reasonable notice where practicable. We will not be liable to you or any third
          party for any modification, suspension, or discontinuation of the Service.
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
          <li>Scrape, harvest, or otherwise collect data from third-party websites in violation of their terms of service</li>
          <li>Transmit unsolicited commercial messages or spam</li>
          <li>Attempt to gain unauthorised access to any part of the Service or its related systems</li>
          <li>Introduce malware, viruses, or any other harmful code</li>
          <li>Reproduce, duplicate, or resell any part of the Service without our express written permission</li>
          <li>Engage in any activity that imposes an unreasonable burden on our infrastructure</li>
        </ul>
        <p>
          <strong>[Placeholder]</strong> — We may investigate and take appropriate action, including
          suspension or termination of access, for any violations of these provisions.
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
          <strong>[Placeholder]</strong> — The Service is offered on a subscription basis. Billing
          cycles, prices, and features for each tier are described on our pricing page and are
          subject to change with reasonable advance notice.
        </p>
        <p>
          All fees are exclusive of applicable taxes unless stated otherwise. By providing a payment
          method, you authorise us to charge the applicable subscription fee at each renewal period.
          Subscriptions automatically renew unless cancelled before the renewal date. Refunds are
          handled in accordance with our refund policy.
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
          <strong>[Placeholder]</strong> — All rights, title, and interest in and to the Service,
          including all software, design, trademarks, and content created by us, remain the
          exclusive property of <strong>[Company Name]</strong> and its licensors.
        </p>
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
          revocable licence to access and use the Service for your personal or internal business
          purposes. You may not copy, modify, distribute, sell, or lease any part of the Service
          without our prior written consent.
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
          We are committed to protecting your Personal Data in accordance with the UK General Data
          Protection Regulation (UK GDPR), the Data Protection Act 2018, and where applicable, the
          EU General Data Protection Regulation (EU GDPR).
        </p>
        <p>
          <strong>[Placeholder]</strong> — The data controller for the purposes of your Personal
          Data is <strong>[Company Name]</strong>, registered at{' '}
          <strong>[Registered Address]</strong>. Our lawful bases for processing your data include
          contractual necessity, legitimate interests, and consent where required.
        </p>
        <p>
          As a data subject you have the right to: access your data, rectify inaccurate data,
          erasure ("right to be forgotten"), restriction of processing, data portability, and to
          object to processing. To exercise any of these rights, contact us at{' '}
          <a href="mailto:privacy@divinemonitor.com" className="terms-inline-link">
            privacy@divinemonitor.com
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
          <strong>[Placeholder]</strong> — We retain Personal Data for as long as necessary to
          provide the Service and comply with our legal obligations. Account data is retained for
          the duration of your subscription plus a reasonable period thereafter to allow for
          dispute resolution and legal compliance. Upon account deletion, we will delete or
          anonymise your Personal Data within a reasonable timeframe, except where retention is
          required by law.
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
          <strong>[Placeholder]</strong> — The Service may integrate with or link to third-party
          platforms (e.g. payment processors, analytics providers). These third parties have their
          own terms of service and privacy policies, which you should review independently. We are
          not responsible for the practices of any third-party service providers.
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
          <strong>[Placeholder]</strong> — To the maximum extent permitted by applicable law, our
          total liability to you for any claims arising out of or relating to these Terms or the
          Service shall not exceed the greater of (a) the amount you paid us in the twelve months
          preceding the claim, or (b) £100. We shall not be liable for any indirect, incidental,
          special, consequential, or exemplary damages.
        </p>
        <p>
          Nothing in these Terms shall limit our liability for death or personal injury caused by
          our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot
          be excluded or limited by law.
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
          <strong>[Placeholder]</strong> — You agree to indemnify, defend, and hold harmless{' '}
          <strong>[Company Name]</strong>, its officers, directors, employees, and agents from and
          against any claims, liabilities, damages, losses, costs, and expenses (including
          reasonable legal fees) arising out of your use of the Service, your violation of these
          Terms, or your infringement of any third-party rights.
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
          <strong>[Placeholder]</strong> — We may terminate or suspend your access to the Service
          immediately, without prior notice or liability, if you breach these Terms. Upon
          termination, your right to use the Service will immediately cease.
        </p>
        <p>
          You may terminate your account at any time by following the account deletion process
          within your account settings. Provisions of these Terms that by their nature should
          survive termination will remain in effect.
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
          <strong>[Placeholder]</strong> — We reserve the right to update these Terms at any time.
          We will notify you of material changes by email or by posting a prominent notice within
          the Service at least 30 days before the changes take effect. Your continued use of the
          Service after the effective date constitutes acceptance of the revised Terms.
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
          <strong>[Placeholder]</strong> — These Terms are governed by the laws of England and
          Wales. Any disputes arising from or relating to these Terms shall be subject to the
          exclusive jurisdiction of the courts of England and Wales, unless you are a consumer
          resident in another jurisdiction where mandatory local law provides otherwise.
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
          <strong>[Placeholder]</strong> — If you have any questions, concerns, or requests
          regarding these Terms, please contact us:
        </p>
        <div className="terms-contact-block">
          <div className="terms-contact-row">
            <span className="terms-contact-label">Email</span>
            <a href="mailto:legal@divinemonitor.com" className="terms-inline-link">
              legal@divinemonitor.com
            </a>
          </div>
          <div className="terms-contact-row">
            <span className="terms-contact-label">Company</span>
            <span>[Company Name]</span>
          </div>
          <div className="terms-contact-row">
            <span className="terms-contact-label">Address</span>
            <span>[Registered Address, City, Postcode, United Kingdom]</span>
          </div>
        </div>
      </>
    ),
  },
]