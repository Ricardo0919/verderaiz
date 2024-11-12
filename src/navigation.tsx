import {
    createLocalizedPathnamesNavigation,
    Pathnames,
} from "next-intl/navigation";

export const locales: string[] = ["en", "es"] as const;
export const localePrefix = "never";
export const pathnames = {
    "/": "/",
    "/about-us": {
        en: "/about-us",
        es: "/nosotros",
        de: "/ueber-uns",
        fr: "/a-propos",
    },
    "/services": {
        en: "/services",
        es: "/servicios",
        de: "/dienstleistungen",
        fr: "/services",
    },
    "/blog": {
        en: "/blog",
        es: "/blog",
        de: "/blog",
        fr: "/blog",
    },
    "/contact": {
        en: "/contact",
        es: "/contacto",
        de: "/kontakt",
        fr: "/contact",
    },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });
