import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./navigation";

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    console.log(locale);
    if (!locale) {
        console.log("no locale");
    }
    let baseLocale;
    try {
        baseLocale = new Intl.Locale(locale).baseName;
    } catch (error) {
        baseLocale = "es"; // Fallback to a default locale
    }
    if (!locales.includes(baseLocale)) return notFound();

    return {
        messages: (
            await (locale === "es"
                ? // When using Turbopack, this will enable HMR for `en`
                import("./messages/es.json")
                : import(`./messages/${baseLocale}.json`))
        ).default,
    };
});
