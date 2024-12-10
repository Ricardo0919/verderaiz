"use client";
import React from 'react';
import MainBlogImg from "@/assets/images/MainBlog.png";
import Image from "next/image";

function MainBlog() {
    return (
        <div className="bg-blog-BG flex flex-col items-center justify-center py-6 px-8 md:flex-row gap-y-4 md:gap-y-0 md:gap-4">
            {/* Primera fila: Bloque 1 y Bloque 2 */}
            <div className="flex flex-col items-center justify-center w-full gap-y-4 ">
                <div className="bg-main-blog text-white rounded-[30px] py-4 px-1 shadow-lg text-center">
                    <p className="text-xl font-bold">
                        Innovación y técnicas para vivir de forma sustentable
                    </p>
                </div>
                <div className="relative">
                    <Image
                        src={MainBlogImg}
                        alt="Main Blog"
                        className="rounded-[30px] shadow-lg w-full md:h-[300px]"
                    />
                    <div className="absolute bottom-2 left-5">
                        <p className="text-xl font-bold">
                            TITULO DE BLOG
                        </p>
                    </div>
                </div>
            </div>

            {/* Segunda fila: Bloque 2 y Bloque 3 */}
            <div className="flex flex-col items-center justify-center w-full gap-y-4 md:gap-y-6">
                <div
                    className="bg-main-blog text-white rounded-[30px] py-4 px-6 shadow-lg flex justify-center items-center md:h-[190px]">
                    <p className="w-1/3 text-center text-5xl font-medium">
                        61 %
                    </p>
                    <p className="w-2/3 text-sm">
                        Datos sobre saques que, datos duros y esas cosas para llama la atencion de la gente inculta ambientalmente.
                    </p>
                </div>
                <div className="bg-main-blog text-white rounded-[30px] py-4 px-6 shadow-lg flex justify-center items-center md:h-[190px]">
                    <p className="w-1/3 text-center text-5xl font-medium">
                        61 %
                    </p>
                    <p className="w-2/3 text-sm">
                        Datos sobre saques que, datos duros y esas cosas para llama la atencion de la gente inculta
                        ambientalmente
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainBlog;
