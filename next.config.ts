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
            // ==================
            // ==== About Us ====
            // ==================
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
            // ==================
            // ==== Services ====
            // ==================
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

            // 🌍 Redirecciones para Comprehensive Projects
            {
                source: "/:first/servicios/proyectos-integrales",
                destination: "/:first/services/comprehensive-projects",
            },
            {
                source: "/:first/dienstleistungen/umfassende-projekte",
                destination: "/:first/services/comprehensive-projects",
            },
            {
                source: "/:first/services/projets-integraux",
                destination: "/:first/services/comprehensive-projects",
            },
            // 🌍 Redirecciones para Environmental Impact Procedures
            {
                source: "/:first/servicios/tramites-de-impacto-ambiental",
                destination: "/:first/services/environmental-impact-procedures",
            },
            {
                source: "/:first/dienstleistungen/umweltverträglichkeitsverfahren",
                destination: "/:first/services/environmental-impact-procedures",
            },
            {
                source: "/:first/services/procedures-impact-environnemental",
                destination: "/:first/services/environmental-impact-procedures",
            },
            // 📚 Redirecciones para Courses and Workshops
            {
                source: "/:first/servicios/cursos-y-talleres",
                destination: "/:first/services/courses-and-workshops",
            },
            {
                source: "/:first/dienstleistungen/kurse-und-workshops",
                destination: "/:first/services/courses-and-workshops",
            },
            {
                source: "/:first/services/cours-et-ateliers",
                destination: "/:first/services/courses-and-workshops",
            },
            // 🎭 Redirecciones para Sociocultural Solutions
            {
                source: "/:first/servicios/soluciones-socioculturales",
                destination: "/:first/services/sociocultural-solutions",
            },
            {
                source: "/:first/dienstleistungen/soziokulturelle-loesungen",
                destination: "/:first/services/sociocultural-solutions",
            },
            {
                source: "/:first/services/solutions-socioculturelles",
                destination: "/:first/services/sociocultural-solutions",
            },
            // 🌱 Redirecciones para Environmental Solutions
            {
                source: "/:first/servicios/soluciones-ambientales",
                destination: "/:first/services/environmental-solutions",
            },
            {
                source: "/:first/dienstleistungen/umweltloesungen",
                destination: "/:first/services/environmental-solutions",
            },
            {
                source: "/:first/services/solutions-environnementales",
                destination: "/:first/services/environmental-solutions",
            },
            // 🧩 Redirecciones para Others
            {
                source: "/:first/servicios/otros",
                destination: "/:first/services/others",
            },
            {
                source: "/:first/dienstleistungen/sonstiges",
                destination: "/:first/services/others",
            },
            {
                source: "/:first/services/autres",
                destination: "/:first/services/others",
            },


            // ==================
            // ====== Blog ======
            // ==================
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
            // ======================
            // ==== Blog Library ====
            // ======================
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
        ];
    },
};
export default withNextIntl('./src/i18n.ts')(nextConfig);
