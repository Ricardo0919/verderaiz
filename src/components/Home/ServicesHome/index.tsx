"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ImpactoAmbiental from "@/assets/images/ImpactoAmbiental.png";
import InformePreventivo from "@/assets/images/InformePreventivo.png";
import Capacitacion from "@/assets/images/Capacitacion.png";
import EstudioRiesgo from "@/assets/images/EstudioRiesgo.png";

// Definimos el tipo para una diapositiva
interface Slide {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
    description: string;
}

function Slider() {
    const t = useTranslations("sliderHome");
    const l = useTranslations("navbar");

    const slides: Slide[] = [
        {
            id: 1,
            title: t("subtitle1"),
            img: ImpactoAmbiental,
            alt: t("subtitle1"),
            description: t("description1")
        },
        {
            id: 2,
            title: t("subtitle2"),
            img: InformePreventivo,
            alt: t("subtitle2"),
            description: t("description2")
        },
        {
            id: 3,
            title: t("subtitle3"),
            img: Capacitacion,
            alt: t("subtitle3"),
            description: t("description3")
        },
        {
            id: 4,
            title: t("subtitle4"),
            img: EstudioRiesgo,
            alt: t("subtitle4"),
            description: t("description4")
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleSlides, setVisibleSlides] = useState<number>(1);
    const totalSlides = slides.length;

    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragTranslate, setDragTranslate] = useState<number>(0);
    const startPos = useRef<number>(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

    const updateVisibleSlides = () => {
        const width = window.innerWidth;
        let newVisibleSlides: number;
        if (width >= 1280) {
            newVisibleSlides = 4;
        } else if (width >= 1024) {
            newVisibleSlides = 3;
        } else if (width >= 768) {
            newVisibleSlides = 2;
        } else {
            newVisibleSlides = 1;
        }
        setVisibleSlides(newVisibleSlides);

        const maxIndex = Math.max(totalSlides - newVisibleSlides, 0);
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            setSlideWidth(slideRef.current.getBoundingClientRect().width);
        }
    }, [visibleSlides]);

    const maxIndex = Math.max(totalSlides - visibleSlides, 0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        setDragTranslate(0);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        setDragTranslate(0);
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        startPos.current = event.touches[0].clientX;
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        startPos.current = event.clientX;
        event.preventDefault();
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const currentPosition = event.touches[0].clientX;
        const delta = currentPosition - startPos.current;
        setDragTranslate(delta);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
        const currentPosition = event.clientX;
        const delta = currentPosition - startPos.current;
        setDragTranslate(delta);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        handleDragEnd();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        handleDragEnd();
    };

    const handleDragEnd = () => {
        const delta = dragTranslate;

        if (delta < -50 && currentIndex < maxIndex) {
            handleNext();
        } else if (delta > 50 && currentIndex > 0) {
            handlePrev();
        } else {
            setDragTranslate(0);
        }
    };

    const handleShowDetails = (slide: Slide) => {
        setSelectedSlide(slide);
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        setSelectedSlide(null);
    };

    const handleLink = () => {
        setShowDetails(false);
    };

    useEffect(() => {
        if (showDetails) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showDetails]);

    const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;

    return (
        <div className="relative w-full bg-white py-10">
            <h2 className="text-3xl font-serif font-bold text-dark-green text-center mb-4">
                {t("title")}
            </h2>

            <div className="w-[60%] mx-auto h-5 border border-dark-green rounded-full relative mb-6 px-2 py-1">
                <div
                    className="h-full bg-dark-green rounded-full transition-all duration-300"
                    style={{
                        width: `${progressPercentage}%`,
                    }}
                ></div>
            </div>

            <div className="relative overflow-hidden mx-4 md:mx-8 xl:mx-16">
                <div
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className={`flex ${!isDragging ? "transition-transform duration-300 ease-in-out" : ""} -mx-2`}
                    style={{
                        transform: `translateX(${-currentIndex * slideWidth + dragTranslate}px)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="flex-shrink-0 flex flex-col items-center justify-center relative px-4"
                            style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}
                            ref={index === 0 ? slideRef : null}
                        >
                            <div className="relative w-full h-[380px] mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center">
                                <Image
                                    src={slide.img}
                                    alt={slide.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                <div className="absolute bottom-6 transform text-white text-xl font-black text-center whitespace-normal px-2">
                                    {slide.title}
                                </div>
                                <button
                                    onClick={() => handleShowDetails(slide)}
                                    className="absolute top-3 left-3 transform transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:scale-125"
                                >
                                    <CiCirclePlus size={50} className="text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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

            {showDetails && selectedSlide && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div
                        className="relative md:w-[60%] lg:w-[40%] rounded-xl bg-center bg-cover bg-no-repeat mx-6"
                        style={{
                            backgroundImage: `url(${(selectedSlide.img as StaticImageData).src})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
                        <button
                            onClick={handleCloseDetails}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <IoIosCloseCircleOutline size={40}/>
                        </button>
                        <h3 className="relative text-2xl font-bold text-center mb-4 text-white z-10 mt-20 mx-4">
                            {selectedSlide.title}
                        </h3>
                        <p className="relative text-center text-gray-200 mb-6 z-10 mx-6">
                            {selectedSlide.description}
                        </p>
                        <div className="relative flex justify-center z-10 mb-8">
                            <Link href={l("servicesLink")}>
                                <button
                                    onClick={handleLink}
                                    className="text-white border-2 border-white py-2 px-4 xl:px-6 rounded-[30px] text-xs xl:text-lg transform hover:scale-125 transition-transform duration-300"
                                >
                                    {t("viewMore")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Slider;
