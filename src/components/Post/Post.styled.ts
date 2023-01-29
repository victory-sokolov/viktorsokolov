import styled from "styled-components";

export const Card = styled.div`
    box-shadow: var(--light-shadow);
    background: #fff;
    border-radius: 8px;
    color: var(--text-color-primary);
    position: relative;
    max-width: 34rem;
    margin-bottom: 2rem;
    transition: transform 0.5s;

    &:hover {
        transform: scale3d(1.025, 1.025, 1);
    }

    .post-meta-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        > *:last-child {
            padding: 0 2rem 1.5rem;
        }
    }

    .post-title {
        text-align: center;
        margin-top: 1rem;
        &:hover {
            transition: 0.5s;
        }
    }

    .post-data {
        padding: 0.2rem 2.2rem 1rem 2.2rem;
    }

    .post-description {
        margin-bottom: 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        max-width: 40rem;
    }
`;

export const MetaPostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    font-weight: var(--font-md);
    font-size: var(--text-base);
    padding: 1.5rem 1rem;

    svg {
        margin-right: 0.5rem;
        font-size: var(--space-md);
    }

    span:not(:first-child) {
        margin-left: 0.3rem;
    }

    time:not(:first-child) {
        padding-left: 1rem;
    }
`;
