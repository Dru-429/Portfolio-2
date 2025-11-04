'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { flushSync } from 'react-dom'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const buttonRef = React.useRef(null)

  const changeThemeWithTransition = async (newTheme) => {
    if (!buttonRef.current) return

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const y = top + height / 2
    const x = left + width / 2
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom))

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    changeThemeWithTransition(newTheme)
  }

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='relative p-2.5 rounded-full bg-secondary/10 text-foreground hover:bg-secondary/30 transition-colors'
      aria-label='Toggle theme'
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Moon className='h-5 w-5' />
        ) : (
          <Sun className='h-5 w-5' />
        )}
      </motion.div>
    </motion.button>
  )
}
