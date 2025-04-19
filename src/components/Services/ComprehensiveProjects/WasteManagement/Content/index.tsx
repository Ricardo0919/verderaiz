"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

// Topic1
import image1Topic1 from "@/assets/images/Services/ComprehensiveProjects/WasteManagement/image1Topic1.png";
import image2Topic1 from "@/assets/images/Services/ComprehensiveProjects/WasteManagement/image2Topic1.png";
import image3Topic1 from "@/assets/images/Services/ComprehensiveProjects/WasteManagement/image3Topic1.png";
import image4Topic1 from "@/assets/images/Services/ComprehensiveProjects/WasteManagement/image3Topic1.png";

// Tipos estrictos para las claves válidas
type Topic1TitleKeys = "image1Topic1" | "image2Topic1" | "image3Topic1" | "image4Topic1";
type Topic1DescriptionKeys =
    | "description1Topic1"
    | "description2Topic1"
    | "description3Topic1"
    | "description4Topic1";

// Bloques del Topic1
const topic1Blocks: {
    image: StaticImageData;
    titleKey: Topic1TitleKeys;
    descriptionKey: Topic1DescriptionKeys;
}[] = [
    {
        image: image1Topic1,
        titleKey: "image1Topic1",
        descriptionKey: "description1Topic1",
    },
    {
        image: image2Topic1,
        titleKey: "image2Topic1",
        descriptionKey: "description2Topic1",
    },
    {
        image: image3Topic1,
        titleKey: "image3Topic1",
        descriptionKey: "description3Topic1",
    },
    {
        image: image4Topic1,
        titleKey: "image4Topic1",
        descriptionKey: "description4Topic1",
    },
];

function WaterManagement() {
    const t = useTranslations("comprehensiveProjectsWasteManagement");

    return (
        <div className="bg-official-mexican-standards mx-10 -mt-10 text-black pb-10 xl:mx-20">
            {/* Descripción principal */}
            <p className="text-center pt-16 px-8 text-sm font-montserrat md:pt-20 md:px-20 md:text-lg lg:text-2xl lg:px-40 xl:text-3xl xl:px-72">
                {t("description")}
            </p>

            {/* Bloques Topic1 */}
            <div className="pt-8 md:pt-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10 md:px-10 lg:gap-x-10 lg:px-16 xl:gap-x-20 xl:px-24">
                {topic1Blocks.map((block, index) => (
                    <div key={index}>
                        <div className="relative">
                            <Image
                                src={block.image}
                                alt="Imagen temática"
                                priority
                                className="object-cover rounded-[40px]"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[40px]" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <p className="font-cambay font-bold text-xl px-3 uppercase lg:text-[16px] xl:text-[20px] xl:px-12">
                                    {t(block.titleKey)}
                                </p>
                            </div>
                        </div>
                        <div className="text-black leading-relaxed pt-5 px-3 font-montserrat xl:text-xl">
                            {t.rich(block.descriptionKey, {
                                p: (chunks) => <p className="text-justify mb-3">{chunks}</p>,
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WaterManagement;
