"use client";
import React from "react";
import Image from "next/image";
import background from "@/assets/images/Services/EnvironmentalImpactProcedures/Hero/HeroBG.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Hero() {
    const t = useTranslations("environmentalImpactProceduresHero");
    const l = useTranslations("navbar");

    return (
        <div className="relative text-center pt-28 pb-16 md:pt-20 md:pb-20 lg:pt-56 lg:pb-24 xl:pb-32">
            {/* Imagen fondo */}
            {/* Imagen fondo + overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="flex h-full relative">

                    {/* Imagen de fondo */}
                    <div className="relative w-full h-full flex-shrink-0">
                        <Image
                            src={background}
                            alt="Background Image"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>

                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
            </div>


            {/* Contenido principal */}
            <div className="relative border border-white rounded-2xl pt-24 pb-6 px-10 mx-8 md:px-16 md:pt-32 md:pb-16 lg:pb-16 lg:-mt-40 lg:pt-48 lg:px-10 xl:pt-60 xl:pb-16 xl:px-36">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <h1 className="text-3xl md:text-4xl text-white font-cambay font-semibold mt-6 md:w-1/2 md:text-left md:mt-0 md:pr-4 lg:w-2/3 lg:tracking-[16px] xl:tracking-[16px] lg:pr-10 lg:leading-[50px] xl:leading-[75px] xl:pr-10 lg:text-4xl xl:text-5xl uppercase">
                        {t("title")}
                    </h1>
                    <div className="text-white md:w-1/2 md:order-1 lg:w-1/2">
                        <p className="font-montserrat text-center mt-6 text-sm md:text-lg md:tracking-[2px] lg:tracking-[4px] xl:tracking-[8px] font-light lg:text-lg xl:text-2xl">
                            {t("description1")}
                        </p>
                        <p className="font-montserrat px-5 text-center mt-2 text-sm font-bold md:px-0 md:text-lg md:tracking-[2px] lg:tracking-[8px] xl:tracking-[10px] lg:text-lg xl:text-2xl uppercase">
                            {t("description2")}
                        </p>
                        <Link href={l("contactLink")}>
                            <button
                                className="mt-6 border border-white rounded-3xl font-zendots font-bold text-sm px-10 md:px-16 lg:text-base xl:px-24 xl:text-xl transform hover:scale-125 transition-transform duration-300">
                                {t("button")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;