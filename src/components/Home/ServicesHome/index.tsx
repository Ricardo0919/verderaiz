"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import ImpactoAmbiental from "@/assets/images/ImpactoAmbiental.png";
import InformePreventivo from "@/assets/images/InformePreventivo.png";
import Capacitacion from "@/assets/images/Capacitacion.png";
import EstudioRiesgo from "@/assets/images/EstudioRiesgo.png";

const slides = [
    {
        id: 1,
        title: "Manifiesto de impacto ambiental",
        img: ImpactoAmbiental,
        alt: "Manifiesto de impacto ambiental",
    },
    {
        id: 2,
        title: "Informe Preventivo",
        img: InformePreventivo,
        alt: "Informe Preventivo",
    },
    {
        id: 3,
        title: "Capacitación",
        img: Capacitacion,
        alt: "Capacitación",
    },
    {
        id: 4,
        title: "Estudio de riesgo",
        img: EstudioRiesgo,
        alt: "Estudio de riesgo",
    },
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const totalSlides = slides.length;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const updateVisibleSlides = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
            setVisibleSlides(4); // xl
        } else if (width >= 1024) {
            setVisibleSlides(3); // lg
        } else if (width >= 768) {
            setVisibleSlides(2); // md
        } else {
            setVisibleSlides(1); // sm
        }
    };

    useEffect(() => {
        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    return (
        <div className="relative w-full bg-white py-10">
            {/* Título */}
            <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-4">
                SERVICIOS
            </h2>

            {/* Indicador del slider */}
            <div className="w-[60%] mx-auto h-5 border border-dark-green rounded-full relative mb-6 px-2 py-1">
                <div
                    className="h-full bg-dark-green rounded-full transition-all duration-300"
                    style={{
                        width: `${((currentIndex + 1) / totalSlides) * 100}%`,
                    }}
                ></div>
            </div>

            {/* Contenedor del Slider */}
            <div className="relative overflow-hidden mx-4 md:mx-8 xl:mx-16">
                <div
                    className="flex transition-transform duration-300 ease-in-out -mx-2"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center relative px-4"
                            style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}
                        >
                            <div className="relative w-full h-[380px] mx-auto rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={slide.img}
                                    alt={slide.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                {/* Título sobre la imagen */}
                                <div className="absolute bottom-6 text-white text-xl font-black px-4 py-1 text-center">
                                    {slide.title}
                                </div>
                                {/* Botón de más */}
                                <button className="absolute top-3 left-3 transform hover:scale-125 transition-transform duration-300">
                                    <CiCirclePlus size={50} className="text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Flechas debajo del slider */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button
                    onClick={handlePrev}
                    className="text-dark-green hover:scale-125 transition-transform"
                >
                    <FaRegArrowAltCircleLeft size={30} />
                </button>
                <button
                    onClick={handleNext}
                    className="text-dark-green hover:scale-125 transition-transform"
                >
                    <FaRegArrowAltCircleRight size={30} />
                </button>
            </div>
        </div>
    );
}

export default Slider;
