import React from "react";
import Hero from "../../../components/Blog/HeroBlog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogsIcons from "@/components/Blog/BlogsIcons";
//import { unstable_setRequestLocale } from "next-intl/server";
//import { useTranslations } from "next-intl";

export default function Blog() {

    return (
        <div>
            <Navbar/>
            <Hero/>
            <BlogsIcons/>
            <Footer/>
        </div>
    );
}