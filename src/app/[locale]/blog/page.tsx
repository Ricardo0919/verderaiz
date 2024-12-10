import React from "react";
import Hero from "../../../components/Blog/HeroBlog";
import MainBlog from "../../../components/Blog/MainBlog";
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
            <MainBlog/>
            <BlogsIcons/>
            <Footer/>
        </div>
    );
}