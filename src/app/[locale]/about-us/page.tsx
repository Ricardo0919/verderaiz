import React from "react";
import Hero from "../../../components/AboutUs/HeroAboutUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
//import { unstable_setRequestLocale } from "next-intl/server";
//import { useTranslations } from "next-intl";

export default function AboutUs() {

    return (
        <div>
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    );
}