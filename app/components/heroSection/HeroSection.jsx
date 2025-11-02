"use client";

import React from "react";
import { easeIn, motion } from "framer-motion";
import AnimateTitle from "../ui/AnimateTitle.jsx";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
import CircularBackground from "../ui/circular-background.jsx";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="w-100% max-h-screen relative mb-28 md:mb-48 ">
        <div className="mt-[10vh] md:mt-[40vh] mb-20 md:mb-0 mx-2 md:mx-10 md:text-left flex flex-col-reverse md:flex-row gap-4 md:gap-8">

          {/* Left side */}
          <div className="md:w-1/2">
            <div className="md:flex justify-between items-start leading-none tracking-tighter relative">
              {/* <motion.span className="text-lg px-1 relative top-3 text-foreground right-4 border-bottom-[1px] border-foreground">
                Dhruv Sahoo
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 100 }}
                  transition={{ duration: 1, ease: easeIn }}
                  className="h-[2px] bg-secondary"
                ></motion.div>
              </motion.span> */}

              <AnimateTitle first="&nbsp;&nbsp;&nbsp; Web Devel" italic="o" second="per" />
            </div>

            <span className="text-4xl md:text-6xl font-[600] tracking-tight bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text pt-8">
              & Automation Builder
            </span>

            <p className="mt-7 w-[95%] text-foreground tracking-tight text-lg">
              Building stunning websites and smart bots that automate your
              workflow. Crafting seamless digital experiences — from pixel —
              perfect frontends to powerful web automations.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/3 flex justify-center items-center relative md:-top-10 md:left-16">
            <CircularBackground />
          </div>
        </div>

        <div className="px-2 md:px-10 border-t-[1px] mt-20 border-foreground flex justify-between items-center relative">
          <div className=" py-5 text-md text-foreground/80">
            <h3>Email:</h3>
            <p>contact.dhruvsahoo@gmail.com</p>
          </div>

          <Link href="https://github.com/Dru-429" className="relative ">
            <SiGithub className="text-4xl text-foreground/80 hover:text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
