import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "../../navigation";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

// Función para generar los metadatos dinámicamente según el locale
export async function generateMetadata({
                                           params,
                                       }: {
    params: { locale: string };
}): Promise<{ title: string; description: string }> {
    const { locale } = await params;  // Esperar a que `params` se resuelva

    return {
        title: locale === "es" ? "Verderaiz" : "Verderaiz", // Título dinámico basado en el locale
        description: locale === "es" ? "Sitio web de Verderaiz" : "Verderaiz Website", // Descripción dinámica
    };
}

// Componente de Layout
type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Props) {
    const { locale } = await params;  // Esperar a que `params` se resuelva

    // Configurar el idioma para la solicitud
    unstable_setRequestLocale(locale);

    // Obtener los mensajes de traducción basados en el locale
    const messages = await getMessages();

    return (
        <html className="h-full" lang={locale}>
        <body className="flex h-full flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
