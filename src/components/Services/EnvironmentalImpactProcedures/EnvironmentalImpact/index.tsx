"use client";
import React from "react";
import EnvironmentalImpactIMG from "@/assets/images/Services/EnvironmentalImpactProcedures/EnvironmentalImpact/EnvironmentalImpact.png";
import Image from "next/image";
import {useTranslations} from "next-intl";

function EnvironmentalImpact() {
    const t = useTranslations("environmentalImpactService");
    return (
        <div className="text-black px-10 md:px-20 xl:px-32 lg:pt-10 xl:pt-20 bg-light-beige">
            {/*Title*/}
            <h2 className="text-center font-[1000] font-cambay text-3xl tracking-[2px] mt-6 md:text-left md:text-2xl md:mt-0 lg:text-3xl xl:text-5xl md:tracking-[7px] lg:tracking-[10px] xl:tracking-[18px]">
                {t("title")}
            </h2>

            <div className="flex flex-col justify-center items-center md:flex-row md:gap-4 md:pt-2 md:pb-10">
                <div className="md:w-1/2">
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
                        src={EnvironmentalImpactIMG}
                        alt="Environmental Impact"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default EnvironmentalImpact;
