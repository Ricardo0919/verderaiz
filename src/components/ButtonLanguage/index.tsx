'use client'
import React, { useState } from 'react';
import LocaleSwitcher from "@/components/ButtonLanguage/LocaleSwitcher";
import {useLocale} from "use-intl";
import { HiLanguage } from "react-icons/hi2";

function ButtonLanguage() {
    const [showModal, setShowModal] = useState(false);
    const locale = useLocale();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div onClick={toggleModal}>
                <HiLanguage className="text-white bg-dark-green p-2 rounded-full" size={50} />
            </div>
            {showModal && (
                <LocaleSwitcher closeModalAction={toggleModal} currentLocale={locale} />
            )}
        </div>
    );
}

export default ButtonLanguage;
