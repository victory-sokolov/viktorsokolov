import Link from "next/link";
import React from "react";
import styled from "styled-components";

type PaginationProps = {
    isFirst: boolean;
    isLast: boolean;
    prevPage: string;
    nextPage: string;
};

const PaginationWrapper = styled.div.attrs<PaginationProps>(props => props)`
    grid-column: 2 / span 12;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    a:nth-child(1) {
        pointer-events: ${props => (props.isFirst ? "none" : "auto")};
        cursor: ${props => (props.isFirst ? "default" : "pointer")};
    }

    a:nth-child(2) {
        color: ${props => (props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1)};
        pointer-events: ${props => (props.isLast ? "none" : "auto")};
        cursor: ${props => (props.isLast ? "default" : "pointer")};
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`;

const PaginationElement = styled(props => <Link {...props} />)`
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: var(--font-light);
    text-decoration: none;
    margin: 0 2rem;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;

export const Pagination: React.FC<PaginationProps> = ({ isFirst, isLast, prevPage, nextPage }) => {
    return (
        // @ts-expect-error Disable isFirst
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prevPage}>Previous Page</PaginationElement>
            <PaginationElement to={nextPage}>Next Page</PaginationElement>
        </PaginationWrapper>
    );
};
