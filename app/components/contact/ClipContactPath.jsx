"use client"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { IoMdMail } from "react-icons/io"
import LinkBox from "./LinkBox"
import ContactForm from "./ContactForm"
import Location from "./Location"

export const SocialLinks = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  )
}

const ClipPathLinks = () => {
  return (
    <div className="mt-20 space-y-6">
      {/* Contact Form - Full Width on Mobile, Hidden on Desktop in Grid */}
      {/* <div className="block lg:hidden">
        <ContactForm />
      </div> */}

      {/* Main Grid Container */}
      <div className="backdrop-blur-md bg-primary/20 border border-primary/30 rounded-3xl overflow-hidden shadow-2xl">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 divide-x divide-primary">
          {/* Left Column - Social Links */}
          <div className="grid grid-rows-2 divide-y divide-primary/20">
            {/* Email Row */}
            <div className="grid grid-cols-1">
              <LinkBox Icon={IoMdMail} href="mailto:contact.dhruvsahoo@gmail.com" Text="contact.dhruvsahoo@gmail.com" />
            </div>

            {/* Social Media Row */}
            <div className="grid grid-cols-2 divide-x divide-primary/20">
              <LinkBox Icon={SiGithub} href="https://github.com/Dru-429" />
              <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/dhruvsahoo/" />
            </div>
          </div>

          {/* Right Column - Location */}
          <div className="grid grid-cols-1 place-content-center">
            <LinkBox element={<Location />} />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 divide-x divide-primary/20">
          {/* Left Column */}y
          <div className="space-y-0 divide-y divide-primar/20">
            <LinkBox Icon={IoMdMail} href="mailto:contact.dhruvsahoo@gmail.com" Text="contact.dhruvsahoo@gmail.com" />
            <div className="grid grid-cols-2 divide-x divide-primary/20">
              <LinkBox Icon={SiGithub} href="https://github.com/Dru-429" />
              <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/dhruvsahoo/" />
            </div>
          </div>

          {/* Right Column - Location */}
          <div className="flex items-center justify-center">
            <LinkBox element={<Location />} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-1 divide-y divide-primary/20">
          {/* Email */}
          <LinkBox Icon={IoMdMail} href="mailto:contact.dhruvsahoo@gmail.com" Text="contact.dhruvsahoo@gmail.com" />

          {/* Social Media Row */}
          <div className="grid grid-cols-2 divide-x divide-primary/20">
            <LinkBox Icon={SiGithub} href="https://github.com/Dru-429" />
            <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/dhruvsahoo/" />
          </div>

          {/* Location */}
          <LinkBox element={<Location />} />
        </div>
      </div>

      {/* Contact Form - Desktop Only (in separate container)
      <div className="hidden lg:block">
        <ContactForm />
      </div> */}
    </div>
  )
}
