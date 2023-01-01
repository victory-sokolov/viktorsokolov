import styled from "styled-components";

export const HeroStyles = styled.section`
    max-width: 65rem;
    position: relative;
    padding: 1.5rem 0 4rem;

    p {
        line-height: 3rem;
        font-size: var(--text-base);
        padding-bottom: var(--space-md);
        &:before {
            content: "";
            height: 15rem;
            width: 15rem;
            background-repeat: no-repeat;
            background-size: 15rem 15rem;
            position: absolute;
            top: 14%;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: 2rem 0;
    }
`;
