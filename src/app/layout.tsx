import { config } from "@common/appconfig";
import Layout from "@components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import StyledComponentsRegistry from "src/registry";
import { ReactProps } from "src/types/types";

import Providers from "./providers";

const ogImg = `/static/OG.png`;

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
    alternates: {
        canonical: process.env.BASE_URL,
        languages: {
            "en-US": "/en-US"
        }
    },
    generator: `${config.author} uses NextJs!`,
    openGraph: {
        type: "website",
        url: process.env.BASE_URL,
        description: config.description,
        siteName: config.siteName,
        images: [{ url: ogImg }],
        locale: "en_US"
    },
    twitter: {
        description: config.description,
        title: config.title,
        card: "summary_large_image",
        site: config.social.twitterHandle,
        creator: config.social.twitterHandle,
        images: ogImg
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
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </head>
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
