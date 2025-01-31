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
                source: "/:first/politicas-de-etica",
                destination: "/:first/ethics-policies",
            },
            {
                source: "/:first/ethikrichtlinien",
                destination: "/:first/ethics-policies",
            },
            {
                source: "/:first/politiques-d-ethique",
                destination: "/:first/ethics-policies",
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
                source: "/:first/services-fr",
                destination: "/:first/services",
            },
            {
                source: "/:first/blog-es",
                destination: "/:first/blog",
            },
            {
                source: "/:first/blog-de",
                destination: "/:first/blog",
            },
            {
                source: "/:first/blog-fr",
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
                source: "/:first/contact-fr",
                destination: "/:first/contact",
            },

        ];
    },
};
export default withNextIntl('./src/i18n.ts')(nextConfig);
