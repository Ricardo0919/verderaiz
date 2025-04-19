"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Topic1
import EnergyEfficiency from "@/assets/images/Services/ComprehensiveProjects/EnergyManagement/EnergyEfficiency.png";

// Topic2
import PhotovoltaicProjects from "@/assets/images/Services/ComprehensiveProjects/EnergyManagement/PhotovoltaicProjects.png";

// Tipado estricto para claves de traducción de Topic1
type Topic1SubtitleKeys = "subtitle1Topic1" | "subtitle2Topic1" | "subtitle3Topic1";
type Topic1DescriptionKeys = "description1Topic1" | "description2Topic1" | "description3Topic1";

// Bloques del Topic1
const topic1Blocks: {
    subtitleKey: Topic1SubtitleKeys;
    descriptionKey: Topic1DescriptionKeys;
}[] = [
    {
        subtitleKey: "subtitle1Topic1",
        descriptionKey: "description1Topic1",
    },
    {
        subtitleKey: "subtitle2Topic1",
        descriptionKey: "description2Topic1",
    },
    {
        subtitleKey: "subtitle3Topic1",
        descriptionKey: "description3Topic1",
    },
];

function EnergyManagementContent() {
    const t = useTranslations("comprehensiveProjectsEnergyManagement");

    return (
        <div className="bg-official-mexican-standards mx-10 -mt-10 text-black pb-10 lg:pb-16 xl:pb-20 xl:mx-20">
            {/* Descripción principal */}
            <p className="text-center pt-16 px-5 text-sm font-montserrat md:pt-20 md:px-20 md:text-lg lg:text-2xl lg:px-40 xl:text-3xl xl:px-72">
                {t("description")}
            </p>

            {/* Imagen con título Topic1 */}
            <div className="relative mx-5 mt-5 md:mx-10 md:mt-10 lg:mt-16 lg:mx-16 xl:mt-20 xl:mx-20 font-cambay">
                <Image
                    src={EnergyEfficiency}
                    alt="Energy Efficiency"
                    priority
                    className="object-cover rounded-[10px] md:rounded-[30px] lg:rounded-[40px] xl:rounded-[60px]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <p className="font-cambay font-bold text-xs uppercase md:text-xl md:tracking-[4px] lg:text-3xl lg:tracking-[5px] pt-1 md:pt-3 lg:pt-6 xl:text-4xl xl:tracking-[7px]">
                        {t("topic1")}
                    </p>
                </div>
            </div>

            {/* Bloques Topic1 con map */}
            <div className="font-montserrat mt-5 lg:mt-10 xl:mt-16 flex flex-col md:flex-row gap-y-8 mx-8 md:gap-y-0 md:gap-8 md:mx-16 text-sm lg:text-base lg:mx-24 lg:gap-12 xl:text-xl xl:mx-32 xl:gap-20">
                {topic1Blocks.map((block, index) => (
                    <div key={index} className="md:w-1/3">
                        <p className="text-center font-bold xl:px-8">
                            {t(block.subtitleKey)}
                        </p>
                        <p className="text-justify mt-4">
                            {t(block.descriptionKey)}
                        </p>
                    </div>
                ))}
            </div>

            {/* Imagen con título Topic2 */}
            <div className="relative mx-5 mt-10 md:mx-10 md:mt-10 lg:mt-16 lg:mx-16 xl:mt-20 xl:mx-20 font-cambay">
                <Image
                    src={PhotovoltaicProjects}
                    alt="Photovoltaic Projects"
                    priority
                    className="object-cover rounded-[10px] md:rounded-[30px] lg:rounded-[40px] xl:rounded-[60px]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <p className="font-cambay font-bold text-xs uppercase md:text-xl md:tracking-[4px] lg:text-3xl lg:tracking-[5px] pt-1 md:pt-3 lg:pt-6 xl:text-4xl xl:tracking-[7px]">
                        {t("topic2")}
                    </p>
                </div>
            </div>

            {/* Descripcion Topic2 */}
            <div className="mt-8 mx-5 md:mx-20 lg:mt-16 lg:mx-52 xl:mt-20 xl:mx-80 font-montserrat">
                <p className="text-center font-montserrat text-sm md:text-lg lg:text-xl xl:text-2xl">
                    {t("descriptionTopic2")}
                </p>
            </div>

            {/* Bloques Topic2 */}
            <div className="mt-8 md:mt-12 lg:mt-16 font-montserrat mx-5 text-sm flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:gap-10 justify-center items-stretch md:mx-20 md:text-lg lg:text-xl lg:mx-32 lg:gap-16 xl:text-2xl xl:mx-52 xl:gap-20">
                <div className="md:w-1/2">
                    <p className="font-bold text-center uppercase">{t("subtitle1Topic2")}</p>
                    <p className="text-center mt-3 lg:mt-5">{t("description1Topic2")}</p>
                </div>

                {/* Línea vertical visible */}
                <div className="hidden md:flex w-[4px] bg-dark-green mx-4" />

                <div className="md:w-1/2">
                    <p className="font-bold text-center uppercase">{t("subtitle2Topic2")}</p>
                    <p className="text-center mt-3 lg:mt-5">{t("description2Topic2")}</p>
                </div>
            </div>


        </div>
    );
}

export default EnergyManagementContent;
