"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import blogBG3 from "@/assets/images/blogBG3.png";
import Logo from "@/assets/images/Logo.png"; // Default image for blog posts
import Link from "next/link";
import {useTranslations} from "next-intl";

interface Blog {
    imagen: string;
    descripcion: string;
    autor: string;
    link: string;
}

interface PostAPI {
    author: number;
    featured_media: number | null;
    title: {
        rendered: string;
    };
    link: string;
}

const fetchImage = async (mediaId: number) => {
    const response = await fetch(
        `https://blog.verderaiz.com.mx/wp-json/wp/v2/media/${mediaId}`
    );
    const mediaData = await response.json();
    return mediaData?.source_url || "";
};

function RecentBlogs() {
    const t = useTranslations("heroBlog");
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    // Control para el texto "Loading..." con puntos crecientes
    const [loadingDots, setLoadingDots] = useState<string>("");

    useEffect(() => {
        // Cada 500 ms, alterna la cantidad de puntos (., .., ...)
        const interval = setInterval(() => {
            setLoadingDots((prev) => {
                if (prev === "...") return "";
                return prev + ".";
            });
        }, 700);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "https://blog.verderaiz.com.mx/wp-json/wp/v2/posts"
                );
                const data: (PostAPI & { authors?: { display_name: string }[] })[] = await response.json();

                const firstFourPosts = data.slice(0, 4);

                const formattedBlogs: Blog[] = await Promise.all(
                    firstFourPosts.map(async (post) => {
                        const autor = post.authors && post.authors.length > 0
                            ? post.authors.length > 1
                                ? `${post.authors[0].display_name} et al`
                                : post.authors[0].display_name
                            : "Anónimo";

                        let imagen = "";

                        if (post.featured_media) {
                            imagen = await fetchImage(post.featured_media);
                        }

                        if (!imagen) {
                            imagen = Logo.src;
                        }

                        return {
                            imagen,
                            descripcion: post.title.rendered,
                            autor,
                            link: post.link,
                        };
                    })
                );

                setBlogs(formattedBlogs);
            } catch (error) {
                console.error("Error al obtener los blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleArrowClick = (index: number, link: string) => {
        setClickedIndex(index);
        setTimeout(() => {
            window.open(link, "_blank");
        }, 500);
    };

    // PRELOADER
    if (loading) {
        return (
            <div className="bg-blog-BG flex flex-col items-center justify-center min-h-[50vh] -mt-1">
                {/* Barra de progreso */}
                <div className="relative w-64 h-8 border-[3px] border-white rounded-full overflow-hidden">
                    {/* Interior de la barra animada */}
                    <div className="absolute top-0 left-0 h-full bg-white rounded-full animate-progressBar" />
                </div>

                {/* Texto de Loading con puntos que van cambiando */}
                <p className="text-white text-xl mt-3">
                    {t("preloader")}{loadingDots}
                </p>

                {/* Definimos la animación para la barra de progreso */}
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

    // RENDER PRINCIPAL (cuando ya cargaron los blogs)
    return (
        <div className="bg-blog-BG flex flex-col items-right justify-center relative -mt-1">
            <Image
                src={blogBG3}
                alt="blogBG3"
                className="absolute lg:w-2/3 lg:h-[400px] xl:w-[1000px] xl:h-[400px] bottom-0 right-0 hidden md:flex"
            />

            <div className="z-10">
                {/* Contenedor general con padding */}
                <div className="container mx-auto p-8">
                    {/*
          Grid responsiva
          1 col -> mobile
          2 col -> md
          4 col -> lg y xl
          place-items-center para que cada 'tarjeta' quede centrada
        */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 place-items-center">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/*
                Contenedor de la imagen
                Usamos clases responsivas para cambiar el tamaño en distintos breakpoints
              */}
                                <div
                                    className="
                  relative
                  w-[220px] h-[220px]
                  md:w-[220px] md:h-[220px]
                  lg:w-[180px] lg:h-[180px]
                  xl:w-[200px] xl:h-[200px]
                  rounded-[30px] overflow-hidden
                "
                                >
                                    <Link href={blog.link}>
                                        <Image
                                            src={blog.imagen}
                                            alt={`Imagen blog ${index + 1}`}
                                            fill
                                            className="rounded-[30px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-95"
                                            sizes="(max-width: 768px) 220px,
                             (max-width: 1024px) 180px,
                             200px"
                                            unoptimized
                                        />
                                    </Link>

                                    {/* Flecha animada */}
                                    <FaRegArrowAltCircleRight
                                        onClick={() => handleArrowClick(index, blog.link)}
                                        className={`
                    text-white text-3xl
                    absolute bottom-4 left-4
                    transform transition-transform duration-500 ease-in-out
                    cursor-pointer
                    ${
                                            clickedIndex === index
                                                ? "translate-x-20"
                                                : "translate-x-0"
                                        }
                  `}
                                    />
                                </div>

                                {/*
                Contenedor del texto debajo
                - Mismo ancho que la imagen
                - Mínima altura para mantener consistente la altura
                - line-clamp-2 para limitar el texto
              */}
                                <div
                                    className="
                  mt-4
                  border border-white
                  bg-blog-BG
                  rounded-[30px]
                  uppercase
                  text-right
                  px-4 py-3
                  w-[220px]
                  md:w-[220px]
                  lg:w-[180px]
                  xl:w-[200px]
                  min-h-[80px]
                  flex flex-col justify-center
                "
                                >
                                    <p className="text-xs font-cambay">Author: {blog.autor}</p>

                                    <p
                                        className="
                    text-sm font-bold mt-1
                    line-clamp-2
                    overflow-hidden
                    break-words
                    font-cambay
                  "
                                    >
                                        {blog.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentBlogs;
