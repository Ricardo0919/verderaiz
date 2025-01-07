"use client";
import React from "react";
import TrainingIMG from "@/assets/images/Training.png";
import Image from "next/image";
import {useTranslations} from "next-intl";

function Training() {
    const t = useTranslations("trainingServices");
    return (
        <div className="text-black md:pt-16 px-10 md:px-20 xl:px-32 lg:pt-24 xl:pt-32 md:pb-6 lg:pb-10 xl:pb-16 bg-light-beige">
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-8 md:py-10 ">
                <div className="md:w-1/2 md:order-2">
                    {/*Subtitle*/}
                    <h2 className="text-center font-black font-titles text-3xl tracking-[2px] mt-6 md:text-right md:text-2xl md:mt-0 lg:text-3xl xl:text-5xl">
                        {t("subtitle")}
                    </h2>
                    {/*Description*/}
                    <p className="mt-8 md:text-xs lg:text-base font-light xl:text-2xl md:text-right">
                        {t("description1")}
                    </p>
                    <p className="mt-3 md:text-xs lg:text-base font-light xl:text-2xl md:text-right">
                        {t("description2")}.
                    </p>
                </div>

                <div className="my-8 md:w-1/2 md:my-0 md:order-1">
                    {/*Image*/}
                    <Image
                        src={TrainingIMG}
                        alt="Training"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Training;
