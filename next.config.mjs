/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

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
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live utteranc.es;
    style-src 'unsafe-inline';
    frame-src *.substack.com utteranc.es;
    frame-ancestors true;
    form-action 'self';
    base-uri 'self';
    font-src 'self' data: https://fonts.googleapis.com;
    connect-src *;
`;

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim()
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
    // experimental: { esmExternals: true },
    compiler: {
        styledComponents: true
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
    }
};

export default withPWA(config);
