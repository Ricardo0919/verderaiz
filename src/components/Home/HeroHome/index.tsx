"use client";
import React from "react";
import Image from "next/image";
import background from "@/assets/images/HeroHomeBG.png";
import {useTranslations} from "next-intl";

function HeroHome() {
    const t = useTranslations("heroHome");
    return (
        <div className="relative text-center py-28 md:py-20 lg:py-56">
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
            <div
                className="relative border border-white rounded-2xl pt-24 pb-6 px-10 mx-8 md:px-6 lg:pb-10 lg:-mt-40 lg:pt-40 lg:px-20 xl:p-24 xl:pt-44">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 lg:gap-8">
                    <h1 className="text-3xl md:text-3xl text-white font-cambay font-semibold mt-6 md:w-1/2 md:order-2 md:text-right md:mt-0 lg:w-2/3 lg:tracking-[7px] xl:tracking-[8px] lg:pl-20 lg:leading-[75px] xl:leading-[75px] xl:pl-44 lg:text-4xl xl:text-5xl">
                        {t("title")}
                    </h1>
                    <div className="text-white md:w-1/2 md:order-1 lg:w-1/3">
                        <p className="font-montserrat text-justify mt-6 text-sm font-light lg:text-lg xl:text-2xl">
                            {t.rich("description")}
                        </p>
                        <p className="mt-8 border border-white rounded-3xl font-bold text-lg px-10 md:px-16 lg:text-base xl:px-24 xl:text-xl">
                            {t("button")}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HeroHome;
