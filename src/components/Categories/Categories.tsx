"use client";

import React from "react";
import styled from "styled-components";

import { TagsMapping } from "../Post/PostLabels";

const CategorieWrapperStyle = styled.div`
    padding: 0.5rem 0 2rem;
    text-align: center;
    span {
        border-radius: 5px;
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
                .map((category: string) => category.trim().toLowerCase())
                .map((category: string) =>
                    TagsMapping[category] ? (
                        <CategorieStyle key={category}>{TagsMapping[category]()}</CategorieStyle>
                    ) : (
                        ""
                    )
                )}
        </CategorieWrapperStyle>
    );
};
