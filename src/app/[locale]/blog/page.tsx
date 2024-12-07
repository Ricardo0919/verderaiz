import React from "react";
import Hero from "../../../components/Blog/HeroBlog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogsIcons from "@/components/Blog/BlogsIcons";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Blog() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <BlogsIcons/>
            <Footer/>
        </div>
    );
}