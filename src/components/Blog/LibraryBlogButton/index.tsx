"use client";
import Link from "next/link";
import React from "react";
import {useTranslations} from "next-intl";

function LibraryBlogButton() {
    const t = useTranslations("navbar");

    return (
        <div className="bg-blog-BG pt-2 md:pt-5 lg:pt-10 pb-10 -mt-1">
            <div className="flex flex-col items-center justify-center md:items-end md:pr-24 lg:pr-12 xl:pr-36">
                <Link  href={t("blogLibraryLink")} className="mx-10 md:mx-0">
                    <button className="bg-light-green-blog px-8 pt-5 pb-4 rounded-[20px] text-lg font-zendots font-bold uppercase hover:bg-dark-green hover:scale-110 transition ease-in-out duration-300">
                        {t("blogLibrary")}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LibraryBlogButton;
