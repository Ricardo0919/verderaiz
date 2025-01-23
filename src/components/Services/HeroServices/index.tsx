"use client";
import React from "react";
import PlantBG from "@/assets/images/PlantBG.png";
import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link";

function HeroServices() {
    const t = useTranslations("heroServices");
    const l = useTranslations("navbar");

    return (
        <div className="text-center py-28 md:py-20 lg:py-20 bg-services-BG px-6">
            {/* Contenido principal */}
            <div className="border-[4px] border-white rounded-2xl flex flex-col items-center justify-center md:flex-row md:pt-28 lg:pt-40">
                <div className="mt-32 mb-6 md:order-2 md:w-1/2 md:mt-0 xl:w-1/3">
                    <h1 className="font-cambay font-black text-4xl tracking-[3px] md:text-4xl lg:text-5xl xl:text-6xl">
                        {t("title")}
                    </h1>
                    <p className="text-left my-4 md:my-4 lg:my-6 xl:my-8 mx-8 md:text-lg lg:text-xl xl:text-3xl">
                        {t("description")}
                    </p>
                    <Link href={l("contactLink")}>
                        <button className="font-zendots border-2 border-white px-6 py-2 text-[10px] md:text-sm lg:text-base xl:text-xl rounded-[30px] transform hover:scale-125 transition-transform duration-300">
                            {t("button")}
                        </button>
                    </Link>
                </div>

                <div className="mx-4 mb-6 md:order-1 md:w-1/2">
                    <Image
                        src={PlantBG}
                        alt="Plant with gears"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroServices;
