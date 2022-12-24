import styled from "styled-components";
import { BiInfoCircle } from "react-icons/bi";

export const BlockquoteContainer = styled.div`
    display: flex;
    background: var(--color-secondary-900);
    border-color: var(--color-secondary-800);
    font-size: 2.2rem;
    padding: 2.4rem 3.2rem;
    margin-top: 2rem;
    border-left: 3px solid;
    border-radius: 6px 6px 6px 3px;
    p {
        margin-left: 2rem;
    }
`;

export const Blockquote = ({ children }) => {
    return (
        <BlockquoteContainer>
            <BiInfoCircle size={26} />
            <p>{children}</p>
        </BlockquoteContainer>
    );
};
