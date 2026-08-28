import './App.css'
import { lazy, Suspense, useEffect, useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const Works = lazy(() => import('./Components/Works/Works'))
const Aboutme = lazy(() => import('./Components/AboutMe/Aboutme'))
const Reviews = lazy(() => import('./Components/Reviews/Reviews'))
const HireMe = lazy(() => import('./Components/HireMe/HireMe'))

const pageMetadata = {
  '/': {
    title: 'Mridul Hasan | Digital Designer & Frontend Developer',
    description: 'Mridul Hasan is a digital designer and frontend developer creating responsive, accessible websites and web applications.',
  },
  '/about': {
    title: 'About Mridul Hasan | Frontend Developer',
    description: 'Learn about Mridul Hasan, a frontend developer focused on React, responsive design, accessibility, and thoughtful user experiences.',
  },
  '/works': {
    title: 'Projects by Mridul Hasan | Web Design & Development',
    description: 'Explore selected web design and frontend development projects by Mridul Hasan.',
  },
  '/reviews': {
    title: 'Client Reviews | Mridul Hasan',
    description: 'Read feedback from clients and collaborators about working with Mridul Hasan.',
  },
  '/hire': {
    title: 'Hire Mridul Hasan | Start a Web Project',
    description: 'Contact Mridul Hasan about a responsive website, frontend application, or digital design project.',
  },
}

function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const metadata = pageMetadata[location.pathname] || pageMetadata['/']
    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://portfolio-chi-ten-ifiqhq1ix8.vercel.app${location.pathname}`)
  }, [location.pathname])

  return (
    <>
    <Navbar />
    <div className="min-h-screen overflow-x-hidden bg-slate-950 pb-20 lg:pb-0">
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Suspense fallback={<div className="min-h-dvh bg-slate-950" aria-label="Loading page" />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Aboutme />} />
              <Route path="/works" element={<Works />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/hire" element={<HireMe />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </div>
    </>
  )
}

export default App
