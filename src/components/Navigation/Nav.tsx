import { ScrollIndicator } from "@/components/ScrollIndicator";
import isPropValid from "@emotion/is-prop-valid";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { StyleSheetManager } from "styled-components";
import { CloseIcon, LinkItem, Menu, NavStyles, StyledLink } from "./Nav.styled";

type Props = {
    isSticky: boolean;
};

const Hamburger = dynamic(() =>
    import(
        /* webpackChunkName: 'HamburgerMenuComponent' */
        "@/components/Navigation/Nav.styled"
    ).then(module => module.Hamburger),
);

export const Nav: React.FC<Props> = ({ isSticky }) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <NavStyles>
            <StyleSheetManager enableVendorPrefixes shouldForwardProp={prop => isPropValid(prop)}>
                <Hamburger isSticky={isSticky} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <CloseIcon />
                </Hamburger>
            </StyleSheetManager>
            <Menu>
                <div>
                    <ul>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link
                                href="/"
                                passHref
                                legacyBehavior
                                data-hover="Home"
                                aria-label="Home page"
                            >
                                <StyledLink className={pathname === "/" ? "active" : ""}>
                                    Home
                                </StyledLink>
                            </Link>
                        </LinkItem>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link
                                href="/blog"
                                passHref
                                legacyBehavior
                                data-hover="Blog"
                                aria-label="Blog posts page"
                            >
                                <StyledLink className={pathname === "/blog" ? "active" : ""}>
                                    Blog
                                </StyledLink>
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
                                <StyledLink className={pathname === "/about" ? "active" : ""}>
                                    About
                                </StyledLink>
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
                                <StyledLink className={pathname === "/uses" ? "active" : ""}>
                                    Uses
                                </StyledLink>
                            </Link>
                        </LinkItem>
                        <LinkItem onClick={() => setIsOpen(!isOpen)}>
                            <Link
                                href="/tips"
                                legacyBehavior
                                passHref
                                data-hover="Tips"
                                aria-label="Tips page"
                            >
                                <StyledLink className={pathname === "/tips" ? "active" : ""}>
                                    Tips
                                </StyledLink>
                            </Link>
                        </LinkItem>
                    </ul>
                    {isSticky && !isOpen && <ScrollIndicator />}
                </div>
            </Menu>
        </NavStyles>
    );
};
