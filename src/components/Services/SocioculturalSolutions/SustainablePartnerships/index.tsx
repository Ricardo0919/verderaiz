"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Img1 from "@/assets/images/Services/SocioculturalSolutions/SustainablePartnerships/Img1.png";
import Img2 from "@/assets/images/Services/SocioculturalSolutions/SustainablePartnerships/Img2.png";
import Img3 from "@/assets/images/Services/SocioculturalSolutions/SustainablePartnerships/Img3.png";
import Img4 from "@/assets/images/Services/SocioculturalSolutions/SustainablePartnerships/Img4.png";

function SustainablePartnerships() {
    const t = useTranslations("socioculturalSolutionsSustainablePartnerships");

    const items = [
        {
            title: t("title1"),
            description: t("description1"),
            image: Img1,
        },
        {
            title: t("title2"),
            description: t("description2"),
            image: Img2,
        },
        {
            title: t("title3"),
            description: t("description3"),
            image: Img3,
        },
        {
            title: t("title4"),
            description: t("description4"),
            image: Img4,
        },
    ];

    return (
        <div className="bg-light-beige py-10 px-4 md:px-8">
            {/* Layout para celular y tablet */}
            <div className="block lg:hidden">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-black text-center">
                            {/* Título */}
                            <h3 className="text-xl md:text-2xl font-semibold font-montserrat mb-4">
                                {item.title}
                            </h3>

                            {/* Imagen con fondo verde */}
                            <div className="bg-[#536156] p-4 rounded-[400px] mb-4">
                                <Image
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                    className="w-48 h-auto object-contain"
                                />
                            </div>

                            {/* Descripción */}
                            <p className="text-base md:text-lg font-medium font-montserrat max-w-xl">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Layout para laptop y desktop */}
            <div className="hidden lg:block">
                <div className="flex justify-center px-8 xl:px-16">
                    <div className="pr-0 py-4 xl:p-4 flex flex-col items-center justify-center gap-8 xl:gap-10 w-1/2 xl:w-1/3">
                        <h3 className="text-black font-semibold uppercase text-base xl:text-xl font-montserrat">
                            {t("title1")}
                        </h3>
                        <h3 className="text-black font-semibold uppercase text-base xl:text-xl font-montserrat">
                            {t("title2")}
                        </h3>
                        <h3 className="text-black font-semibold uppercase text-base xl:text-xl font-montserrat">
                            {t("title3")}
                        </h3>
                        <h3 className="text-black font-semibold uppercase text-base xl:text-xl font-montserrat">
                            {t("title4")}
                        </h3>
                    </div>
                    <div className="bg-[#536156] rounded-full p-2 flex flex-col items-center gap-8 xl:gap-12">
                        <Image
                            src={Img1}
                            alt="Imagen 1"
                            className="w-32 h-auto object-contain pt-6"
                        />
                        <Image
                            src={Img2}
                            alt="Imagen 2"
                            className="w-32 h-auto object-contain"
                        />
                        <Image
                            src={Img3}
                            alt="Imagen 3"
                            className="w-32 h-auto object-contain pb-6"
                        />
                        <Image
                            src={Img4}
                            alt="Imagen 4"
                            className="w-32 h-auto object-contain pb-6"
                        />
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center gap-6 xl:gap-16 w-5/2 pl-8">
                        <p className="text-black font-medium font-montserrat text-base xl:text-xl">
                            {t("description1")}
                        </p>
                        <p className="text-black font-medium font-montserrat pt-2 text-base xl:text-xl">
                            {t("description2")}
                        </p>
                        <p className="text-black font-medium font-montserrat pt-2 text-base xl:text-xl">
                            {t("description3")}
                        </p>
                        <p className="text-black font-medium font-montserrat pt-2 text-base xl:text-xl">
                            {t("description4")}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SustainablePartnerships;
