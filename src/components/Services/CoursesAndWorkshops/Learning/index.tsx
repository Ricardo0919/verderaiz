"use client";
import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import IMG1 from "@/assets/images/Services/CoursesAndWorkshops/Learning/IMG1.png";
import IMG2 from "@/assets/images/Services/CoursesAndWorkshops/Learning/IMG2.png";
import IMG3 from "@/assets/images/Services/CoursesAndWorkshops/Learning/IMG3.png";
import IMG4 from "@/assets/images/Services/CoursesAndWorkshops/Learning/IMG4.png";

function Learning() {
    const t = useTranslations("coursesAndWorkshopsLearning");

    const items = [
        {
            description: t("desc1"),
            image: IMG1,
        },
        {
            description: t("desc2"),
            image: IMG2,
        },
        {
            description: t("desc3"),
            image: IMG3,
        },
        {
            description: t("desc4"),
            image: IMG4,
        },
    ];

    return (
        <div className="bg-light-beige pb-10 md:px-16 lg:px-24 relative">
            <h2 className="text-center uppercase font-cambay tracking-[0.3em] md:text-2xl lg:text-3xl text-black font-bold">
                {t("title")}
            </h2>
            <div className="bg-[#e6e8e1] flex flex-col items-center justify-center justify-items-[anchor-center] px-2 lg:px-8 py-8 lg:py-12 rounded-3xl lg:rounded-[48px] mx-10 sm:mx-2 xl:mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-black text-center xl:text-justify relative">
                            {index < items.length - 1 && (
                                <div
                                    className="hidden lg:block absolute top-0 bottom-0 left-full w-[1px] bg-[#2c4e31]"
                                ></div>
                            )}
                            <div className="p-4 mb-4">
                                <Image
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                    className="w-8 xl:w-12 h-auto object-contain"
                                />
                            </div>

                            {/* Descripción */}
                            <p className="text-base md:text-lg font-medium font-cambay max-w-xl px-2 xl:px-6">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Learning;