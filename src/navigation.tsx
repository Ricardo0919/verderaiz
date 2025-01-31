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
    "/blog": {
        en: "/blog",
        es: "/blog-es",
        de: "/blog-de",
        fr: "/blog-fr",
    },
    "/contact": {
        en: "/contact",
        es: "/contacto",
        de: "/kontakt",
        fr: "/contact-fr",
    },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });
