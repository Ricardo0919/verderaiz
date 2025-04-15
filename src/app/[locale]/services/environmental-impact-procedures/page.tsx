import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/EnvironmentalImpactProcedures/Hero";
import Quote from "../../../../components/Services/EnvironmentalImpactProcedures/Quote";
import Question from "../../../../components/Services/EnvironmentalImpactProcedures/Question";
import EnvironmentalImpact from "../../../../components/Services/EnvironmentalImpactProcedures/EnvironmentalImpact";
import PreventiveReport from "@/components/Services/EnvironmentalImpactProcedures/PreventiveReport";
import RiskStudy from "@/components/Services/EnvironmentalImpactProcedures/RiskStudy";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Quote/>
            <Question/>
            <EnvironmentalImpact/>
            <PreventiveReport/>
            <RiskStudy/>
            <Footer/>
        </div>
    );
}