import { config } from "@/common/appconfig";
import Layout from "@/components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import process from "node:process";
import { Provider } from "react-wrap-balancer";
import StyledComponentsRegistry from "src/registry";
import type { ReactProps } from "src/types/types";

import { GlobalStyles } from "../styles/global-styles";

const cairo = Cairo({
    subsets: ["latin"],
    display: "swap",
    variable: "--cairo-font"
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.BASE_URL),
    title: {
        default: `${config.author} Development Blog`,
        template: `%s | ${config.author}`
    },
    description: config.description,
    applicationName: `${config.author} Blog`,
    authors: [{ name: config.author, url: process.env.BASE_URL }],
    keywords: config.keywords.join(", "),
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: dark)",
                url: "/static/favicons/favicon.svg",
                href: "/static/favicons/favicon.svg"
            }
        ]
    },
    alternates: {
        canonical: process.env.BASE_URL,
        languages: {
            "en-US": "/en-US"
        },
        types: {
            "application/rss+xml": `${process.env.BASE_URL}/rss`
        }
    },
    generator: `${config.author} uses NextJs!`,
    openGraph: {
        type: "website",
        url: process.env.BASE_URL,
        description: config.description,
        siteName: config.siteName,
        images: [{ url: config.ogImage }],
        locale: "en_US"
    },
    twitter: {
        description: config.description,
        title: config.title,
        card: "summary_large_image",
        site: config.social.twitterHandle,
        creator: config.social.twitterHandle,
        images: config.ogImage
    },
    referrer: "origin",
    manifest: "manifest.json",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    appleWebApp: {
        capable: true,
        title: config.siteName,
        statusBarStyle: "black-translucent"
    }
};

export default function RootLayout({ children }: ReactProps) {
    return (
        <html lang="en" className={cairo.className}>
            <head></head>
            <body suppressHydrationWarning>
                <Layout>
                    <Analytics />
                    <SpeedInsights />
                    <GlobalStyles />
                    <StyledComponentsRegistry>
                        <Provider>{children}</Provider>
                    </StyledComponentsRegistry>
                </Layout>
            </body>
        </html>
    );
}
