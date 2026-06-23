import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "../heroSection/HeroSection.jsx";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Loader({ children }) {
  const stickyMaskRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const progressRef = useRef(0);
  const EastonProgressRef = useRef(0);

  const initialMaskSize = 0.4;
  const targetMaskSize = 45;
  const easing = 0.08;

  useEffect(() => {
    if (!isLoading) return;

    // 1. Force the HTML and Body elements to have zero overflow and height constraints
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    let animationFrameId = null;

    // 2. Capture and strictly kill native window scroll behavior
    const handleWheel = (e) => {
      // Prevent the browser from moving the native scrollbar
      if (e.cancelable) e.preventDefault();

      // Adjust multiplying coefficient to change scroll sensitivity
      progressRef.current += e.deltaY * 0.0005;
      progressRef.current = Math.min(Math.max(progressRef.current, 0), 1);
    }; // CRITICAL: passive must be false to allow preventDefault()

    // Mobile touch tracking variables
    let touchStart = 0;
    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // Prevent bounce pulling on mobile browsers
      if (e.cancelable) e.preventDefault();

      const touchEnd = e.touches[0].clientY;
      const deltaY = touchStart - touchEnd;
      progressRef.current += deltaY * 0.002;
      progressRef.current = Math.min(Math.max(progressRef.current, 0), 1);
      touchStart = touchEnd;
    };

    const animate = () => {
      if (!stickyMaskRef.current) return;

      // Linear Interpolation (Lerp) calculations loop for the spring feeling
      const delta = progressRef.current - EastonProgressRef.current;
      EastonProgressRef.current += delta * easing;

      const currentMaskSize =
        (initialMaskSize + targetMaskSize * EastonProgressRef.current) * 100;

      // Apply structural mask sizes
      stickyMaskRef.current.style.webkitMaskSize = `${currentMaskSize}%`;
      stickyMaskRef.current.style.maskSize = `${currentMaskSize}%`;

      // Complete intro transition smoothly right before hitting absolute maximum boundaries
      if (EastonProgressRef.current >= 0.97) {
        setIsLoading(false);

        // Clean up styles to bring back regular scrolling
        document.documentElement.style.overflow = "unset";
        document.body.style.overflow = "unset";
        document.body.style.height = "unset";
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Bind layout-independent interaction listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-black">
            <Spotlight />
            <div
              ref={stickyMaskRef}
              className="h-full w-full flex md:items-center md:justify-center overflow-hidden bg-background relative -top-20 mdd:-top-10"
              style={{
                maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 100" width="100%" height="100%"><text x="50%" y="55%" font-weight="900" font-family="sans-serif" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="black">Dhruv Sahoo + Webmaxxing...</text></svg>')`,
                WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 100" width="100%" height="100%"><text x="50%" y="55%" font-weight="900" font-family="sans-serif" font-size="60" text-anchor="middle" alignment-baseline="middle" fill="black">Dhruv Sahoo + Webmaxxing...</text></svg>')`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "47% center",
                WebkitMaskPosition: "47% center",
                maskSize: `${initialMaskSize * 100}%`,
                WebkitMaskSize: `${initialMaskSize * 100}%`,
              }}
            >
              {/* Background */}
              <div className="absolut select-none relative -left-10">
                <HeroSection />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Website Content Layer — Conditionally rendered so it doesn't cause page height leaks */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
