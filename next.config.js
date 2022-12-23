/** @type {import('next').NextConfig} */

const config = {
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
