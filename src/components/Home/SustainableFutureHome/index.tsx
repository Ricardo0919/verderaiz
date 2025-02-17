"use client";
import React from "react";
import Image from "next/image";
import Sostenible from "@/assets/images/Sostenible.png";
import SostenibleEn from "@/assets/images/pastoHomeIngles.png";
import SostenibleDE from "@/assets/images/pastoHomeAleman.png";
import SostenibleFR from "@/assets/images/pastoHomeFrances.png";
import { useTranslations, useLocale } from "next-intl";
import homeBG1 from "@/assets/images/homeBG1.png";

function SustainableFutureHome() {
    const t= useTranslations("sustainableFutureHome");
    const locale = useLocale();

    // Mapeo de imágenes por idioma
    const imagesByLocale = {
        es: Sostenible, // Español
        en: SostenibleEn, // Inglés
        de: SostenibleDE, // Alemán
        fr: SostenibleFR, // Francés
    };

    const selectedImage = imagesByLocale[locale as keyof typeof imagesByLocale] || Sostenible;

    return (
        <div className="bg-light-beige flex flex-col items-center justify-center relative">
            <Image
                src={homeBG1}
                alt="homeBG1"
            />

            <div className="absolute">
                <div className="flex flex-col items-center justify-center py-10 lg:py-20">
                    <div className="w-fit">
                        <h1 className="text-dark-green text-xl tracking-[2px] font-black text-center mb-3 md:text-5xl md:tracking-[7px] font-cambay lg:tracking-[10px] lg:text-[45px] xl:tracking-[18px] xl:text-[70px]">
                            {t("title")}
                        </h1>
                        <Image
                            src={selectedImage}
                            alt="Sostenible"
                            className="px-8 md:px-12 lg:px-28 xl:px-0 xl:w-[1100px]"
                        />
                    </div>

                    {/*
            <div className="px-8 mt-10 md:px-44 lg:w-1/3 lg:px-0 xl:w-1/2">
                <p className="text-black text-center text-sm font-serif md:text-lg xl:text-2xl">
                    {t.rich("description",{
                        code:(chunks) => (
                            <code className="font-black font-serif">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
            </div>
            */}

                </div>
            </div>
        </div>
    );
}

export default SustainableFutureHome;
