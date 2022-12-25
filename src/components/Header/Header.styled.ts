import styled from "styled-components";

export const HeaderStyles = styled.header`
    background: var(--background-color);
    position: relative;

    .heading-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 0;
        z-index: 2;
    }

    h1 {
        a {
            font-weight: var(--font-bold);
            letter-spacing: 1.5px;
            font-size: var(--text-xl);

            &:hover > span:first-child {
                animation: moveTextRight 1s;
            }

            &:hover > span:last-child {
                animation: moveTextLeft 1s;
            }
        }

        span:last-child {
            position: relative;
            left: 1rem;
        }
    }

    .color-mode {
        z-index: 10;
        fill: white;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        min-height: 10rem;

        .heading-content {
            justify-content: flex-start;
        }
    }
`;
