"use client";
import React from "react";
import { useTranslations } from "next-intl";

function Quote() {
    const t = useTranslations("othersQuote");

    return (
        <div className="bg-light-beige py-10 px-10 md:py-16 md:px-28 lg:px-32 lg:py-20 xl:px-60 xl:py-24">
            <p className="text-white font-montserrat text-center md:text-justify bg-dark-green border-dark-green border-[3px] lg:border-[4px] rounded-[30px] md:rounded-[40px] lg:rounded-[60px] p-4 md:text-lg md:p-6 lg:p-8 lg:text-2xl xl:text-3xl">
                {t("quote")}
            </p>
        </div>
    );
}

export default Quote;
