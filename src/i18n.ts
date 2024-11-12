import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation"
import { locales } from "./config";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
    if (!locales.includes(locale as never)) notFound();

    return {
        messages: (await import((`./messages/${locale}.json`))).default,
    };
});