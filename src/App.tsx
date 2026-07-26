import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useMemo, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import BackgroundFallback from './background/BackgroundFallback'
import { isLowEndDevice, prefersReducedMotion, supportsWebGL } from './background/env'

// Only imported (and its three.js weight only fetched) when capability checks
// below decide the WebGL scene should actually render.
const BackgroundCanvas = lazy(() => import('./background/BackgroundCanvas'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const useStaticFallback = useMemo(() => !supportsWebGL() || prefersReducedMotion(), [])
  const lowEnd = useMemo(() => isLowEndDevice(), [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {useStaticFallback ? (
        <BackgroundFallback />
      ) : (
        <Suspense fallback={null}>
          <BackgroundCanvas lowEnd={lowEnd} />
        </Suspense>
      )}
      <ScrollToTop />
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
