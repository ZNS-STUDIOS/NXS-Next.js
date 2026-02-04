import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { CustomCursor } from "@/components/ui/custom-cursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} ${mono.variable} antialiased bg-zns-dark text-zns-cream selection:bg-zns-gold selection:text-white`}
      >
        <ReactLenis root>
          <CustomCursor />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
