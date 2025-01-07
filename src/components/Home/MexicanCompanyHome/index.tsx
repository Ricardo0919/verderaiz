"use client"
import React from 'react';
import ArcosQro from "@/assets/images/MexicanCompanyHome.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


function MexicanCompany() {
    const t = useTranslations("mexicanCompanyHome");
    const l = useTranslations("navbar");

    return (
        <div className="flex flex-col justify-center items-center md:flex-row pb-12 xl:pb-20 bg-light-beige">
            <div className="text-black mx-9 font-serif md:w-1/2 xl:ml-16">
                <h1 className="text-dark-green text-center md:text-left font-titles tracking-[2px] text-4xl font-semibold md:text-4xl md:tracking-[7px] lg:text-5xl lg:tracking-[10px] xl:text-6xl xl:tracking-[18px]">
                    {t("title")}
                </h1>
                <p className="text-justify mt-2 md:text-xs lg:text-base xl:text-xl lg:mt-5">
                    {t("description1")}
                </p>
                <p className="text-justify mt-6 md:text-xs lg:text-base xl:text-xl lg:mt-8 mb-4 xl:mb-8">
                    {t("description2")}
                </p>
                <Link href={l("aboutUsLink")}>
                    <button className="border-2 xl:border-[3px] border-dark-green rounded-2xl px-4 lg:px-6 transform hover:scale-125 transition-transform duration-300">
                        <FaArrowRightLong className="text-xl lg:text-3xl text-dark-green"/>
                    </button>
                </Link>
            </div>

            <div className="rounded-[200px] ml-9 mt-6 md:w-1/2">
                <Image
                    src={ArcosQro}
                    alt="Arcos QRO"
                    priority
                />
            </div>
        </div>
    );
}

export default MexicanCompany;