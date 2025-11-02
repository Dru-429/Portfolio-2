"use client";
import { useEffect, useState } from 'react';

const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function updateDimension() { // Define updateDimension *inside* useEffect
            const { innerWidth, innerHeight } = window;
            setDimension({ width: innerWidth, height: innerHeight });
        }

        updateDimension(); // Call it once initially

        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []); // Empty dependency array: This is crucial
    // The updateDimension function is now defined inside the useEffect, so it will not change on every render.

    return dimension;
};

export default useDimension;