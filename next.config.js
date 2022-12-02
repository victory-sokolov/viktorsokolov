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
        minimumCacheTTL: 60
    }
};

export default config;
