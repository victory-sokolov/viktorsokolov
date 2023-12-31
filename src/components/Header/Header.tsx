import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { HeaderStyles } from "./Header.styled";

const Nav = dynamic(() =>
    import(
        /*webpackChunkName: 'Navigation' */
        "@/components/Navigation"
    ).then(module => module.default)
);

const Hero = dynamic(() =>
    import(
        /*webpackChunkName: 'Hero' */
        "@/components/Hero"
    ).then(module => module.default)
);

export const Header: React.FC = () => {
    const pathname = usePathname();
    const [isRootUrl, setIsRootUrl] = useState(pathname === "/" ? true : false);
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        setIsRootUrl(pathname === "/" ? true : false);
    }, [pathname]);

    useEffect(() => {
        const header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height);
        };
        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, [sticky]);

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.scrollY > elTopOffset) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    return (
        <div style={{ position: "relative" }}>
            <HeaderStyles className={`${sticky.isSticky ? "sticky" : ""}`} ref={headerRef}>
                <div className="heading-content">
                    <Nav isSticky={sticky.isSticky} />
                </div>
            </HeaderStyles>
            {isRootUrl && <Hero />}
        </div>
    );
};
