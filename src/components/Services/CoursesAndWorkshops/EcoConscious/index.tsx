"use client";
import React from "react";
import EcoConsciousContent from "@/components/Services/CoursesAndWorkshops/EcoConscious/Content";

function EcoConscious() {
    return (
        <div className="py-10 px-4 md:py-16 md:px-8 lg:px-16 lg:py-20 xl:px-24 xl:py-24">
            <div className="flex items-center border-[3px] border-[#263c2c] p-6 lg:p-8 xl:p-12 rounded-[48px] justify-center">
                <div className="-mt-10 md:-mt-16 lg:-mt-20 xl:-mt-28">
                    <EcoConsciousContent/>
                </div>
            </div>
        </div>
    );
}

export default EcoConscious;