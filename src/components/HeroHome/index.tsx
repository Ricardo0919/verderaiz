"use client"
import React from 'react';
import { useTranslations } from "next-intl";


function HeroHome() {
    const t = useTranslations("HeroHome");

    return (
        <div className="text-black text-center text-4xl py-20">
            {t("title")}
        </div>
    );
}

export default HeroHome;