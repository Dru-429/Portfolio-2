"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import { SiGithub } from "react-icons/si";
import Image from "next/image.js";
import FlipHeader from "../ui/FlipHeader.jsx";
import FlipHeader2 from "../ui/FlipHeader2.jsx";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import EmailCopy from "../common/EmailCopy.jsx";
import { FaGlobe } from "react-icons/fa";
import moment from "moment-timezone";
import { CiGlobe } from "react-icons/ci";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = moment().tz("Asia/Kolkata"); // Get time in IST
      setCurrentTime(now.format("h:mm:ss A")); // Format the time
    };

    updateTime(); // Initial time update

    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <section id="home">
      <div className=" w-100% max-h-screen relative mt-40 flex flex-col items-center selection:bg-secondary/40 selection:text-black">
        {/* //Hero */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* //Header */}

          <FlipHeader />
          {/* <FlipHeader2 /> */}
          <Image
            src="/dru_model.png"
            alt="Dru Puppet"
            height={500}
            width={300}
            className="lg:h-[70vh] w-auto relative -top-2 lg:-top-16"
          />

          
          <p className="lg:hidden py-10 visible text-foreground/80 w-full lg:w-[20%] text-md lg:text-sm selection:bg-secondary/80 selection:text-black text-left lg:absolute -right-2 -top-36">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm a frontend developer
            obsessed with creating smooth, modern web experiences and automating
            the boring stuff. I design custom websites, build Notion templates,
            and develop web automation tools that save you time and scale your
            business.
          </p>
        </div>

        {/* //Hero Footer */}
        <div className="w-full px-2 border-t-[1px] mt-10 lg:-mt-16 border-foreground flex justify-between items-center relative">
          <p className="flex gap-2\1 justify-center items-center absolute left-0 -top-10">
            <CiGlobe className="text-xl" />
            DELHI_{currentTime}
          </p>

          <p className="hidden lg:block text-foreground/80 w-full lg:w-[20%] text-md lg:text-sm selection:bg-secondary/80 selection:text-black text-left lg:absolute -right-2 -top-36">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm a frontend developer
            obsessed with creating smooth, modern web experiences and automating
            the boring stuff. I design custom websites, build Notion templates,
            and develop web automation tools that save you time and scale your
            business.
          </p>

          <div className=" py-5 text-md text-foreground/80">
            <h3>Email:</h3>
            <EmailCopy email={"contact.dhruvsahoo@gmail.com"} />
          </div>

          <div className="flex justify-center items-center gap-5">
            <Link href="https://github.com/Dru-429" className="relative ">
              <SiGithub className="text-3xl text-foreground/80 hover:text-accent" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dhruvsahoo/"
              className="relative "
            >
              <TiSocialLinkedinCircular className="text-4xl text-foreground/80 hover:text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
