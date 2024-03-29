import styled from "styled-components";

export const HeroStyles = styled.section`
    max-width: 65rem;
    position: relative;
    padding: var(--space-xl) 0 4rem;

    p {
        line-height: 3rem;
        padding: var(--space-md) 0 var(--space-md);
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
