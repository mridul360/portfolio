import './App.css'
import { useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Works from './Components/Works/Works'
import Aboutme from './Components/AboutMe/Aboutme'
import Reviews from './Components/Reviews/Reviews'
import HireMe from './Components/HireMe/HireMe'

function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
    <Navbar />
    <div className="min-h-screen overflow-x-hidden bg-slate-950">
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/works" element={<Works />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/hire" element={<HireMe />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </div>
    </>
  )
}

export default App
