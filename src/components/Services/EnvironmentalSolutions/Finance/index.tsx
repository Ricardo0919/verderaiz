"use client";
import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import Plantas_Dinero from "@/assets/images/Services/ComprehensiveProjects/Information/Plantas_Dinero.png";

function Finance() {
    const t = useTranslations("environmentalSolutionsFinance");
    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative">
            <div className="bg-official-mexican-standards mx-10 py-10 mb-20 flex flex-col md:flex-row justify-between items-center md:mx-10 md:py-8 md:gap-8 md:px-4 lg:px-10 xl:mx-20 xl:gap-24 xl:px-20">
                <div className="px-9 md:w-2/3 md:px-0">
                    <p className="font-montserrat text-black text-center md:text-right md:pt-0 text-sm md:text-lg lg:text-xl xl:text-2xl">
                        {t.rich("description", {
                            code: (chunks) => (
                                <code className="font-bold">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </p>
                    <p className="font-montserrat text-blog-BG text-center pt-4 italic md:text-right lg:text-lg xl:text-xl pb-10 md:pb-0">
                        {t("note")}
                    </p>
                </div>
                <div className="md:w-1/3 mx-10 md:mx-0">
                    <div
                        className="font-cambay text-center text-white uppercase font-semibold bg-dark-green rounded-[60px] px-8 py-2 md:px-0 md:text-[20px] md:py-6 md:rounded-[100px] lg:text-2xl xl:text-4xl xl:px-4">
                        {t("title")}
                    </div>
                    <div className="mt-8">
                        <Image
                            src={Plantas_Dinero}
                            alt="Plantas con dinero"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Finance;
