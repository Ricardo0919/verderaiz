"use client"
import React from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import EnvAwarness from "@/assets/images/Services/SocioculturalSolutions/EnvironmentalAwarness/EnvironmentalAwarness.png";

function EnvironmentalAwareness() {
    const t = useTranslations("socioculturalSolutionsEnvironmentalAwareness");

    return (
        <div className="bg-light-beige flex flex-col items-center justify-center relative py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-[#e6e8e1] flex flex-col px-6 md:px-12 lg:px-20 md:py-4 lg:py-8 rounded-3xl lg:rounded-[48px] w-full max-w-7xl">
                {/* Fila de Imagen y Título - Stack en móvil, row en desktop */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-6">
                    {/* Imagen - Full width en móvil, 1/3 en desktop */}
                    <div className="w-full lg:w-[45%] flex justify-center">
                        <Image
                            src={EnvAwarness}
                            alt="Nature Solution"
                            className="w-full max-w-md lg:max-w-none rounded-lg"
                        />
                    </div>

                    {/* Contenido de texto - Full width en móvil, 2/3 en desktop */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="font-cambay tracking-[0.32em] uppercase text-black text-center text-base md:text-xl xl:text-4xl font-semibold mb-6 md:mb-8 lg:mb-2 border-[3px] border-[#263c2c] rounded-2xl lg:rounded-[32px] p-6 sm:p-8">
                            {t('title')}
                        </h2>

                        <p className="text-black font-montserrat text-justify text-base lg:text-lg xl:text-2xl mb-4 sm:mb-6 lg:m-2 xl:m-6">
                            {t('description1')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnvironmentalAwareness;