import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { DocsPage } from '@/routes/DocsPage'
import { HomePage } from '@/routes/HomePage'

export function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/:slug" element={<DocsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
