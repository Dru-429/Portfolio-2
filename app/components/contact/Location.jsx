"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment-timezone";

const Location = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = moment().tz("Asia/Kolkata"); // Get time in IST
      setCurrentTime(now.format("h:mm A")); // Format the time
    };

    updateTime(); // Initial time update

    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-2 divide-x divide-secondary text-accent p-2 box-border">
      <div className="flex flex-col items-center justify-center px-5 lg:px-1">
        <Image
          src="/images/onPc.gif"
          alt="working"
        //   fill
        //   style={{ width: "80%", height: "60%" }}
          height="500"
          width="500"
        />
        <p className="pt-4 text-foreground">{currentTime} IST</p>
      </div>

      <div className="flex flex-col items-center justify-center text-foreground/80" >
        <Image
          src="/images/globe.gif"
          alt="working"
          className="scale-150"
          height="500"
          width="500"
        //   fill
        //   style={{ width: "80%", height: "60%" }}
        />
        <p className="pt-4">New Delhi, India</p>
      </div>
    </div>
  );
};

export default Location;
