import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../components/EthicsPolicies/HeroEthicsPolicies";
import EthicPolicies from "../../../components/EthicsPolicies/EthicPolicies";
import QuoteEthicsPolicies from "@/components/EthicsPolicies/QuoteEthicPolicies";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function AboutUs() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <EthicPolicies/>
            <QuoteEthicsPolicies/>
            <Footer/>
        </div>
    );
}