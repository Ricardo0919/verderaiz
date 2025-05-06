"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Kinder from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/KinderIMG.png";
import Primary from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/PrimaryIMG.png";
import Highschool from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/HighschoolIMG.png";
import University from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/UniversityIMG.png";
import StudentsAgents from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/StudentsAgents.png";

function EcoConsciousContent() {
    const t = useTranslations("coursesAndWorkshopsStudentsAgents");

    const sections = [
        { img: Kinder, translationKey: "sections.list1" as const, altKey: "sections.work.altText" as const },
        { img: Primary, translationKey: "sections.list2" as const, altKey: "sections.admin.altText" as const },
        { img: Highschool, translationKey: "sections.list3" as const, altKey: "sections.employees.altText" as const },
        { img: University, translationKey: "sections.list4" as const, altKey: "sections.providers.altText" as const }
    ];

    return (
        <div className="flex flex-col">
            <div className="z-10">
                <div className="bg-[#e6e8e1] flex flex-col items-center justify-center px-4 lg:px-8 py-8 lg:py-12 rounded-3xl lg:rounded-[48px] mx-2 lg:mx-24 xl:mx-32 mb-12 md:mb-16 xl:mb-24">
                    <h1 className="font-cambay font-semibold tracking-[0.3em] text-center uppercase text-[#2c4e31] mb-8 md:text-2xl lg:text-3xl mx-4 md:mx-8 lg:mx-12 xl:mx-48">
                        {t("title")}
                    </h1>

                    {/* Descripción SIN lista */}
                    <div className="mb-12">
                        <p className="text-justify font-montserrat md:text-lg lg:text-xl xl:text-2xl text-black mb-4">
                            {t("description1")} {/* Solo texto descriptivo */}
                        </p>
                    </div>

                    {/* Fila de imágenes (4 columnas) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {sections.map((section, index) => (
                            <div key={`section-${index}`} className="justify-items-center"> {/* Añadí key aquí */}
                                <div className="relative aspect-[1/1] w-3/5 rounded-lg overflow-hidden">
                                    <Image
                                        src={section.img}
                                        alt={t(section.altKey)}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4 rounded-lg text-center">
                                    <ul className="md:text-lg lg:text-xl">
                                        <li className="text-black font-montserrat font-semibold">
                                            {t(section.translationKey)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-justify md:text-lg lg:text-xl xl:text-2xl font-montserrat text-black">
                        {t("description2")}
                    </p>
                </div>

                <div
                    className="bg-[#536156] text-white text-justify md:text-lg lg:text-xl xl:text-2xl font-montserrat px-4 lg:px-8 py-8 lg:py-12 rounded-3xl lg:rounded-[48px] mx-2 md:mx-8 mb-12 md:mb-16 xl:mb-24">
                    {t.rich("description_banner", {
                        code: (chunks) => (
                            <code className="font-extrabold">
                                {chunks}
                            </code>
                        ),
                    })}
                </div>

                <div
                    className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 my-6 lg:mx-16 mb-12 md:mb-16 xl:mb-24">
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src={StudentsAgents}
                            alt="StudentsAgents"
                            className="w-3/5 lg:w-10/12 xl:w-auto"
                        />
                        <blockquote
                            className="w-3/5 lg:w-10/12 xl:w-auto text-center italic tracking-widest font-bold uppercase text-black whitespace-pre-line">
                            {t.rich("benefits_quote", {
                                code: (chunks) => (
                                    <code
                                        className="text-light-green-blog not-italic tracking-widest font-bold uppercase">
                                        {chunks}
                                    </code>
                                ),
                            })}
                        </blockquote>
                    </div>
                    <div>
                        <h2 className="text-center uppercase font-cambay tracking-[0.3em] md:text-2xl lg:text-3xl text-black font-bold">
                            {t("title_benefits")}
                        </h2>
                        <div
                            className="font-montserrat text-justify font-[200] text-black md:text-lg lg:text-xl xl:text-2xl w-3/5 lg:w-10/12 justify-self-center">
                            {t.rich("benefits", {
                                ul: (chunks) => <ul className="list-disc">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                            })}
                        </div>
                    </div>
                </div>
                <h2 className="text-center uppercase font-cambay tracking-[0.3em] md:text-2xl lg:text-3xl text-black font-bold">
                    {t("title_topics")}
                </h2>
                <div
                    className="bg-[#e6e8e1] flex flex-col items-center justify-center  px-2 lg:px-8 py-8 lg:py-12 rounded-3xl lg:rounded-[48px] mx-2 sm:mx-2 xl:mx-4 mb-2 md:mb-4">
                    <p className="text-center uppercase font-montserrat font-bold text-black text-xs lg:text-base xl:text-lg mb-8">
                        {t("quote_topics")}
                    </p>
                    <div
                        className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-8 relative items-center text-black font-montserrat">
                        {/* Columna izquierda */}
                        <div className="space-y-6 lg:pr-8 justify-items-center lg:justify-items-start md:px-8 lg:px-0">
                            {t.rich("description_topic_list1", {
                                p: (chunks) => <h2 className="font-[800] font-sans text-base md:text-lg uppercase md:tracking-[3px]">{chunks}</h2>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>
                            })}

                            {t.rich("description_topic_list2", {
                                p: (chunks) => <h2 className="font-[800] font-sans text-base md:text-lg uppercase md:tracking-[3px]">{chunks}</h2>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}

                            {t.rich("description_topic_list3", {
                                p: (chunks) => <h2 className="font-[800] font-sans text-base md:text-lg uppercase md:tracking-[3px]">{chunks}</h2>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </div>

                        {/* Columna derecha */}
                        <div className="space-y-6 lg:pl-8 mt-8 lg:mt-0 justify-items-center lg:justify-items-start md:px-8 lg:px-0">
                            {/* Línea divisoria solo en desktop */}
                            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-black"></div>
                            {t.rich("description_topic_list4", {
                                p: (chunks) => <h2 className="font-[800] font-sans text-base md:text-lg uppercase md:tracking-[3px]">{chunks}</h2>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}

                            {t.rich("description_topic_list5", {
                                p: (chunks) => <h2 className="font-[800] font-sans text-base md:text-lg uppercase md:tracking-[3px]">{chunks}</h2>,
                                ul: (chunks) => <ul className="list-disc pl-5">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>,
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EcoConsciousContent;