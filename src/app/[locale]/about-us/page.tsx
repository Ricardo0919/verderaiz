import React from "react";
import Hero from "../../../components/AboutUs/HeroAboutUs";
import Navbar from "@/components/Navbar";
import MisionVision from "@/components/AboutUs/MisionVision";
import OurTeam from "@/components/AboutUs/OurTeam";
import Footer from "@/components/Footer";
import AccreditationsSlider from "@/components/AboutUs/AccreditationsSliderAboutUs";
//import { unstable_setRequestLocale } from "next-intl/server";
//import { useTranslations } from "next-intl";

export default function AboutUs() {

    return (
        <div>
            <Navbar/>
            <Hero/>
            <MisionVision/>
            <OurTeam/>
            <AccreditationsSlider/>
            <Footer/>
        </div>
    );
}