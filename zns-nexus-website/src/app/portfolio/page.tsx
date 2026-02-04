import { Metadata } from "next";
import { PortfolioClient } from "@/components/PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | ZNS Nexus",
    description: "Explore our portfolio of successful projects across web development, video editing, social media marketing, and content creation.",
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
