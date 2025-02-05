"use client";
import React from "react";
import Image from "next/image";
import Cambio from "@/assets/images/blogCambio.png";
import {useTranslations} from "next-intl";
import blogBG1 from "@/assets/images/blogBG1.png";

function HeroBlog() {
    const t = useTranslations("heroBlog");
    return (
        <div className="bg-blog-BG flex flex-col items-center justify-center relative">
            <Image
                src={blogBG1}
                alt="blogBG1"
                className="absolute hidden md:flex left-0 bottom-0 lg:-bottom-80 xl:-bottom-[450px] md:w-1/3 lg:w-1/3"
            />

            <div className="pt-[150px] pb-10 flex flex-col items-center justify-center z-10">

                <div
                    className="bg-white text-blog-BG mx-8 rounded-[40px] text-center mt-20 md:mx-32 lg:mx-40 lg:mt-24 py-4 md:py-8 px-4 md:px-6 xl:mx-44 flex flex-col items-center justify-center">
                    <p className="font-black font-serif text-xl md:text-3xl md:tracking-[2px] lg:text-4xl lg:tracking-[4px] xl:text-6xl xl:tracking-[6px]">
                        {t("title")}
                    </p>
                    <Image
                        src={Cambio}
                        alt="Cambio"
                        priority
                        className="pt-2 px-4 md:px-10 lg:px-8 xl:px-8"
                    />
                </div>
            </div>
        </div>

    );
}

export default HeroBlog;
