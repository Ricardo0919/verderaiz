"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/LogoVerde.png";
import Sidebar from "./Sidebar";
import {useTranslations} from "next-intl";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations("navbar");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-blanco-nu-100 shadow-md fixed p-4 w-full h-auto z-50 px-16">
            <div className="flex justify-between items-center mx-auto lg:max-w-[10240px]">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={254}
                            height={90}
                            className="lg:justify-start hidden lg:block"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={58}
                            height={53}
                            className="lg:hidden"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-8 lg:flex-1 lg:justify-center">
                    <Link href="/" className="text-black font-medium text-sm">
                        {t("home")}
                    </Link>
                    <Link href={t("aboutUsLink")} className="text-black font-medium text-sm">
                        {t("aboutUs")}
                    </Link>
                </div>
            </div>

            <div className="flex items-center space-x-4 mr-4 lg:hidden">
                <button
                    className="text-blue-400 text-center font-medium font-dm-sans text-xs flex items-center"
                    onClick={toggleMenu}
                >
                    Menu
                    <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>

            {menuOpen && <Sidebar />}

        </nav>
    );
}

export default NavBar;
