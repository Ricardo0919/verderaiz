"use client";
import React from "react";
import StudentsAgentsContent from "@/components/Services/CoursesAndWorkshops/StudentsAgents/Content";

function StudentsAgents() {
    return (
        <div className="bg-light-beige py-10 px-4 md:py-16 md:px-8 lg:px-16 lg:py-20 xl:px-24 xl:py-24">
            <div className="z-10">
                <div className="flex items-center border-[3px] border-[#263c2c] p-6 lg:p-8 xl:p-12 rounded-[48px] justify-center">
                    <StudentsAgentsContent/>
                </div>
            </div>

        </div>
    );
}

export default StudentsAgents;