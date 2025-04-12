"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IoIosArrowDown } from "react-icons/io";

function Sidebar() {
    const t = useTranslations("navbar");

    // Estado y referencia para el dropdown de About Us
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const aboutDropdownRef = useRef<HTMLDivElement>(null);

    // Estado y referencia para el dropdown de Services
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const servicesDropdownRef = useRef<HTMLDivElement>(null);

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

    return (
        <div className="absolute top-20 right-0 w-[160px] h-auto bg-white rounded-md shadow-lg p-6 z-20">
            <nav className="space-y-4">
                <Link
                    href="/"
                    className="block text-gray-400 hover:text-gray-700 text-sm font-zendots"
                >
                    {t("home")}
                </Link>
                <hr className="border-gray-200" />

                {/* Dropdown de About Us */}
                <div className="relative" ref={aboutDropdownRef}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // Evita navegar
                            setAboutDropdownOpen((prev) => !prev);
                        }}
                        className="block text-gray-400 hover:text-gray-700 text-sm font-zendots mb-3"
                    >
                        {t("aboutUs")}
                        <IoIosArrowDown className="inline ml-1 text-lg" />
                    </a>
                    <hr className="border-gray-200" />

                    {/* Submenú (visible solo si aboutDropdownOpen === true) */}
                    <div
                        className={`mt-2 bg-white text-black rounded-md shadow-lg w-full ${
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

                {/* Dropdown de Services */}
                <div className="relative" ref={servicesDropdownRef}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // Evita navegar
                            setServicesDropdownOpen((prev) => !prev);
                        }}
                        className="block text-gray-400 hover:text-gray-700 text-sm font-zendots mb-3"
                    >
                        {t("services")}
                        <IoIosArrowDown className="inline ml-1 text-lg" />
                    </a>
                    <hr className="border-gray-200" />

                    {/* Submenú (visible solo si servicesDropdownOpen === true) */}
                    <div
                        className={`mt-2 bg-white text-black rounded-md shadow-lg w-full ${
                            servicesDropdownOpen ? "block" : "hidden"
                        }`}
                    >
                        <Link
                            href={t("servicesComprehensiveProjectsLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesComprehensiveProjects")}
                        </Link>
                        <Link
                            href={t("servicesEnvironmentalImpactProceduresLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesEnvironmentalImpactProcedures")}
                        </Link>
                        <Link
                            href={t("servicesCoursesWorkshopsLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesCoursesWorkshops")}
                        </Link>
                        <Link
                            href={t("servicesSocioculturalSolutionsLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesSocioculturalSolutions")}
                        </Link>
                        <Link
                            href={t("servicesEnvironmentalSolutionsLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesEnvironmentalSolutions")}
                        </Link>
                        <Link
                            href={t("servicesOthersLink")}
                            className="block px-4 py-2 text-[10px] hover:bg-gray-200 font-zendots"
                        >
                            {t("servicesOthers")}
                        </Link>
                    </div>
                </div>

                <Link
                    href={t("blogLink")}
                    className="block text-gray-400 hover:text-gray-700 text-sm font-zendots"
                >
                    {t("blog")}
                </Link>
                <hr className="border-gray-200" />

                <Link
                    href={t("contactLink")}
                    className="block text-gray-400 hover:text-gray-700 text-sm font-zendots"
                >
                    {t("contact")}
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;
