import type {Pathnames} from "next-intl/navigation";

export const locales = ["es","en", "fr", "de"] as const;

export const localePrefix = "never";

export type Locales = typeof locales;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "about-us": "about-us",
    "ethics-policies": "ethics-policies",
    "services": "services",
    "services/comprehensive-projects": "services/comprehensive-projects",
    "services/environmental-impact-procedures": "services/environmental-impact-procedures",
    "services/courses-and-workshops": "services/courses-and-workshops",
    "services/sociocultural-solutions": "services/sociocultural-solutions",
    "services/environmental-solutions": "services/environmental-solutions",
    "services/others": "services/others",
    "blog": "blog",
    "blog-library": "blog-library",
};