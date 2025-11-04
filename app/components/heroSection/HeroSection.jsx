"use client";

import React from "react";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
import Image from "next/image.js";
import FlipHeader from "../ui/FlipHeader.jsx";
import FlipHeader2 from "../ui/FlipHeader2.jsx";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const HeroSection = () => {
  return (
    <section id="home">
      <div className=" w-100% max-h-screen relative mt-40 flex flex-col items-center">

        {/* //Hero */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* //Header */}
        
          <FlipHeader />
          {/* <FlipHeader2 /> */}
          <Image 
            src="/druPuppet.png"
            alt="Dru Puppet"
            height={600}
            width={300}
            className="h-[80vh] w-auto relative -top-24"
          />  
        </div>

        {/* //Hero Footer */}
        <div className="w-full px-2 border-t-[1px] -mt-24 border-foreground flex justify-between items-center relative">
          <div className=" py-5 text-md text-foreground/80">
            <h3>Email:</h3>
            <p>contact.dhruvsahoo@gmail.com</p>
          </div>

          <div className="flex justify-center items-center gap-5">
            <Link href="https://github.com/Dru-429" className="relative ">
              <SiGithub className="text-3xl text-foreground/80 hover:text-accent" />
            </Link>
            <Link href="https://www.linkedin.com/in/dhruvsahoo/" className="relative ">
              <TiSocialLinkedinCircular className="text-4xl text-foreground/80 hover:text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
