"use client"
import React from 'react';
import { useTranslations } from "next-intl";


function HeroAboutUs() {
    const t = useTranslations("heroAboutUs");

    return (
        <div className="text-black text-center text-4xl py-20 mt-96">
            {t("title")}
        </div>
    );
}

export default HeroAboutUs;