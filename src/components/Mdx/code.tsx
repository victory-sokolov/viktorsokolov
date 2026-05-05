/* eslint ts/no-require-imports: 0 */
"use client";

import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";

type CodeBlockElement = React.ReactElement<{
    children: string;
    className: string;
}>;

export const Code: React.FC<{ children: CodeBlockElement }> = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);
    const codeString = children.props.children.trim();
    const language = children.props.className.split("-")[1];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString);
        setIsCopied(true);
        setTimeout(setIsCopied, 4000, false);
    };

    return (
        <Highlight code={codeString} language={language} theme={themes.jettwaveDark}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="code-highlight" data-language={language}>
                    <div className="top-sm [&>span]:h-sm relative flex flex-row rounded-t-md bg-[#142532] p-4 [&_.green]:bg-[#6aca43] [&_.red]:bg-[#ee5c56] [&_.yellow]:bg-[#fcc12d] [&>span]:mr-2 [&>span]:w-sm [&>span]:rounded-full">
                        <span className="red"></span>
                        <span className="yellow"></span>
                        <span className="green"></span>
                        <div
                            className={`ml-auto flex items-center max-sm:hidden ${isCopied ? "cursor-default" : "cursor-pointer"}`}
                            onClick={isCopied ? undefined : copyToClipboard}
                            onKeyDown={(e) => {
                                    if ((e.key === "Enter" || e.key === " ") && !isCopied) {
                                        if (e.key === " ") e.preventDefault();
                                        copyToClipboard();
                                    }
                                }}
                            role="button"
                            tabIndex={0}
                            aria-label="Copy code to clipboard"
                        >
                            {isCopied
                                ? (
                                        <span className="text-xl font-medium text-white">🎉 Copied!</span>
                                    )
                                : (
                                        <BsClipboardCheck className="h-5 w-5" />
                                    )}
                        </div>
                    </div>
                    <pre style={style}>
                        <code className={className}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })} className="table-row">
                                    <span className="table-cell px-6 pr-4 text-right opacity-50 select-none">
                                        {i + 1}
                                    </span>
                                    <span className="table-cell">
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token })} />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            )}
        </Highlight>
    );
};
