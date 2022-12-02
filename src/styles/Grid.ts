import styled from "styled-components";

export const Grid = styled.div<{ cols: string; rows?: string; gap?: string }>`
    display: grid;
    grid-template-columns: ${props => props.cols};
    grid-template-rows: ${props => props.rows};
    gap: ${props => props.gap};
    justify-content: center;
    justify-items: start;
    align-content: center;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

export const GridExtended = styled(Grid)`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, 33rem);
    margin-top: 1rem;
    padding: 1rem;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: repeat(auto-fit, 40rem);
    }
`;
