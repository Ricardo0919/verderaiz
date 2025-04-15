"use client";
import React from "react";
import { useTranslations } from "next-intl";

function Quote() {
    const t = useTranslations("environmentalImpactProceduresQuote");

    return (
        <div className="bg-light-beige py-10 px-10 md:py-16 md:px-28 lg:px-40 lg:py-20 xl:px-72 xl:py-24">
            <p className="text-black text-center border-blog-BG border-[3px] lg:border-[4px] rounded-2xl p-4 md:text-lg md:p-6 lg:p-8 lg:text-2xl xl:text-3xl">
                {t("quote")}
            </p>
        </div>
    );
}

export default Quote;
