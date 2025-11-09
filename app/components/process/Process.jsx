"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa"

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "1",
      title: "Discover Your Vision",
      description: "We start by understanding your goals and needs — from websites to automations.",
      icon: <FaLightbulb />,
      color: "from-primary/20 to-primary/10",
    },
    {
      number: "2",
      title: "Strategize & Design",
      description: "I craft clean blueprints, workflows, or bot plans aligned to your vision.",
      icon: <FaPencilRuler />,
      color: "from-primary/20 to-primary/10",
    },
    {
      number: "3",
      title: "Build Automate & Bring It to Life",
      description: "I build your solution focused on smooth functionality and reliability.",
      icon: <FaCode />,
      color: "from-accent/20 to-accent/10",
    },
    {
      number: "4",
      title: "Launch & Evolve",
      description: "After launch, I provide support, tweaks, or optimizations as needed.",
      icon: <FaRocket />,
      color: "from-accent/20 to-accent/10",
    },
  ]

  const stepVariants = {
    hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
  }

  return (
    <section ref={ref} className="w-full relative overflow-hidden pb-24 mb-20 lg:mb-56 border-b-2 border-foreground/30">
      {/* Background Glow Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
        <motion.div
          className="relative backdrop-blur-xl bg-secondary/10 border border-secondary/20 rounded-3xl p-8 lg:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated Background Shine */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
          />

          <div className="relative z-10 flex flex-col justify-center items-center gap-16">
            {/* Left Side - Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 flex flex-col items-center"
            >
              <motion.h2 className="text-4xl lg:text-5xl lg:text-6xl font-bold text-foreground">
                Bringing Your Vision to Life
              </motion.h2>

              <motion.p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
                Here's how I help bring your project to life — simple, clear, effective.
              </motion.p>
            </motion.div>

            {/* Right Side - Process Steps */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={stepVariants}
                  className="group relative overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  /> */}

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <motion.div className="text-4xl font-bold text-secondary group-hover:text-accent transition-colors">
                        {step.number}
                      </motion.div>
                      <motion.div className="text-2xl text-foreground/60 group-hover:text-foreground transition-colors">
                        {step.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-foreground/90">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
