import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PreviewImage = ({ img, title, liveLink }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize motion values for tracking cursor position inside the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Dynamic physics config for the smooth catch-up effect
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    // Calculate mouse position relative to the bounding card box
    const rect = cardRef.current.getBoundingClientRect();
    
    // Offset by 60px (half of the 120px circle) to center it perfectly on the cursor
    const x = e.clientX - rect.left - 60;
    const y = e.clientY - rect.top - 60;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-secondary/5 border border-secondary/10 p-2 cursor-none"
    >
      {/* Image Container */}
      <motion.div 
        animate={{ scale: isHovered ? 1.02 : 1 }} 
        transition={{ duration: 0.2 }}
      >
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          width={520}
          height={420}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>

      {/* AnimatePresence handles the clean mounting/unmounting animation */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl"
          >
            {/* Animated Custom Hover Button */}
            <motion.div
              style={{
                x: cursorX,
                y: cursorY,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-0 left-0 w-[120px] h-[120px] rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-sm font-medium shadow-2xl pointer-events-auto"
            >
              <Link 
                href={liveLink || "#"} 
                className="w-full h-full flex items-center justify-center rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                View site
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreviewImage;