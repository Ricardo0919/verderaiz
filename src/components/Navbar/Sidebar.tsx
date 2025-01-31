"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IoIosArrowDown } from "react-icons/io";

function Sidebar() {
    const t = useTranslations("navbar");

    // Estado y referencia para el dropdown de About Us
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cerrar el dropdown si se hace clic fuera de él
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
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
                <div className="relative" ref={dropdownRef}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault(); // Evita navegar
                            setDropdownOpen((prev) => !prev);
                        }}
                        className="block text-gray-400 hover:text-gray-700 text-sm font-zendots mb-3"
                    >
                        {t("aboutUs")}
                        <IoIosArrowDown className="inline ml-1 text-lg" />
                    </a>
                    <hr className="border-gray-200"/>

                    {/* Submenú (visible solo si dropdownOpen === true) */}
                    <div
                        className={`absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg ${
                            dropdownOpen ? "block" : "hidden"
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

                <Link
                    href={t("servicesLink")}
                    className="block text-gray-400 hover:text-gray-700 text-sm font-zendots"
                >
                    {t("services")}
                </Link>
                <hr className="border-gray-200" />

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
