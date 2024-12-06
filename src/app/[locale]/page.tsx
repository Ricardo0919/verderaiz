import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../components/Home/HeroHome";
import SustainableFuture from "../../components/Home/SustainableFutureHome";
import AboutUs from "../../components/Home/AboutUsHome";
import MexicanCompanyHome from "@/components/Home/MexicanCompanyHome";
import ServicesHome from "../../components/Home/ServicesSliderHome";
import FindOut from "@/components/Home/FindOutHome";
import Footer from "@/components/Footer";

export default function Home() {

    return (
        <div className="">
            <Navbar/>
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