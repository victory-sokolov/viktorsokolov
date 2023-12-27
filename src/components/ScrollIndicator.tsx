"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollIndicatorWrapper = styled.div`
    background: var(--accent-gradient);
    bottom: 0;
    left: 0;
    height: 3px;
    position: absolute;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ScrollIndicator = () => {
    const [progress, setProgress] = useState<number>(0);

    const updateProgressIndicator = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        //Full height
        const height =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //Percentage scrolled
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

    return <ScrollIndicatorWrapper style={{ width: `${progress}%` }}></ScrollIndicatorWrapper>;
};
