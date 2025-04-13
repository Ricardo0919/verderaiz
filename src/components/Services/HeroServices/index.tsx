"use client";
import React from "react";
import PlantBG from "@/assets/images/Services/ComprehensiveProjects/PlantBG.png";
import PlantBGLG from "@/assets/images/Services/ComprehensiveProjects/PlantBGLG.png";
import PlantBGLGEN from "@/assets/images/Services/ComprehensiveProjects/listonTuercaIngles.png";
import PlantBGLGDE from "@/assets/images/Services/ComprehensiveProjects/listonTuercaAleman.png";
import PlantBGLGFR from "@/assets/images/Services/ComprehensiveProjects/listonTuercaFrances.png";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

function HeroServices() {
    const t = useTranslations("heroServices");
    const l = useTranslations("navbar");
    const locale = useLocale();

    // Mapeo de imágenes por idioma
    const imagesByLocale = {
        es: PlantBGLG, // Español
        en: PlantBGLGEN, // Inglés
        de: PlantBGLGDE, // Alemán
        fr: PlantBGLGFR, // Francés
    };

    const selectedImage = imagesByLocale[locale as keyof typeof imagesByLocale] || PlantBGLG;


    return (
        <div className="text-center py-28 md:py-20 lg:py-20 bg-services-BG px-6">
            {/* Contenido principal */}
            <div className="border-[4px] border-white rounded-2xl flex flex-col items-center justify-center md:flex-row md:pt-0">
                <div className="mt-32 mb-6 md:order-2 md:w-1/2 md:mt-0 xl:w-1/3 xl:mr-32">
                    <h1 className="font-cambay font-black text-3xl tracking-[4px] md:text-2xl mt-20 md:tracking-[7px] lg:text-4xl lg:tracking-[8px] xl:text-5xl xl:tracking-[9px]">
                        {t("title")}
                    </h1>
                    <p className="text-left my-4 md:my-4 lg:my-6 xl:my-8 mx-8 md:text-base lg:text-xl xl:text-3xl">
                        {t("description")}
                    </p>
                    <Link href={l("contactLink")}>
                        <button className="font-zendots border-2 border-white px-6 py-2 text-[10px] md:text-[10px] lg:text-base xl:text-xl rounded-[30px] transform hover:scale-125 transition-transform duration-300">
                            {t("button")}
                        </button>
                    </Link>
                </div>

                <div className="mx-4 mb-6 md:mx-0 md:mb-0 md:order-1 md:w-9/12 xl:w-8/12">
                    <Image
                        src={PlantBG}
                        alt="Plant with gears"
                        priority
                        className="md:hidden"
                    />
                    <Image
                        src={selectedImage}
                        alt="Plant with gears"
                        priority
                        className="hidden md:flex right-0 bottom-0"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroServices;
