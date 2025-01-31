"use client";
import React, { useState } from "react";
import {useTranslations} from "next-intl";

function EthicPolicies() {
    const t = useTranslations("ethicPolicies");
    // Índice del acordeón que está abierto; si es null ninguno está abierto
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Datos de ejemplo
    const items = [
        { title: t("title1"), content: t("description1") },
        { title: t("title2"), content: t("description2") },
        { title: t("title3"), content: t("description3") },
        { title: t("title4"), content: t("description4") },
        { title: t("title5"), content: t("description5") },
        { title: t("title6"), content: t("description6") },
        { title: t("title7"), content: t("description7") },
        { title: t("title8"), content: t("description8") },
        { title: t("title9"), content: t("description9") },
        { title: t("title10"), content: t("description10") },
        { title: t("title11"), content: t("description11") },
        { title: t("title12"), content: t("description12") },
        { title: t("title13"), content: t("description13") },
    ];

    // Maneja la apertura/cierre de cada acordeón
    const handleToggle = (index: number) => {
        // Si el mismo acordeón está abierto, al hacer clic se cierra
        // De lo contrario, abrimos el que el usuario seleccionó
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="bg-light-beige px-10 pb-10 md:px-12 lg:px-16 xl:px-32">
            <div className="bg-dark-green border rounded-[20px]">
                {items.map((item, index) => (
                    <div key={index}>
                        {/* Botón para el título */}
                        <button
                            className="w-full flex items-center justify-between p-4 focus:outline-none lg:text-lg lg:p-6 xl:text-2xl xl:p-8 font-cambay text-left uppercase"
                            onClick={() => handleToggle(index)}
                        >
                            <span className="font-semibold">{item.title}</span>
                            {/* Flecha que rota al abrir el acordeón */}
                            <svg
                                className={`w-5 h-5 transition-transform duration-200 ${
                                    activeIndex === index ? "transform rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        {/* Línea de separación debajo de cada título, excepto en el último */}
                        {index < items.length - 1 && <hr className="mx-4 border-gray-300"/>}

                        {/* Contenido desplegado si este acordeón está activo */}
                        {activeIndex === index && (
                            <div className="p-4 text-justify text-sm text-white lg:text-base lg:p-6 xl:text-xl xl:p-8">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EthicPolicies;

