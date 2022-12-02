import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        setIsRootUrl(path === "/" ? true : false);
    }, [path]);

    return (
        <HeaderStyles>
            <div className="heading-content">
                <Nav />
                <Toggle toggleTheme={toggleTheme} theme={theme} />
            </div>
            {isRootUrl && <Hero />}
        </HeaderStyles>
    );
};
