import { BsKeyboard } from "react-icons/bs";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiDjango, SiJavascript, SiNestjs, SiPostgresql, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import styled from "styled-components";

const TagWrapper = styled.span`
    border: 1px solid white;
    padding: 0.7rem 1rem;
    display: inline-flex;
    align-items: center;
    margin: 0.5rem;

    > span {
        position: relative;
        right: 5px;
    }
`;

export const Python = (size: number = 22) => {
    return (
        <TagWrapper style={{ border: "1px solid #f7df1e", background: "#403a0a" }}>
            <span>Python</span>
            <FaPython size={size} />
        </TagWrapper>
    );
};

export const Django = (size: number = 22) => {
    return (
        <TagWrapper style={{ border: "1px solid #18c490", background: "#093225" }}>
            <span>Django</span>
            <SiDjango size={size} style={{ color: "##18c490" }} />
        </TagWrapper>
    );
};

export const NodeJs = (size: number = 22) => {
    return (
        <TagWrapper style={{ border: "1px solid #47a248", background: "#153c15" }}>
            <span>Node.js</span>
            <FaNodeJs size={size} style={{ color: "#47a248" }} />
        </TagWrapper>
    );
};

export const JavaScript = (size: number = 22) => {
    return (
        <TagWrapper style={{ border: "1px solid #f7df1e", background: "#403a0a" }}>
            <span>JavaScript</span>
            <SiJavascript size={size} style={{ color: "#f7df1e" }} />
        </TagWrapper>
    );
};

export const TypeScript = (size: number = 22) => {
    return (
        <TagWrapper style={{ background: "#0e344e", border: "1px solid #007acc" }}>
            <span>TypeScript</span>
            <SiTypescript size={size} style={{ color: "#007acc" }} />
        </TagWrapper>
    );
};

export const React = (size: number = 22) => {
    return (
        <TagWrapper style={{ background: "#1c3e47", border: "1px solid #63d9fa" }}>
            <span>React</span>
            <SiReact size={size} style={{ color: "#63d9fa" }} />
        </TagWrapper>
    );
};

export const NextJs = (size: number = 22) => {
    return (
        <TagWrapper>
            <span>Next.js</span> <TbBrandNextjs size={size} />
        </TagWrapper>
    );
};

export const NestJs = (size: number = 22) => {
    return (
        <TagWrapper style={{ background: "#440a17", border: "1px solid #e1234d" }}>
            <span>Nest.js</span>
            <SiNestjs size={size} style={{ color: "#e1234d" }} />
        </TagWrapper>
    );
};

export const PostgreSQL = (size: number = 22) => {
    return (
        <TagWrapper style={{ background: "#0e344e", border: "1px solid #15bbe8" }}>
            <span>PostgreSQL</span>
            <SiPostgresql size={size} style={{ color: "##15bbe8" }} />
        </TagWrapper>
    );
};

export const Other = (size: number = 22) => {
    return (
        <TagWrapper style={{ background: "#27AE60", border: "1px solid #15F674" }}>
            <span>Other</span>
            <BsKeyboard size={size} style={{ color: "##15bbe8" }} />
        </TagWrapper>
    );
};

export const TagsMapping = {
    python: Python,
    django: Django,
    typescript: TypeScript,
    postgresql: PostgreSQL,
    nextjs: NextJs,
    nestjs: NestJs,
    react: React,
    nodejs: NodeJs,
    javascript: JavaScript,
    other: Other
};
