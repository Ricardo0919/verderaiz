'use client';
import React, { useState } from 'react';
import LocaleSwitcher from "@/components/ButtonLanguage/LocaleSwitcher";
import { useLocale } from "use-intl";
import { HiLanguage } from "react-icons/hi2";

function ButtonLanguage() {
    const [showModal, setShowModal] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const locale = useLocale();

    const toggleModal = () => {
        setIsAnimating(true); // Comienza la animación
    };

    const handleTransitionEnd = () => {
        setIsAnimating(false); // Finaliza la animación
        setShowModal(true); // Muestra el modal después de la animación
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Botón de lenguaje */}
            <div
                onClick={toggleModal}
                onTransitionEnd={handleTransitionEnd} // Cambiado a onTransitionEnd
                className={`duration-500 ease-in-out ${
                    isAnimating ? "rotate-[360deg] scale-125" : ""
                }`}
            >
                <HiLanguage className="text-white bg-dark-green p-2 rounded-full" size={50} />
            </div>

            {/* Fondo para cerrar el modal al hacer clic fuera */}
            {showModal && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 z-40"
                />
            )}

            {/* LocaleSwitcher */}
            {showModal && (
                <LocaleSwitcher
                    closeModalAction={closeModal}
                    currentLocale={locale}
                />
            )}
        </div>
    );
}

export default ButtonLanguage;
