import type { Metadata } from "next";
import { usePathname } from "next/navigation";

import { config } from "../../common/appconfig";

type SeoType = {
    title?: string;
    description?: string;
    keywords?: string[];
    date?: string;
    image?: string;
};

const postType = ["tip", "post"];

const addTrailingSlash = (url: string) => {
    return url.replace(/\/?$/, "/");
};

export default function Seo({ title, description, date, keywords, image }: SeoType): Metadata {
    const pathname = usePathname();
    const isPost = postType.includes(pathname.split("/")[1]) ? true : false;
    const ogImgSrc = image ? `${config.siteUrl}${image}` : `${config.siteUrl}/static/OG.png`;
    const defaultTitle = title ? title : `${config.author} Development Blog`;

    // Canonical URL
    const path = pathname.split("#")[0].split("?")[0];
    const canonicalUrl = `${config.siteUrl}` + (pathname === "/" ? "" : path);

    return {
        title: {
            default: defaultTitle,
            template: "%s | Viktor Sokolov"
        },
        applicationName: "Viktor Sokolovs Blog",
        description: description || config.description,
        authors: [{ name: config.author, url: config.siteUrl }],
        keywords: config.keywords.join(", "),
        // image: ogImgSrc,
        alternates: {
            canonical: canonicalUrl
        },
        generator: "Victory Sokolov uses NextJs!",
        openGraph: {
            type: "website",
            url: `${config.siteUrl}${pathname}`,
            description: description || config.description,
            siteName: config.siteName,
            images: [{ url: ogImgSrc }],
            locale: "en_US"
        },
        twitter: {
            description: description || config.description,
            title: title || config.title,
            card: "summary_large_image",
            site: config.social.twitterHandle,
            creator: config.social.twitterHandle,
            images: ogImgSrc
        },
        referrer: "origin",
        robots: { index: true, follow: true },
        // alternates: {
        //     icon: "static/favicons/favicon.svg"
        //     apple: "static/favicons/apple-touch-icon.png",
        // },
        manifest: "manifest.json",
        appleWebApp: {
            capable: true,
            title: config.siteName,
            statusBarStyle: "black-translucent"
        },
        formatDetection: { telephone: false }
    };

    // <meta name="robots" content="follow, index" />
    // <link rel="shortcut icon" href="static/favicons/favicon.svg" />
    // <link rel="icon" type="image/svg" href="static/favicons/favicon.svg" />
    // <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png" />
    // <link rel="android-touch-icon" sizes="192x192" href="static/favicons/android-chrome-192x192.png" />
    // <link rel="android-touch-icon" sizes="512x512" href="static/favicons/android-chrome-512x512.png" />
    // {/* Open Graph / Facebook */}
    // <meta property="og:title" content={title || config.title} />
    // <meta property="og:description" content={description || config.description} />
    // <meta name="image:alt" content={title || config.title} />
    // <meta property="og:url" content={`${config.siteUrl}${router.asPath}`} />
    // <meta property="og:image" content={ogImgSrc} />
    // <meta property="og:type" content={isPost ? "article" : "website"} />
    // <meta property="og:locale" content="en_US" />
    // <meta property="og:image:alt" content={title || config.title} />
    // // <meta name="theme-color" content="#030936" />
    // {date && <meta property="article:published_time" content={date} />}
    {
        /* Twitter Card tags */
    }

    {
        /* PWA */
    }
    // <meta name="application-name" content={defaultTitle} />
    // <meta name="apple-mobile-web-app-capable" content="yes" />
    // <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    // <meta name="apple-mobile-web-app-title" content={defaultTitle} />
    // <meta name="mobile-web-app-capable" content="yes" />
    // <meta name="msapplication-TileColor" content="#030936" />
    // <meta name="msapplication-tap-highlight" content="no" />
    // {isPost && (
    //     <script
    //         type="application/ld+json"
    //         key="ldjson"
    //         // eslint-disable-next-line react/no-danger
    //         dangerouslySetInnerHTML={{
    //             __html: `
    //                 {
    //                     "description": "${description ? description : config.description}",
    //                     "author": {
    //                         "@type": "Person",
    //                         "name": "${config.author}",
    //                         "url": "${config.siteUrl}"
    //                     },
    //                     "@type": "BlogPosting",
    //                     "url": "${config.siteUrl}${router.basePath}${addTrailingSlash(router.asPath)}",
    //                     "name": "${config.author}",
    //                     "headline": "${title} | ${config.siteName}",
    //                     "image": ["${ogImgSrc}"],
    //                     "datePublished": "${new Date(date).toISOString()}",
    //                     "dateModified": "${new Date(date).toISOString()}",
    //                     "mainEntityOfPage": {
    //                         "@type": "WebPage",
    //                         "@id": "${config.siteUrl}${router.basePath}${addTrailingSlash(router.asPath)}"
    //                     },
    //                     "@context": "http://schema.org"
    //                 }`
    //         }}
    //     />
    // )}
}
