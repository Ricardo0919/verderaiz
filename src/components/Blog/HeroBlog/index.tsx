"use client";
import React from "react";
import Image from "next/image";
import Cambio from "@/assets/images/blogCambio.png";
import {useTranslations} from "next-intl";

function HeroBlog() {
    const t = useTranslations("heroBlog");
    return (
        <div className="bg-blog-BG pt-[150px] pb-32 flex flex-col items-center">

            <hr className="hidden lg:flex border-t border-[4px] w-[120px] xl:w-[250px] border-white mr-[460px] xl:mr-[700px]" />

            <div className="bg-white text-blog-BG mx-6 rounded-2xl text-center mt-20 md:mx-32 lg:mx-40 lg:mt-24 py-4 md:py-8 px-4 md:px-6 xl:mx-44">
                <p className="font-black font-serif text-xl md:text-3xl md:tracking-[2px] lg:text-4xl lg:tracking-[4px] xl:text-6xl xl:tracking-[6px]">
                    {t("title")}
                </p>
                <Image
                    src={Cambio}
                    alt="Cambio"
                    priority
                    className="pt-2 lg:px-4 xl:px-8"
                />
            </div>
        </div>
    );
}

export default HeroBlog;
