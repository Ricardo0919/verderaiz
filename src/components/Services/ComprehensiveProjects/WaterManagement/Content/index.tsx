"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

// Topic1
import image1Topic1 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image1Topic1.png";
import image2Topic1 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image2Topic1.png";
import image3Topic1 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image3Topic1.png";

// Topic2
import image1Topic2 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image1Topic2.png";
import image2Topic2 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image2Topic2.png";
import image3Topic2 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image3Topic2.png";

// Topic3
import image1Topic3 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image1Topic3.png";
import image2Topic3 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image2Topic3.png";
import image3Topic3 from "@/assets/images/Services/ComprehensiveProjects/WaterManagement/image3Topic3.png";


// Tipos estrictos para las claves válidas
type Topic1TitleKeys = "image1Topic1" | "image2Topic1" | "image3Topic1";
type Topic1DescriptionKeys =
    | "description1Topic1"
    | "description2Topic1"
    | "description3Topic1";

type Topic2TitleKeys = "image1Topic2" | "image2Topic2" | "image3Topic2";
type Topic2DescriptionKeys =
    | "description1Topic2"
    | "description2Topic2"
    | "description3Topic2";

type Topic3TitleKeys = "image1Topic3" | "image2Topic3" | "image3Topic3";
type Topic3DescriptionKeys =
    | "description1Topic3"
    | "description2Topic3"
    | "description3Topic3";

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
];

// Bloques del Topic2
const topic2Blocks: {
    image: StaticImageData;
    titleKey: Topic2TitleKeys;
    descriptionKey: Topic2DescriptionKeys;
}[] = [
    {
        image: image1Topic2,
        titleKey: "image1Topic2",
        descriptionKey: "description1Topic2",
    },
    {
        image: image2Topic2,
        titleKey: "image2Topic2",
        descriptionKey: "description2Topic2",
    },
    {
        image: image3Topic2,
        titleKey: "image3Topic2",
        descriptionKey: "description3Topic2",
    },
];

// Bloques del Topic3
const topic3Blocks: {
    image: StaticImageData;
    titleKey: Topic3TitleKeys;
    descriptionKey: Topic3DescriptionKeys;
}[] = [
    {
        image: image1Topic3,
        titleKey: "image1Topic3",
        descriptionKey: "description1Topic3",
    },
    {
        image: image2Topic3,
        titleKey: "image2Topic3",
        descriptionKey: "description2Topic3",
    },
    {
        image: image3Topic3,
        titleKey: "image3Topic3",
        descriptionKey: "description3Topic3",
    },
];

