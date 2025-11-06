"use client";

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../common/ModeToggle";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    ["Projects", "#projects"],
    ["LinkedIn", "https://www.linkedin.com/in/dhruvsahoo/"],
    ["About", "#about"],
    ["Get in touch", "#contact"],
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ item }) => (
    <Link
      href={item[1]}
      target={item[0] === "LinkedIn" ? "_blank" : "_self"}
      rel={item[0] === "LinkedIn" ? "noopener noreferrer" : ""}
      onClick={handleNavClick}
    >
      <motion.div
        className="relative text-lg text-foreground/80 hover:font-semibold font-semibold hover:text-foreground cursor-pointer tracking-tight py-2 md:py-0"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {item[0]}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-foreground"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>
    </Link>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-400 py-2"
        animate={isScrolled ? { y: 10 } : { y: 0 }}
      >
        <motion.div
          className={clsx(
            "mx-auto transition-all duration-400 flex items-center justify-center",
            isScrolled
              ? "w-fit px-8 py-3 rounded-full backdrop-blur-lg bg-secondary/20 border border-accent/10 shadow-lg dark:shadow-accent/10 shadow-secondary/40"
              : "w-full px-4"
          )}
        >
          <div className="flex items-center justify-between w-full gap-12">
            {/* Logo and Name - Links to Home */}
            <motion.div>
              <Link href="#home">
                <motion.div
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src="/dru.svg" alt="logo" width={40} height={40} />
                  <span
                    className={clsx(
                      "text-lg font-semibold tracking-tight text-foreground",
                      isScrolled ? "hidden" : "block"
                    )}
                  >
                    Dhruv Sahoo
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center gap-12">
              {navItems.map((item, index) => (
                <NavLink key={index} item={item} />
              ))}
            </div>

            {/* Mode Toggle */}
            <motion.div className="" whileHover={{ scale: 1.05 }}>
              <ModeToggle />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-background/80 backdrop-blur-md border-b border-accent/10">
        {/* Mobile Logo */}
        <Link href="#home" onClick={handleNavClick}>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image src="/dru.svg" alt="logo" width={32} height={32} />
            <span className="text-base font-semibold tracking-tight text-foreground hidden xs:inline">
              Dhruv
            </span>
          </motion.div>
        </Link>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={
          isMobileMenuOpen
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -10, pointerEvents: "none" }
        }
        transition={{ duration: 0.2 }}
        className="md:hidden fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-accent/10 px-4 py-6"
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
