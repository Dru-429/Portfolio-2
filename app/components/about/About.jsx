"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import AnimateTitle2 from "../ui/AnimateTitle2";
import Link from "next/link";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section id="about" ref={ref}>
      <div className="w-full min-h-screen px-5 md:px-10 md:mt-20 flex md:flex-row flex-col justify-between md:items-start pb-28 md:pb-0 ym-14 border-b-[2px] border-border relative border-b-foreground/50">
        <div className="relative mb-16 md:mb-0">
          <AnimateTitle2 text="ABOUT" italicIndex={2} delay={0.08} />
        </div>

        <div className="md:w-[70%] relative">
          {/*Paragraphs*/}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              custom={0}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I'm a frontend web developer, Notion template designer, and web
              automation builder with over a year of experience creating digital
              solutions that are both visually compelling and functionally
              powerful.
            </motion.p>

            <motion.p
              custom={1}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I craft clean, modern websites with thoughtful animations and
              responsive design — ensuring a smooth, engaging user experience.
              Beyond design, I help businesses, freelancers, and individuals
              automate repetitive tasks through custom web bots and
              browser-based workflows.
            </motion.p>

            <motion.p
              custom={2}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              Whether it's posting content, scraping data, managing outreach, or
              sending personalized emails to multiple clients at once — I build
              automation tools that save time, reduce manual work, and keep
              things running efficiently.
            </motion.p>

            <motion.p
              custom={3}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto"
              style={{ textAlignLast: "left" }}
            >
              I also design custom Notion templates to streamline organization
              and improve productivity — from personal use to full business
              systems.
            </motion.p>

            <motion.p
              custom={4}
              variants={paragraphVariants}
              className="text-lg leading-relaxed tracking-tight text-foreground/90 text-justify hyphens-auto font-medium"
              style={{ textAlignLast: "left" }}
            >
              If you're looking to elevate your digital presence and simplify
              your workflow, I'd love to help.
            </motion.p>
          </motion.div>

          {/* connect Button */}
          <Link href="#contact">
            <motion.button
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative flex items-center gap-3 px-8 py-3 mt-16 rounded-full bg-secondary text-background overflow-hidden group"
            >
              {/* Arrow Icon */}
              <motion.span
                variants={{
                  rest: { x: -20, opacity: 0 },
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-lg"
              >
                <FaArrowRight />
              </motion.span>

              {/* Text */}
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="font-semibold text-base flex gap-0 justify-start items-center"
              >
                <span className="bg-background relative -left-8 group-hover:opacity-0 w-3 h-3 rounded-full"></span>
                Let's Connect
              </motion.span>

              {/* Background Hover Overlay */}
              <motion.span
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 origin-left bg-white/10 rounded-full scale-x-0"
              />
            </motion.button>
          </Link>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -right-4 top-1/2 w-2 h-48 bg-gradient-to-b from-primary/20 via-secondary/30 to-accent/20 rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="absolute -left-8 bottom-1/4 w-2 h-48 bg-gradient-to-t from-primary/30 to-transparent rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
