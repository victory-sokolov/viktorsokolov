import React from "react";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

import styled from "styled-components";

const ToggleButton = styled.button`
    display: flex;
    justify-content: flex-end;
    background: transparent;
    transition: all 0.5s ease;
    padding: 1rem;
    border-radius: 50%;
    margin-right: var(--space-md);
    &:focus {
        outline: none;
    }

    svg {
        width: 2.8rem;
        height: 2.8rem;
    }
`;

export const Toggle: React.FC<any> = ({ toggleTheme, theme }) => {
    const Icon = theme == "light" ? <HiMoon color="black" /> : <CgSun />;
    return (
        <ToggleButton aria-label="Switch color mode" onClick={toggleTheme}>
            {Icon}
        </ToggleButton>
    );
};
