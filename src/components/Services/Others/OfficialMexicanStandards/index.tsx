"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { SiGoogledocs } from "react-icons/si";

function OfficialMexicanStandards() {
    const t = useTranslations("othersOfficialMexicanStandards");
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const items = [
        {
            title: t("standard1"),
            subtitle: t("subtitle1"),
            content: t("description1"),
            pdf: "/standards/NOM-001-SESH-2014.pdf",
        },
        {
            title: t("standard2"),
            subtitle: t("subtitle2"),
            content: t("description2"),
            pdf: "/standards/NOM-003-SEGOB-2002-SENALIZACION.pdf",
        },
        {
            title: t("standard3"),
            subtitle: t("subtitle3"),
            content: t("description3"),
            pdf: "/standards/NOM-004-SEDG-2004.pdf",
        },
        {
            title: t("standard4"),
            subtitle: t("subtitle4"),
            content: t("description4"),
            pdf: "/standards/NOM-005-SESH-2010.pdf",
        },
        {
            title: t("standard5"),
            subtitle: t("subtitle5"),
            content: t("description5"),
            pdf: "/standards/NOM-007-SESH-2010.pdf",
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? 0 : index);
    };

    return (
        <div className="bg-light-beige md:px-20 px-8 pb-10 rounded-[25px]">
            <div className="bg-official-mexican-standards text-center text-black rounded-[20px] py-6">
                <h2 className="text-base md:text-xl lg:text-2xl font-bold tracking-[4px] lg:tracking-[6px] uppercase">
                    {t("title1")}
                </h2>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold tracking-[4px] lg:tracking-[6px] uppercase">
                    {t("title2")}
                </h3>
            </div>

            <div className="bg-official-mexican-standards mt-[-10px] pt-2 pb-6 px-4 rounded-b-[20px]">
                {items.map((item, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => handleToggle(index)}
                            className={`w-full text-center px-6 py-2 md:py-3 font-black text-sm md:text-lg rounded-full transition duration-300 hover:bg-white ${
                                activeIndex === index
                                    ? "bg-white text-black"
                                    : "bg-official-mexican-standards text-black hover:bg-opacity-90"
                            }`}
                        >
                            {item.title}
                        </button>

                        {activeIndex === index && (
                            <div className="bg-white text-black mt-2 px-6 py-6 rounded-[20px] shadow-sm">
                                <h3 className="text-xs md:text-sm lg:text-base font-bold uppercase mb-2 lg:pr-[200px] xl:text-xl xl:pr-[400px]">
                                    {item.subtitle}
                                </h3>
                                <p className="text-sm whitespace-pre-wrap leading-relaxed text-justify lg:px-10 xl:pt-4 xl:text-xl xl:px-20">
                                    {item.content}
                                </p>

                                <div className="mt-6 lg:pl-4">
                                    <a
                                        href={item.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-20 rounded-[20px] transition ease-in-out duration-300"
                                    >
                                        <div className="flex flex-row items-center justify-start gap-1 pt-3 pr-3 w-full h-full px-4 py-4">
                                            <div>
                                                <SiGoogledocs className="text-dark-green text-4xl md:text-5xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-left font-bold text-dark-green text-sm md:text-base">
                                                    {item.title}
                                                </h3>
                                                <hr className="border-dark-green border-[2px] my-1" />
                                                <p className="text-left text-dark-green text-xs leading-tight">
                                                    {t("downloadButton")}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficialMexicanStandards;
