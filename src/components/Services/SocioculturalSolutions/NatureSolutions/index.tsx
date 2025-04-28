"use client"
import React from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import NatureSolIMG from "@/assets/images/Services/SocioculturalSolutions/NatureSolutions/NatureSolutions.png";
import NatureSolutionsBG from "@/assets/images/Services/SocioculturalSolutions/NatureSolutions/NatureSolutionsBG.png";

function NatureSolutions() {
    const t = useTranslations("socioculturalSolutionsNatureSolutions");

    return (
        <div className="bg-light-beige flex flex-col items-center justify-center relative py-10 px-4 sm:px-6 lg:px-8">
            <Image
                src={NatureSolutionsBG}
                alt="NatureSolutionsBG"
                className="absolute md:w-2/3 md:right-0 xl:w-1/2"
            />
            <div className="z-10">
                <div
                    className="bg-[#e6e8e1] flex flex-col  px-6 md:px-12 lg:px-20 py-2 md:py-4 lg:py-8 rounded-3xl lg:rounded-[48px] w-full max-w-7xl">
                    {/* Fila de Imagen y Título - Stack en móvil, row en desktop */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 my-6">
                        <div className="w-full lg:w-[45%] flex justify-center">
                            <Image
                                src={NatureSolIMG}
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

                    {/* Descripción 2 */}
                    <div
                        className="text-black mb-6 lg:mb-8 font-cambay font-semibold tracking-[0.32em] text-center text-base lg:text-lg xl:text-2xl text-semibold md:mx-12 lg:mx-20">
                        <p>{t('description2')}<strong
                            className="text-[#5e845c]">{t('description2_1')}</strong>{t('description2_2')}</p>
                    </div>

                    {/* Listas - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 py-4 items-center ">
                        <ul className="text-black font-montserrat font-semibold text-center p-3">
                            <li className="hover:text-[#263c2c] text-base lg:text-lg xl:text-2xl transition-colors">{t('list1')}</li>
                        </ul>
                        <ul className="text-black font-montserrat font-semibold text-center p-3">
                            <li className="hover:text-[#263c2c] text-base lg:text-lg xl:text-2xl transition-colors">{t('list2')}</li>
                        </ul>
                        <ul className="text-black font-montserrat font-semibold text-center p-3">
                            <li className="hover:text-[#263c2c] text-base lg:text-lg xl:text-2xl transition-colors">{t('list3')}</li>
                        </ul>
                        <ul className="text-black font-montserrat font-semibold text-center p-3">
                            <li className="hover:text-[#263c2c] text-base lg:text-lg xl:text-2xl transition-colors">{t('list4')}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NatureSolutions;