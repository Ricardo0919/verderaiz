import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/ComprehensiveProjects/Hero";
import Quote from "../../../../components/Services/ComprehensiveProjects/Quote";
import Information from "@/components/Services/ComprehensiveProjects/Information";
import WaterManagement from "@/components/Services/ComprehensiveProjects/WaterManagement";
import EnergyManagement from "@/components/Services/ComprehensiveProjects/EnergyManagement";
import WasteManagement from "@/components/Services/ComprehensiveProjects/WasteManagement";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Quote/>
            <Information/>
            <WaterManagement/>
            <EnergyManagement/>
            <WasteManagement/>
            <Footer/>
        </div>
    );
}