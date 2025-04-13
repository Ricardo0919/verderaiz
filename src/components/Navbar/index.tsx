"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/Blog/RecentBlogs/Logo.png";
import logoVerde from "@/assets/images/Home/FindOut/LogoVerde.png";
import Sidebar from "./Sidebar";
import { useTranslations } from "next-intl";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io"; // Import de la flecha

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    // Estado y referencia para el dropdown de About Us
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const aboutDropdownRef = useRef<HTMLDivElement>(null);

    // Estado y referencia para el dropdown de Services
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const servicesDropdownRef = useRef<HTMLDivElement>(null);

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

    // Cerrar los dropdowns si se hace clic fuera de ellos
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                aboutDropdownRef.current &&
                !aboutDropdownRef.current.contains(event.target as Node)
            ) {
                setAboutDropdownOpen(false);
            }
            if (
                servicesDropdownRef.current &&
                !servicesDropdownRef.current.contains(event.target as Node)
            ) {
                setServicesDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Detectar si estamos en la ruta ethicsPoliciesLink
    const isOnEthicsPoliciesLink = pathname.includes(t("ethicsPoliciesLink"));
    // Detectar si estamos en la ruta blogLink
    const isOnBlogLink = pathname.includes(t("blogLink"));

    // Nuevo booleano que controla el "modo verde" SÓLO si está en policies Y no ha hecho scroll.
    const isGreenMode = isOnEthicsPoliciesLink && !isScrolled;

    /**
     * linkClasses: determina las clases de cada link según:
     * - Si estamos en la ruta actual (active).
     * - Si estamos en "modo verde" (isGreenMode).
     */
    const linkClasses = (path: string) => {
        if (isGreenMode) {
            // Cuando estamos en la ruta de policies y NO scrolleamos:
            // por defecto texto negro, hover fondo dark-green y texto blanco.
            if (pathname === path) {
                // Si el link está activo
                return "bg-dark-green text-white font-semibold text-sm xl:text-md py-1 px-5 rounded-[40px] font-zendots";
            }
            // Link normal en ese modo
            return "text-black font-semibold text-sm xl:text-md hover:bg-dark-green hover:text-white py-1 px-5 rounded-[40px] font-zendots";
        } else {
            // Lógica original fuera del modo verde
            if (pathname === path) {
                return "bg-white text-black font-semibold text-sm xl:text-md py-1 px-5 rounded-[40px] font-zendots";
            }
            return "text-white font-semibold text-sm xl:text-md hover:bg-white hover:text-black py-1 px-5 rounded-[40px] font-zendots";
        }
    };

    const handleMenuIconClick = () => {
        if (isRotating) return;
        setIsRotating(true);
        setTimeout(() => {
            setMenuOpen((prev) => !prev);
            setIsRotating(false);
        }, 300);
    };

    console.log("pathname:", pathname);
    console.log("ethicsPoliciesLink:", t("ethicsPoliciesLink"));
    console.log("isScrolled:", isScrolled);
    console.log("isGreenMode:", isGreenMode);

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
                {/* Contenedor del Logo */}
                <div className="flex items-center lg:w-1/4">
                    <Link href="/">
                        <Image
                            // Mostramos logoVerde sólo si estamos en 'modo verde'
                            src={isGreenMode ? logoVerde : logo}
                            alt="Logo"
                            className="w-24 lg:w-36"
                        />
                    </Link>
                </div>

                {/* Línea horizontal entre logo y menú, SOLO si no hay scroll Y estamos en la página de blog */}
                {!isScrolled && isOnBlogLink && (
                    <hr className="hidden lg:flex self-center border-white border-[2px] w-[200px] xl:w-[600px]" />
                )}

                {/* Contenedor del menú con borde */}
                <div
                    className={`lg:w-10/12 hidden lg:flex flex-row justify-center items-center border-[3px] my-12 xl:my-10 rounded-[60px] 
                    ${isGreenMode ? "border-dark-green" : "border-white"}
                    ${isOnBlogLink ? "xl:ml-0" : "xl:ml-72"}
                    `}
                >
                    <Link href="/" className={linkClasses("/")}>
                        {t("home")}
                    </Link>

                    {/* Contenedor para About Us con dropdown */}
                    <div className="relative" ref={aboutDropdownRef}>
                        <Link
                            href="#"
                            className={linkClasses(t("aboutUsLink"))}
                            onClick={(e) => {
                                e.preventDefault(); // Evita navegar
                                setAboutDropdownOpen((prev) => !prev);
                            }}
                        >
                            {t("aboutUs")}
                            <IoIosArrowDown className="inline ml-1 text-lg" />
                        </Link>
                        {/* Submenú con display condicional */}
                        <div
                            className={`absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg ${
                                aboutDropdownOpen ? "block" : "hidden"
                            }`}
                        >
                            <Link
                                href={t("aboutUsLink")}
                                className="block px-4 py-2 text-sm hover:bg-gray-200 font-zendots"
                            >
                                {t("identity")}
                            </Link>
                            <Link
                                href={t("ethicsPoliciesLink")}
                                className="block px-4 py-2 text-sm hover:bg-gray-200 font-zendots"
                            >
                                {t("ethicsPolicies")}
                            </Link>
                        </div>
                    </div>

                    {/* Contenedor para Servicios con dropdown */}
                    <div className="relative" ref={servicesDropdownRef}>
                        <Link
                            href="#"
                            className={linkClasses(t("servicesLink"))}
                            onClick={(e) => {
                                e.preventDefault(); // Evita navegar
                                setServicesDropdownOpen((prev) => !prev);
                            }}
                        >
                            {t("services")}
                            <IoIosArrowDown className="inline ml-1 text-lg" />
                        </Link>
                        {/* Submenú con display condicional */}
                        <div
                            className={`absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg ${
                                servicesDropdownOpen ? "block" : "hidden"
                            }`}
                        >
                            <Link
                                href={t("servicesComprehensiveProjectsLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesComprehensiveProjects")}
                            </Link>
                            <Link
                                href={t("servicesEnvironmentalImpactProceduresLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesEnvironmentalImpactProcedures")}
                            </Link>
                            <Link
                                href={t("servicesCoursesWorkshopsLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesCoursesWorkshops")}
                            </Link>
                            <Link
                                href={t("servicesSocioculturalSolutionsLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesSocioculturalSolutions")}
                            </Link>
                            <Link
                                href={t("servicesEnvironmentalSolutionsLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesEnvironmentalSolutions")}
                            </Link>
                            <Link
                                href={t("servicesOthersLink")}
                                className="block px-4 py-2 text-xs hover:bg-gray-200 font-zendots"
                            >
                                {t("servicesOthers")}
                            </Link>
                        </div>
                    </div>

                    <Link
                        href={t("blogLink")}
                        className={linkClasses(t("blogLink"))}
                    >
                        {t("blog")}
                    </Link>
                    <Link
                        href={t("contactLink")}
                        className={linkClasses(t("contactLink"))}
                    >
                        {t("contact")}
                    </Link>
                </div>
            </div>

            {/* Mobile & Tablet Menu */}
            <div className="flex justify-end -mt-20 lg:hidden">
                <button
                    className={`${isGreenMode ? "text-dark-green" : "text-white"}`}
                    onClick={handleMenuIconClick}
                >
                    {menuOpen ? (
                        <RxCross2 className="text-5xl transform transition-transform" />
                    ) : (
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
                        isScrolled ? "mt-6 md:mt-0" : "mt-32 md:mt-24"
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
