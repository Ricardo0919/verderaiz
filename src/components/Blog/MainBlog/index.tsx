"use client";
import React from "react";
import Image from "next/image";
import mainBlog from "@/assets/images/mainBlog.png";
import blogBG2 from "@/assets/images/blogBG2.png";

function MainBlog() {
    return (
        <div className="flex flex-col -mt-1 items-center justify-center relative">
            <Image
                src={blogBG2}
                alt="blogBG2"
                className="absolute right-0 hidden md:flex md:w-2/3 md:h-[400px] xl:h-[600px]"
            />

            <div
                className="
        flex
        flex-col
        pb-10
        md:pt-10
        lg:pt-10
        xl:pt-20
        md:flex-row
        md:items-stretch
        md:px-12
        md:gap-10
        lg:px-32
        xl:px-40
        md:pb-20
        lg:pb-28
        z-10
      "
            >
                {/* Columna Izquierda */}
                <div className="mx-8 flex flex-col gap-y-6 pb-6 md:pb-0 md:mx-0 md:w-7/12">
                    <div className="bg-light-green-blog rounded-[20px] text-center">
                        <p className="px-8 py-2 uppercase font-cambay font-bold lg:text-xl xl:text-2xl xl:py-4">
                            Innovación y técnicas para vivir de forma sustentable
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            src={mainBlog}
                            alt="MainBlog"
                            priority
                            className=""
                        />
                        <p
                            className="
              absolute
              bottom-3 left-3
              text-[12px] font-bold font-cambay uppercase
              md:bottom-5 md:left-5 md:right-5 md:text-base
              lg:text-lg
              xl:text-2xl
            "
                        >
                            Innovación y técnicas para vivir de forma sustentable
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                {/* Hacemos que este contenedor ocupe todo el alto (md:h-full)
          y dentro creamos dos div flex-1 para que se repartan 50/50 */}
                <div className="mx-8 flex flex-col gap-y-6 md:mx-0 md:w-5/12 md:h-full">
                    <div
                        className="
            bg-light-green-blog
            rounded-[20px]
            text-center
            px-8 py-2
            font-cambay font-bold md:text-[12px]
            lg:py-4 lg:text-[12px]
            xl:py-10 xl:text-[16px]
            flex-1
          "
                    >
                        En México, se generan diariamente 102.895 toneladas de residuos sólidos urbanos (RSU), de los cuales se recolecta el 83,93% y se disponen en sitios de disposición final el 78,54%. Sin embargo, solo el 9,63% de los RSU generados se reciclan, lo que indica un amplio margen de mejora en prácticas de economía circular (INEGI, 2023)
                    </div>
                    <div
                        className="
            bg-light-green-blog
            rounded-[20px]
            text-center
            px-8 py-2
            font-cambay font-bold md:text-[12px]
            lg:py-4 lg:text-[12px]
            xl:py-10 xl:text-[16px]
            flex-1
          "
                    >
                        Se estimó que los impactos climáticos alcanzan, en promedio, el 6.22% del PIB actual. Mientras que los costos de mitigación del 50% de las emisiones representarían el
                        0.7 y 2.21% del PIB (SEMARNAT, 2009).
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlog;
