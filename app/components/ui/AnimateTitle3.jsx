import React from "react";
import {
  AnimatePresence,
  easeIn,
  easeOut,
  motion,
  useAnimationControls,
} from "framer-motion";

const AnimateTitle3 = ({ sno, title, child }) => {
  const controlTop = useAnimationControls();
  const controlBottom = useAnimationControls();
  // const controlClicked = useAnimationControls()
  const controlLine = useAnimationControls();
  const Sno = "0" + ` ${sno + 1}`;

  const handelEnter = () => {
    controlTop.start({
      y: "-100%",
    });

    controlBottom.start({
      y: "100%",
    });

    controlLine.start({
      width: "100%",
    });
  };

  const handelExit = () => {
    console.log("Mouse Exit");
    controlTop.start({
      y: "0%",
    });
    controlBottom.start({
      y: "0%",
    });
    controlLine.start({
      width: "0%",
    });
  };

  return (
    <div
      className="flex relative w-full md:w-[90%]"
      onMouseEnter={handelEnter}
      onMouseLeave={handelExit}
    >
      <div className="hidden md:flex gap-1 absolute top-10 left-10  z-20 text-secondary">

        <div className="flex relative top-1">
          {Sno.split(" ").map((item, index) => {
            if (index == 0 || index % 2 == 0) {
              return (
                <span
                  className="text-[12px] relative tracking-tighter h-[14px] flex flex-col overflow-y-hidden -pt-1"
                  key={index}
                >
                  <motion.div
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                </span>
              );
            } else {
              return (
                <span
                  className="text-[12px] relative h-[14px] tracking-tighter flex flex-col overflow-y-hidden"
                  key={index}
                >
                  <motion.div
                    className="absolute -top-[18px]"
                    initial={{ y: "-100%", opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    initial={{ y: "-100%", opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    initial={{ y: "-100%", opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                </span>
              );
            }
          })}
        </div>

        <div className="flex relative">
          {title.split(" ").map((item, index) => {
            if (index == 0 || index % 2 == 0) {
              return (
                <span
                  className="text-2xl font-semibold text-secondary relative h-[32px] flex flex-col overflow-y-hidden pl-1"
                  key={index}
                >
                  <motion.div
                    className="relative "
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    className="relative "
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    className="relative "
                    initial={{ top: 0, opacity: 1 }}
                    animate={controlTop}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                </span>
              );
            } else {
              return (
                <span
                  className="text-2xl font-semibold text-secondary relative h-[32px] flex flex-col overflow-y-hidden pl-1"
                  key={index}
                >
                  <motion.div
                    className="absolute -top-[33px]"
                    initial={{ opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    className="relative "
                    initial={{ y: "-100%", opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                  <motion.div
                    className="relative "
                    initial={{ y: "-100%", opacity: 1 }}
                    animate={controlBottom}
                    transition={{ duration: 0.5, ease: easeIn }}
                  >
                    {item}
                  </motion.div>
                </span>
              );
            }
          })}
        </div>
      </div>

      {/* //Pluse Icon */}
      {/* <div className="flex items-center absolute top-[50%] right-0">
        <div className="w-5 h-[2px] bg-zinc-800 rounded-xl flex"></div>
        <motion.div
          className="w-5 h-[2px] bg-zinc-800 rounded-xl absolute rotate-90 flex"
          // initial={{ left: "50%", translateX: "-50%", scale: 1 }}
          animate={controlClicked}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div> */}

      <div>
        <motion.div
          className="w-full absolute h-[5px] bg-secondary bottom-4 left-0 scale-100"
          initial={{ width: "0%" }}
          animate={controlLine}
          transition={{ duration: 0.7, ease: easeOut }}
        ></motion.div>
        {child}
      </div>
    </div>
  );
};

export default AnimateTitle3;
