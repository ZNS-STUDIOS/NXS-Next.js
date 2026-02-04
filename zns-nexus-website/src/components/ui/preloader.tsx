"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(timer);
                return 100;
            });
        }, 20);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-end gap-2"
                        >
                            <span className="text-8xl md:text-9xl font-display font-bold text-white tracking-tighter">
                                {counter}
                            </span>
                            <span className="text-2xl md:text-4xl font-sans font-light text-ios-blue mb-4 md:mb-6">
                                %
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-[2px] bg-white/20 mt-8 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-ios-blue"
                                initial={{ width: 0 }}
                                animate={{ width: `${counter}%` }}
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-white/40 text-sm uppercase tracking-[0.3em]"
                        >
                            Loading Experience
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
