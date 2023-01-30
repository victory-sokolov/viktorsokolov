import { ScrollIndicator } from "@components/ScrollIndicator";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { NavStyles, CloseIcon, Menu, LinkItem, StyledLink } from "./Nav.styled";
import { Props } from "./types";

const Hamburger = dynamic(() =>
    import(
        /*webpackChunkName: 'HamburgerMenuComponent' */
        "@components/Navigation/Nav.styled"
    ).then(module => module.Hamburger)
);

export const Nav: React.FC<Props> = ({ isSticky }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const route = router.asPath;

    return (
        <NavStyles>
            <Hamburger isSticky={isSticky} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <CloseIcon />
            </Hamburger>
            <Menu>
                <div>
                    <ul>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link href="/" passHref legacyBehavior data-hover="Home" aria-label="Home page">
                                <StyledLink className={route == "/" ? "active" : ""}>Home</StyledLink>
                            </Link>
                        </LinkItem>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link href="/blog" passHref legacyBehavior data-hover="Blog" aria-label="Blog posts page">
                                <StyledLink className={route == "/blog" ? "active" : ""}>Blog</StyledLink>
                            </Link>
                        </LinkItem>

                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link
                                href="/about"
                                passHref
                                legacyBehavior
                                data-hover="About"
                                aria-label="About me page"
                                prefetch={false}
                            >
                                <StyledLink className={route == "/about" ? "active" : ""}>About</StyledLink>
                            </Link>
                        </LinkItem>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link
                                href="/uses"
                                passHref
                                legacyBehavior
                                data-hover="Uses"
                                aria-label="Uses page"
                                prefetch={false}
                            >
                                <StyledLink className={route == "/uses" ? "active" : ""}>Uses</StyledLink>
                            </Link>
                        </LinkItem>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link href="/tips" legacyBehavior passHref data-hover="Tips" aria-label="Tips page">
                                <StyledLink className={route == "/tips" ? "active" : ""}>Tips</StyledLink>
                            </Link>
                        </LinkItem>
                    </ul>
                    {isSticky && !isOpen && <ScrollIndicator />}
                </div>
            </Menu>
        </NavStyles>
    );
};
