"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // For links
import LogoVerde from "@/assets/images/LogoVerde.png"; // Default image for blogpost
import { CiCirclePlus } from "react-icons/ci";
import InferiorBlog from "@/assets/images/InferiorBlog.png";
import {useTranslations} from "next-intl";

interface Blog {
    imagen: string;
    descripcion: string;
    autor: string;
    link: string; // Blogpost link
}

interface PostAPI {
    author: number;
    featured_media: number | null;
    title: {
        rendered: string;
    };
    link: string; // Blogpost URL
}

const fetchAuthor = async (authorId: number) => {
    const response = await fetch(`https://blog.verderaiz.com.mx/wp-json/wp/v2/users/${authorId}`);
    const authorData = await response.json();
    return authorData.name;
};

const fetchImage = async (mediaId: number) => {
    const response = await fetch(`https://blog.verderaiz.com.mx/wp-json/wp/v2/media/${mediaId}`);
    const mediaData = await response.json();
    return mediaData.source_url;
};

function Library() {
    const t = useTranslations("heroBlog");
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Estado y efecto para animar los puntos de "Loading..."
    const [loadingDots, setLoadingDots] = useState<string>("");

    useEffect(() => {
        // Cada 500ms, alterna la cantidad de puntos (., .., ...)
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
                const response = await fetch("https://blog.verderaiz.com.mx/wp-json/wp/v2/posts");
                const data = await response.json();

                const formattedBlogs: Blog[] = await Promise.all(
                    data.map(async (post: PostAPI): Promise<Blog> => {
                        const autor = await fetchAuthor(post.author);
                        const imagen = post.featured_media
                            ? await fetchImage(post.featured_media)
                            : LogoVerde; // Default image

                        return {
                            imagen,
                            descripcion: post.title.rendered,
                            autor,
                            link: post.link, // Blogpost link
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

    // PRELOADER (mismo estilo del primer componente, pero con colores invertidos)
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] relative">
                {/* Barra de progreso */}
                <div className="relative w-64 h-8 border-[3px] border-blog-BG rounded-full overflow-hidden">
                    {/* Interior de la barra animada */}
                    <div className="absolute top-0 left-0 h-full bg-blog-BG rounded-full animate-progressBar" />
                </div>

                {/* Texto de Loading con puntos que van cambiando */}
                <p className="text-blog-BG text-xl mt-3">
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
        <div className="flex flex-col items-right justify-center relative">
            <Image
                src={InferiorBlog}
                alt="InferiorBlog"
                className="absolute hidden bottom-0 md:flex lg:-bottom-[400px] lg:w-7/12 xl:w-1/4 xl:-bottom-[100px]"
            />

            <div className="z-10">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center justify-center">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="w-[300px] flex flex-col items-start rounded-lg p-4"
                        >
                            <Image
                                src={blog.imagen || LogoVerde}
                                alt={`Imagen blog ${index + 1}`}
                                width={250}
                                height={180}
                                priority
                                className="rounded-2xl object-cover w-[250px] h-[250px]"
                                unoptimized
                            />
                            <div className="flex flex-row items-start justify-between w-full mt-3">
                                <div>
                                    <p className="text-black font-bold text-left text-sm line-clamp-2">
                                        {blog.descripcion}
                                    </p>
                                    <p className="text-gray-500 text-left text-xs mt-1">
                                        {blog.autor}
                                    </p>
                                </div>
                                <Link href={blog.link}>
                                    <button
                                        className="transform transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:scale-125">
                                        <CiCirclePlus className="text-dark-green font-light text-[40px]"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Library;
