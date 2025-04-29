import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/EnvironmentalSolutions/Hero";
import Quote from "../../../../components/Services/EnvironmentalSolutions/Quote";
import BiodiversityInventory from "../../../../components/Services/EnvironmentalSolutions/BiodiversityInventory";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";
import EcoConnectivity from "@/components/Services/EnvironmentalSolutions/EcoConnectivity";
import LandscapeDesign from "@/components/Services/EnvironmentalSolutions/LandscapeDesign";
import SoilManagement from "@/components/Services/EnvironmentalSolutions/SoilManagement";
import Finance from "@/components/Services/EnvironmentalSolutions/Finance";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <Quote/>
            <BiodiversityInventory/>
            <div className="bg-light-beige">
                <EcoConnectivity/>
                <SoilManagement/>
                <LandscapeDesign/>
            </div>
            <Finance/>
            <Footer/>
        </div>
    );
}