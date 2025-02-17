import React from "react";
import ButtonLanguage from "@/components/ButtonLanguage";
import ReturnBlogButton from "@/components/BlogLibrary/ReturnBlogButton";
import BlogLibrary from "../../../components/BlogLibrary/Library";
//import AdsBlogLibrary from "@/components/BlogLibrary/AdsBlogLibrary";
import Footer from "@/components/Footer";

export default function Home() {

    return (
        <div className="">
            <ButtonLanguage/>
            <ReturnBlogButton/>
            <div className="bg-light-beige">
                <BlogLibrary/>
                {/*<AdsBlogLibrary/>*/}
            </div>
            <Footer/>
        </div>
    );
}