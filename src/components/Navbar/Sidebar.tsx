import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Sidebar(){
    const t = useTranslations("navbar");

    return (
        <div className="absolute top-16 right-0 w-[203px] h-auto bg-white rounded-md shadow-lg p-6 z-20">
            <nav className="space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-gray-900 text-lg">
                    {t("home")}
                </Link>
                <hr className="border-gray-200" />
                <Link
                    href={t("aboutUsLink")}
                    className="block text-gray-700 hover:text-gray-900 text-lg"
                >
                    {t("aboutUs")}
                </Link>
                <hr className="border-gray-200" />
            </nav>

        </div>
    );
}

export default Sidebar;
