import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "EcoHouse | Sustainable Housing Innovation",
  description:
    "A Capstone Project by Group 10127 - Innovative sustainable housing solutions combining thermal efficiency, fire resistance, and eco-friendly materials.",
  generator: "v0.app",
  keywords: [
    "sustainable housing",
    "eco-friendly",
    "green architecture",
    "thermal insulation",
    "fire resistance",
    "capstone project",
  ],
  icons: {
    icon: [
      {
        url: "/3.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/3.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/3.png",
        type: "image/svg+xml",
      },
    ],
    apple: "3.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
