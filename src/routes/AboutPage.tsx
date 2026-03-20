import { NavLink } from 'react-router-dom'
import { STORY_PARAGRAPHS, STORY_VALUES } from '@/content/about'

export function AboutPage() {
  return (
    <div className="my-story-page">
      <div className="my-story-inner">
        <div className="section-eyebrow">My Story</div>
        <h1 className="my-story-title">Built by a Viner, for Viners</h1>
        <p className="my-story-subtitle">A private tool that got too good to keep to myself.</p>

        <div className="my-story-body">
          {STORY_PARAGRAPHS.map((p) => (
            <p key={p.key} className="about-story-para">{p.text}</p>
          ))}
        </div>

        <div className="about-story-values">
          {STORY_VALUES.map((v) => (
            <div key={v.label} className="about-story-value">
              <span aria-hidden="true">{v.icon}</span>
              {v.label}
            </div>
          ))}
        </div>

        <div className="about-story-contact">
          <p className="about-story-contact-text">
            Have an idea, some feedback, or just want to say hello? I'd like to hear it.
          </p>
          <NavLink to="/contact" className="about-cta-primary">
            Get in touch →
          </NavLink>
        </div>
      </div>
    </div>
  )
}