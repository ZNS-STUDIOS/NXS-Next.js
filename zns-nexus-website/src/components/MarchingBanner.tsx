"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export const MarchingBanner = () => {
    const firstText = useRef<HTMLDivElement>(null);
    const secondText = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        requestAnimationFrame(animate);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        });
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });

        xPercent += 0.1 * direction;
        requestAnimationFrame(animate);
    };

    return (
        <div className="relative flex h-[15vh] overflow-hidden bg-zns-mint text-zns-dark items-center">
            <div ref={slider} className="relative whitespace-nowrap flex">
                <p ref={firstText} className="text-[10vh] font-display font-bold pr-10">
                    STRATEGY • DESIGN • DEVELOPMENT • GROWTH •
                </p>
                <p ref={secondText} className="absolute left-full top-0 text-[10vh] font-display font-bold pr-10">
                    STRATEGY • DESIGN • DEVELOPMENT • GROWTH •
                </p>
            </div>
        </div>
    );
};
