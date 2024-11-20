import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroHome";
import SustainableFuture from "@/components/SustainableFutureHome";

export default function Home() {

    return (
        <div className="">
            <Navbar/>
            <Hero/>
            <SustainableFuture/>
        </div>
    );
}