"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ImpactoAmbiental from "@/assets/images/Home/ServiceSlider/ImpactoAmbiental.png";
import InformePreventivo from "@/assets/images/Home/ServiceSlider/InformePreventivo.png";
import Capacitacion from "@/assets/images/Home/ServiceSlider/Capacitacion.png";
import EstudioRiesgo from "@/assets/images/Home/ServiceSlider/EstudioRiesgo.png";
import GestionEnergetica from "@/assets/images/Home/ServiceSlider/GestionEnergetica.png";
import GestionHidrica from "@/assets/images/Home/ServiceSlider/GestionHidrica.png";
import GestionResiduos from "@/assets/images/Home/ServiceSlider/GestionResiduos.png";
import Socioculturales from "@/assets/images/Home/ServiceSlider/Socioculturales.png";
import Ambientales from "@/assets/images/Home/ServiceSlider/Ambientales.png";
import DictamenesGas from "@/assets/images/Home/ServiceSlider/DictamenesGas.png";
import homeBG4 from "@/assets/images/Home/ServiceSlider/homeBG4.png";

interface Slide {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
    description: React.ReactNode;
    link: string;
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
            description: t.rich("description1", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesEnvironmentalImpactProceduresLink")
        },
        {
            id: 2,
            title: t("subtitle2"),
            img: InformePreventivo,
            alt: t("subtitle2"),
            description: t.rich("description2", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesEnvironmentalImpactProceduresLink")
        },
        {
            id: 3,
            title: t("subtitle3"),
            img: Capacitacion,
            alt: t("subtitle3"),
            description: t.rich("description3", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesCoursesWorkshopsLink")
        },
        {
            id: 4,
            title: t("subtitle4"),
            img: EstudioRiesgo,
            alt: t("subtitle4"),
            description: t.rich("description4", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesEnvironmentalImpactProceduresLink")
        },
        {
            id: 5,
            title: t("subtitle5"),
            img: GestionEnergetica,
            alt: t("subtitle5"),
            description: t.rich("description5", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesComprehensiveProjectsLink")
        },
        {
            id: 6,
            title: t("subtitle6"),
            img: GestionHidrica,
            alt: t("subtitle6"),
            description: t.rich("description6", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesComprehensiveProjectsLink")
        },
        {
            id: 7,
            title: t("subtitle7"),
            img: GestionResiduos,
            alt: t("subtitle7"),
            description: t.rich("description7", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesComprehensiveProjectsLink")
        },
        {
            id: 8,
            title: t("subtitle8"),
            img: Socioculturales,
            alt: t("subtitle8"),
            description: t.rich("description8", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesSocioculturalSolutionsLink")
        },
        {
            id: 9,
            title: t("subtitle9"),
            img: Ambientales,
            alt: t("subtitle9"),
            description: t.rich("description9", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesEnvironmentalSolutionsLink")
        },
        {
            id: 10,
            title: t("subtitle10"),
            img: DictamenesGas,
            alt: t("subtitle10"),
            description: t.rich("description10", {
                p: (chunks) => <p className="text-center">{chunks}</p>,
                ul: (chunks) => <ul className="text-left list-disc pl-5 mt-4">{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>
            }),
            link: l("servicesOthersLink")
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [dragTranslate, setDragTranslate] = useState(0);
    const [expandedSlideId, setExpandedSlideId] = useState<number | null>(null);
    const [animatingSlideId, setAnimatingSlideId] = useState<number | null>(null);

    const totalSlides = slides.length;
    const startPos = useRef(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const [slideWidth, setSlideWidth] = useState(0);

    const updateVisibleSlides = () => {
        const width = window.innerWidth;
        const newVisibleSlides = width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1;
        setVisibleSlides(newVisibleSlides);
        const maxIndex = Math.max(totalSlides - newVisibleSlides, 0);
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    };

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

    const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    const handleNext = () => setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        startPos.current = e.touches[0].clientX;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startPos.current = e.clientX;
        e.preventDefault();
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const delta = e.touches[0].clientX - startPos.current;
        setDragTranslate(delta);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const delta = e.clientX - startPos.current;
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
        if (dragTranslate < -50 && currentIndex < maxIndex) handleNext();
        else if (dragTranslate > 50 && currentIndex > 0) handlePrev();
        setDragTranslate(0);
    };

    const handlePlusClick = (id: number) => setAnimatingSlideId(id);
    const handleAnimationEnd = (id: number) => {
        if (animatingSlideId === id) {
            setAnimatingSlideId(null);
            setExpandedSlideId(id);
        }
    };

    const handleCloseDetails = () => setExpandedSlideId(null);
    const handleLink = () => setExpandedSlideId(null);

    const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;

    return (
        <div className="bg-light-beige flex flex-col items-right justify-center relative">
            <Image src={homeBG4} alt="homeBG4" className="absolute md:w-1/2 lg:w-1/3 xl:w-1/3" />
            <div className="z-10">
                <div className="relative w-full py-10">
                    <h2 className="text-4xl tracking-[2px] font-cambay font-[1000] text-dark-green text-center mb-4">
                        {t("title")}
                    </h2>
                    <div className="w-[60%] mx-auto h-5 border border-dark-green rounded-full relative mb-6 px-2 py-1">
                        <div
                            className="h-full bg-dark-green rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        />
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
                            className={`flex ${!isDragging ? "transition-transform duration-300 ease-in-out" : ""}`}
                            style={{ transform: `translateX(${-currentIndex * slideWidth + dragTranslate}px)` }}
                        >
                            {slides.map((slide, index) => {
                                const isExpanded = expandedSlideId === slide.id;
                                return (
                                    <div
                                        key={slide.id}
                                        className="flex-shrink-0 flex flex-col items-center justify-center relative px-4"
                                        style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}
                                        ref={index === 0 ? slideRef : null}
                                    >
                                        <div className="relative w-full h-[380px] mx-auto rounded-xl overflow-hidden flex flex-col items-center justify-center">
                                            <Image src={slide.img} alt={slide.alt} layout="fill" objectFit="cover" priority />
                                            {!isExpanded ? (
                                                <>
                                                    <div className="absolute bottom-6 text-white text-2xl tracking-[3px] font-[600] text-center px-4 font-cambay uppercase">
                                                        {slide.title}
                                                    </div>
                                                    <button
                                                        onClick={() => handlePlusClick(slide.id)}
                                                        onTransitionEnd={() => handleAnimationEnd(slide.id)}
                                                        className={`absolute top-3 left-3 transform transition-transform duration-500 ease-in-out ${
                                                            animatingSlideId === slide.id ? "rotate-[360deg] scale-125" : ""
                                                        }`}
                                                    >
                                                        <CiCirclePlus size={50} className="text-white" />
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" />
                                                    <button
                                                        onClick={handleCloseDetails}
                                                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                                                    >
                                                        <IoIosCloseCircleOutline size={40} />
                                                    </button>
                                                    <div className="relative text-gray-200 mt-20 lg:mt-14 mb-6 z-10 mx-6">
                                                        {slide.description}
                                                    </div>
                                                    <div className="relative flex justify-center z-10 mb-8">
                                                        <Link href={slide.link}>
                                                            <button
                                                                onClick={handleLink}
                                                                className="font-zendots text-white border-2 border-white py-2 px-4 xl:px-6 rounded-[30px] text-xs xl:text-lg transform hover:scale-125 transition-transform duration-300"
                                                            >
                                                                {t("viewMore")}
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-6 gap-4">
                        <button onClick={handlePrev} className="text-dark-green hover:scale-125 transition-transform">
                            <FaRegArrowAltCircleLeft size={30} />
                        </button>
                        <button onClick={handleNext} className="text-dark-green hover:scale-125 transition-transform">
                            <FaRegArrowAltCircleRight size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
