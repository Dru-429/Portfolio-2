"use client";

import React, { useEffect } from "react";
// import useBlobity from "blobity/lib/react/useBlobity";
// import { initialBlobityOptions } from '@/utils/blobity.config.js';

import HeroSection from "./components/heroSection/HeroSection.jsx";
import About from "./components/about/About.jsx";
import TeachStack from "./components/techstack/Techstack.jsx";
import Services from "./components/servi/Services.jsx";
import ParallaxScroll from "./components/parallaxScroll/ParallaxScroll.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import Process from "./components/process/Process.jsx";
import Lenis from "lenis";
import Navbar from "./components/common/Navbar.jsx";
import ScrollProgress from "./components/common/ScrollProgress.jsx";

const page = () => {

  //lenis
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // const blobity = useBlobity(initialBlobityOptions)

  return (
    <main className="bg-background text-foreground relative w-screen box-border overflow-x-hidden">
      <nav className="w-full flex items-center justify-center fixed top-2 md:top-4 z-50">
        <div className="w-[98%] md:w-full flex items-center justify-center">
          <Navbar />
        </div>
      </nav>
      {/*The top div*/}
      <div className="max-w-[95%] xl:max-w-[1223px] w-full mx-auto flex flex-col justify-center">
        <HeroSection />
        <Projects />
        <Services />
        <Process />
        <TeachStack />
        <About />
      </div>

      {/*The screen size parallax scroll*/}
      <div className="w-full">
        <ParallaxScroll />
      </div>

      {/*Footer--Contact & label */}
      <footer className="max-w-[95%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden flex flex-col justify-center">
        <Contact />
      </footer>
      <ScrollProgress />
    </main>
  );
};

export default page;
