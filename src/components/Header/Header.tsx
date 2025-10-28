"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Nav = dynamic(() =>
    import(
        /* webpackChunkName: 'Navigation' */
        "@/components/Navigation"
    ).then(module => module.default),
);

const Hero = dynamic(() =>
    import(
        /* webpackChunkName: 'Hero' */
        "@/components/Hero"
    ).then(module => module.default),
);

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isRootUrl, setIsRootUrl] = useState(pathname === "/");
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef<HTMLElement>(null);

    const handleScroll = (elTopOffset: number, elHeight: number) => {
        if (window.scrollY > elTopOffset) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        setIsRootUrl(pathname === "/");
    }, [pathname]);

    useEffect(() => {
        if (!headerRef.current) return;

        const header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height);
        };
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, [sticky]);

    return (
        <div className="relative">
            <header className={`${sticky.isSticky ? "sticky" : ""}`} ref={headerRef}>
                <div className="flex items-center justify-center py-16 z-20 max-sm:py-8 max-sm:justify-start">
                    <Nav aria-label="Navigation" isSticky={sticky.isSticky} />
                </div>
            </header>
            {isRootUrl && <Hero />}
        </div>
    );
};
