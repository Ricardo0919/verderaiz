"use client";
import React from "react";
import Image from "next/image";
import background from "@/assets/images/AboutUsBG.png";
import PartnersIMG from "@/assets/images/PartnersIMG.png";
import {useTranslations} from "next-intl";

function HeroAboutUs() {
    const t = useTranslations("heroAboutUs");
    return (
        <div className="relative text-center py-28 md:pt-20 md:py-0 lg:pt-20 xl:pt-16">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image
                    src={background}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority // Optimización de carga
                />
            </div>

            {/* Contenido principal */}
            <div className="relative border-2 border-white rounded-2xl px-8 text-white mx-6 pt-32 flex flex-col md:flex-row md:pb-10 lg:pt-40 lg:pb-20 xl:pt-52 xl:pb-44">
                <div className="md:w-1/3 lg:pl-10">
                    <h1 className="font-cambay text-3xl tracking-[2px] font-black md:text-4xl md:text-left lg:text-4xl xl:text-6xl">
                        {t("title")}
                    </h1>
                    <div className="text-sm mt-4 md:text-left md:text-base lg:text-xl xl:text-3xl">
                        <p>
                            {t("description1")}
                        </p>
                        <p className="font-black bg-light-green rounded-[30px] md:text-center">
                            {t("description2")}
                        </p>
                        <p>
                            {t("description3")}
                        </p>
                    </div>
                </div>
                <div className="mt-6 md:hidden">
                    <Image
                        src={PartnersIMG}
                        alt="Partners"
                        priority
                    />
                </div>
            </div>

            <div className="hidden relative md:flex justify-end items-end -mt-[300px] lg:-mt-[430px] xl:-mt-[640px]">
                <Image
                    src={PartnersIMG}
                    alt="Partners"
                    priority
                    className="w-7/12 lg:w-8/12"
                />
            </div>
        </div>
    );
}

export default HeroAboutUs;
