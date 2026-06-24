import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiSolana,
  SiPrisma,
  SiAppwrite,
  SiNextdotjs,
  SiMongodb,
  SiGreensock,
  SiRender,
  SiGithubcopilot,
} from "react-icons/si";
import { FaJs } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

const projectData = [
  {
    title: "K72 - Creative Portfolio",
    liveLink: "https://k72-mets.onrender.com/",
    gitLink: "https://github.com/Dru-429/k72",
    about:
      "A modern creative agency portfolio showcasing premium web experiences with smooth scroll animations and interactive UI and responsive grid layout for optimal project presentation.",
    stack: [
      ["React", <IoLogoReact />],
      ["Tailwind CSS", <SiTailwindcss />],
      ["GSAP", <SiGreensock />],
      ["Lenis Scroll", <TbBrandFramerMotion />],
      ["Render", <SiRender />],
    ],
    img: "/k72.png", // Replace with actual image path
  },
  {
    title: "Github Warpped",
    liveLink: "https://githubrapped.vercel.app/",
    gitLink: "https://github.com/Dru-429/github-wrapped",
    about:
      "GitHub Wrapped 2025 is an app that generates a year-in-review for GitHub inspired by Spotify Wrapped and in shareable image format. It scaled to 700* users, and 1.1k requests in 24 hours.",
    stack: [
      ["Next.js", <SiNextdotjs />],
      ["Tailwind CSS", <SiTailwindcss />],
      ["Github API", <SiGithubcopilot />],
      ["Framer Motion", <SiFramer />],
      ["Prisma / Postgres", <SiPrisma />],
    ],
    img: "/github_Wrapped.png",
  },
  {
    title: "Ochi Design",
    liveLink: "https://ochi-design-clone.web.app/",
    gitLink: "https://github.com/Dru-429/ochi-design-clone", // update if repo exists
    about:
      "A minimalist landing page clone of Ochi Design (an awarded landingpage). Features sleek layout, clean typography, and smooth animations built with React, Tailwind CSS, and Framer Motion.",
    stack: [
      ["React", <IoLogoReact />],
      ["Tailwind CSS", <SiTailwindcss />],
      ["Framer Motion", <SiFramer />],
      ["Firebase", <RiFirebaseFill />],
      ["Locomotive Scroll", <SiFramer />], // use a custom icon if you prefer (no direct Locomotive icon)
    ],
    img: "/ochi-design.svg", // Replace with actual image
  },
  {
    title: "ZenSol Pay",
    liveLink: "https://zensolpay.vercel.app/",
    gitLink: "https://github.com/Dru-429/ZenSol-Pay",
    about:
      "A mobile-first Web3 P2P payment network built on Solana. Features an identity-first username lookup, a conversational chat-style timeline for transactions, real-time portfolio tracking, and a cryptographic shielded transfer mode.",
    stack: [
      ["React / Vite", <SiReact />],
      ["Tailwind CSS", <SiTailwindcss />],
      ["Solana Web3.js", <SiSolana />],
      ["Prisma / Postgres", <SiPrisma />],
    ],
    img: "/zensol_pay.png",
  },
  {
    title: "Sundown Studio ",
    liveLink: "https://dru-sundown-studio-clone.web.app/",
    gitLink: "https://github.com/Dru-429/sundown-studio-clone", // update if repo exists
    about:
      "A sleek, modern clone of Sundown Studio’s site with smooth scrolling, responsive design, 2D animations, loading screen, swiping elements, and interactive buttons.",
    stack: [
      ["HTML", <IoLogoHtml5 />],
      ["CSS", <IoLogoCss3 />],
      ["JavaScript", <FaJs />],
      ["Locomotive Scroll", <SiFramer />],
      ["Firebase", <RiFirebaseFill />],
    ],
    img: "/sundown.svg", // Replace with actual image
  },
];

export default projectData;
