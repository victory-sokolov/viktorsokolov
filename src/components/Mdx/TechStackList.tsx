import { FaPython, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNestjs, SiPostgresql, SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import styled from "styled-components";

const TechContainer = styled.ul`
    list-style: none;
    margin: var(--space-sm) 0 var(--space-lg);
    border-radius: 6px;
    border: 1px solid var(--color-secondary-900);
    padding: var(--space-md);
    background: var(--color-primary-600);
    color: #fff;

    li {
        border: 1px solid white;
        padding: 0.7rem;
        display: inline-flex;
        align-items: center;
        margin: 0.5rem;
        border-radius: 3px;
    }

    span {
        padding-right: 1rem;
        font-size: 1.6rem;
        font-weight: var(--font-medium);
    }
`;

export const TechStackList = ({ children }) => {
    const size = 22;
    return (
        <TechContainer>
            <li style={{ border: "1px solid #f7df1e", background: "#403a0a" }}>
                <span>Python</span>
                <FaPython size={size} />
            </li>
            <li style={{ border: "1px solid #18c490", background: "#093225" }}>
                <span>Django</span>
                <SiDjango size={size} style={{ color: "##18c490" }} />
            </li>
            <li style={{ border: "1px solid #47a248", background: "#153c15" }}>
                <span>Node.js</span>
                <FaNodeJs size={size} style={{ color: "#47a248" }} />
            </li>
            <li style={{ border: "1px solid #f7df1e", background: "#403a0a" }}>
                <span>JavaScript</span>
                <SiJavascript size={size} style={{ color: "#f7df1e" }} />
            </li>
            <li style={{ background: "#0e344e", border: "1px solid #007acc" }}>
                <span>TypeScript</span>
                <SiTypescript size={size} style={{ color: "#007acc" }} />
            </li>
            <li style={{ background: "#1c3e47", border: "1px solid #63d9fa" }}>
                <span>React</span>
                <SiReact size={size} style={{ color: "#63d9fa" }} />
            </li>
            <li>
                <span>Next.js</span> <TbBrandNextjs size={size} />
            </li>
            <li style={{ background: "#440a17", border: "1px solid #e1234d" }}>
                <span>Nest.js</span>
                <SiNestjs size={size} style={{ color: "#e1234d" }} />
            </li>
            <li style={{ background: "#0e344e", border: "1px solid #15bbe8" }}>
                <span>PostgreSQL</span>
                <SiPostgresql size={size} style={{ color: "##15bbe8" }} />
            </li>
        </TechContainer>
    );
};
