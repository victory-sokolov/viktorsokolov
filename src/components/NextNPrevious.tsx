import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const NextPreviousItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 2.5rem;

    .next-item {
        margin-right: auto;
    }

    .previous-item {
        margin-left: auto;
    }

    .next-item,
    .previous-item {
        border: 1px solid #424f9e;
        border-radius: 8px;
        padding: 1rem;
        width: 30rem;
        height: 100%;

        p {
            padding: 0;
            margin: 0;
        }

        &:hover {
            background: var(--color-secondary-700);
            color: #fff;
        }
    }
`;

const NextNPrevious = ({ next, prev, postType }) => {
    return (
        <NextPreviousItem>
            {prev && (
                <Link href={`/${postType}/${prev.slug}`}>
                    <div className="previous-item">
                        <p>⇠ Previous {postType}</p>
                        {prev.title}
                    </div>
                </Link>
            )}

            {next && (
                <Link href={`/${postType}/${next.slug}`}>
                    <div className="next-item">
                        <p>Next {postType} ⇢</p>
                        {next.title}
                    </div>
                </Link>
            )}
        </NextPreviousItem>
    );
};

export default NextNPrevious;
