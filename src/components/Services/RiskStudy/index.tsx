"use client";
import React from "react";
import RiskStudyIMG from "@/assets/images/RiskStudy.png";
import Image from "next/image";
import {useTranslations} from "next-intl";
import servicesBG2 from "@/assets/images/servicesBG2.png";

function RiskStudy() {
    const t = useTranslations("riskServices");
    return (
        <div className="bg-light-beige flex flex-col justify-center relative">
            <Image
                src={servicesBG2}
                alt="servicesBG2"
                className="absolute right-0 w-2/3 md:w-1/3"
            />

            <div className="z-10">
                <div className="text-black md:pt-16 px-10 md:px-20 xl:px-32 lg:pt-24 xl:pt-32">
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-4 md:py-10 ">
                        <div className="md:w-1/2">
                            {/*Subtitle*/}
                            <h2 className="text-center font-[1000] font-cambay text-3xl tracking-[2px] mt-6 md:text-left md:text-2xl md:mt-0 lg:text-3xl xl:text-5xl md:tracking-[7px] lg:tracking-[10px] xl:tracking-[18px]">
                                {t("subtitle")}
                            </h2>
                            {/*Description*/}
                            <p className="font-montserrat mt-8 md:text-xs lg:text-base font-light xl:text-2xl">
                                {t("description1")}
                            </p>
                            <p className="font-montserrat mt-3 md:text-xs lg:text-base font-light xl:text-2xl">
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
            </div>
        </div>
    );
}

export default RiskStudy;
