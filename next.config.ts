import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    output: "standalone",

    // Agrega esta configuración para permitir que Next.js escuche en todas las interfaces
    devServer: {
        host: '0.0.0.0', // Esto hace que Next.js escuche en todas las interfaces
    },

    /* Configuration for remote images */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com",
            },
            {
                protocol: 'https',
                hostname: 'blog.verderaiz.com.mx',
                port: ''
            },
        ],
    },
    reactStrictMode: true,

    async rewrites() {
        return [
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
                source: "/:first/biblioteca-de-blogs",
                destination: "/:first/blog-library",
            },
            {
                source: "/:first/blog-bibliothek",
                destination: "/:first/blog-library",
            },
            {
                source: "/:first/bibliotheque-de-blogs",
                destination: "/:first/blog-library",
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
