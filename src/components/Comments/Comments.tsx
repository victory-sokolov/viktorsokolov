import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CommentSection = styled.div`
    margin-top: 10rem;
    h2 {
        border-bottom: 2px solid var(--mode);
        padding-bottom: 0.8rem;
    }
`;

export const Comments: React.FC = () => {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const parent = commentBox?.current;
        const commentScript = document.createElement("script");
        console.log("Rendered");
        commentScript.async = true;
        commentScript.src = "https://utteranc.es/client.js";
        commentScript.setAttribute("repo", "victory-sokolov/comments");
        commentScript.setAttribute("issue-term", "pathname");
        commentScript.setAttribute("id", "utterances");
        commentScript.setAttribute("theme", "github-light");
        commentScript.setAttribute("crossorigin", "anonymous");

        parent?.appendChild(commentScript);

        return () => {
            while (parent?.firstChild) {
                parent?.removeChild(parent?.lastChild);
            }
        };
    }, [commentBox]);

    return (
        <CommentSection>
            <h2>Comments</h2>
            <div ref={commentBox} />
        </CommentSection>
    );
};
