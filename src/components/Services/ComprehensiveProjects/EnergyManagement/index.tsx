"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Rayo from "@/assets/images/Services/ComprehensiveProjects/Information/Rayo.png";
import Content from "./Content"

function EnergyManagement() {
    const t = useTranslations("comprehensiveProjectsEnergyManagement");

    return (
        <div className="bg-light-beige pt-16 md:pt-24 lg:pt-32">
            {/*Titulo*/}
            <div className="bg-verderaiz-green flex items-center justify-between rounded-r-[100px] py-3 pr-6 pl-6 md:pl-12 md:pr-10 md:py-6 mr-3 md:mr-5 lg:py-8 relative">
                {/* Texto centrado vertical y horizontal */}
                <div className="text-white text-center flex-1">
                    <p className="font-cambay text-[14px] font-bold uppercase md:text-3xl tracking-[3px] md:tracking-[5px] lg:tracking-[10px] lg:text-4xl">
                        {t("title1")}
                    </p>
                    <p className="font-cambay text-[12px] font-semibold uppercase tracking-widest md:text-2xl pt-2 lg:text-3xl lg:pt-4">
                        {t("title2")}
                    </p>
                </div>

                {/* Imagen alineada completamente a la derecha */}
                <div className="ml-4">
                    <Image
                        src={Rayo}
                        alt="Gota de agua"
                        priority
                        className="w-10 md:w-24"
                    />
                </div>
            </div>

            {/*Contenido*/}
            <Content/>

        </div>
    );
}

export default EnergyManagement;
