'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const heading = ['web developer', 'design engineer', 'AI Workflows', 'notion templates']

const FlipHeader2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heading.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='h-[7vw] relative overflow-hidden shadow-sm '>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          className='h-[7vw] text-[7vw] uppercase font-bold tracking-tight leading-none shadow-md shadow-black py-2 '
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {heading[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default FlipHeader2
