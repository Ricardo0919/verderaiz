"use client";
import React from "react";
import Image from "next/image";
import Fernanda from "@/assets/images/Fernanda.png";
import Alison from "@/assets/images/Alison.png";
import Gustavo from "@/assets/images/Gustavo.png";
import {useTranslations} from "next-intl";
import aboutusBG1 from "@/assets/images/aboutusBG1.png";
import aboutusBG2 from "@/assets/images/aboutusBG2.png";

function OurTeam() {
    const t = useTranslations("ourTeamAboutUs");
    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative">
            <Image
                src={aboutusBG1}
                alt="aboutusBG1"
                className="absolute w-2/3 md:w-1/3 lg:w-1/4 lg:-top-20 xl:w-1/5"
            />
            <Image
                src={aboutusBG2}
                alt="aboutusBG2"
                className="hidden lg:flex absolute right-0 w-1/5 bottom-0 xl:w-1/6"
            />

            <div className="z-10">
                <div className="text-black pb-10 md:pt-20 lg:pb-20">
                    <h1 className="text-4xl tracking-[4px] font-[1000] font-cambay text-center mb-8 md:text-4xl md:tracking-[7px] lg:text-4xl lg:tracking-[10px] xl:text-5xl xl:tracking-[13px] xl:mb-16">
                        {t("title")}
                    </h1>

                    <div
                        className="mx-10 md:mx-28 justify-center items-center flex flex-col lg:mx-40 lg:mt-10 xl:mx-64">
                        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-20 xl:gap-40">
                            <div className="flex flex-row items-center justify-center gap-3">
                                {/*Image*/}
                                <div className="w-1/2">
                                    <Image
                                        src={Fernanda}
                                        alt={t("name1")}
                                    />
                                </div>

                                {/*Information*/}
                                <div className="w-1/2">
                                    <p className="tracking-[2px] font-semibold text-xs lg:text-sm xl:text-lg">
                                        {t("name1")}
                                    </p>
                                    <p className="font-montserrat text-[10px] lg:text-xs xl:text-sm">
                                        {t("description1")}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-3 mt-6 md:mt-0">
                                {/*Image*/}
                                <div className="w-1/2 order-2 md:order-1">
                                    <Image
                                        src={Alison}
                                        alt={t("name2")}
                                    />
                                </div>

                                {/*Information*/}
                                <div className="w-1/2 order-1 md:order-2">
                                    <p className="tracking-[2px] font-semibold text-xs lg:text-sm xl:text-lg">
                                        {t("name2")}
                                    </p>
                                    <p className="font-montserrat text-[10px] lg:text-xs xl:text-sm">
                                        {t("description2")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-row items-center justify-center gap-3 xl:gap-0 mt-6 md:w-1/2 md:mt-8 lg:mt-14">
                            {/*Image*/}
                            <div className="w-1/2">
                                <Image
                                    src={Gustavo}
                                    alt={t("name3")}
                                />
                            </div>

                            {/*Information*/}
                            <div className="w-1/2">
                                <p className="tracking-[2px] font-semibold text-xs lg:text-sm xl:text-lg">
                                    {t("name3")}
                                </p>
                                <p className="font-montserrat text-[10px] lg:text-xs xl:text-sm">
                                    {t("description3")}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default OurTeam;
