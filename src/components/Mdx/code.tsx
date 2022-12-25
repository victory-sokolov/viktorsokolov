import { language } from "gray-matter";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import React, { useState } from "react";
import styled from "styled-components";
import { BsClipboardCheck } from "react-icons/bs";

type Code = {
    codeString: string;
    language: Language;
    props: any;
};

const Line = styled.div`
    display: table-row;
`;

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding: 0 1.5rem 0 1rem;
    user-select: none;
    opacity: 0.5;
`;

const LineContent = styled.span`
    display: table-cell;
`;

const MacIcons = styled.div`
    position: relative;
    top: 1.2rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    background: #142532;
    border-radius: 6px 6px 0 0;

    > span {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 100%;
        margin-right: 0.6rem;
    }

    .red {
        background: #ee5c56;
    }

    .yellow {
        background: #fcc12d;
    }

    .green {
        background: #6aca43;
    }
`;

const CopyButton = styled.div`
    position: absolute;
    right: 0;
    margin-right: 1rem;
    padding: 0 1.2rem;
    cursor: pointer;

    @media ${props => props.theme.breakpoints.mobile} {
        display: none;
    }
`;

export const Code = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);

    const props = children.props;
    const codeString = props.children.trim();
    const language = props.className.split("-")[1];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 4000);
    };

    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={dracula}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="code-highlight" data-language={language}>
                    <MacIcons>
                        <span className="red"></span>
                        <span className="yellow"></span>
                        <span className="green"></span>
                    </MacIcons>
                    <pre className={className} style={style}>
                        <CopyButton>
                            {isCopied ? "🎉 Copied!" : <BsClipboardCheck onClick={copyToClipboard} />}
                        </CopyButton>

                        {/* <CopyButton onClick={copyToClipboard}>{isCopied ? "🎉 Copied!" : "Copy"}</CopyButton> */}
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </LineContent>
                            </Line>
                        ))}
                    </pre>
                </div>
            )}
        </Highlight>
    );
};
