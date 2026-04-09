import { NavLink } from 'react-router-dom'
import { STORY_PARAGRAPHS, aboutSections } from '@/content/about'

export function AboutPage() {
  const storySection = aboutSections.find((section) => section.slug === 'story')

  return (
    <div className="my-story-page">
      <div className="my-story-inner">
        <div className="section-eyebrow">{storySection?.label ?? 'My Story'}</div>
        <h1 className="my-story-title">{storySection?.title ?? 'Built by a Viner, for Viners'}</h1>
        <p className="my-story-subtitle">{storySection?.subtitle ?? 'A private tool that got too good to keep to myself.'}</p>

        <div className="my-story-body">
          {STORY_PARAGRAPHS.map((p) => (
            <p key={p.key} className="about-story-para">{p.text}</p>
          ))}
        </div>

        <section className="about-story-support" aria-label="Feedback and support">
          <h2 className="about-story-support-title">If this has helped you, I would really value hearing that.</h2>
          <p className="about-story-support-text">
            If Divine Monitor has been useful, saved you time, or made Vine easier to manage, or if you have any feedback at all, please do reach out.
            That kind of message will help me to improve the app for you and myself, and help prioritise what to build next.
          </p>
          <p className="about-story-support-text">
            If you are happy on the free tier but still want to support the project, you are welcome to buy me a coffee or make a
            custom donation amount via Patreon.
          </p>
          <div className="about-story-contact">
            <NavLink to="/contact" className="about-cta-primary">
              Get in touch →
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  )
}
