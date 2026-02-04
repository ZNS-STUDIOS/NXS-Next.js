export interface CaseStudy {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    thumbnail: string;
    heroImage: string;
    shortDescription: string;
    challenge: string;
    solution: string;
    process: {
        title: string;
        description: string;
    }[];
    impact: string; // Business outcome summary
    results: string[];
    technologies: string[];
    images: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "quantum-email-platform",
        title: "Quantum Email Platform",
        category: "Web Development",
        client: "TechFlow Inc.",
        year: "2024",
        thumbnail: "/portfolio/quantum-thumb.jpg",
        heroImage: "/portfolio/quantum-hero.jpg",
        shortDescription: "Revolutionary email management platform with AI-powered organization",
        challenge: "TechFlow needed a modern email platform that could handle millions of messages while providing intelligent categorization and search capabilities.",
        solution: "We built a high-performance SaaS platform using Next.js, implementing real-time collaboration features, AI-powered smart folders, and advanced search with natural language processing.",
        process: [
            { title: "Discovery", description: "Analyzed 50+ competitor platforms and conducted 20 user interviews to identify pain points." },
            { title: "Architecture", description: "Designed a scalable microservices architecture using Node.js and Redis for real-time performance." },
            { title: "Development", description: "Agile sprints focused on core latency metrics, ensuring sub-100ms interactions." },
            { title: "Launch", description: "Phased rollout to 10k beta users, gathering feedback for final polish." }
        ],
        impact: "Transformed TechFlow from a legacy provider to a market leader, directly capturing enterprise market share.",
        results: [
            "500K+ active users in first 6 months",
            "99.9% uptime with sub-200ms response times",
            "40% increase in user productivity",
            "Featured in TechCrunch and Product Hunt #1"
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "OpenAI API", "WebSockets"],
        images: [
            "/portfolio/quantum-1.jpg",
            "/portfolio/quantum-2.jpg",
            "/portfolio/quantum-3.jpg"
        ],
        testimonial: {
            quote: "ZNS Nexus transformed our vision into reality. The platform exceeded all expectations.",
            author: "Sarah Chen",
            role: "CEO, TechFlow Inc."
        }
    },
    {
        slug: "neon-gaming-brand",
        title: "Neon Gaming Rebrand",
        category: "Video Editing",
        client: "Neon Esports",
        year: "2024",
        thumbnail: "/portfolio/neon-thumb.jpg",
        heroImage: "/portfolio/neon-hero.jpg",
        shortDescription: "Complete visual identity overhaul for professional esports organization",
        challenge: "Neon Esports needed to establish a premium brand presence to attract sponsors and compete with top-tier organizations.",
        solution: "We created a comprehensive brand video package including team intro videos, highlight reels, and social media content with cinematic production quality and motion graphics.",
        process: [
            { title: "Brand Audit", description: "Evaluated current assets and defined the 'Cyber-Noir' aesthetic." },
            { title: "Production", description: "3-day shoot with players capturing high-fidelity promotional footage." },
            { title: "Post-Production", description: "Advanced VFX and color grading to match the new brand identity." }
        ],
        impact: "Elevated perceived value of the organization, directly enabling high-ticket sponsorship deals.",
        results: [
            "3M+ views across social platforms",
            "Secured $2M in new sponsorships",
            "150% increase in merchandise sales",
            "Won 2024 Esports Marketing Award"
        ],
        technologies: ["After Effects", "Premiere Pro", "Cinema 4D", "DaVinci Resolve"],
        images: [
            "/portfolio/neon-1.jpg",
            "/portfolio/neon-2.jpg",
            "/portfolio/neon-3.jpg"
        ]
    },
    {
        slug: "viral-social-campaign",
        title: "Viral Product Launch Campaign",
        category: "Social Media Marketing",
        client: "Luminex Wearables",
        year: "2023",
        thumbnail: "/portfolio/luminex-thumb.jpg",
        heroImage: "/portfolio/luminex-hero.jpg",
        shortDescription: "Multi-platform launch campaign generating 10M+ impressions",
        challenge: "Launch a new smartwatch in a saturated market dominated by established brands.",
        solution: "Developed a data-driven social media strategy with influencer partnerships, viral challenges, and targeted ad campaigns across Instagram, TikTok, and LinkedIn.",
        process: [
            { title: "Strategy", description: "Identified 'Tech-Fashion' niche and selected 50 micro-influencers." },
            { title: "Creation", description: "Produced 200+ assets tailored for vertical video platforms." },
            { title: "Distribution", description: "Synchronized posting schedule to trigger algorithm spikes." }
        ],
        impact: "Created a 'FOMO' effect that sold out initial inventory in 48 hours.",
        results: [
            "10M+ organic impressions in 30 days",
            "250% ROI on ad spend",
            "50K pre-orders in launch week",
            "Featured in Forbes and Wired"
        ],
        technologies: ["Meta Ads", "TikTok Ads", "Hootsuite", "Google Analytics", "Canva"],
        images: [
            "/portfolio/luminex-1.jpg",
            "/portfolio/luminex-2.jpg",
            "/portfolio/luminex-3.jpg"
        ],
        testimonial: {
            quote: "The campaign exceeded our wildest expectations. ZNS Nexus truly understands modern marketing.",
            author: "Marcus Rodriguez",
            role: "CMO, Luminex Wearables"
        }
    },
    {
        slug: "fintech-content-strategy",
        title: "FinTech Thought Leadership",
        category: "Content Creation",
        client: "CryptoVault",
        year: "2024",
        thumbnail: "/portfolio/cryptovault-thumb.jpg",
        heroImage: "/portfolio/cryptovault-hero.jpg",
        shortDescription: "Establishing industry authority through strategic content",
        challenge: "CryptoVault needed to build trust and authority in the competitive cryptocurrency wallet space.",
        solution: "Created a comprehensive content strategy including blog posts, whitepapers, case studies, and educational videos that positioned CryptoVault as thought leaders.",
        process: [
            { title: "Keyword Research", description: "Targeted high-intent, low-competition trust terms." },
            { title: "Content Production", description: "Collaborated with subject matter experts to ensure technical accuracy." },
            { title: "Optimization", description: "Technical SEO and interlinking structure to boost domain authority." }
        ],
        impact: "Reduced customer acquisition cost (CAC) by 40% through organic inbound traffic.",
        results: [
            "500% increase in organic traffic",
            "Featured in 15+ industry publications",
            "Built email list of 100K+ subscribers",
            "Improved conversion rate by 180%"
        ],
        technologies: ["WordPress", "SEO Tools", "Grammarly", "HubSpot", "Google Analytics"],
        images: [
            "/portfolio/cryptovault-1.jpg",
            "/portfolio/cryptovault-2.jpg",
            "/portfolio/cryptovault-3.jpg"
        ]
    }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find(study => study.slug === slug);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
    return caseStudies.filter(study => study.category === category);
}
