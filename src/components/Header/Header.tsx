"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

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
    const sentinelRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const headerEl = headerRef.current;
        const sentinelEl = sentinelRef.current;
        if (!headerEl || !sentinelEl) return;

        const sentinelTop = sentinelEl.getBoundingClientRect().top;

        // Hysteresis based on a sentinel element that stays in normal flow.
        const stickOnThreshold = -20; // start sticking once sentinel is 20px above viewport
        const stickOffThreshold = 0; // unstick when sentinel returns to viewport

        setSticky(prev => {
            let nextIsSticky = prev.isSticky;

            if (!prev.isSticky && sentinelTop <= stickOnThreshold) {
                nextIsSticky = true;
            } else if (prev.isSticky && sentinelTop >= stickOffThreshold) {
                nextIsSticky = false;
            }

            if (prev.isSticky === nextIsSticky) return prev;
            return { isSticky: nextIsSticky, offset: nextIsSticky ? headerEl.offsetHeight : 0 };
        });
    }, []);

    useEffect(() => {
        setIsRootUrl(pathname === "/");
    }, [pathname]);

    useEffect(() => {
        if (!headerRef.current) return;
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="relative">
            <div
                ref={sentinelRef}
                aria-hidden
                className="absolute top-0 h-1 w-full"
            />
            {sticky.isSticky && <div style={{ height: sticky.offset }} />}
            <header className={`${sticky.isSticky ? "sticky" : ""}`} ref={headerRef}>
                <div className="z-20 w-full py-6">
                    <Nav aria-label="Navigation" isSticky={sticky.isSticky} />
                </div>
            </header>
            {isRootUrl && (
                <div className="page-shell">
                    <Hero />
                </div>
            )}
        </div>
    );
};
