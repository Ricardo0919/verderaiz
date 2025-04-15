import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/HeroServices";
import EnvironmentalImpact from "../../../../components/Services/EnvironmentalImpactProcedures/EnvironmentalImpact";
import PreventiveReport from "../../../../components/Services/EnvironmentalImpactProcedures/PreventiveReport";
import RiskStudy from "../../../../components/Services/EnvironmentalImpactProcedures/RiskStudy";
import Training from "@/components/Services/Training";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <EnvironmentalImpact/>
            <PreventiveReport/>
            <RiskStudy/>
            <Training/>
            <Footer/>
        </div>
    );
}