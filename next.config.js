const {join} = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            },
        ],
    },
    sassOptions: {
        includePaths: [join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
