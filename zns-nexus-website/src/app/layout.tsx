import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { CustomCursor } from "@/components/ui/custom-cursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${outfit.variable} ${cormorant.variable} antialiased bg-zns-dark text-zns-cream selection:bg-zns-mint selection:text-zns-dark`}
      >
        <ReactLenis root>
          <CustomCursor />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
