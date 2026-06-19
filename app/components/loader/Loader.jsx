import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-[#ededed]"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Minimalist text/branding fade-in */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.25em" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl font-bold uppercase tracking-widest font-mono"
              >
                Dhruv Sahoo
              </motion.h1>

              {/* A clean, formal line loader */}
              <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-white/60"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content Layout */}
      <main className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </main>
    </>
  );
}