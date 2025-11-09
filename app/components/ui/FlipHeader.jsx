'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const heading = ['web developer', 'design engineer', 'AI Workflows', 'notion templates']

const FlipHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heading.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const currentText = heading[currentIndex]

  return (
    <div className='lg:h-[7vw] h-[10vw] relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          className='h-full text-[10vw] lg:text-[7vw] uppercase font-bold tracking-tight leading-none flex flex-wrap'
        >
          {currentText.split('').map((letter, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.025,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default FlipHeader
