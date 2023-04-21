import Footer from "@components/Footer";
import Header from "@components/Header";
import { useDarkMode } from "@hooks/useDarkMode";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import type { ReactProps } from "src/types/types";
import styled, { ThemeProvider } from "styled-components";
import { ContainerStyle, GlobalStyles, MainStyles } from "../../styles/global-styles";
import { darkTheme, lightTheme } from "../../styles/theme";

const variants = {
    hidden: { opacity: 0, x: -150, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
};

const SiteWrapper = styled.div`
    min-height: 100vh;
`;

const Layout: React.FC<ReactProps> = ({ children }) => {
    const [theme, toggleTheme] = useDarkMode();
    const themeType = theme === "dark" ? darkTheme : lightTheme;
    const router = useRouter();

    return (
        <ThemeProvider theme={themeType}>
            <SiteWrapper>
                <GlobalStyles />
                <MainStyles>
                    <motion.main
                        key={router.route}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ type: "linear", duration: 0.75 }}
                    >
                        <Header toggleTheme={toggleTheme} theme={theme} />
                        <ContainerStyle>{children}</ContainerStyle>
                        <Footer />
                    </motion.main>
                </MainStyles>
            </SiteWrapper>
        </ThemeProvider>
    );
};

export default Layout;
