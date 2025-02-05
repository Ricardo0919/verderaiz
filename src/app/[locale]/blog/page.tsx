import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../../../components/Blog/HeroBlog";
import MainBlog from "@/components/Blog/MainBlog";
import RecentBlogs from "@/components/Blog/RecentBlogs";
import LibraryBlogButton from "@/components/Blog/LibraryBlogButton";
import AdsBlog from "@/components/Blog/AdsBlog";
import Footer from "@/components/Footer";
import ButtonLanguage from "@/components/ButtonLanguage";

export default function Blog() {

    return (
        <div>
            <Navbar/>
            <ButtonLanguage/>
            <Hero/>
            <div className="bg-blog-BG">
                <MainBlog/>
            </div>
            <RecentBlogs/>
            <LibraryBlogButton/>
            <AdsBlog/>
            <Footer/>
        </div>
    );
}