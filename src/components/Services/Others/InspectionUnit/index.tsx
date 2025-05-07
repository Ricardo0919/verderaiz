"use client";
import React from "react";
import { useTranslations } from "next-intl";

function InspectionUnit() {
    const t = useTranslations("othersInspectionUnit");

    return (
        <div className="bg-light-beige pb-10 md:pb-2 lg:pb-6 xl:pb-16 text-center">
            <div
                className="pt-7 px-10 md:pt-0 md:px-44 lg:px-64 lg:pt-4 xl:px-[430px]">
                <p className="text-black text-2xl tracking-[3px] font-cambay uppercase font-semibold border-dark-green border-[3px] lg:border-[4px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-4 md:text-3xl md:tracking-[6px] md:p-6 lg:p-8 lg:tracking-[9px] lg:text-4xl ">
                    {t("title")}
                </p>

            </div>
            <p className="text-light-green-blog font-montserrat pt-12 px-10 uppercase text-lg md:pt-16 lg:text-2xl lg:px-32 xl:text-3xl xl:px-60 xl:pt-20">
                {t("subtitle")}
            </p>
        </div>
    );
}

export default InspectionUnit;
