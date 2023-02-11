/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
    default-src 'self' https://vitals.vercel-insights.com/v1/vitals;
    img-src * self 'unsafe-inline' blob: data:;
    script-src 'unsafe-eval';
    script-src-elem 'self' 'unsafe-inline' https://cdn.vercel-insights.com/v1/script.debug.js https://utteranc.es/client.js;
    style-src 'unsafe-inline';
    frame-src *.substack.com https://utteranc.es/;
    font-src 'self' data: https://fonts.googleapis.com;
`;

const config = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
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
                        value: "same-origin"
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(); battery=(self); geolocation=();"
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block"
                    }
                ]
            }
        ];
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: { esmExternals: true },
    compiler: {
        styledComponents: true
    },
    images: {
        formats: ["image/webp"],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.buymeacoffee.com"
            }
        ]
    }
};

export default config;
