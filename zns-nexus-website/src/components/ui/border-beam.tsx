"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
    className?: string;
    lightWidth?: number;
    duration?: number;
    lightColor?: string;
    borderWidth?: number;
    delay?: number;
}

export const BorderBeam = ({
    className,
    lightWidth = 200,
    duration = 10,
    lightColor = "#14e08e",
    borderWidth = 1.5,
    delay = 0,
}: BorderBeamProps) => {
    return (
        <div
            style={
                {
                    "--light-width": `${lightWidth}px`,
                    "--duration": `${duration}s`,
                    "--light-color": lightColor,
                    "--border-width": `${borderWidth}px`,
                    "--delay": `-${delay}s`,
                } as React.CSSProperties
            }
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
                "[background:linear-gradient(to_right,var(--light-color),transparent,transparent)_border-box]",
                "[mask:linear-gradient(white,white)_padding-box,linear-gradient(white,white)]",
                "[-webkit-mask-composite:xor]",
                "[mask-composite:exclude]",
                "before:absolute before:aspect-square before:w-[calc(var(--light-width)*1px)] before:animate-border-beam",
                "before:[animation-delay:var(--delay)] before:[background:linear-gradient(to_right,var(--light-color),transparent,transparent)]",
                "before:[offset-anchor:90%_50%] before:[offset-path:rect(0_auto_auto_0_round_calc(var(--light-width)*1px))]",
                className
            )}
        />
    );
};
