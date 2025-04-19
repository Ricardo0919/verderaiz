"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Agua from "@/assets/images/Services/ComprehensiveProjects/Information/Agua.png";
import Rayo from "@/assets/images/Services/ComprehensiveProjects/Information/Rayo.png";
import Bote from "@/assets/images/Services/ComprehensiveProjects/Information/Bote.png";
import Plantas_Dinero from "@/assets/images/Services/ComprehensiveProjects/Information/Plantas_Dinero.png";
import Image from "next/image";

function Information() {
    const t = useTranslations("comprehensiveProjectsInformation");

    return (
        <div className="bg-light-beige flex flex-col gap-y-3 pb-6">
            {/*Bloque 1*/}
            <div className="bg-official-mexican-standards mx-10 py-10 mb-5 flex flex-col md:flex-row justify-between items-center md:py-8 md:gap-12 md:px-8 xl:mx-20 xl:gap-24 xl:px-20">
                <div className="font-cambay text-center text-white uppercase font-semibold bg-dark-green mx-5 rounded-[60px] px-8 py-2 md:px-0 md:w-1/3 md:text-2xl md:py-4 md:mx-0 md:rounded-[100px] xl:text-4xl xl:px-4">
                    {t("title1")}
                </div>

                <div className="px-9 md:w-2/3 md:px-0">
                    <p className="font-montserrat text-black text-center pt-8 md:pt-0 text-sm md:text-lg lg:text-xl xl:text-2xl">
                        {t.rich("description1", {
                            code: (chunks) => (
                                <code className="font-bold">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </p>

                    <div className="flex flex-row gap-4 pt-6 md:gap-20 lg:gap-28 xl:gap-40">
                        <div className="bg-verderaiz-green rounded-[40px] p-3 w-1/3 lg:p-5 lg:rounded-[100px]">
                            <Image
                                src={Agua}
                                alt="Gota de agua"
                                priority
                            />
                        </div>
                        <div className="bg-verderaiz-green rounded-[40px] p-3 w-1/3 lg:p-5 lg:rounded-[100px]">
                            <Image
                                src={Rayo}
                                alt="Energia"
                                priority
                            />
                        </div>
                        <div className="bg-verderaiz-green rounded-[40px] p-3 w-1/3 lg:p-5 lg:rounded-[100px]">
                            <Image
                                src={Bote}
                                alt="Bote de reciclaje"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*Bloque 2*/}
            <div className="bg-official-mexican-standards mx-10 py-10 mb-5 flex flex-col md:flex-row justify-between items-center md:mx-10 md:py-8 md:gap-8 md:px-4 lg:px-10 xl:mx-20 xl:gap-24 xl:px-20">
                <div className="px-9 md:w-2/3 md:px-0">
                    <p className="font-montserrat text-black text-center md:text-right md:pt-0 text-sm md:text-lg lg:text-xl xl:text-2xl">
                        {t.rich("description2", {
                            code: (chunks) => (
                                <code className="font-bold">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </p>
                </div>
                <div className="font-cambay text-center text-white mt-8 uppercase font-semibold bg-dark-green mx-10 rounded-[60px] px-8 py-2 md:px-0 md:w-1/3 md:text-2xl md:py-6 md:mx-0 md:rounded-[100px] xl:text-4xl xl:px-4">
                    {t("title2")}
                </div>
            </div>

            {/*Bloque 3*/}
            <div className="bg-official-mexican-standards mx-10 py-10 mb-5 flex flex-col md:flex-row justify-between items-center md:mx-10 md:py-8 md:gap-8 md:px-4 lg:px-10 xl:mx-20 xl:gap-24 xl:px-20">
                <div className="md:w-1/3 mx-10 md:mx-0">
                    <div className="font-cambay text-center text-white uppercase font-semibold bg-dark-green rounded-[60px] px-8 py-2 md:px-0 md:text-[20px] md:py-6 md:rounded-[100px] lg:text-2xl xl:text-4xl xl:px-4">
                        {t("title3")}
                    </div>
                    <div className="mt-8">
                        <Image
                            src={Plantas_Dinero}
                            alt="Plantas con dinero"
                            priority
                        />
                    </div>
                </div>
                <div className="px-9 md:w-2/3 md:px-0 pt-8">
                    <p className="font-montserrat text-black text-center md:text-left md:pt-0 text-sm md:text-lg lg:text-xl xl:text-2xl">
                        {t.rich("description3", {
                            code: (chunks) => (
                                <code className="font-bold">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </p>
                    <p className="font-montserrat text-blog-BG text-center pt-4 italic md:text-left lg:text-lg xl:text-xl">
                        {t("note")}
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Information;
