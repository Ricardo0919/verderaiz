"use client";
import React from "react";
import Image from "next/image";
import ArrowDown from "@/assets/images/Services/EnvironmentalImpactProcedures/Question/ArrowDown.png";
import ArrowRight from "@/assets/images/Services/EnvironmentalImpactProcedures/Question/ArrowRight.png";
import ArrowLeft from "@/assets/images/Services/EnvironmentalImpactProcedures/Question/ArrowLeft.png";
import { useTranslations } from "next-intl";

function Question() {
    const t = useTranslations("environmentalImpactProceduresQuestion");

    return (
        <div className="bg-light-beige px-10 pb-10">
            <div className="bg-beige text-black p-6 text-lg md:p-6 lg:p-8 lg:text-2xl xl:text-3xl">

                <div className="flex flex-row items-center justify-center">
                    <Image
                        src={ArrowLeft}
                        alt="Background Image"
                        className="w-[80px] xl:w-[130px] hidden md:flex"
                    />
                    <p className="text-center uppercase font-bold md:px-5 xl:text-[40px] xl:px-12 md:w-1/2">
                        {t("question")}
                    </p>
                    <Image
                        src={ArrowRight}
                        alt="Background Image"
                        className="w-[80px] xl:w-[130px] hidden md:flex"
                    />
                </div>
                <div className="text-center text-sm lg:text-lg xl:text-2xl mt-3 font-semibold flex flex-col md:flex-row justify-center items-center">
                    <p className="mb-3 md:mb-0 md:w-1/3 md:pr-4">
                        {t("text1")}
                    </p>
                    <div className="md:w-1/3 flex flex-col justify-center items-center md:px-4">
                        <Image
                            src={ArrowDown}
                            alt="Background Image"
                            className="w-[40px] xl:w-[70px] hidden md:flex"
                        />
                        <p className="mb-3 md:mb-0">
                            {t("text2")}
                        </p>
                    </div>
                    <p className="mb-3 md:mb-0 md:w-1/3 md:pl-4">
                        {t("text3")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Question;
