"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
// Si usas next-intl (lo dejo como en tu snippet)
import { useTranslations } from "next-intl";

// Imagen de fallback local
import LogoVerde from "@/assets/images/LogoVerde.png";

// Función para quitar etiquetas HTML de un excerpt
function stripHTML(html: string): string {
    return html.replace(/<[^>]*>?/gm, "");
}

// Tipado básico del post que devuelve WP con _embed
interface WPPost {
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    _embedded?: {
        author?: Array<{
            name: string;
        }>;
        "wp:featuredmedia"?: Array<{
            source_url: string;
        }>;
    };
}

// Estructura interna que vas a usar en tu estado
interface Blog {
    imagen: string;      // URL final de la imagen
    title: string;
    authorName: string;
    link: string;
    snippet: string;     // texto corto
}

export default function FindOut() {
    // Asumiendo que usas next-intl para traducciones
    const t = useTranslations("findOutHome");
    const l = useTranslations("heroBlog");
    const n = useTranslations("navbar");

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingDots, setLoadingDots] = useState("");

    // Animación de puntos en "Loading..."
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingDots((prev) => (prev === "..." ? "" : prev + "."));
        }, 700);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                // 1) Petición a la API de WP con _embed
                const response = await fetch(
                    "https://blog.verderaiz.com.mx/wp-json/wp/v2/posts?_embed"
                );
                if (!response.ok) {
                    throw new Error(`Error al obtener posts: ${response.status} ${response.statusText}`);
                }
                const data: WPPost[] = await response.json();

                // 2) Toma solo los primeros 2 posts
                const firstTwoPosts = data.slice(0, 2);

                // 3) Mapea la data para extraer lo necesario
                const loadedBlogs: Blog[] = firstTwoPosts.map((post, index) => {
                    const authorObj = post._embedded?.author?.[0];
                    const authorName = authorObj ? authorObj.name : "Desconocido";
                    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

                    // Si no existe featuredMedia, usa el fallback
                    const imagen = featuredMedia ? featuredMedia.source_url : LogoVerde.src;

                    // Trunca el excerpt a 100 caracteres
                    const rawExcerpt = stripHTML(post.excerpt.rendered);
                    const snippet =
                        rawExcerpt.length > 100 ? rawExcerpt.slice(0, 100) + "..." : rawExcerpt;

                    // Para debuguear, imprimo en consola
                    console.log(`Post #${index + 1}:`);
                    console.log("   Título:", post.title.rendered);
                    console.log("   URL imagen destacada:", featuredMedia?.source_url || "Sin imagen destacada");
                    console.log("   URL final usada:", imagen);

                    return {
                        imagen,
                        title: post.title.rendered,
                        authorName,
                        link: post.link,
                        snippet,
                    };
                });

                setBlogs(loadedBlogs);
            } catch (error) {
                console.error("Error al obtener los blogs:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    // Preloader / Loading
    if (loading) {
        return (
            <div className="bg-light-beige flex flex-col items-center justify-center min-h-[50vh]">
                <div className="relative w-64 h-8 border-[3px] border-dark-green rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-dark-green animate-progressBar" />
                </div>
                <p className="text-dark-green text-xl mt-3">
                    {l("preloader")}
                    {loadingDots}
                </p>
                <style jsx>{`
                    @keyframes progressBar {
                        0% {
                            width: 0;
                        }
                        50% {
                            width: 100%;
                        }
                        100% {
                            width: 0;
                        }
                    }
                    .animate-progressBar {
                        animation: progressBar 2s infinite linear;
                    }
                `}</style>
            </div>
        );
    }

    // Render principal
    return (
        <div className="flex flex-col justify-center items-center px-10 text-black pt-10 pb-10 lg:flex-row lg:px-16 lg:gap-20 bg-light-beige">
            {/* Columna izquierda: título y botón */}
            <div className="lg:w-1/3">
                <h1 className="text-center lg:text-left tracking-[5px] font-cambay font-black text-4xl lg:text-4xl xl:text-5xl">
                    {t("title")}
                </h1>
                <p className="text-sm py-4 lg:text-lg xl:text-2xl font-montserrat">
                    {t.rich("description", {
                        code: (chunks) => (
                            <code className="font-black font-montserrat">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
                <Link href={n("blogLink")}>
                    <button className="border-2 xl:border-[3px] border-dark-green rounded-2xl px-4 lg:px-6 transform hover:scale-125 transition-transform duration-300">
                        <FaArrowRightLong className="text-xl lg:text-3xl text-dark-green" />
                    </button>
                </Link>
            </div>

            {/* Columna derecha: renderiza las cards de los 2 blogs */}
            <div className="mt-6 flex flex-col md:flex-row md:gap-10 lg:w-1/2">
                {blogs.map((blog, index) => (
                    <div className="md:w-1/2 mt-8 md:mt-0" key={index}>
                        <div className="relative w-60 h-60 lg:w-52 lg:h-52 xl:w-60 xl:h-60 mx-auto rounded-[30px]">
                            {/* Imagen principal */}
                            <Image
                                src={blog.imagen}
                                alt={`Blog image ${index}`}
                                // La imagen se ajusta a las dimensiones del padre
                                className="object-cover w-full h-full rounded-[30px]"
                                width={400}
                                height={400}
                            />

                            {/* Overlay oscuro */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[30px]"/>

                            {/* Capa centrada con el título */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-white px-6 font-black text-lg text-center lg:text-sm xl:text-lg">
                                    {blog.title}
                                </p>
                            </div>

                            {/* Botón "View more" con link al post */}
                            <Link
                                href={blog.link}
                                className="absolute inset-0 flex flex-col items-center justify-end mb-12 lg:mb-6 xl:mb-8"
                            >
                                <button
                                    className="font-zendots text-white border-2 border-white py-2 px-4 lg:px-2 lg:py-1 xl:px-3 xl:py-2 rounded-[30px] text-xs lg:text-[10px] xl:text-[20px] transform hover:scale-125 transition-transform duration-300">
                                    {t("viewMore")}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
