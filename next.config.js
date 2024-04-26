const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/pagead/:path*",
                destination: "https://googleads.g.doubleclick.net/:path*"
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
