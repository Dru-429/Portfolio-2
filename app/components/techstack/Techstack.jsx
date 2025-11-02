"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

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

  // const itemVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 30,
  //     filter: "blur(10px)",
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     filter: "blur(0px)",
  //     transition: {
  //       delay: 0.5,
  //       duration: 1,
  //       ease: [0.25, 0.46, 0.45, 0.94],
  //     },
  //   },
  // };

  return (
    <section id="techstack" ref={ref}>
      <div className="w-full min-h-screen py-20 md:pb-10 md:px-10  px-2 flex flex-col md:flex-row justify-between items-start relative overflow-hidden">
        
        {/* Title Section */}
        <div className="w-full md:w-auto text-center relative mb-8 md:mb-0 md:text-start">
          <AnimateTitle2 text="Tech Stack" delay={0.05} />
        </div>

        {/* Tech Stack Grid */}
        <div className=" w-[100%] md:w-[70%] flex justify-center items-center">
          <motion.div className="flex gap-4 flex-wrap w-[90%] md:w-[100%] justify-center items-center md:justify-start">
            {/* Desktop Layout */}
            <div className=" flex gap-4 justify-center items-center flex-wrap-reverse md:flex-wrap md:items-start ">
              <div className="w-full flex flex-wrap gap-4 justify-center backdrop-blur-md bg-secondary/15 border border-secondary/30 rounded-2xl py-10 h-[70vh] overflow-y-scroll md:h-auto md:overflow-auto md:bg-transparent md:border-none ">
                {techStackData.map((tech, index) => (
                  <motion.div
                    key={index}
                    // variants={itemVariants}
                    // initial="hidden"
                    // animate= {isInView ? "visible":"hidden"}
                    className="group relative overflow-hidden backdrop-blur-md bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 hover:border-secondary/40 rounded-2xl px-6 py-3 cursor-grab active:cursor-grabbing transition-all duration-300 min-w-[180px] md:mb-2"
                    drag
                    dragConstraints={{ top: 2, bottom: 2, left: 2, right: 2 }}
                    dragElastic={0.1}
                    dragTransition={{
                      bounceStiffness: 400,
                      bounceDamping: 10,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 1.1, zIndex: 10 }}
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-60 md:opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`}
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
              </div>

              <motion.div
                className="mt-4 md:-mt-4 backdrop-blur-md bg-secondary/20 border border-secondary/30 rounded-2xl p-4 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <div className="text-center">
                  <motion.div className="text-2xl font-bold text-accent mb-1">
                    {techStackData.length + 5 + " "} +
                  </motion.div>
                  <div className="text-sm text-foreground/70">
                    Tech I Use to Build Magic-
                    <span className="text-sm font-semibold text-secondary">
                      Next Yours
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
