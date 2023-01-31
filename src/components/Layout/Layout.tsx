import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContainerStyle, GlobalStyles, MainStyles } from "../../styles/global-styles";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useDarkMode } from "@hooks/useDarkMode";
import type { ReactProps } from "src/types/types";

const SiteWrapper = styled.div`
    min-height: 100vh;
`;

const Layout: React.FC<ReactProps> = ({ children }) => {
    const [theme, toggleTheme] = useDarkMode();
    const themeType = theme === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={themeType}>
            <SiteWrapper>
                <GlobalStyles />
                <MainStyles>
                    <Header toggleTheme={toggleTheme} theme={theme} />
                    <ContainerStyle>{children}</ContainerStyle>
                    <Footer />
                </MainStyles>
            </SiteWrapper>
        </ThemeProvider>
    );
};

export default Layout;
