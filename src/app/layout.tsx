import Layout from "@components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "src/registry";
import { ReactProps } from "src/types/types";

import Providers from "./providers";

export default function RootLayout({ children }: ReactProps) {
    return (
        <html lang="en">
            <head></head>
            <body suppressHydrationWarning>
                <Layout>
                    <Analytics />
                    <StyledComponentsRegistry>
                        <Providers>{children}</Providers>
                    </StyledComponentsRegistry>
                </Layout>
            </body>
        </html>
    );
}
