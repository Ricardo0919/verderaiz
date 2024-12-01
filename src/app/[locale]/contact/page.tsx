import React from "react";
import Hero from "../../../components/AboutUs/HeroAboutUs";
import Navbar from "@/components/Navbar";
//import { unstable_setRequestLocale } from "next-intl/server";
//import { useTranslations } from "next-intl";

export default function Contact() {

    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    );
}