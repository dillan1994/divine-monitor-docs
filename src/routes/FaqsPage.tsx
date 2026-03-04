import { Link } from 'react-router-dom'
import { faqs } from '@/content/faqs'

export function FaqsPage() {
  return (
    <div className="faqs-page">
      <div className="faqs-inner">
        <div className="section-eyebrow">Help center</div>
        <h1 className="faqs-title">FAQs</h1>
        <p className="faqs-body">
          Common questions and quick answers.
        </p>

        <div className="faqs-list">
          {faqs.map((item) => (
            <article className="faq-card" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>

        <Link to="/" className="hero-cta-primary" style={{ display: 'inline-flex' }}>
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
