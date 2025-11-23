import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZNS Nexus | Connecting Dots - Premium Digital Agency",
  description: "We don't make websites. We make relations. Full-spectrum digital solutions for startups, brands, and enterprises across UAE, Canada, and India.",
  keywords: ["web development", "video editing", "social media marketing", "content creation", "digital agency", "UAE", "Canada", "India"],
  openGraph: {
    title: "ZNS Nexus | Connecting Dots",
    description: "Premium Digital Agency. We don't make websites. We make relations.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} antialiased bg-zns-dark text-zns-cream selection:bg-zns-mint selection:text-zns-dark`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
