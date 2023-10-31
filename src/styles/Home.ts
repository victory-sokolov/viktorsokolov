"use client";

import styled from "styled-components";

export const HomeStyled = styled.div`
    h1,
    h2 {
        padding-bottom: var(--space-lg);
    }

    .recentrly-published {
        margin-top: var(--space-md);
    }

    .arrow {
        width: 25px;
        height: 25px;
        position: relative;
        left: 12px;
        top: 10px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        text-align: center;
    }
`;
