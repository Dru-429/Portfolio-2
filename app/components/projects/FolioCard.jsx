"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { easeIn, motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TechCapsule from "../ui/TechCapsule";
import AnimateTitle3 from "../ui/AnimateTitle3";

export default function FolioCard({
  index,
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="w-full">
      <AnimateTitle3
        key={index}
        title={title}
        sno={index}
        child={
          <motion.div
            // variants={cardVariants}
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            className="group relative overflow-hidden backdrop-blur-xl  bg-secondary/10 hover:bg-secondary/15 border border-secondary/20 hover:border-secondary/30 rounded-3xl md:rounded-b-none shadow-xl hover:shadow-2xl flex flex-col-reverse justify-between items-center gap-10 md:flex-row p-8 transition-all duration-500"
            whileHover={{
              scale: 1.02,
              y: 10,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Content Section */}
            <motion.div className="flex-1 relative z-10 md:w-[60%] lg:w-[70%] xl:w-[75%] ">
              {/* title & Links Section */}
              <div className="flex justify-between items-center mb-4 md:justify-end md:items-end">
                <motion.h2
                  className="text-2xl font-bold text-secondary md:hidden "
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ ease: easeIn, duration: 0.5 }}
                >
                  {title}
                </motion.h2>

                <div className="flex gap-4">
                  {gitLink && (
                    <Link
                      href={gitLink}
                      target="_blank"
                      // rel="noopener noreferrer"
                      className="relative z-40 "
                    >
                      <motion.div
                        className="group/icon relative cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        <div className="p-3 rounded-full backdrop-blur-md bg-secondary/10 hover:bg-secondary border border-secondary/20 hover:border-secondary/30 transition-all duration-200">
                          <FaGithub className="text-xl text-foreground/80 group-hover/icon:text-accent hover:text-primary transition-colors duration-200" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </Link>
                  )}

                  {liveLink && (
                    <Link
                      href={liveLink}
                      target="_blank"
                      // rel="noopener noreferrer"
                      className="relative z-40 cursor-pointer"
                    >
                      <motion.div
                        className="group/icon relative cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: index * 0.2 + 0.8 }}
                      >
                        <div className="p-3 rounded-full backdrop-blur-md bg-secondary/10 hover:bg-secondary border border-secondary/20 hover:border-secondary/30 transition-all duration-200">
                          <FaExternalLinkAlt className="text-xl text-foreground/80 group-hover/icon:text-accent hover:text-primary transition-colors duration-200" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-foreground/90 mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: index * 0.2 + 1.0 }}
              >
                {about}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 1.2 }}
              >
                {stack.map((tech, techIndex) => (
                  <TechCapsule
                    key={techIndex}
                    index={techIndex}
                    item={tech}
                    delay={index * 0.2 + 1.3 + techIndex * 0.1}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <div className="relative flex-shrink-0 md:w-[40%] z-40">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-secondary/5 border border-secondary/10 p-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={title}
                    width={520}
                    height={420}
                    className="rounded-xl object-cover shadow-lg"
                  />
                </motion.div>

                {/* Image Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        }
      />
    </div>
  );
}
