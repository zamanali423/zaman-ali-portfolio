import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://zaman-ali-portfolio.vercel.app"),

  title: {
    default:
      "Zaman Ali | Full Stack Developer | MERN Stack Developer | AI Developer",
    template: "%s | Zaman Ali",
  },

  description:
    "Zaman Ali is a Full Stack Developer, MERN Stack Developer, AI Developer and Software Engineer specializing in React.js, Next.js, Node.js, Express.js, NestJS, MongoDB, PostgreSQL, React Native, WebRTC and real-time systems.",

  keywords: [
    "Zaman Ali",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Developer",
    "Software Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "React Native Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "WebRTC",
    "Socket.IO",
    "Automation",
  ],

  authors: [{ name: "Zaman Ali" }],
  creator: "Zaman Ali",
  publisher: "Zaman Ali",

  alternates: {
    canonical: "https://zaman-ali-portfolio.vercel.app",
  },

  openGraph: {
    title:
      "Zaman Ali | Full Stack Developer | MERN Stack Developer | AI Developer",
    description:
      "Portfolio of Zaman Ali showcasing Full Stack, MERN Stack, AI and Real-Time System Development projects.",
    url: "https://zaman-ali-portfolio.vercel.app",
    siteName: "Zaman Ali Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zaman Ali Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Zaman Ali | Full Stack Developer | MERN Stack Developer | AI Developer",
    description:
      "Portfolio of Zaman Ali showcasing Full Stack, MERN Stack, AI and Real-Time System Development projects.",
    images: ["/profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://zaman-ali-portfolio.vercel.app/#zamanali",
    name: "Zaman Ali",
    jobTitle: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "AI Developer",
      "Software Developer",
    ],
    url: "https://zaman-ali-portfolio.vercel.app",
    sameAs: [
      "https://linkedin.com/in/zamanali27",
      "https://github.com/zamanali423",
      "https://zamanportfolio.netlify.app/"
    ],
    image: "https://zaman-ali-portfolio.vercel.app/profile.jpg",
    description:
      "Full Stack Developer, MERN Stack Developer, AI Developer and Software Engineer",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "React Native",
      "Artificial Intelligence",
      "Socket.IO",
      "WebRTC",
      "Automation",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}