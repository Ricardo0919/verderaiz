"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import Sidebar from "./Sidebar";
import { useTranslations } from "next-intl";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isRotating, setIsRotating] = useState(false); // Nuevo estado

    const pathname = usePathname();
    const t = useTranslations("navbar");

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClasses = (path: string) =>
        pathname === path
            ? "bg-white text-black font-semibold text-md  xl:text-lg py-1 px-5 rounded-[40px]"
            : "text-white font-semibold text-md xl:text-lg hover:bg-white hover:text-black py-1 px-5 rounded-[40px]";

    const handleMenuIconClick = () => {
        // Si ya se está rotando, no hacer nada
        if (isRotating) return;

        setIsRotating(true);

        // Después de 300ms (el tiempo de la animación), cambiamos el menú.
        setTimeout(() => {
            setMenuOpen((prev) => !prev);
            setIsRotating(false);
        }, 300);
    };

    return (
        <nav
            className={`fixed w-full z-50 px-20 lg:px-16 transition-all duration-300 ${
                isScrolled
                    ? "bg-dark-green bg-opacity-50 shadow-2xl mt-0 py-2 pb-6 lg:pb-2"
                    : "bg-transparent mt-28 md:mt-20 lg:mt-16 py-4 pb-16"
            }`}
        >
            {/* Logo and Laptop Menu */}
            <div className="flex flex-row">
                <div className="flex items-center lg:w-1/3">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="w-24 lg:w-36"
                        />
                    </Link>
                </div>
                <div
                    className="lg:w-2/3 hidden lg:flex flex-row justify-center items-center border-white border-2 my-12 xl:my-10 xl:mx-40 rounded-[60px]"
                >
                    <Link href="/" className={linkClasses("/")}>
                        {t("home")}
                    </Link>
                    <Link href={t("aboutUsLink")} className={linkClasses(t("aboutUsLink"))}>
                        {t("aboutUs")}
                    </Link>
                    <Link href={t("servicesLink")} className={linkClasses(t("servicesLink"))}>
                        {t("services")}
                    </Link>
                    <Link href={t("blogLink")} className={linkClasses(t("blogLink"))}>
                        {t("blog")}
                    </Link>
                    <Link href={t("contactLink")} className={linkClasses(t("contactLink"))}>
                        {t("contact")}
                    </Link>
                </div>
            </div>

            {/* Mobile & Tablet Menu */}
            <div className="flex justify-end -mt-20 lg:hidden">
                <button className="text-white" onClick={handleMenuIconClick}>
                    {menuOpen ? (
                        // Ícono de la X
                        <RxCross2
                            className="text-5xl transform transition-transform"
                        />
                    ) : (
                        // Ícono del menú
                        <IoMenu
                            className={`text-5xl transform transition-transform duration-300 ${
                                isRotating ? "rotate-[360deg]" : ""
                            }`}
                        />
                    )}
                </button>
            </div>

            {/* Overlay y Sidebar */}
            {menuOpen && (
                <div
                    className={`fixed inset-0 z-40 ${
                        isScrolled
                            ? "mt-6 md:mt-0"
                            : "mt-32 md:mt-24"
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <Sidebar />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
