"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiFramer,
  SiAppwrite,
  SiGooglegemini,
  SiNotion,
  SiHostinger,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import { FaJs, FaFigma, FaGithub } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import AnimateTitle2 from "../ui/AnimateTitle2";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const TechStack = () => {
  const [isHovered, setIsHovered] = useState(false);

  const techStackData = [
    {
      name: "HTML",
      icon: <IoLogoHtml5 />,
      color: "from-orange-400 to-red-500",
    },
    { name: "CSS", icon: <IoLogoCss3 />, color: "from-blue-400 to-blue-600" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-cyan-400 to-teal-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "React JS",
      icon: <IoLogoReact />,
      color: "from-cyan-400 to-blue-500",
    },
    { name: "Next JS", icon: <SiNextdotjs />, color: "from-gray-700 to-black" },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
      color: "from-green-500 to-green-700",
    },
    {
      name: "Express JS",
      icon: <FaNodeJs />,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Motion",
      icon: <SiFramer />,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Context API",
      icon: <TbApi />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Mongo DB",
      icon: <SiMongodb />,
      color: "from-green-600 to-green-800",
    },
    {
      name: "Firebase",
      icon: <RiFirebaseFill />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite />,
      color: "from-pink-500 to-red-600",
    },
    {
      name: "Gen AI",
      icon: <SiGooglegemini />,
      color: "from-blue-400 to-purple-500",
    },
    { name: "Figma", icon: <FaFigma />, color: "from-purple-500 to-pink-500" },
    { name: "Notion", icon: <SiNotion />, color: "from-gray-700 to-black" },
    { name: "Github", icon: <FaGithub />, color: "from-gray-600 to-gray-900" },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Hostinger",
      icon: <SiHostinger />,
      color: "from-purple-600 to-indigo-700",
    },
  ];

  // Split tech stack into 3 rows
  const itemsPerRow = Math.ceil(techStackData.length / 3);
  const row1 = techStackData.slice(0, itemsPerRow);
  const row2 = techStackData.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = techStackData.slice(itemsPerRow * 2);

  const MarqueeRow = ({ items, direction = "left", duration = 20 }) => (
    <div className="relative w-full overflow-hidden py-3">
      {/* Fade Overlay Left */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background/90 to-transparent z-10 pointer-events-none" />

      {/* Fade Overlay Right */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Content */}
      <motion.div
        className="flex gap-4 w-fit"
        animate={{
          x: direction === "left" ? [-2000, 0] : [0, -2000],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* First set */}
        {items.map((tech, index) => (
          <motion.div
            key={`original-${index}`}
            className="group relative overflow-hidden backdrop-blur-md bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 hover:border-secondary/40 rounded-2xl px-6 py-3 cursor-grab active:cursor-grabbing transition-all duration-300 min-w-[180px] flex-shrink-0"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl`}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div className="text-xl text-foreground/80 group-hover:text-foreground">
                  {tech.icon}
                </motion.div>
                <span className="text-sm font-medium text-white md:text-foreground md:group-hover:text-white">
                  {tech.name}
                </span>
              </div>
              <motion.div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary" />
            </div>
          </motion.div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((tech, index) => (
          <motion.div
            key={`duplicate-${index}`}
            className="group relative overflow-hidden backdrop-blur-md bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 hover:border-secondary/40 rounded-2xl px-6 py-3 cursor-grab active:cursor-grabbing transition-all duration-300 min-w-[180px] flex-shrink-0"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl`}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div className="text-xl text-foreground/80 group-hover:text-foreground">
                  {tech.icon}
                </motion.div>
                <span className="text-sm font-medium text-white md:text-foreground md:group-hover:text-white">
                  {tech.name}
                </span>
              </div>
              <motion.div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-secondary" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="techstack" className="w-full py-20 md:py-0 mb-20 md:mb-56 pb-24 border-b-2 border-foreground/30">
      <div className="w-full px-2 md:px-10 flex flex-col justify-between items-start relative overflow-hidden">
        {/* Title Section */}
        <div className="w-full md:w-auto relative mb-12 text-start md:sticky md:top-20">
          <AnimateTitle2 text="Tech Stack" delay={0.05} />
        </div>

        {/* Tech Stack Marquee Container */}
        <div className="w-full md:mt-20">
          {/* Row 1 - Scroll Left */}
          <MarqueeRow items={row1} direction="left" duration={30} />

          {/* Row 2 - Scroll Right */}
          <MarqueeRow items={row2} direction="right" duration={35} />

          {/* Row 3 - Scroll Left */}
          <MarqueeRow items={row3} direction="left" duration={32} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
