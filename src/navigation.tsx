import type { Pathnames } from "next-intl/navigation";
import {
    createLocalizedPathnamesNavigation
} from "next-intl/navigation";

export const locales = ["en", "es", "fr", "de"] as const;
export const localePrefix = "never";

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
};

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames,
    });
