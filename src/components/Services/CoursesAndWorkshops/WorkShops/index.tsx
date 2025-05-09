"use client";
import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import Workshops from "@/assets/images/Services/CoursesAndWorkshops/Workshops/Workshops.png";

function WorkShops() {
    const t = useTranslations("coursesAndWorkshopsWorkshops");

    return (
        <div className="bg-light-beige pb-10 px-10 md:pb-16 md:px-16 lg:px-24 lg:pb-20 xl:px-36 xl:pb-24 relative">
            <p className="text-black text-center tracking-[6px] md:tracking-[10px] lg:tracking-[14px] xl:tracking-[18px] font-cambay font-bold border-[#263c2c] border-[3px] uppercase lg:border-[4px] rounded-2xl px-4 pt-2 mx-4 md:mx-36 md:py-3 lg:mx-64 lg:py-4 xl:mx-96 xl:py-6 md:text-lg lg:text-2xl xl:text-3xl">
                {t("title")}
            </p>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 my-6 lg:mx-8 mb-12 md:mb-12 xl:mb-16">
                <div className="flex flex-col items-center gap-4 lg:w-1/2">
                    <Image
                        src={Workshops}
                        alt="Workshops"
                        className="xl:w-10/12"
                    />
                    <blockquote
                        className="xl:w-auto italic tracking-widest font-[1000] uppercase text-black whitespace-pre-line">
                        {t("workshops_quote")}
                    </blockquote>
                </div>
                <div className="lg:w-1/2">
                    {/* Línea vertical con altura dinámica */}
                    <div className="hidden lg:block absolute left-1/2 w-[2px] bg-black transform -translate-x-1/2"></div>

                    <div className="bg-[#e6e8e1] flex flex-row rounded-2xl text-sm justify-items-center items-center font-extrabold uppercase mb-4 mx-2 p-4 lg:py-1 text-black relative z-10 md:text-lg lg:text-xl xl:text-2xl">
                        <p className="p-2 my-2 font-[800] tracking-[2px] lg:tracking-[1px] lg:text-base">{t("block_title")}</p>
                        <p className="p-2 my-2 font-[800] tracking-[2px] lg:tracking-[1px] lg:text-base">{t("block_desc")}</p>
                    </div>

                    <p className="items-center font-[800] uppercase text-center md:text-lg lg:text-base lg:tracking-[3px] xl:text-2xl text-black mx-2 mb-6 relative z-10">
                        {t("block_quote")}
                    </p>

                    <div className="text-black font-montserrat text-justify md:text-lg lg:text-xl xl:text-2xl lg:mx-2 px-4">
                        {t("description1")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkShops;