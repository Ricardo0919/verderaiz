"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SuperiorBlog from "@/assets/images/SuperiorBlog.png";
import InferiorBlog from "@/assets/images/InferiorBlog.png";
import { CiCirclePlus } from "react-icons/ci";

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
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://blog.verderaiz.com.mx/wp-json/wp/v2/posts");
                const data = await response.json();

                const formattedBlogs = await Promise.all(
                    data.map(async (post: any) => {
                        const autor = await fetchAuthor(post.author);
                        const imagen = post.featured_media
                            ? await fetchImage(post.featured_media)
                            : "";

                        return {
                            imagen,
                            descripcion: post.title.rendered,
                            autor,
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
        <div className="bg-white -mb-[400px] md:-mb-[700px]">
            <div className="text-right overflow-hidden">
                <Image
                    src={SuperiorBlog}
                    alt="Superior"
                    priority
                    className="inline-block w-full rotate-[-20deg] md:rotate-[-30deg] translate-x-20 -translate-y-32 md:w-2/3  md:translate-x-8 md:-translate-y-[150px] lg:md:-translate-y-[280px] xl:md:-translate-y-[480px]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center justify-center -mt-32 md:-mt-[180px] lg:-mt-[340px] xl:-mt-[560px]">
                {blogs.map((blog, index) => (
                    <div key={index} className="w-[200px] md:w-[300px] lg:w-[230px]">
                        {blog.imagen && (
                            <Image
                                src={blog.imagen}
                                alt={`Imagen blog ${index + 1}`}
                                width={300}
                                height={200}
                                priority
                                className="rounded-2xl"
                            />
                        )}
                        <div className="flex flex-row items-center justify-center pt-3 mx-1">
                            <p className="text-black font-bold text-left text-xs md:text-base lg:text-sm">
                                {blog.descripcion}
                            </p>
                            <button className="transform transition-transform duration-500 ease-in-out hover:rotate-[360deg] hover:scale-125">
                                <CiCirclePlus className="text-dark-green font-light size-[50px] md:size-[60px]" />
                            </button>
                        </div>
                        <p className="text-gray-500 text-left text-xs mx-1 mt-1 md:text-base lg:text-sm">
                            {blog.autor}
                        </p>
                    </div>
                ))}
            </div>

            <Image
                src={InferiorBlog}
                alt="Inferior"
                priority
                className="items-start -translate-y-[480px] md:-translate-y-[720px]"
            />
        </div>
    );
}

export default Blogs;
