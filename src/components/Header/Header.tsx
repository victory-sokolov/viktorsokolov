import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { HeaderStyles } from "./Header.styled";
import Hero from "@components/Hero";
import Toggle from "@components/Toggle";
import dynamic from "next/dynamic";

const Nav = dynamic(() =>
    import(
        /*webpackChunkName: 'Navigation' */
        "@components/Navigation"
    ).then(module => module.default)
);

export const Header: React.FC<any> = ({ toggleTheme, theme }) => {
    const router = useRouter();
    const path = router.pathname;
    const [isRootUrl, setIsRootUrl] = useState(path === "/" ? true : false);
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

    useEffect(() => {
        setIsRootUrl(path === "/" ? true : false);
    }, [path]);

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > elTopOffset + elHeight) {
            setSticky({ isSticky: true, offset: elHeight });
        } else {
            setSticky({ isSticky: false, offset: 0 });
        }
    };

    useEffect(() => {
        const header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
            handleScroll(header.top, header.height);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <div>
            <HeaderStyles className={`${sticky.isSticky ? "sticky" : ""}`} ref={headerRef}>
                <div className="heading-content">
                    <Nav isSticky={sticky.isSticky} />
                    <Toggle toggleTheme={toggleTheme} theme={theme} />
                </div>
            </HeaderStyles>
            {isRootUrl && <Hero />}
        </div>
    );
};
