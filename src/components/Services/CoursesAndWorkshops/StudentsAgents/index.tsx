"use client";
import React from "react";
import StudentsAgentsContent from "@/components/Services/CoursesAndWorkshops/StudentsAgents/Content";
import Image from "next/image";
import StudentsBG from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/StudentsBG.png";
import StudentsBG2 from "@/assets/images/Services/CoursesAndWorkshops/StudentsAgents/StudentsBG2.png";

function StudentsAgents() {
    return (
        <div className="py-10 px-4 md:py-16 md:px-8 lg:px-16 lg:py-20 xl:px-24 xl:py-24">
            <Image
                src={StudentsBG}
                alt="StudentsBG"
                className="absolute w-1/2 md:w-1/4 left-0 -mt-32 md:-mt-72 lg:-mt-[400px] xl:-mt-[550px]"
            />
            <Image
                src={StudentsBG2}
                alt="StudentsBG2"
                className="absolute w-1/2 md:w-1/4 right-0 mt-[2000px] md:mt-[2200px] lg:mt-[1500px] xl:mt-[1400px]"
            />
            <div className="flex items-center border-[3px] border-[#263c2c] p-6 lg:p-8 xl:p-12 rounded-[48px] justify-center">
                <div className="-mt-10 md:-mt-16 lg:-mt-20 xl:-mt-28">
                    <StudentsAgentsContent/>
                </div>
            </div>
        </div>
    );
}

export default StudentsAgents;