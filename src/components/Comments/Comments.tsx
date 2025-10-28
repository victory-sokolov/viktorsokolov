"use client";

import React, { useEffect, useRef } from "react";

export const Comments: React.FC = () => {
    const commentBox = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const commentScript = document.createElement("script");
        commentScript.async = true;
        commentScript.src = "https://utteranc.es/client.js";
        commentScript.setAttribute("repo", "victory-sokolov/comments");
        commentScript.setAttribute("issue-term", "pathname");
        commentScript.setAttribute("id", "utterances");
        commentScript.setAttribute("theme", "github-light");
        commentScript.setAttribute("crossorigin", "anonymous");
        commentScript.onload = () => {
            const comments = document.getElementById("comments-container");
            if (comments && comments.children[1]) {
                // @ts-expect-error ignore type
                comments.children[1].style.display = "none";
            }
        };
        commentScript.async = true;
        commentBox.current.appendChild(commentScript);
    }, []);

    return (
        <div className="mt-40 [&_h2]:border-b-2 [&_h2]:border-[rgb(var(--mode))] [&_h2]:pb-3">
            <h2>Comments</h2>
            <div ref={commentBox} id="comments-container" />
        </div>
    );
};
