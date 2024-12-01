"use client";
import React from "react";
import RiskStudyIMG from "@/assets/images/RiskStudy.png";
import Image from "next/image";
import {useTranslations} from "next-intl";

function RiskStudy() {
    const t = useTranslations("riskServices");
    return (
        <div className="text-black md:mt-16 mx-10 md:mx-20 xl:mx-32 lg:mt-24 xl:mt-32">
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-4 md:my-10 ">
                <div className="md:w-1/2">
                    {/*Subtitle*/}
                    <h2 className="text-center font-black font-serif text-2xl mt-6 md:text-left md:mt-0 lg:text-3xl xl:text-4xl">
                        {t("subtitle")}
                    </h2>
                    {/*Description*/}
                    <p className="mt-8 md:text-xs lg:text-base font-light xl:text-2xl">
                        {t("description1")}
                    </p>
                    <p className="mt-3 md:text-xs lg:text-base font-light xl:text-2xl">
                        {t("description2")}.
                    </p>
                </div>

                <div className="my-8 md:w-1/2 md:my-0">
                    {/*Image*/}
                    <Image
                        src={RiskStudyIMG}
                        alt="Risk Study"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default RiskStudy;
