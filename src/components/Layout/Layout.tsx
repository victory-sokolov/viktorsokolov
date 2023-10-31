"use client";

import Footer from "@components/Footer";
import Header from "@components/Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import type { ReactProps } from "src/types/types";
import styled, { ThemeProvider } from "styled-components";

import { ContainerStyle, GlobalStyles, MainStyles } from "../../styles/global-styles";
import { theme } from "../../styles/theme";

const variants = {
    hidden: { opacity: 0, x: -150, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
};

const SiteWrapper = styled.div`
    min-height: 100vh;
`;

const Layout: React.FC<ReactProps> = ({ children }) => {
    const themeType = theme;
    const pathname = usePathname();

    return (
        <ThemeProvider theme={themeType}>
            <SiteWrapper>
                <GlobalStyles />
                <MainStyles>
                    <motion.main
                        key={pathname}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ type: "linear", duration: 0.75 }}
                    >
                        <Header theme={theme} />
                        <ContainerStyle>{children}</ContainerStyle>
                        <Footer />
                    </motion.main>
                </MainStyles>
            </SiteWrapper>
        </ThemeProvider>
    );
};

export default Layout;
