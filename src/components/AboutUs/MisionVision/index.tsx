"use client";
import React from "react";
import Image from "next/image";
import PlantasMV from "@/assets/images/PlantasMV.png";
import {useTranslations} from "next-intl";

function MisionVision() {
    const t = useTranslations("misionVisionAboutUs");
    return (
        <div className="text-black mx-10 mt-10 mb-10 flex flex-col items-start justify-center md:flex-row md:gap-6 md:mt-0 md:mb-10 lg:mb-20 xl:mx-24">
            {/*Mision*/}
            <div className="md:w-1/3 md:mt-12 lg:mt-32 xl:mt-60">
                <h1 className="text-center font-black font-serif text-2xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">
                    {t("title1")}
                </h1>
                <p className="text-justify mt-4 md:text-left md:text-sm font-light lg:text-base xl:text-xl">
                    {t("description2")}
                </p>
            </div>

            <div className="hidden md:flex md:w-2/3">
                <Image
                    src={PlantasMV}
                    alt="Tropical Plants"
                    priority // Optimización de carga
                />
            </div>

            {/*Vision*/}
            <div className="md:w-1/3 md:mt-12 md:flex md:flex-col lg:mt-32 xl:mt-60">
                <h1 className="text-center font-black font-serif text-2xl mt-10 md:text-right md:order-2 md:mt-4 md:text-4xl lg:text-5xl xl:text-6xl">
                    {t("title2")}
                </h1>
                <p className="text-justify mt-4 md:mt-0 md:text-right md:text-sm md:order-1 font-light lg:text-base xl:text-xl">
                    {t("description2")}
                </p>
            </div>

        </div>
    );
}

export default MisionVision;
