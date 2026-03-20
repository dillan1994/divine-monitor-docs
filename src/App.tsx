import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { AboutPage } from '@/routes/AboutPage'
import { ChangelogPage } from '@/routes/ChangelogPage'
import { ContactPage } from '@/routes/ContactPage'
import { DocsPage } from '@/routes/DocsPage'
import { FaqsPage } from '@/routes/FaqsPage'
import { HomePage } from '@/routes/HomePage'
import { PlansPage } from '@/routes/PlansPage'
import { TermsPage } from '@/routes/TermsPage'

export function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:slug" element={<DocsPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
