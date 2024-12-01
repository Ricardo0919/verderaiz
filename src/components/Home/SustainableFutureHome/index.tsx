"use client";
import React from "react";
import Image from "next/image";
import Sostenible from "@/assets/images/Sostenible.png";
import { useTranslations } from "next-intl";

function SustainableFutureHome() {
    const t = useTranslations("sustainableFutureHome");
    return (
        <div className="flex flex-col items-center justify-center py-10 lg:py-20">
            <div className="w-fit">
                <h1 className="text-black text-2xl font-bold text-center mb-3 md:text-5xl font-serif lg:text-6xl xl:text-7xl">
                    {t("title")}
                </h1>
                <Image
                    src={Sostenible}
                    alt="Sostenible"
                    className="px-8 md:px-12 lg:px-28 xl:px-8"
                />
            </div>
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
        </div>
    );
}

export default SustainableFutureHome;
