import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../../components/Services/CoursesAndWorkshops/Hero";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";
import Quote from "@/components/Services/CoursesAndWorkshops/Quote";
import EcoConscious from "../../../../components/Services/CoursesAndWorkshops/EcoConscious";
import WorkShops from "@/components/Services/CoursesAndWorkshops/WorkShops";
import Learning from "@/components/Services/CoursesAndWorkshops/Learning";
import StudentsAgents from "@/components/Services/CoursesAndWorkshops/StudentsAgents";

export default function Services() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <div className="bg-light-beige">
                <Quote/>
                <EcoConscious/>
                <StudentsAgents/>
            </div>
            <WorkShops/>
            <Learning/>
            <Footer/>
        </div>
    );
}