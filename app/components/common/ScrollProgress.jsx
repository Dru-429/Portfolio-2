"use client";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);


  // Smooth the scrollYProgress motion value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });


  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const radius = 45;
  const circumference = 2 * Math.PI * radius;


  // Calculate stroke offset for the progress ring
  const pathLength = useTransform(smoothProgress, [0, 1], [0, circumference]);


  return (
    <motion.div
      className="fixed bottom-2 right-2 z-50 scale-75"
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.button
        onClick={scrollToTop}
        className="relative w-[100px] h-[100px] flex items-center justify-center rounded-full bg-primary/30"
      >
        {/* SVG Circular Progress */}
        <svg
          className="absolute inset-0 rotate-[-90deg]"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth="6"
            fill="none"
          />


          {/* Animated Progress Circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset: useTransform(
                pathLength,
                (v) => circumference - v
              ),
            }}
            strokeLinecap="round"
          />
        </svg>


        {/* Inner Content with Circular Text and Arrow */}
        <svg className="absolute top-4 -right-[13.5px] w-full h-full bg--100" viewBox="0 0 145 145">
          {/* Define circular path for text */}
          <defs>
            <path
              id="circulePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
          </defs>

          {/* Circular text */}
          <text
            fontSize="15"
            fontWeight="800"
            letterSpacing="2"
            className="fill-accent"
          >
            <textPath 
              href="#circulePath" 
              startOffset="50%" 
              textAnchor="middle"
            >
              SCROLL TO THE TOP...
            </textPath>
          </text>
        </svg>


        {/* Center Arrow */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
          >
            <FaArrowUp className="text-4xl text-accent font-light relative top-[2px]" />
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  );
}
