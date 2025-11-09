import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme-provider";
import Head from "next/head";
import MetaData from "./components/MetaData";
// import Cursor from "./components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // === PRIMARY METADATA ===
  title:
    "Web Automation Builder | Portfolio Websites & Smart AI Bots | Dhruv Sahoo",
  description:
    "Build stunning portfolio websites, automate workflows with AI bots, and create custom Notion templates. Expert web developer with 1+ year experience. Free consultation available.",

  // === ICONS ===
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-32x32.png",
  },

  // === KEYWORDS - OPTIMIZED FOR SEO ===
  keywords: [
    // Primary Keywords
    "web automation builder",
    "portfolio website developer",
    "AI automation specialist",
    "web developer India",
    "freelance web developer Delhi",

    // Service Keywords
    "portfolio website creator",
    "web automation bot",
    "AI workflow automation",
    "Notion template designer",
    "landing page design",

    // Technical Keywords
    "react developer",
    "next.js developer",
    "frontend developer",
    "full stack developer",
    "GSAP animation developer",

    // Long-tail Keywords
    "hire portfolio website developer in Delhi",
    "custom web bot development",
    "AI agent development",
    "workflow automation consultant",
    "affordable portfolio website design India",

    // Additional Keywords
    "web design",
    "UI development",
    "creative developer",
    "software developer",
    "developer portfolio",
    "tech developer",
    "Delhi",
    "India",
    "freelancer",
    "automation",
    "AI",
    "web scraping",
    "outreach automation",
    "content automation",
  ],

  // === ROBOTS CONFIGURATION ===
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },

  // === OPEN GRAPH - SOCIAL MEDIA ===
  openGraph: {
    title:
      "Web Automation Builder | Portfolio Websites & AI Bots | Dhruv Sahoo",
    description:
      "Build stunning portfolio websites, automate workflows with AI bots, and create custom Notion templates. Expert web developer with 1+ year experience.",
    url: "https://dhruvsahoo.vercel.app",
    siteName: "Dhruv Sahoo - Web Developer & AI Automation",
    images: [
      {
        url: "https://dhruvsahoo.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhruv Sahoo - Web Automation Builder & Portfolio Developer",
        type: "image/png",
      },
      {
        url: "https://dhruvsahoo.vercel.app/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Dhruv Sahoo - Freelance Web Developer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // === TWITTER CARD ===
  twitter: {
    card: "summary_large_image",
    title:
      "Web Automation Builder | Portfolio Websites & AI Bots | Dhruv Sahoo",
    description:
      "Build stunning portfolio websites, automate workflows with AI bots, and create custom Notion templates.",
    creator: "@dev_druv",
    creatorId: "1234567890",
    images: ["https://dhruvsahoo.vercel.app/twitter-card.png"],
    site: "@dev_druv",
  },

  // === VERIFICATION & ANALYTICS ===
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE", // Add your Google verification code
    yandex: "YOUR_YANDEX_VERIFICATION_CODE_HERE", // Add your Yandex verification code if needed
  },

  // === ADDITIONAL METADATA ===
  category: "technology",
  creator: "Dhruv Sahoo",
  publisher: "Dhruv Sahoo",

  // === ALTERNATE LINKS ===
  alternates: {
    canonical: "https://dhruvsahoo.vercel.app",
  },

  // === SOCIAL PROFILES ===
  authors: [
    {
      name: "Dhruv Sahoo",
      url: "https://dhruvsahoo.vercel.app",
    },
  ],
};

// === STRUCTURED DATA (JSON-LD) ===
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dhruv Sahoo - Web Developer & AI Automation Specialist",
  description:
    "Freelance web developer specializing in portfolio websites, AI workflow automation, and web bots. Based in Delhi, India.",
  url: "https://dhruvsahoo.vercel.app",
  email: "contact.dhruvsahoo@gmail.com",
  founder: {
    "@type": "Person",
    name: "Dhruv Sahoo",
    url: "https://dhruvsahoo.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/dhruvsahoo/",
      "https://github.com/Dru-429",
      "https://x.com/dev_druv",
      "https://www.instagram.com/dhruvsahoo_/",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: ["India", "United States", "Global"],
  priceRange: "$$",
  serviceType: [
    "Portfolio Website Development",
    "Web Automation",
    "AI Workflow Automation",
    "Notion Template Design",
    "Landing Page Design",
    "Web Animation (GSAP)",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Web Automation",
    "AI Agents",
    "n8n Workflows",
    "Notion",
    "Firebase",
    "Appwrite",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />

        {/* === STRUCTURED DATA (JSON-LD) === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* === STRUCTURED DATA - ORGANIZATION === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dhruv Sahoo",
              url: "https://dhruvsahoo.vercel.app",
              logo: "https://dhruvsahoo.vercel.app/logo.png",
              description:
                "Web developer & AI automation specialist creating portfolio websites, web bots, and workflow automation solutions.",
              sameAs: [
                "https://www.linkedin.com/in/dhruvsahoo/",
                "https://github.com/Dru-429",
                "https://x.com/dev_druv",
                "https://www.instagram.com/dhruvsahoo_/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "contact.dhruvsahoo@gmail.com",
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden relative zoom-in-90`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <MetaData />
          {/* <Cursor /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
//Dated 18 jun 2025
