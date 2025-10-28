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
                    <div className="relative top-[1.2rem] p-4 flex flex-row bg-[#142532] rounded-t-md [&>span]:w-[1.2rem] [&>span]:h-[1.2rem] [&>span]:rounded-full [&>span]:mr-2 [&_.red]:bg-[#ee5c56] [&_.yellow]:bg-[#fcc12d] [&_.green]:bg-[#6aca43]">
                        <span className="red"></span>
                        <span className="yellow"></span>
                        <span className="green"></span>
                    </div>
                    <pre style={style}>
                        <div className="absolute right-0 mr-4 p-0 px-5 cursor-pointer max-sm:hidden">
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
                                    <span className="table-cell text-right px-6 pr-4 select-none opacity-50">{i + 1}</span>
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
