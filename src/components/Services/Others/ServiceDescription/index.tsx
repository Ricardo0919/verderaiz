"use client";
import React from "react";
import Image from "next/image";
import GasInspectionUnitService from "@/assets/images/Services/Others/ServiceDescription/GasInspectionUnitService.png";
import { useTranslations } from "next-intl";

function ServiceDescription() {
    const t = useTranslations("othersServiceDescription");

    return (
        <div className="bg-light-beige text-black px-10 pb-12 flex flex-col md:flex-row justify-center items-center md:px-16 md:gap-8 lg:gap-16 xl:px-36 xl:gap-20">
            <div className="md:w-1/2">
                <Image
                    src={GasInspectionUnitService}
                    alt="Plant with gears"
                    priority
                    className=""
                />
                <p className="pt-8 font-black uppercase font-montserrat md:text-xs md:px-8 lg:text-base lg:px-0 lg:pl-8 xl:text-xl">
                    {t("title")}
                </p>
            </div>
            <div className="font-montserrat pt-5 text-justify md:w-1/2 md:text-sm lg:text-lg xl:text-2xl">
                <p>
                    {t.rich("description1", {
                        code: (chunks) => (
                            <code className="underline">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
                <p className="pt-5 font-montserrat">
                    {t("description2")}
                </p>
            </div>
        </div>
    );
}

export default ServiceDescription;
