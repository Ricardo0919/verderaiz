import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    output: "standalone",

    /* Configuration for remote images */
    images: {
        domains: ['blog.verderaiz.com.mx'], // Allows remote images form blog.verderaiz.com.mx
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com",
            },
        ],
    },
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: "/favicon.ico",
                destination: "/favicon.ico",
            },
            {
                source: "/:first/nosotros",
                destination: "/:first/about-us",
            },
            {
                source: "/:first/ueber-uns",
                destination: "/:first/about-us",
            },
            {
                source: "/:first/a-propos",
                destination: "/:first/about-us",
            },
            {
                source: "/:first/servicios",
                destination: "/:first/services",
            },
            {
                source: "/:first/dienstleistungen",
                destination: "/:first/services",
            },
            {
                source: "/:first/services",
                destination: "/:first/services",
            },
            {
                source: "/:first/blog",
                destination: "/:first/blog",
            },
            {
                source: "/:first/contacto",
                destination: "/:first/contact",
            },
            {
                source: "/:first/kontakt",
                destination: "/:first/contact",
            },
            {
                source: "/:first/contact",
                destination: "/:first/contact",
            },

        ];
    },
};
export default withNextIntl('./src/i18n.ts')(nextConfig);
