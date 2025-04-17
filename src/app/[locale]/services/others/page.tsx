import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/Others/Hero";
import Quote from "../../../../components/Services/Others/Quote";
import InspectionUnit from "../../../../components/Services/Others/InspectionUnit";
import ServiceDescription from "../../../../components/Services/Others/ServiceDescription";
import OfficialMexicanStandards from "../../../../components/Services/Others/OfficialMexicanStandards";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Quote/>
            <InspectionUnit/>
            <ServiceDescription/>
            <OfficialMexicanStandards/>
            <Footer/>
        </div>
    );
}