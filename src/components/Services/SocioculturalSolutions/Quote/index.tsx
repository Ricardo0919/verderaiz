"use client"
import React from 'react';
import Image from "next/image";
import { useTranslations } from "next-intl";
import homeBG2 from "@/assets/images/Home/AboutUs/homeBG2.png";


function Quote() {
    const t = useTranslations("socioculturalSolutionsQuote");

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative py-4 md:py-8 xl:py-12">
            <Image
                src={homeBG2}
                alt="homeBG2"
                className="absolute scale-75 sm:w-2/3 md:left-0 top-1"
            />

            <div className="flex flex-col justify-center">
                <p className="text-black text-center font-bold font-cambay tracking-widest pt-12 px-20 uppercase text-lg lg:text-2xl lg:px-48 xl:text-3xl xl:px-96 xl:pt-16">
                    {t("description1")}
                </p>
                <p className="text-black text-center font-medium font-cambay pt-12 px-10 uppercase text-lg lg:text-xl lg:px-32 xl:text-2xl xl:px-60 xl:pt-16">
                    {t("description2")}
                </p>
                <p className="text-black text-center font-medium font-cambay pt-2 px-10 uppercase text-lg lg:text-xl lg:px-32 xl:text-2xl xl:px-60">
                    {t("description3")}
                </p>
            </div>
        </div>
    );
}

export default Quote;