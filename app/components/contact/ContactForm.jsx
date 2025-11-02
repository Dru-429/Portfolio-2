"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5"

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <motion.div
      className='text-foreground hover:text-background hover:bg-foreground px-2 py-4 w-full h-full relative'
    >

      <form onSubmit={handleSubmit} className='relative'>

        <div className='divide-x-3 flex flex-col md:flex-row gap-7 text-sm '>

          <div className='relative'>
            <label htmlFor="name">Name:</label>
            <input
              className='bg-background outline-none rounded-lg px-2 py-3 ml-2 h-6 text-sm border-[1px] border-pramiry focus:border-primary/70 hover:border-accent text-foreground  w-80'
              type="text"
              placeholder='John Dior'
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required

            />
          </div>

          <div >
            <label htmlFor="email">Email:</label>
            <input
              className='bg-background outline-none rounded-lg px-2 py-3 ml-2 h-6 text-sm border-[1px] border-secondary focus:border-accent hover:border-accent text-foreground  w-80'
              type="email"
              id="email"
              placeholder='exaple@gmail.com'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

        </div  >

        <div className='flex flex-col mt-5'>
          <label htmlFor="message" className='text-sm'>Message:</label>
          <textarea
            className='outline-none rounded-lg px-2 py-3 ml-2 h-32 md:h-20 text-xs bg-background border-[1px] border-secondary focus:border-accent hover:border-accent text-foreground w-[97%] block'
            id="message"
            name="message"
            placeholder='Hi Dru...'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className='my-2 md:my-0 relative top-2 md:absolute md:top-0 md:right-7'>  
            <motion.button
              type="submit"
              className='border-[1px] border-background text-background bg-secondary px-4 py-1 rounded-xl flex gap-2 items-center justify-center'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, backgroundColor: "#F77F00", border: "2px" }}
            >
              <div>Sent</div>
              <div>
                <IoSend />
              </div>
            </motion.button>
          </div>

      </form>
    </motion.div>
  );
};

export default ContactForm;