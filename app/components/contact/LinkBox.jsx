"use client"

import React from 'react'
import { useAnimate } from "framer-motion";


const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href, Text, element  }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  if (!element){
    return (
      <a
        href={href}
        target="_blank"
        onMouseEnter={(e) => {
          handleMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e);
        }}
        className="relative grid h-20 w-full place-content-center md:h-36 text-foreground hover:text-background transition-colors duration-200 ease-in-out rounded-lg border border-primary/50 hover:border-secondary/50"
      >
        <div className="flex flex-col items-center relative">
          <Icon className="text-xl md:text-2xl lg:text-4xl " />
          <div className="text-sm z-10 absolute -bottom-5 md:text-normal">
            {Text}
          </div>
        </div>
        <div
          ref={scope}
          style={{
            clipPath: BOTTOM_RIGHT_CLIP,
          }}
          className="absolute inset-0 grid place-content-center bg-foreground text-background"
        >
          <Icon className="text-xl md:text-4xl" />
        </div>
      </a>
    );
  }
  else{
    return(
      <>
        {element}
      </>
    )
  }
};

export default LinkBox