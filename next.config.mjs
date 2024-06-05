/** @type {import('next').NextConfig} */
import NextBundleAnalyzer from "@next/bundle-analyzer";
import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";
import process from "node:process";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true"
});

const withPWA = nextPWA({
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
});

const ContentSecurityPolicy = `
    default-src 'self';
    img-src * self blob: data:;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com; utteranc.es;
    style-src 'self' 'unsafe-inline';
    frame-src *.substack.com utteranc.es;
    frame-ancestors true;
    form-action 'self';
    font-src 'self' data:;
    base-uri 'self';
    connect-src *;
`;

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\n/g, "").trim()
    },
    {
        key: "X-Frame-Options",
        value: "DENY"
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff"
    },
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin"
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), geolocation=(), microphone=()"
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block"
    },
    {
        key: "X-DNS-Prefetch-Control",
        value: "on"
    }
];

const config = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders
            }
        ];
    },
    poweredByHeader: false,
    swcMinify: true,
    experimental: { webVitalsAttribution: ["CLS", "LCP"] },
    compiler: {
        styledComponents: true
    },
    modularizeImports: {
        "react-icons": {
            transform: "react-icons/{{member}}"
        }
    },
    images: {
        formats: ["image/webp", "image/avif"],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.buymeacoffee.com"
            }
        ]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    async redirects() {
        return [
            {
                source: "/index",
                destination: "/",
                permanent: true
            },
            {
                source: "/tip/:slug",
                destination: "/tips/:slug",
                permanent: true
            },
            {
                source: "/post/:slug",
                destination: "/blog/:slug",
                permanent: true
            }
        ];
    }
};

export default withBundleAnalyzer(withPWA(config));
