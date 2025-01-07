"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import umaLogo from "@/assets/images/umaLogo.png";
import enzoLogo from "@/assets/images/enzoLogo.png";
import emaLogo from "@/assets/images/emaLogo.png";

interface Slide {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
}

function AccreditationsSliderAboutUs() {
    const t = useTranslations("accreditationsAboutUs");

    const slides: Slide[] = [
        {
            id: 1,
            title: t("subtitle1"),
            img: enzoLogo,
            alt: t("subtitle1")
        },
        {
            id: 2,
            title: t("subtitle2"),
            img: emaLogo,
            alt: t("subtitle2")
        },
        {
            id: 3,
            title: t("subtitle3"),
            img: umaLogo,
            alt: t("subtitle3")
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

    const updateVisibleSlides = () => {
        const width = window.innerWidth;
        let newVisibleSlides: number;
        if (width >= 1280) {
            newVisibleSlides = 3;
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

    const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 100;

    return (
        <div className="relative w-full bg-light-beige py-10">
            <h2 className="text-3xl tracking-[3px] font-titles font-bold text-dark-green text-center mb-4 md:text-4xl md:tracking-[7px] lg:text-5xl lg:tracking-[10px] xl:text-6xl xl:tracking-[18px]">
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

            <div className="relative overflow-hidden mx-2 md:mx-20 xl:mx-72">
                <div
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className={`flex ${!isDragging ? "transition-transform duration-300 ease-in-out" : ""} gap-0`}
                    style={{
                        transform: `translateX(${-currentIndex * (slideWidth + 8) + dragTranslate}px)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="flex flex-col items-center justify-center relative"
                            style={{ flex: `0 0 calc(100% / ${visibleSlides})` }}
                            ref={index === 0 ? slideRef : null}
                        >
                            <div className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] rounded-xl overflow-hidden shadow-xl flex flex-col items-center justify-center bg-white border-2 border-black p-4">
                                <Image
                                    src={slide.img}
                                    alt={slide.alt}
                                    width={150}
                                    height={150}
                                    priority
                                />
                                <div className="mt-4 text-black text-xs md:text-sm font-black text-center">
                                    {slide.title}
                                </div>
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
        </div>
    );
}

export default AccreditationsSliderAboutUs;
