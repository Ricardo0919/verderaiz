import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/SocioculturalSolutions/Hero";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";
import Quote from "@/components/Services/SocioculturalSolutions/Quote";
import NatureSolutions from "@/components/Services/SocioculturalSolutions/NatureSolutions";
import EcosystemStrategies from "@/components/Services/SocioculturalSolutions/EcosystemStrategies";
import EnvironmentalAwareness from "@/components/Services/SocioculturalSolutions/EnvironmentalAwarness";
import EconomicDevelopment from "@/components/Services/SocioculturalSolutions/EconomicDevelopment";
import AwarenessCards from "@/components/Services/SocioculturalSolutions/AwarenessCards";
import SustainablePartnerships from "@/components/Services/SocioculturalSolutions/SustainablePartnerships";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Quote/>
            <NatureSolutions/>
            <EcosystemStrategies/>
            <EnvironmentalAwareness/>
            <AwarenessCards/>
            <EconomicDevelopment/>
            <SustainablePartnerships/>
            <Footer/>
        </div>
    );
}