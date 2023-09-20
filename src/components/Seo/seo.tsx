import Head from "next/head";
import { useRouter } from "next/navigation";

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

export default function Seo({ title, description, date, keywords, image }: SeoType) {
    const router = useRouter();
    const isPost = postType.includes(router.asPath.split("/")[1]) ? true : false;
    const ogImgSrc = image ? `${config.siteUrl}${image}` : `${config.siteUrl}/static/OG.png`;
    const defaultTitle = title ? title : `${config.author} Development Blog`;

    // Canonical URL
    const path = router.asPath.split("#")[0].split("?")[0];
    const canonicalUrl = `${config.siteUrl}` + (router.asPath === "/" ? "" : path);

    return (
        <Head>
            <title>{defaultTitle}</title>
            <meta name="title" content={title || config.title} />
            <meta name="description" content={description || config.description} />
            <meta name="author" content={config.author} />
            <meta name="robots" content="follow, index" />
            <meta name="keywords" content={config.keywords.join(", ")} />
            <meta name="image" content={ogImgSrc} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="shortcut icon" href="static/favicons/favicon.svg" />
            <link rel="icon" type="image/svg" href="static/favicons/favicon.svg" />
            <link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png" />
            <link rel="android-touch-icon" sizes="192x192" href="static/favicons/android-chrome-192x192.png" />
            <link rel="android-touch-icon" sizes="512x512" href="static/favicons/android-chrome-512x512.png" />
            <link rel="manifest" href="manifest.json" />
            <meta name="generator" content="Victory Sokolov uses NextJs!" />
            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title || config.title} />
            <meta property="og:description" content={description || config.description} />
            <meta name="image:alt" content={title || config.title} />
            <meta property="og:url" content={`${config.siteUrl}${router.asPath}`} />
            <meta property="og:image" content={ogImgSrc} />
            <meta property="og:type" content={isPost ? "article" : "website"} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image:alt" content={title || config.title} />
            <meta name="theme-color" content="#030936" />
            {date && <meta property="article:published_time" content={date} />}
            {/* Twitter Card tags */}
            <meta name="twitter:site" content={config.social.twitterHandle} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${config.siteUrl}${router.asPath}`} />
            <meta property="twitter:title" content={title || config.title} />
            <meta property="twitter:description" content={description || config.description} />
            <meta property="twitter:image" content={ogImgSrc} />
            <meta name="twitter:creator" content={config.social.twitterHandle} />
            <meta name="twitter:site" content={config.social.twitterHandle} />
            {/* PWA */}
            <meta name="application-name" content={defaultTitle} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={defaultTitle} />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#030936" />
            <meta name="msapplication-tap-highlight" content="no" />
            {isPost && (
                <script
                    type="application/ld+json"
                    key="ldjson"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: `
                            {
                                "description": "${description ? description : config.description}",
                                "author": {
                                    "@type": "Person",
                                    "name": "${config.author}",
                                    "url": "${config.siteUrl}"
                                },
                                "@type": "BlogPosting",
                                "url": "${config.siteUrl}${router.basePath}${addTrailingSlash(router.asPath)}",
                                "name": "${config.author}",
                                "headline": "${title} | ${config.siteName}",
                                "image": ["${ogImgSrc}"],
                                "datePublished": "${new Date(date).toISOString()}",
                                "dateModified": "${new Date(date).toISOString()}",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "${config.siteUrl}${router.basePath}${addTrailingSlash(router.asPath)}"
                                },
                                "@context": "http://schema.org"
                            }`
                    }}
                />
            )}
        </Head>
    );
}
