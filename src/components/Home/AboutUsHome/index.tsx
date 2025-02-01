"use client"
import React from 'react';
import AboutUsHome from "@/assets/images/AboutUsHome.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import homeBG2 from "@/assets/images/homeBG2.png";


function AboutUs() {
    const t = useTranslations("aboutUsHome");

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative pt-10 md:pb-32 lg:pb-40 xl:pb-60">
            <Image
                src={homeBG2}
                alt="homeBG2"
                className="absolute md:w-1/2"
            />

            <div className="z-10">
                <div className="flex flex-col justify-center items-center md:flex-row pb-12 xl:pb-20">
                    <div className="text-black mx-9 font-serif md:w-1/2 md:order-2 xl:mr-16">
                        <h1 className="text-dark-green text-center md:text-left font-cambay tracking-[2px] text-4xl font-[1000] md:text-4xl md:tracking-[7px] lg:text-5xl lg:tracking-[10px] xl:text-6xl xl:tracking-[18px]">
                            {t("title")}
                        </h1>
                        <p className="font-montserrat text-justify mt-2 md:text-xs lg:text-base xl:text-xl">
                            {t("description1")}
                        </p>
                        <p className="font-montserrat text-justify mt-6 md:text-xs lg:text-base xl:text-xl">
                            {t.rich("description2", {
                                code: (chunks) => (
                                    <code className="font-black font-montserrat">
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
            </div>
        </div>

    );
}

export default AboutUs;