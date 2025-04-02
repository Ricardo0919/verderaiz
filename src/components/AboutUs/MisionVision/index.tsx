"use client";
import React from "react";
import Image from "next/image";
import PlantasMV from "@/assets/images/PlantasMV.png";
import PlantasMVEN from "@/assets/images/listonPlantasIngles.png";
import PlantasMVDE from "@/assets/images/listonPlantasAleman.png";
import PlantasMVFR from "@/assets/images/listonPlantasFrances.png";
import { useTranslations, useLocale } from "next-intl";

function MisionVision() {
    const t = useTranslations("misionVisionAboutUs");
    const locale = useLocale();

    // Mapeo de imágenes por idioma
    const imagesByLocale = {
        es: PlantasMV, // Español
        en: PlantasMVEN, // Inglés
        de: PlantasMVDE, // Alemán
        fr: PlantasMVFR, // Francés
    };

    const selectedImage = imagesByLocale[locale as keyof typeof imagesByLocale] || PlantasMV;

    return (
        <div className="text-black px-10 pt-10 pb-10 flex flex-col items-start justify-center md:flex-row md:gap-6 md:pt-0 md:pb-10 lg:pb-20 xl:px-24 bg-light-beige">
            {/*Mision*/}
            <div className="md:w-1/3 md:mt-12 lg:mt-20 xl:mt-32">
                <h1 className="text-center font-black font-cambay text-4xl tracking-[4px] md:text-left md:text-3xl md:tracking-[7px] lg:text-4xl lg:tracking-[8px] xl:text-5xl xl:tracking-[9px]">
                    {t("title1")}
                </h1>
                <p className="font-montserrat text-justify mt-4 md:text-left md:text-sm font-light lg:text-base xl:text-xl">
                    {t("description1")}
                </p>
            </div>

            <div className="hidden md:flex md:w-2/3">
                <Image
                    src={selectedImage}
                    alt="Tropical Plants"
                    priority // Optimización de carga
                    className=""
                />
            </div>

            {/*Vision*/}
            <div className="md:w-1/3 md:mt-12 md:flex md:flex-col lg:mt-36 xl:mt-52">
                <h1 className="text-center font-black font-cambay text-4xl tracking-[4px] mt-10 md:text-right md:order-2 md:mt-4 md:text-3xl md:tracking-[7px] lg:text-4xl lg:tracking-[8px] xl:text-5xl xl:tracking-[9px]">
                    {t("title2")}
                </h1>
                <p className="font-montserrat text-justify mt-4 md:mt-0 md:text-right md:text-sm md:order-1 font-light lg:text-base xl:text-xl">
                    {t("description2")}
                </p>
            </div>

        </div>
    );
}

export default MisionVision;
