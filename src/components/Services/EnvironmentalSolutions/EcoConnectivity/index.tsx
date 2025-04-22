"use client"
import React from 'react';
import EcoConnectivityIMG from "@/assets/images/Services/EnvironmentalSolutions/EcoConnectivity/EcoConnectivity.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import homeBG3 from "@/assets/images/Home/MexicanCompany/homeBG3.png";


function EcoConnectivity() {
    const t = useTranslations("environmentalSolutionsEcoConnectivity");

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative">
            <Image
                src={homeBG3}
                alt="homeBG3"
                className="absolute sm:w-2/3 md:left-0 rotate-180 bottom-1"
            />

            <div className="flex flex-col justify-center items-stretch md:flex-row pb-12 xl:pb-20 md:items-center">
                <div className="md:w-1/2 mr-9 flex items-stretch h-[220px] md:h-[120px] lg:h-[160px] xl:h-[180px] mt-9 md:mt-0 order-2 md:order-1">
                    <div className="relative w-full h-full md:h-auto md:pt-9">
                        <Image
                            src={EcoConnectivityIMG}
                            alt="Ecological Connectivity"
                            fill
                            className="object-cover rounded-l-none rounded-r-[96px] "
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                            <p className="text-white text-3xl md:text-2xl lg:text-4xl font-cambay p-4 rounded-lg">
                                {t("imageQuote")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-black mx-9 md:w-1/2 xl:ml-16 order-1 md:order-2">
                    <p className="font-montserrat text-justify md:text-xs lg:text-base xl:text-xl">
                        {t("description1")}
                    </p>
                    <ul className="font-montserrat text-justify md:mt-1 xl:mt-2 md:text-xs lg:text-base xl:text-xl list-disc pl-5">
                        <li>{t("list1")}</li>
                        <li>{t("list2")}</li>
                        <li>{t("list3")}</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default EcoConnectivity;