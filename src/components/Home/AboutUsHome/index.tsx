"use client"
import React from 'react';
import AboutUsHome from "@/assets/images/AboutUsHome.png";
import Image from "next/image";
import { useTranslations } from "next-intl";


function AboutUs() {
    const t = useTranslations("aboutUsHome");

    return (
        <div className="flex flex-col justify-center items-center md:flex-row mb-12 xl:mb-20">
            <div className="text-black mx-9 font-serif md:w-1/2 md:order-2 xl:mr-16">
                <h1 className="text-center text-3xl font-bold md:text4xl md:tracking-[7px] lg:text-5xl lg:tracking-[10px] xl:text-6xl xl:tracking-[18px]">
                    {t("title")}
                </h1>
                <p className="text-justify mt-2 md:text-xs lg:text-base xl:text-xl">
                    {t("description1")}
                </p>
                <p className="text-justify mt-6 md:text-xs lg:text-base xl:text-xl">
                    {t.rich("description2",{
                        code:(chunks) => (
                            <code className="font-black font-serif">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
            </div>

            <div className="rounded-[200px] mr-9 mt-6 md:w-1/2 md:order-1">
                <Image
                    src={AboutUsHome}
                    alt="About Us"
                />
            </div>
        </div>
    );
}

export default AboutUs;