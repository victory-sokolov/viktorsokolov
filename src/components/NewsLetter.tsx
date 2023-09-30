"use client";

import { borderGradient } from "src/styles/global-styles";
import styled from "styled-components";

const NewLetterFormStyle = styled.div`
    height: 250px;
    margin: 3.5rem 0 2rem;
    ${borderGradient}
`;

const NewsLetterForm = () => {
    return (
        <NewLetterFormStyle>
            <iframe
                title="Embedded Substack email subscription form"
                src="https://viktorsokolov.substack.com/embed"
                height="320"
                style={{
                    border: "none",
                    background: "#fff",
                    height: "100%",
                    width: "100%"
                }}
            ></iframe>
        </NewLetterFormStyle>
    );
};

export default NewsLetterForm;
