const APP_CONTACT_URL = 'https://app.divinemonitor.com/contact'

export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-inner">
        <div className="contact-header">
          <div className="section-eyebrow">Support</div>
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">
            Questions, feedback, bug reports, or just want to say hello — all welcome.
          </p>
        </div>

        <div className="contact-options">
          <div className="contact-option-card contact-option-primary">
            <div className="contact-option-label">Contact form</div>
            <p className="contact-option-body">
              The quickest way to reach me is via the Divine Monitor Console. Fill in a short form and I'll get back to you at your email address.
            </p>
            <a
              href={APP_CONTACT_URL}
              className="contact-submit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open contact form →
            </a>
          </div>

          <div className="contact-option-card">
            <div className="contact-option-label">Email directly</div>
            <p className="contact-option-body">
              You can also write to{' '}
              <a href="mailto:support@divinemonitor.com" className="contact-email-link">
                support@divinemonitor.com
              </a>{' '}
              any time.
            </p>
            <p className="contact-option-note">
              If there's demand for other communication channels, those can be considered.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}