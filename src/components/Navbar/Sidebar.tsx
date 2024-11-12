"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Sidebar(){
    const t = useTranslations("navbar");

    return (
        <div className="absolute top-20 right-0 w-[160px] h-auto bg-white rounded-md shadow-lg p-6 z-20">
            <nav className="space-y-4">
                <Link href="/" className="block text-gray-400 hover:text-gray-700 text-md">
                    {t("home")}
                </Link>
                <hr className="border-gray-200" />

                <Link
                    href={t("aboutUsLink")}
                    className="block text-gray-400 hover:text-gray-700 text-md"
                >
                    {t("aboutUs")}
                </Link>
                <hr className="border-gray-200" />

                <Link
                    href={t("servicesLink")}
                    className="block text-gray-400 hover:text-gray-700 text-md"
                >
                    {t("services")}
                </Link>
                <hr className="border-gray-200" />

                <Link
                    href={t("blogLink")}
                    className="block text-gray-400 hover:text-gray-700 text-md"
                >
                    {t("blog")}
                </Link>
                <hr className="border-gray-200" />

                <Link
                    href={t("contactLink")}
                    className="block text-gray-400 hover:text-gray-700 text-md"
                >
                    {t("contact")}
                </Link>
            </nav>

        </div>
    );
}

export default Sidebar;
