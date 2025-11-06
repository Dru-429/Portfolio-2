"use client"

import { motion } from "framer-motion"

const CircularBackground = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width="650"
        height="650"
        viewBox="0 0 400 400"
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Hand-drawn style concentric circles */}

        {/* Outermost Circle - Thickest, using accent color */}
        <motion.path
          d="M 200 50 
             C 280 50, 350 120, 350 200
             C 350 280, 280 350, 200 350
             C 120 350, 50 280, 50 200
             C 50 120, 120 50, 200 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="text-accent/90 dark:text-accent/90"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
        />

        {/* Second Circle - using secondary color */}
        <motion.path
          d="M 200 85
             C 245 90, 310 145, 310 200
             C 310 255, 245 310, 200 310
             C 155 310, 90 255, 90 200
             C 90 145, 155 90, 200 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-secondary/90 dark:text-secondary/90"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Third Circle - using primary color */}
        <motion.path
          d="M 200 125
             C 225 125, 275 150, 275 200
             C 275 250, 225 275, 200 275
             C 175 275, 125 250, 125 200
             C 125 150, 175 125, 200 125"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-primary/90 dark:text-primary/90"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Innermost Circle - using foreground color */}
        <motion.path
          d="M 200 165
             C 215 160, 240 175, 240 200
             C 240 225, 215 240, 200 240
             C 185 240, 160 225, 160 200
             C 160 175, 185 160, 200 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          className="text-foreground/80 dark:text-foreground/90"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
        />

      </motion.svg>
    </div>
  )
}

export default CircularBackground
