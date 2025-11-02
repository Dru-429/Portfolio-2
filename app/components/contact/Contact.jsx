import { motion } from 'framer-motion';
import React from 'react';
import { SocialLinks } from './ClipContactPath';

const Contact = () => {
  return (
    <div id="contact" className="w-full border-2 border-secondary/50 mt-20 md:mt-40 px-4 md:px-10 py-16 md:py-20 mb-20 backdrop-blur-xl bg-primary/20 rounded-3xl">
      <div className="w-full flex flex-col items-center justify-start">
        <div className="text-3xl md:text-6xl lg:text-7xl font-bold text-secondary/80 uppercase mb-6 md:mb-10 text-center">
          <span>ha</span>
          <motion.span className="italic text-3xl md:text-4xl md:text-[5rem] lg:text-[5.4rem]" whileHover={{ fontStyle: 'normal' }}>V</motion.span>
          e AN IDEA ?
          <div className="text-base md:text-2xl italic tracking-widest mt-2 bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
            let's C
            <motion.span className="text-base md:text-2xl" whileHover={{ fontStyle: 'italic' }}>O</motion.span>
            nnect
          </div>
        </div>

        <div className="w-full md:w-4/5 lg:w-3/4 px-2 md:px-10 mt-5">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
