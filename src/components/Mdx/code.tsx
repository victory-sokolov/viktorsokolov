/* eslint ts/no-require-imports: 0 */
"use client";

import { Highlight, themes } from "prism-react-renderer";
import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";

export const Code: React.FC<unknown> = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);
    const codeString = children.props.children.trim();
    const language = children.props.className.split("-")[1];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 4000);
    };

    return (
        <Highlight code={codeString} language={language} theme={themes.jettwaveDark}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="code-highlight" data-language={language}>
                    <div className="top-sm [&>span]:h-sm relative flex flex-row rounded-t-md bg-[#142532] p-4 [&_.green]:bg-[#6aca43] [&_.red]:bg-[#ee5c56] [&_.yellow]:bg-[#fcc12d] [&>span]:mr-2 [&>span]:w-sm [&>span]:rounded-full">
                        <span className="red"></span>
                        <span className="yellow"></span>
                        <span className="green"></span>
                    </div>
                    <pre style={style}>
                        <div className="absolute right-0 mr-4 cursor-pointer p-0 px-5 max-sm:hidden">
                            {isCopied
                                ? (
                                        "🎉 Copied!"
                                    )
                                : (
                                        <BsClipboardCheck onClick={copyToClipboard} />
                                    )}
                        </div>
                        <code className={className}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                                    <span className="table-cell px-6 pr-4 text-right opacity-50 select-none">{i + 1}</span>
                                    <span className="table-cell">
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
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
