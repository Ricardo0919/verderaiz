"use client";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { SiGoogledocs } from "react-icons/si";

function LibraryBlogButton() {
    const t = useTranslations("navbar");
    const b = useTranslations("blogStandardsButton");

    return (
        <div className="bg-blog-BG pt-2 md:pt-5 lg:pt-10 pb-10 -mt-1">
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start md:pr-10 lg:justify-between lg:pl-0 lg:pr-24 xl:pl-0 xl:pr-24 gap-4 md:gap-28">

                {/* Normas Editoriales */}
                <a
                    href="/pdf/normas-editoriales.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-10 md:mx-0 lg:ml-0 xl:ml-0"
                >
                    <div className="bg-light-green-blog h-[120px] md:h-[100px] rounded-[20px] md:rounded-l-[0px] hover:bg-dark-green hover:scale-110 transition ease-in-out duration-300">
                        <button className="flex flex-row items-center justify-center gap-1 pt-3 pr-3 md:pr-12 w-full h-full">
                            <div className="w-1/3 justify-center flex">
                                <SiGoogledocs className="text-white text-6xl" />
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-left font-bold text-white text-sm">{b("blogStandardsButtonTitle")}</h3>
                                <hr className="border-white border-[2px] my-2" />
                                <p className="text-justify text-white text-xs leading-tight">
                                    {b("blogStandardsButtonText")}
                                </p>
                            </div>
                        </button>
                    </div>
                </a>

                {/* Biblioteca */}
                <Link href={t("blogLibraryLink")} className="mx-10 md:mx-0 mt-3 md:mt-0 lg:mr-[-24px] xl:mr-[-24px]">
                    <button className="bg-light-green-blog h-24 lg:px-8 md:h-[100px] rounded-[20px] text-lg xl:text-2xl font-zendots font-bold uppercase hover:bg-dark-green hover:scale-110 transition ease-in-out duration-300">
                        {t("blogLibrary")}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LibraryBlogButton;
