"use client";
import React from "react";
import Image from "next/image";
import Sostenible from "@/assets/images/Sostenible.png";
import { useTranslations } from "next-intl";
import homeBG1 from "@/assets/images/homeBG1.png";

function SustainableFutureHome() {
    const t = useTranslations("sustainableFutureHome");
    return (
        <div className="bg-light-beige flex flex-col items-center justify-center relative">
            <Image
                src={homeBG1}
                alt="homeBG1"
            />

            <div className="absolute">
                <div className="flex flex-col items-center justify-center py-10 lg:py-20">
                    <div className="w-fit">
                        <h1 className="text-dark-green text-xl tracking-[0px] font-black text-center mb-3 md:text-5xl md:tracking-[3px] font-cambay lg:tracking-[6px] lg:text-5xl xl:tracking-[7px] xl:text-7xl">
                            {t("title")}
                        </h1>
                        <Image
                            src={Sostenible}
                            alt="Sostenible"
                            className="px-8 md:px-12 lg:px-28 xl:px-0 xl:w-[1100px]"
                        />
                    </div>

                    {/*
            <div className="px-8 mt-10 md:px-44 lg:w-1/3 lg:px-0 xl:w-1/2">
                <p className="text-black text-center text-sm font-serif md:text-lg xl:text-2xl">
                    {t.rich("description",{
                        code:(chunks) => (
                            <code className="font-black font-serif">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
            </div>
            */}

                </div>
            </div>
        </div>
    );
}

export default SustainableFutureHome;
