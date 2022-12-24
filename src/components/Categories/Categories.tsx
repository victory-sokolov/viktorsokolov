import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const CategorieWrapperStyle = styled.div`
    padding: 0.5rem 0 2rem;
    text-align: center;

    span {
        background: var(--color-secondary-700);
        box-shadow: var(--light-shadow);
        border-radius: 8px;
        text-align: center;
        padding: 0.7rem;
        color: white;
        font-size: 1.4rem;
        letter-spacing: 1.4px;
        font-weight: var(--font-medium);
    }
`;
const CategorieStyle = styled.div`
    display: inline-block;
    padding-bottom: 0.5rem;
    &:not(:first-child) {
        margin-left: 1rem;
    }
`;

export const Categories: React.FC<any> = ({ categories, style }) => {
    return (
        <CategorieWrapperStyle style={{ ...style }}>
            {categories
                .map((category: string) => category.trim())
                .filter(category => category.length > 0)
                .map((category: string, index: number) => (
                    <CategorieStyle key={index}>
                        <span>{category}</span>
                    </CategorieStyle>
                ))}
        </CategorieWrapperStyle>
    );
};
