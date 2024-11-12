import clsx from 'clsx';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '../../config';
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";


type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata() {
    return {
        title: "Verderaiz",
        description: "Verderaiz website",
    }
}


export default async function LocaleLayout({children, params}: Props) {
    // Enable static rendering
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (

        <html className="h-full" lang={locale}>
        <body className={clsx('flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages} >
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}