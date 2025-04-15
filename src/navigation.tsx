import {
    createLocalizedPathnamesNavigation,
    Pathnames,
} from "next-intl/navigation";

export const locales: string[] = ["en", "es", "de", "fr"] as const;
export const localePrefix = "never";
export const pathnames = {
    "/": "/",
    "/about-us": {
        en: "/about-us",
        es: "/nosotros",
        de: "/ueber-uns",
        fr: "/a-propos",
    },
    "/ethics-policies":{
        en: "/ethics-policies",
        es: "/politicas-de-etica",
        de: "/ethikrichtlinien",
        fr: "/politiques-d-ethique",
    },
    "/services": {
        en: "/services",
        es: "/servicios",
        de: "/dienstleistungen",
        fr: "/services-fr",
    },
    "/services/comprehensive-projects": {
        en: "/services/comprehensive-projects",
        es: "/servicios/proyectos-integrales",
        de: "/dienstleistungen/umfassende-projekte",
        fr: "/services/projets-integraux",
    },
    "/services/environmental-impact-procedures": {
        en: "/services/environmental-impact-procedures",
        es: "/servicios/tramites-de-impacto-ambiental",
        de: "/dienstleistungen/umweltvertraglichkeitsverfahren",
        fr: "/services/procedures-impact-environnemental",
    },
    "/services/courses-and-workshops": {
        en: "/services/courses-and-workshops",
        es: "/servicios/cursos-y-talleres",
        de: "/dienstleistungen/kurse-und-workshops",
        fr: "/services/cours-et-ateliers",
    },
    "/services/sociocultural-solutions": {
        en: "/services/sociocultural-solutions",
        es: "/servicios/soluciones-socioculturales",
        de: "/dienstleistungen/soziokulturelle-loesungen",
        fr: "/services/solutions-socioculturelles",
    },
    "/services/environmental-solutions": {
        en: "/services/environmental-solutions",
        es: "/servicios/soluciones-ambientales",
        de: "/dienstleistungen/umweltloesungen",
        fr: "/services/solutions-environnementales",
    },
    "/services/others": {
        en: "/services/others",
        es: "/servicios/otros",
        de: "/dienstleistungen/sonstiges",
        fr: "/services/autres",
    },
    "/blog": {
        en: "/blog",
        es: "/blog-es",
        de: "/blog-de",
        fr: "/blog-fr",
    },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });
