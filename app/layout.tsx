import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Zaman Ali – Full Stack Developer",
  description: "Portfolio of Zaman Ali (Full Stack Developer): Problem Solving, Team Work, Chatbot, n8n automation, Mern Stack Development",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "Zaman Ali – Full Stack Developer", description: "Portfolio of Zaman Ali (Full Stack Developer): Problem Solving, Team Work, Chatbot, n8n automation, Mern Stack Development", url: "https://example.com", siteName: "Zaman Portfolio", images: [{ url: "/og.png", width: 1200, height: 630 }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Zaman Ali – Full Stack Developer", description: "Portfolio of Zaman Ali (Full Stack Developer): Problem Solving, Team Work, Chatbot, n8n automation, Mern Stack Development", images: ["/og.png"] },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
