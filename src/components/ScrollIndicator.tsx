"use client";

import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
    const [progress, setProgress] = useState<number>(0);

    const updateProgressIndicator = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // Full height
        const height
            = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        // Percentage scrolled
        const scrolledPercentage = (winScroll / height) * 100;
        setProgress(scrolledPercentage);
    };

    useEffect(() => {
        updateProgressIndicator();
        window.addEventListener("scroll", updateProgressIndicator);
        return () => {
            window.removeEventListener("scroll", updateProgressIndicator);
        };
    }, []);

    return (
        <div
            className="bottom-0 left-0 h-[3px] absolute transition-[0.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)]"
            style={{
                width: `${progress}%`,
                background:
                    "linear-gradient(60deg, hsl(224, 85%, 66%), hsl(269, 85%, 66%), hsl(314, 85%, 66%), hsl(359, 85%, 66%), hsl(44, 85%, 66%), hsl(89, 85%, 66%), hsl(134, 85%, 66%), hsl(179, 85%, 66%))",
            }}
        />
    );
};
