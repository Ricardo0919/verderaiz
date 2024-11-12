import type { NextConfig } from "next";
//import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    output: "standalone",
    async rewrites() {
        return [
            {
                source: "/favicon.ico",
                destination: "/favicon.ico",
            },
        ];
    },
};
const withNextIntl = require('next-intl/plugin')();
// Configura `withNextIntl` con `nextConfig`
export default withNextIntl(nextConfig);

