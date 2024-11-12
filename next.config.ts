import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

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
export default withNextIntl()(nextConfig);
