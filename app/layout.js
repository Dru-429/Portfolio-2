import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/Theme-provider";
import Head from "next/head";
import MetaData from "./components/MetaData";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // === PRIMARY METADATA (Optimized Under 60 characters) ===
  title: "Design Engineer & Web Developer | Dhruv Sahoo",
  description: "Freelance design engineer & web developer crafting modern UIs, interactive animations, and sleek web experiences.",

  // === ICONS ===
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-32x32.png",
  },

  // === KEYWORDS ===
  keywords: [
    "design engineer",
    "web developer",
    "frontend developer",
    "UI designer",
    "web developer India",
    "freelance web developer Delhi",
    "design engineer Delhi",
    "interactive web design",
    "responsive web design",
    "modern web development",
    "UI/UX development",
    "animation developer",
    "landing page design",
    "react developer",
    "next.js developer",
    "GSAP animation developer",
    "creative developer",
    "software developer",
    "developer portfolio",
    "Delhi",
    "India",
    "freelancer",
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
    title: "Design Engineer & Web Developer | Dhruv Sahoo",
    description: "Freelance design engineer & web developer crafting modern UIs, interactive animations, and sleek web experiences.",
    url: "https://www.dhruvsahoo.me",
    siteName: "Dhruv Sahoo",
    images: [
      {
        url: "https://www.dhruvsahoo.me/twitter-card.png", // Pointing to a clean 1200x630 banner asset instead of the manifest file
        width: 1200,
        height: 630,
        alt: "Dhruv Sahoo - Design Engineer & Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // === TWITTER CARD ===
  twitter: {
    card: "summary_large_image",
    title: "Design Engineer & Web Developer | Dhruv Sahoo", // Replaced old automation text
    description: "Freelance design engineer & web developer crafting modern UIs, interactive animations, and sleek web experiences.", // Replaced old automation text
    creator: "@dev_druv",
    images: ["https://www.dhruvsahoo.me/twitter-card.png"], // Re-using the card banner
    site: "@dev_druv",
  },

  // === VERIFICATION & ANALYTICS ===
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE_HERE",
  },

  category: "technology",
  creator: "Dhruv Sahoo",
  publisher: "Dhruv Sahoo",

  alternates: {
    canonical: "https://www.dhruvsahoo.me",
  },

  authors: [
    {
      name: "Dhruv Sahoo",
      url: "https://www.dhruvsahoo.me",
    },
  ],
};

// === STRUCTURED DATA (JSON-LD) ===
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dhruv Sahoo - Design Engineer & Web Developer",
  description: "Freelance design engineer & web developer specializing in modern UIs, interactive animations, and responsive web design.",
  url: "https://www.dhruvsahoo.me",
  email: "contact.dhruvsahoo@gmail.com",
  founder: {
    "@type": "Person",
    name: "Dhruv Sahoo",
    url: "https://www.dhruvsahoo.me",
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
    "Design Engineering",
    "Web Development",
    "UI/UX Development",
    "Landing Page Design",
    "Web Animation (GSAP)",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Solana ecosystem",
    "Full-stack Web3 Development",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dhruv Sahoo",
              url: "https://www.dhruvsahoo.me",
              logo: "https://www.dhruvsahoo.me/logo.png",
              description: "Design engineer & web developer creating modern, interactive web experiences.",
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
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <MetaData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}