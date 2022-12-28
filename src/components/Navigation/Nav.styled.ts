import styled from "styled-components";
import { HamburgerProps } from "./types";

export const CloseIcon = styled.div`
    @media ${props => props.theme.breakpoints.mobile} {
        position: relative;
        flex: none;
        width: 100%;
        height: 0.2rem;
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;

        &:before,
        &:after {
            content: "";
            position: absolute;
            z-index: 1;
            top: -1rem;
            width: 100%;
            height: 0.2rem;
            background: var(--white);
        }

        &:after {
            top: 1rem;
        }
    }
`;

export const Menu = styled.div`
    ul {
        padding: 0;
    }
    @media ${props => props.theme.breakpoints.mobile} {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 100%;
        min-height: 100vh;
        visibility: hidden;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            background: rgb(9 13 32 / 90%);
            border-radius: 50%;
            width: 100%;
            height: 100%;
            display: flex;
            flex: none;
            align-items: center;
            justify-content: center;
            transform: scale(0);
            transition: all 0.4s ease;
            backdrop-filter: blur(6px);
        }

        & > div > div {
            text-align: center;
            max-width: 90vw;
            max-height: 100vh;
            opacity: 0;
        }
    }
`;

export const LinkItem = styled.li`
    display: inline-block;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size: var(--text-base);
        padding: var(--space-sm);
        text-align: center;
        line-height: 4rem;
        display: block;
        color: #fff;
    }
`;

export const StyledLink = styled.a`
    font-size: var(--space-md);
    font-weight: var(--font-medium);
    letter-spacing: 2.2px;
    position: relative;
    margin: 0 var(--space-md) var(--space-md) 0;
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        padding: 1.1rem 0;
        max-width: 0;
        border-bottom: 2px solid var(--white);
        content: attr(data-hover);
        transition: max-width 0.5s;

        @media ${props => props.theme.breakpoints.mobile} {
            top: 2px;
        }
    }
    &:hover {
        &:before {
            max-width: 100%;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        text-decoration: none;
        transition: color 0.4s ease;
        font-size: var(--text-md);
        padding: 2rem 0;
    }
`;

export const NavStyles = styled.nav`
    z-index: 1;
`;

export const Hamburger = styled.div<HamburgerProps>`
    @media ${props => props.theme.breakpoints.mobile} {
        position: absolute;
        top: 0;
        right: ${props => (props.isSticky ? "0" : "-40px")};
        z-index: 5;
        width: 4.5rem;
        height: 4.5rem;
        padding: 1rem;
        background: linear-gradient(90deg, rgba(53, 96, 197, 1) 0%, rgba(98, 22, 216, 1) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        ${({ isOpen }: { isOpen: boolean }) =>
            isOpen
                ? /*css*/ `
                body {
                    overflow: hidden;
                }
                div {
                    transform: rotate(135deg);
                }
                div:before,
                div:after {
                    top: 0;
                    transform: rotate(90deg);
                }
                ~ ${Menu} {
                    visibility: visible;
                    div {
                        border-radius: 0;
                        transform: scale(1);
                        transition-duration: 0.75s;
                    }
                }
        /*css*/`
                : "div{transform: rotate(0deg)}"}
    }
`;
