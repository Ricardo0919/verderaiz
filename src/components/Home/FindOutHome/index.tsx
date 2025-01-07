"use client"
import React from 'react';
import Image from "next/image";
import {FaArrowRightLong} from "react-icons/fa6";
import Ecoladrillos from "@/assets/images/Ecoladrillos.png";
import Composta from "@/assets/images/Composta.png";
import {useTranslations} from "next-intl";
import Link from "next/link";


function FindOut() {
    const t = useTranslations("findOutHome");
    const l = useTranslations("navbar");

    return (
        <div className="flex flex-col justify-center items-center px-10 text-black pb-10 lg:flex-row lg:px-16 lg:gap-20 bg-light-beige">
            <div className="lg:w-1/3">
                <h1 className="tracking-[5px] font-titles font-black text-4xl lg:text-5xl xl:text-6xl">
                    {t("title")}
                </h1>
                <p className="text-sm py-4 font-serif lg:text-base xl:text-xl">
                    {t.rich("description",{
                        code:(chunks) => (
                            <code className="font-black font-serif">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
                <Link href={l("blogLink")}>
                    <button
                        className="border-2 xl:border-[3px] border-dark-green rounded-2xl px-4 lg:px-6 transform hover:scale-125 transition-transform duration-300">
                        <FaArrowRightLong className="text-xl lg:text-3xl text-dark-green"/>
                    </button>
                </Link>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:gap-10 lg:w-1/2">
                {/*Block1*/}
                <div className="md:w-1/2">
                    <div className="relative">
                        <Image
                            src={Composta}
                            alt="Compost"
                            className="block mx-auto"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white px-6 font-black text-xl text-center mx-10 xl:text-3xl">
                                {t("titleSquare1")}
                            </p>
                        </div>
                        <Link href={l("blogLink")} className="absolute inset-0 flex flex-col items-center justify-end mb-10 lg:mb-6 xl:mb-8">
                            <button className="text-white border-2 border-white py-2 px-4 xl:px-6 rounded-[30px] text-xs xl:text-lg transform hover:scale-125 transition-transform duration-300">
                                {t("viewMore")}
                            </button>
                        </Link>
                    </div>
                    <p className="text-center mt-1 text-xs mx-6 xl:text-lg">
                        {t("descriptionSquare1")}
                    </p>
                </div>

                {/*Block2*/}
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <div className="relative">
                        <Image
                            src={Ecoladrillos}
                            alt="Ecoladrillos"
                            className="block mx-auto lg:w-40 xl:w-56"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-white px-6 font-black text-xl text-center xl:text-2xl">
                                {t("titleSquare2")}
                            </p>
                        </div>
                        <Link href={l("blogLink")} className="absolute inset-0 flex flex-col items-center justify-end mb-12 lg:mb-6 xl:mb-8">
                            <button className="text-white border-2 border-white py-2 px-4 lg:px-2 lg:py-1 xl:px-3 xl:py-2 rounded-[30px] text-xs lg:text-[10px] xl:text-[20px] transform hover:scale-125 transition-transform duration-300">
                                {t("viewMore")}
                            </button>
                        </Link>
                    </div>
                    <p className="text-center mt-1 text-xs mx-6 xl:text-lg">
                        {t("descriptionSquare2")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FindOut;