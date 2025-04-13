"use client";
import Link from "next/link";
import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import SuperiorLibraryBlog from "@/assets/images/BlogLibrary/ReturnBlogButton/SuperiorLibraryBlog.png";

function LibraryBlogButton() {
    const t = useTranslations("navbar");

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative">
            <Image
                src={SuperiorLibraryBlog}
                alt="SuperiorBlog"
                className="absolute top-0 right-0"
            />

            <div className="py-10 z-10">
                <div className="flex flex-col items-center justify-center md:items-start md:pl-14 lg:pl-8 xl:pl-10">
                    <Link href={t("blogLink")}>
                        <button
                            className="bg-light-green-blog px-8 pt-5 pb-4 rounded-[20px] text-lg font-zendots font-bold uppercase hover:bg-dark-green hover:scale-110 transition ease-in-out duration-300">
                            {t("returnBlog")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LibraryBlogButton;
