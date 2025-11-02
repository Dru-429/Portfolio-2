"use client";

import { easeIn, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="md:w-[82%] w-[95%] flex items-center justify-between py-2 px-1 md:px-7 py-1md:py-2 box-border backdrop-blur-md bg-accent/10 rounded-3xl p-8 border border-accent/20 shadow-2xl">
      {/*Left Logo and Name Section */}
      <div className="flex items-center justify-between md:w-[60%] w-1/2">
        <div className="flex items-center gap-2">
          <Image 
            src="/dru.svg" 
            alt="logo"
            width={40} 
            height={40} 
          />
          <span className="text-xl leading-none tracking-tighter text-foreground">
            Dhruv Sahoo
          </span>
        </div>
        <div className="hidden md:flex md:w-[45%] w-[25%] items-center justify-between tracking-tighter leading-none pr-2 relative">
          <div className="flex gap-10 text-foreground ">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
            ].map((item, index) => (
              <Link href={item[1]} key={index}>
                <motion.div
                  className="border-[1px] min-w-[97px] rounded-2xl box-border px-3 py-2 border-box text-foreground flex items-center justify-center bg-transparent hover:bg-primary hover:text-primary-foreground/ border-foreground/30 backdrop-blur-sm transition-all duration-200 " //
                  whileTap={{ scale: 0.9 }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileFocus={{ backgroundColor: "#212121", color: "#F1F1F1" }}
                  transition={{ ease: easeIn, duration: 0.1 }}
                >
                  {" "}
                  {item[0]}{" "}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*Right-Mode Toggle and Contact Section */}
      <div className=" flex items-center gap-2 pr-2 ml-2">
        <ModeToggle />
        <a
          href="#contact"
          className="bg-accent/90 text-accent-foreground px-4 py-2 rounded-2xl box-border border border-accent/20 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-semibold tracking-tighter hover:scale-95"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
