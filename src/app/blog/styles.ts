"use client";

import { styled } from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopBlogMeta = styled.div`
    padding-bottom: var(--space-md);

    @media ${props => props.theme.breakpoints.tablet} {
        text-align: center;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--link-color);
    &:hover {
        color: var(--color-secondary);
    }
`;