function WaterManagementContent() {
    const t = useTranslations("comprehensiveProjectsWaterManagement");

    return (
        <div className="bg-official-mexican-standards mx-10 -mt-10 text-black pb-10 xl:mx-20">
            {/* Descripción principal */}
            <p className="text-center pt-16 px-5 text-sm font-montserrat md:pt-20 md:px-20 md:text-lg lg:text-2xl lg:px-40 xl:text-3xl xl:px-72">
                {t("description")}
            </p>

            {/* Título Topic1 */}
            <div className="pt-12 md:pt-16">
                <p className="font-cambay text-center uppercase font-bold border-[3px] border-dark-green mx-4 rounded-2xl pt-4 pb-3 tracking-[2px] md:text-xl md:tracking-[4px] md:mx-40 lg:border-[4px] lg:mx-64 lg:text-2xl lg:tracking-[6px] lg:pt-6 lg:pb-5 xl:text-3xl xl:tracking-[8px] xl:mx-96">
                    {t("topic1")}
                </p>
            </div>

            {/* Bloques Topic1 */}
            <div className="pt-12 md:pt-16 px-5 flex flex-col md:flex-row justify-center items-start gap-y-6 md:gap-y-0 md:gap-3 md:px-6 lg:gap-10 lg:px-16 xl:gap-20 xl:px-24">
                {topic1Blocks.map((block, index) => (
                    <div key={index} className="md:w-1/3">
                        <div className="relative">
                            <Image
                                src={block.image}
                                alt="Imagen temática"
                                priority
                                className="object-cover rounded-[40px]"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[40px]" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <p className="font-cambay font-bold text-xl px-3 uppercase lg:text-[16px] lg:tracking-[5px] xl:text-[20px] xl:tracking-[10px] xl:px-12">
                                    {t(block.titleKey)}
                                </p>
                            </div>
                        </div>
                        <div className="text-black leading-relaxed pt-5 px-3 font-montserrat xl:text-xl">
                            {t.rich(block.descriptionKey, {
                                p: (chunks) => <p className="text-justify mb-3">{chunks}</p>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => (
                                    <strong className="font-bold">{chunks}</strong>
                                ),
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Título Topic2 */}
            <div className="pt-12 md:pt-16">
                <p className="font-cambay text-center uppercase font-bold border-[3px] border-dark-green mx-4 rounded-2xl pt-4 pb-3 tracking-[2px] md:text-xl md:tracking-[4px] md:mx-40 lg:border-[4px] lg:mx-64 lg:text-2xl lg:tracking-[6px] lg:pt-6 lg:pb-5 xl:text-3xl xl:tracking-[8px] xl:mx-96">
                    {t("topic2")}
                </p>
            </div>

            {/* Bloques Topic2 */}
            <div className="pt-12 md:pt-16 px-5 flex flex-col md:flex-row justify-center items-start gap-y-6 md:gap-y-0 md:gap-3 md:px-6 lg:gap-10 lg:px-16 xl:gap-20 xl:px-24">
                {topic2Blocks.map((block, index) => (
                    <div key={index} className="md:w-1/3">
                        <div className="relative">
                            <Image
                                src={block.image}
                                alt="Imagen temática"
                                priority
                                className="object-cover rounded-[40px]"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[40px]" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <p className="font-cambay font-bold text-xl px-3 uppercase lg:text-[16px] lg:tracking-[5px] xl:text-[20px] xl:tracking-[8px] xl:px-12">
                                    {t(block.titleKey)}
                                </p>
                            </div>
                        </div>
                        <div className="text-black leading-relaxed pt-5 px-3 font-montserrat xl:text-xl">
                            {t.rich(block.descriptionKey, {
                                p: (chunks) => <p className="text-justify mb-3">{chunks}</p>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => (
                                    <strong className="font-bold">{chunks}</strong>
                                ),
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Título Topic3 */}
            <div className="pt-12 md:pt-16">
                <p className="font-cambay text-center uppercase font-bold border-[3px] border-dark-green mx-4 rounded-2xl pt-4 pb-3 tracking-[2px] md:text-xl md:tracking-[4px] md:mx-40 lg:border-[4px] lg:mx-64 lg:text-2xl lg:tracking-[6px] lg:pt-6 lg:pb-5 xl:text-3xl xl:tracking-[8px] xl:mx-96">
                    {t("topic3")}
                </p>
            </div>

            {/* Bloques Topic3 */}
            <div className="pt-12 md:pt-16 px-5 flex flex-col md:flex-row justify-center items-start gap-y-6 md:gap-y-0 md:gap-3 md:px-6 lg:gap-10 lg:px-16 xl:gap-20 xl:px-24">
                {topic3Blocks.map((block, index) => (
                    <div key={index} className="md:w-1/3">
                        <div className="relative">
                            <Image
                                src={block.image}
                                alt="Imagen temática"
                                priority
                                className="object-cover rounded-[40px]"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[40px]" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <p className="font-cambay font-bold text-xl px-3 uppercase lg:text-[20px] lg:tracking-[5px] xl:text-[28px] xl:tracking-[10px] xl:px-12">
                                    {t(block.titleKey)}
                                </p>
                            </div>
                        </div>
                        <div className="text-black leading-relaxed pt-5 px-3 font-montserrat xl:text-xl">
                            {t.rich(block.descriptionKey, {
                                p: (chunks) => <p className="text-justify mb-3">{chunks}</p>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => (
                                    <strong className="font-bold">{chunks}</strong>
                                ),
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default WaterManagementContent;
