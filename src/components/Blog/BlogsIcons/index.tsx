"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // For links
import SuperiorBlog from "@/assets/images/SuperiorBlog.png";
import InferiorBlog from "@/assets/images/InferiorBlog.png";
import LogoVerde from "@/assets/images/LogoVerde.png"; // Default image for blogpost
import { CiCirclePlus } from "react-icons/ci";

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

function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    if (loading) {
        return <p>Cargando blogs...</p>;
    }

    return (
        <div className="bg-white relative z-10">
            <div className="text-right overflow-hidden">
                <Image
                    src={SuperiorBlog}
                    alt="Superior"
                    priority
                    className="inline-block w-full rotate-[-20deg] md:rotate-[-30deg] translate-x-20 -translate-y-32 md:w-2/3 md:translate-x-8 md:-translate-y-[150px] lg:md:-translate-y-[280px] xl:md:-translate-y-[480px]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center justify-center -mt-32 md:-mt-[180px] lg:-mt-[340px] xl:-mt-[560px]">
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
                                <button className="transform transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:scale-125">
                                    <CiCirclePlus className="text-dark-green font-light text-[40px]" />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white relative z-10">
                <Image
                    src={InferiorBlog}
                    alt="Inferior"
                    priority
                />
            </div>
        </div>
    );
}

export default Blogs;
