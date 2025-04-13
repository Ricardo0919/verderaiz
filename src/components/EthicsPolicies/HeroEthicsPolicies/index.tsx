"use client";
import React from "react";
import Image from "next/image";
import HeroEthicsPoliciesIMG from "@/assets/images/EthicsPolicies/Hero/HeroEthicsPolicies.png";
import {useTranslations} from "next-intl";

function HeroEthicsPolicies() {
    const t = useTranslations("heroEthicPolicies");
    return (
        <div className="bg-light-beige pt-72 pb-10 md:pt-60 xl:pt-72">
            <h1 className="text-blog-BG text-center text-3xl font-cambay font-black tracking-[1px] lg:text-4xl xl:text-6xl xl:tracking-[18px] xl:pl-52 md:tracking-[7px] lg:tracking-[10px]">
                {t("title")}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 md:px-12 md:mt-10 lg:-mt-7 lg:px-16 xl:px-0 xl:-mt-10">

                <div className="md:w-1/2 lg:w-1/2 xl:w-1/3">
                    <Image src={HeroEthicsPoliciesIMG} alt="Hero IMG" className="px-10 mt-10 md:px-0 md:mt-0"/>
                </div>

                <div className="md:w-1/2 lg:w-1/3">
                    <p className="font-montserrat text-dark-green text-justify mt-10 px-10 text-lg md:px-0 md:mt-0 md:text-right lg:text-lg xl:text-2xl">
                        {t("description")}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default HeroEthicsPolicies;
