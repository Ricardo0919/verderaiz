"use client"
import React from 'react';
import { useTranslations } from "next-intl";


function Quote() {
    const t = useTranslations("socioculturalSolutionsQuote");

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative py-4 md:py-8 xl:py-12">
            <div className="flex flex-col justify-center">
                <p className="text-black text-center font-bold font-cambay tracking-widest pt-12 px-20 uppercase text-lg lg:text-2xl lg:px-48 xl:text-2xl 2xl:text-3xl xl:px-96 xl:pt-16 2xl:px-[36rem]">
                    {t("description1")}
                </p>
                <p className="text-black text-center font-medium font-cambay pt-12 px-10 uppercase text-lg lg:text-xl lg:px-32 xl:text-2xl 2xl:text-3xl xl:px-60 xl:pt-16 2xl:px-[36rem]">
                    {t("description2")}
                </p>
                <p className="text-black text-center font-medium font-cambay pt-2 px-10 uppercase text-lg lg:text-xl lg:px-32 xl:text-2xl 2xl:text-3xl xl:px-60 2xl:px-[36rem]">
                    {t("description3")}
                </p>
            </div>
        </div>
    );
}

export default Quote;