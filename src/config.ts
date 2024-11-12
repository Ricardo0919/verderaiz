import type {Pathnames} from "next-intl/navigation";

export const locales = ["es","en", "fr", "de"] as const;

export const localePrefix = "never";

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
};