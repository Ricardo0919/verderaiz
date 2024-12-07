import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../components/Home/HeroHome";
import SustainableFuture from "../../components/Home/SustainableFutureHome";
import AboutUs from "../../components/Home/AboutUsHome";
import MexicanCompanyHome from "@/components/Home/MexicanCompanyHome";
import ServicesHome from "../../components/Home/ServicesSliderHome";
import FindOut from "@/components/Home/FindOutHome";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Home() {

    return (
        <div className="">
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <SustainableFuture/>
            <AboutUs/>
            <MexicanCompanyHome/>
            <ServicesHome/>
            <FindOut/>
            <Footer/>
        </div>
    );
}