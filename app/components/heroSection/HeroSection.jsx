"use client";

import React from "react";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
import Image from "next/image.js";
import FlipHeader from "../ui/FlipHeader.jsx";
import FlipHeader2 from "../ui/FlipHeader2.jsx";

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
