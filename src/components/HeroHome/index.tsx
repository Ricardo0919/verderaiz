"use client"
import React from 'react';
import { useTranslations } from "next-intl";
import Image from "next/image";
import background from "@/assets/images/heroHomeBG.png";

function HeroHome() {
    const t = useTranslations("heroHome");

    return (
        <div className="relative w-full h-screen text-center flex items-center justify-center py-20">
            {/* Imagen de fondo */}
            <Image
                src={background}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="-z-10" // Para que la imagen esté detrás del texto
                priority // Para optimización de carga
            />

            {/* Contenido principal */}
            <div className="relative z-10 border border-white pt-28 pb-10 px-10 rounded-2xl mx-16 md:pt-28 md:-mt-28">
                <div className="flex flex-col md:flex-row items-center">
                    <h1 className="text-4xl text-white font-black font-mono mt-6 md:w-1/2 md:order-2 md:text-right md:mt-0">
                        EMPODERANDO UN FUTURO SOSTENIBLE
                    </h1>
                    <div className="text-white md:w-1/2 md:order-1 md:px-8">
                        <p className="text-justify mt-7 text-sm font-light">
                            En Verderaíz te ayudamos a ver desde la raíz los desafíos ambientales de tus proyectos, para que tomes decisiones conscientes, minimices el impacto y gestiones tus recursos de forma sostenible.
                        </p>
                        <p className="mt-2 border border-white rounded-3xl font-bold text-lg px-10">
                            HAZ TUS PROYECTOS CON NOSTROS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;
