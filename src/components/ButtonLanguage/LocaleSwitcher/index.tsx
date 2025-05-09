'use client';
import { useParams } from 'next/navigation';
import React, { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from "next-intl";

type Props = {
    closeModalAction: () => void;
    currentLocale: string;
};

export default function LocaleSwitcher({ closeModalAction, currentLocale }: Props) {
    const t = useTranslations("buttonLanguage");
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function localeChange(locale: string) {
        console.log(`pathname: ${pathname} params: ${params} locale: ${locale}`);
        const nextLocale = locale;
        startTransition(() => {
            router.replace(
                { pathname },
                { locale: nextLocale }
            );
        });
    }

    return (
        <div>
            <div
                className="fixed bottom-20 right-4 z-50"
                onClick={closeModalAction}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col lg:flex-col justify-center gap-y-1">
                        {/* Botón Inglés */}
                        <button
                            disabled={isPending}
                            onClick={() => localeChange('en')}
                            className={`${
                                currentLocale === 'en'
                                    ? 'bg-dark-green text-white border-dark-green'
                                    : 'bg-white text-dark-green border-dark-green'
                            } border-[2px] font-bold py-1 px-3 rounded-[30px] hover:bg-dark-green hover:text-white transition ease-in-out delay-200 hover:scale-[0.85] text-base mr-1
                            animate-slideInUp`}
                            style={{ animationDelay: '0.1s' }}
                        >
                            <div className="flex flex-row">
                                <Image
                                    src="https://flagcdn.com/w40/gb.png"
                                    alt="English Flag"
                                    width={18}
                                    height={1}
                                    className="mr-1 py-1"
                                />
                                {t("English")}
                            </div>
                        </button>

                        {/* Botón Español */}
                        <button
                            disabled={isPending}
                            onClick={() => localeChange('es')}
                            className={`${
                                currentLocale === 'es'
                                    ? 'bg-dark-green text-white border-dark-green'
                                    : 'bg-white text-dark-green border-dark-green'
                            } border-[2px] font-bold py-1 px-3 rounded-[30px] hover:bg-dark-green hover:text-white transition ease-in-out delay-200 hover:scale-[0.85] text-base mr-1
                            animate-slideInUp`}
                            style={{ animationDelay: '0.2s' }}
                        >
                            <div className="flex flex-row">
                                <Image
                                    src="https://flagcdn.com/w40/es.png"
                                    alt="Spanish Flag"
                                    width={18}
                                    height={1}
                                    className="mr-1 py-1"
                                />
                                {t("Spanish")}
                            </div>
                        </button>

                        {/* Botón Alemán */}
                        <button
                            disabled={isPending}
                            onClick={() => localeChange('de')}
                            className={`${
                                currentLocale === 'de'
                                    ? 'bg-dark-green text-white border-dark-green'
                                    : 'bg-white text-dark-green border-dark-green'
                            } border-[2px] font-bold py-1 px-3 rounded-[30px] hover:bg-dark-green hover:text-white transition ease-in-out delay-200 hover:scale-[0.85] text-base mr-1
                            animate-slideInUp`}
                            style={{ animationDelay: '0.3s' }}
                        >
                            <div className="flex flex-row">
                                <Image
                                    src="https://flagcdn.com/w40/de.png"
                                    alt="German Flag"
                                    width={18}
                                    height={1}
                                    className="mr-1 py-1"
                                />
                                {t("German")}
                            </div>
                        </button>

                        {/* Botón Francés */}
                        <button
                            disabled={isPending}
                            onClick={() => localeChange('fr')}
                            className={`${
                                currentLocale === 'fr'
                                    ? 'bg-dark-green text-white border-dark-green'
                                    : 'bg-white text-dark-green border-dark-green'
                            } border-[2px] font-bold py-1 px-3 rounded-[30px] hover:bg-dark-green hover:text-white transition ease-in-out delay-200 hover:scale-[0.85] text-base mr-1
                            animate-slideInUp`}
                            style={{ animationDelay: '0.4s' }}
                        >
                            <div className="flex flex-row">
                                <Image
                                    src="https://flagcdn.com/w40/fr.png"
                                    alt="French Flag"
                                    width={18}
                                    height={1}
                                    className="mr-1 py-1"
                                />
                                {t("French")}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
