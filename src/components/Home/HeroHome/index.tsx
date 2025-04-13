"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import background2 from "@/assets/images/Home/Hero/HeroHomeBG2.png";
import background3 from "@/assets/images/Home/Hero/HeroHomeBG3.png";
import background4 from "@/assets/images/Home/Hero/HeroHomeBG4.png";
import background5 from "@/assets/images/Home/Hero/HeroHomeBG5.png";
import background6 from "@/assets/images/Home/Hero/HeroHomeBG6.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

function HeroHome() {
    const t = useTranslations("heroHome");
    const l = useTranslations("navbar");

    // Arreglo con las imágenes del slider
    const backgrounds = [
        background2,
        background3,
        background4,
        background5,
        background6,
    ];

    // Estado para el slide actual
    const [currentSlide, setCurrentSlide] = useState(0);

    // Efecto para cambiar de slide automáticamente cada 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [backgrounds.length]);

    // Función para cuando el usuario hace clic en un indicador
    const handleIndicatorClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative text-center pt-28 pb-16 md:pt-20 md:pb-20 lg:pt-56 lg:pb-24">
            {/* Contenedor para la animación de slides (overflow hidden) */}
            <div className="absolute inset-0 overflow-hidden">
                {/* "Pista" de imágenes que se moverá con transform */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {backgrounds.map((bg, index) => (
                        <div key={index} className="relative w-full h-full flex-shrink-0">
                            <Image
                                src={bg}
                                alt="Background Image"
                                fill
                                style={{ objectFit: "cover" }}
                                // Solo marcamos la primera imagen como prioridad
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenido principal */}
            <div className="relative border border-white rounded-2xl pt-24 pb-6 px-10 mx-8 md:px-6 lg:pb-10 lg:-mt-40 lg:pt-40 lg:px-20 xl:p-24 xl:pt-44">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-12 lg:gap-8">
                    <h1 className="text-3xl md:text-3xl text-white font-cambay font-semibold mt-6 md:w-1/2 md:order-2 md:text-right md:mt-0 lg:w-2/3 lg:tracking-[7px] xl:tracking-[8px] lg:pl-20 lg:leading-[75px] xl:leading-[75px] xl:pl-44 lg:text-4xl xl:text-5xl">
                        {t("title")}
                    </h1>
                    <div className="text-white md:w-1/2 md:order-1 lg:w-1/3">
                        <p className="font-montserrat text-justify mt-6 text-sm font-light lg:text-lg xl:text-2xl">
                            {t.rich("description")}
                        </p>
                        <Link href={l("contactLink")}>
                            <button className="mt-8 border border-white rounded-3xl font-bold text-lg px-10 md:px-16 lg:text-base xl:px-24 xl:text-xl transform hover:scale-125 transition-transform duration-300">
                                {t("button")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Indicadores del slider */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {backgrounds.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            index === currentSlide ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroHome;
