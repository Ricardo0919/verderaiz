"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import mainBlog from "@/assets/images/Blog/MainBlog/mainBlog.png";
import blogBG2 from "@/assets/images/Blog/MainBlog/blogBG2.png";
import { useTranslations } from "next-intl";

function MainBlog() {
    const t = useTranslations("mainBlog");
    const [latestTitle, setLatestTitle] = useState<string>("");

    useEffect(() => {
        async function fetchLatestTitle() {
            try {
                const res = await fetch("https://blog.verderaiz.com.mx/wp-json/wp/v2/posts?_embed&per_page=1");
                const data = await res.json();
                const title = data?.[0]?.title?.rendered || "";
                setLatestTitle(title);
            } catch (error) {
                console.error("Error fetching blog title:", error);
            }
        }

        fetchLatestTitle();
    }, []);

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
                            {t("title")}
                        </p>
                    </div>

                    <div className="relative">
                        <Image
                            src={mainBlog}
                            alt="MainBlog"
                            priority
                        />
                        <p
                            className="
              absolute
              bottom-3 left-3
              text-[12px] font-bold font-cambay uppercase
              md:bottom-5 md:left-5 md:right-5 md:text-base
              lg:text-lg
              xl:text-2xl
              text-white drop-shadow-lg
            "
                        >
                            {latestTitle}
                        </p>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="mx-8 flex flex-col gap-y-6 md:mx-0 md:w-5/12 md:h-full">
                    <div
                        className="
            bg-light-green-blog
            rounded-[20px]
            text-center
            px-8 py-2
            font-cambay md:text-[16px]
            lg:py-4 lg:text-[19px]
            xl:py-10 xl:text-[25px]
            flex-1 uppercase
          "
                    >
                        {t.rich("quote1", {
                            code: (chunks) => (
                                <code className="font-black">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </div>
                    <div
                        className="
            bg-light-green-blog
            rounded-[20px]
            text-center
            px-8 py-2
            font-cambay md:text-[16px]
            lg:py-4 lg:text-[19px]
            xl:py-10 xl:text-[25px]
            flex-1 uppercase
          "
                    >
                        {t.rich("quote2", {
                            code: (chunks) => (
                                <code className="font-black">
                                    {chunks}
                                </code>
                            ),
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlog;
