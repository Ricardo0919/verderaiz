import React from "react";
import Hero from "@/components/HeroAboutUs";
import Navbar from "@/components/Navbar";
//import { unstable_setRequestLocale } from "next-intl/server";
//import { useTranslations } from "next-intl";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    );
}