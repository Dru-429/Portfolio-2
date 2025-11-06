"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";

const EmailCopy = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact.dhruvsahoo@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-2 w-fit">
      {/* Email Display */}
      <p className="text-foreground text-sm md:text-base">
        {email}
      </p>

      {/* Copy Button */}
      <motion.button
        onClick={handleCopy}
        className="flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {copied ? (
          <FiCheck className="text-secendory text-lg" />
        ) : (
          <FiCopy className="text-secondary text-lg" />
        )}
      </motion.button>

      {/* Copied Tooltip */}
      {copied && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-accent font-medium"
        >
          Copied!
        </motion.span>
      )}
    </div>
  );
};

export default EmailCopy;