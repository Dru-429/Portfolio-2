import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader({ children }) {
  const containerRef = useRef(null);
  const stickyMaskRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Animation configuration based on Olivier Larose's math
  const initialMaskSize = 0.5; // Starting scale of your text mask
  const targetMaskSize = 45; // How massive it zooms (4500%) to fully reveal background
  const easing = 0.15;

  let easedScrollProgress = 0;
  let animationFrameId = null;

  useEffect(() => {
    // If the loader is active, bind the requestAnimationFrame scroll tracking loop
    if (isLoading) {
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isLoading]);

  const getScrollProgress = () => {
    if (!stickyMaskRef.current || !containerRef.current) return 0;

    // Calculates how far the sticky element has traveled within its high-scroll container
    const totalScrollableHeight =
      containerRef.current.getBoundingClientRect().height - window.innerHeight;

    // Fallback logic to finish loading if container height is miscalculated initially
    if (totalScrollableHeight <= 0) return 0;

    const scrollProgress =
      stickyMaskRef.current.offsetTop / totalScrollableHeight;

    // Linear Interpolation (Lerp) for smooth easing
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;

    return easedScrollProgress;
  };

  const animate = () => {
    if (!stickyMaskRef.current) return;

    const progress = getScrollProgress();
    const currentMaskSize = (initialMaskSize + targetMaskSize * progress) * 100;

    // Apply the scaling dynamically to the CSS mask rules
    stickyMaskRef.current.style.webkitMaskSize = `${currentMaskSize}%`;
    stickyMaskRef.current.style.maskSize = `${currentMaskSize}%`;

    // Once the user scrolls past 98% of the sequence, trigger the site reveal
    if (progress >= 0.98) {
      setIsLoading(false);
      window.scrollTo(0, 0); // Reset scroll position to top of actual portfolio
    } else {
      animationFrameId = requestAnimationFrame(animate);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          /* The high container provides the scroll length track (e.g., 300vh) */
          <div ref={containerRef} className="relative h-[300vh] bg-black ">
            {/* Sticky window viewport element */}
            <div
              ref={stickyMaskRef}
              className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#ededed]"
              style={{
                // Base SVG clip text mask changed to WEBmaxxing with updated viewBox dimensions
                maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" width="100%" height="100%"><text x="50%" y="55%" font-weight="900" font-family="sans-serif" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="black">WEBmaxxing</text></svg>')`,
                WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" width="100%" height="100%"><text x="50%" y="55%" font-weight="900" font-family="sans-serif" font-size="70" text-anchor="middle" alignment-baseline="middle" fill="black">WEBmaxxing</text></svg>')`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center center",
                WebkitMaskPosition: "center center",
                maskSize: "40%", // Tweak this percentage if you want it smaller or larger on load
                WebkitMaskSize: "40%",
              }}
            >
              {/* This is the background element clipped inside the text layer */}
              {/* You can swap this <div> out with a looping background <video> or full-screen <Image> */}
              <div className="absolute inset-0 bg-red-500 px-4 flex flex-col justify-center  select-none">
                <Image 
                  src="/hero-sec.png"
                  alt="Hero Section Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Website Content Layer */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
