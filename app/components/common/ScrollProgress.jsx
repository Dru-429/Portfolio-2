"use client";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Smooth scroll progress
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

  // Circle settings
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const pathLength = useTransform(smoothProgress, [0, 1], [0, circumference]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.div
        onClick={scrollToTop}
        className="relative w-[120px] h-[120px] flex items-center justify-center cursor-pointer"
      >
        {/* SVG Circular Progress */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="none"
          />

          {/* Animated Progress Circle */}
          <motion.circle
            ref={pathRef}
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#grad)"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset: useTransform(pathLength, (v) => circumference - v),
            }}
            strokeLinecap="round"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="120" y2="120">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>

          {/* Circular Text */}
          <defs>
            <path
              id="textCircle"
              d="M60,15 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90"
            />
          </defs>
          <text
            fill="#6b7280"
            fontSize="10"
            fontWeight="500"
            letterSpacing="2"
          >
            <textPath href="#textCircle" startOffset="10%">
              SCROLL TO THE TOP • SCROLL TO THE TOP •
            </textPath>
          </text>
        </svg>

        {/* Center Arrow */}
        <motion.div
          className="absolute flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <IoIosArrowUp className="text-4xl text-orange-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
