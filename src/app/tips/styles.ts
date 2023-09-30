"use client";

import styled from "styled-components";

export const TipsWrapper = styled.div`
    height: 100%;
`;

export const DevelopmentTipsTop = styled.div`
    padding-bottom: 3rem;
    text-align: center;
`;

export const TipItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    border: 1px solid var(--color-secondary-700);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 3rem;
    h3 {
        margin-top: 1rem;
    }
`;

export const TipsContainer = styled.div`
    padding: 2rem;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    box-shadow: var(--tip-box-shadow-color) 0px 0px var(--box-shadow-px);
    border-radius: 4px;

    .image-wrapper {
        position: relative;
        width: 35rem;
        height: 20rem;
        img {
            border-radius: 5px;
        }
    }

    .tip-details {
        text-align: left;
        line-height: 4rem;
        a {
            display: flex;
            align-items: center;
        }
        .tweet-link {
            position: relative;
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .image-wrapper {
            width: 0;
        }
    }
`;
