import { TagsMapping } from "@components/PostLabels";
import styled from "styled-components";

const TechContainer = styled.ul`
    list-style: none;
    margin: var(--space-sm) 0 var(--space-lg);
    border-radius: 6px;
    border: 1px solid var(--color-secondary-900);
    padding: var(--space-md);
    background: var(--color-primary-600);
    color: #fff;

    li {
        display: inline-flex;
    }

    span {
        padding-right: 1rem;
        font-size: 1.6rem;
        font-weight: var(--font-medium);
    }
`;

export const TechStackList = ({ children }) => {
    const size = 22;
    return (
        <TechContainer>
            {Object.entries(TagsMapping).map(([key, value]) => (
                <li key={key}>{value()}</li>
            ))}
        </TechContainer>
    );
};
