"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectData from "./ProjectData.jsx";
import AnimateTitle2 from "../ui/AnimateTitle2";
import FolioCard from "./FolioCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projectsData = projectData;

  return (
    <section
      id="projects"
      className="relative lg:w-full border-foreground/30 my-20 lg:my-56 border-b-2 pb-12 "
      ref={ref}
    >
      {/* Title Section */}
      <motion.div
        className="mb-20 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimateTitle2 text="PROJECTS" italicIndex={2} delay={0.06} />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-col w-full gap-12"
      >
        {projectsData.map((work, index) => (
          <FolioCard
            key={index}
            index={index}
            img={work.img}
            title={work.title}
            gitLink={work.gitLink}
            liveLink={work.liveLink}
            about={work.about}
            stack={work.stack}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
