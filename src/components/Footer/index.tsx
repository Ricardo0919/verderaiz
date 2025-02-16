"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import background from "@/assets/images/FooterBG.png";
import { useTranslations } from "next-intl";

function Footer() {
    const t = useTranslations("footer");

    // 1. Estado local para los campos del formulario
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
    });

    // 2. Manejar cambios en los inputs
    //    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 3. Manejar envío del formulario
    //    e: FormEvent<HTMLFormElement>
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Hacemos POST a nuestra ruta de API
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Correo enviado exitosamente");
                setFormData({ name: "", phone: "", email: "", city: "", message: "" });
            } else {
                alert("Error al enviar correo: " + data.message);
            }
        } catch (error: unknown) {
            console.error("Error de red o servidor:", error);

            // Para extraer el mensaje, validamos si 'error' es Error real
            if (error instanceof Error) {
                alert("Error de red o servidor: " + error.message);
            } else {
                alert("Error desconocido");
            }
        }
    };

    return (
        <footer id="footer" className="relative text-center py-10">
            <div className="absolute inset-0">
                <Image src={background} alt="Footer Image" layout="fill" objectFit="cover" />
            </div>

            <div className="relative text-white mx-7">
                <h1 className="text-3xl tracking-[3px] lg:text-4xl xl:text-5xl font-semibold font-cambay lg:text-left lg:pl-10 lg:mb-8">
                    {t("title")}
                </h1>

                <div className="mt-4 flex flex-col lg:flex-row lg:gap-10 lg:mx-10 lg:mt-0 lg:items-center lg:justify-center">
                    {/* Contact Form */}
                    <div className="lg:w-1/3">
                        <p className="text-base font-bold font-zendots text-left">
                            {t("project")}
                        </p>
                        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                            {/* Input Fields */}
                            <input
                                type="text"
                                name="name"
                                placeholder={t("name")}
                                className="bg-light-green text-white text-sm p-3 rounded-[40px] focus:outline-none placeholder-white font-zendots"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder={t("phone")}
                                className="bg-light-green text-white text-sm p-3 rounded-[40px] focus:outline-none placeholder-white font-zendots"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder={t("mail")}
                                className="bg-light-green text-white text-sm p-3 rounded-[40px] focus:outline-none placeholder-white font-zendots"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder={t("city")}
                                className="bg-light-green text-white text-sm p-3 rounded-[40px] focus:outline-none placeholder-white font-zendots"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                placeholder={t("message")}
                                className="bg-light-green text-white text-sm p-3 rounded-[20px] h-32 focus:outline-none placeholder-white font-zendots"
                                value={formData.message}
                                onChange={handleChange}
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-light-green text-white text-sm font-semibold px-6 py-2 rounded-[40px] transform hover:scale-125 transition-transform duration-300 self-start font-zendots"
                            >
                                {t("button")}
                            </button>
                        </form>
                    </div>

                    {/* MAP */}
                    <div className="w-full h-96 mt-8 lg:w-1/3 lg:mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3735.087034695601!2d-100.413558!3d20.584503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDM1JzA0LjIiTiAxMDDCsDI0JzQ4LjgiVw!5e0!3m2!1ses-419!2smx!4v1733040502775!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-[20px]"
                        ></iframe>
                    </div>

                    {/* Information */}
                    <div className="border-2 border-white bg-dark-green rounded-[30px] mt-8 text-left lg:w-1/3 lg:mt-0">
                        <p className="text-3xl font-cambay font-black ml-7 mt-10">
                            {t("offices")}
                        </p>
                        <hr className="border-2 border-white my-4" />
                        <div className="mx-12 pt-4 pb-8">
                            <p className="text-2xl font-bold font-zendots">{t("address")}</p>
                            <p className="my-4">
                                Prol. Pino Suárez 365, Galindas, 76177 Santiago de Querétaro, Qro.
                            </p>
                            <p>
                                <a href="tel:+524424370180" className="font-bold hover:underline">
                                    442-437-0180
                                </a>
                            </p>
                            <p>
                                <a href="tel:+524424711062" className="font-bold hover:underline">
                                    442-471-1062
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
