import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/SocioculturalSolutions/Hero";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Footer/>
        </div>
    );
}