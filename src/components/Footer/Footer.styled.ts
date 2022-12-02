import styled from "styled-components";

export const FooterStyles = styled.footer`
    display: flex;
    background: var(--background-color);
    text-align: center;
    margin-top: 6rem;
    border-top: 1px solid #343333;
    justify-content: center;

    .footer-content {
        line-height: 3.5rem;
        padding: 1rem;
        a {
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1.4px;
            font-weight: var(--font-bold);
            &:hover {
                color: var(--color-secondary);
            }
        }
    }
`;
