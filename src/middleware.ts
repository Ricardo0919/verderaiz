import createMiddleware from "next-intl/middleware";
import { locales, pathnames, localePrefix } from "./navigation";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
    defaultLocale: "es",
    localePrefix: localePrefix as "always" | "never" | "as-needed",
    pathnames,
    locales,
});

export default function middleware(req: NextRequest): NextResponse {
    return nextIntlMiddleware(req);
}

export const config = {
    // Ajusta el patrón para que coincida con los idiomas soportados en tu app
    matcher: ["/", "/((?!api|static|.*\\..*|_next).*)"],
};
