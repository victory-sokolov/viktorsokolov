import React from "react";
import styled from "styled-components";

const SeparatorContainer = styled.div`
    margin-top: 3rem;
    .zig {
        background: linear-gradient(
            45deg,
            transparent,
            transparent 39%,
            var(--color-secondary-600) 0,
            transparent 51%
        );
    }
    .zag {
        background: linear-gradient(
            -45deg,
            transparent,
            transparent 30%,
            var(--color-secondary-600) 0,
            transparent 51%
        );
    }
    .squiggly-line {
        position: absolute;
        height: 12px;
        width: 200%;
        transform: translate(-25%) scale(0.5);
        background-size: 20px 20px;
    }
`;

const Separator: React.FC = () => {
    return (
        <SeparatorContainer>
            <div className="squiggly-line zig"></div>
            <div className="squiggly-line zag"></div>
        </SeparatorContainer>
    );
};

export default Separator;
