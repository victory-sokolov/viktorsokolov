"use client";

import Layout from "@components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import StyledComponentsRegistry from "src/registry";
import { ReactProps } from "src/types/types";

import Providers from "./providers";

export default function RootLayout({ children }: ReactProps) {
    return (
        <html lang="en">
            <head></head>
            <body suppressHydrationWarning>
                <AnimatePresence
                    mode="wait"
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Layout>
                        <Analytics />
                        <StyledComponentsRegistry>
                            <Providers>{children}</Providers>
                        </StyledComponentsRegistry>
                    </Layout>
                </AnimatePresence>
            </body>
        </html>
    );
}
