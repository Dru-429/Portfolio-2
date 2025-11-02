"use client"

import { easeIn, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AnimateTitle2 = ({ text, italicIndex, delay }) => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div ref={ref} className="absolute top-[25%] w-10 h-10 "></div>

      <h1 className="h-[4.5rem] overflow-y-hidden overflow-hidden relative font-semibold ">

        {isInView &&
          `${text}`.split("").map((item, index) => {
            if (index == italicIndex) {
              return (
                <motion.span
                  className="text-7xl italic relative"
                  whileHover={{ fontSize: 60, fontStyle: "normal" }}
                  initial={{ bottom: "-100%" }}
                  animate={{ bottom: "0" }}
                  transition={{ ease: easeIn, delay: index * delay }}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  className="text-6xl text-secondary relative"
                  initial={{ bottom: "-100%" }}
                  animate={{ bottom: "0" }}
                  transition={{ ease: easeIn, delay: index * delay }}
                  key={index}
                >
                  {item}
                </motion.span>
              );
            }
          })}
      </h1>
    </>
  );
};

export default AnimateTitle2;
