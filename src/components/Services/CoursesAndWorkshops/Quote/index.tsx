"use client";
import React from "react";
import {useTranslations} from "next-intl";
import BGQuote from "@/assets/images/Services/CoursesAndWorkshops/Quote/BGQuote.png";
import Image from "next/image";

function Quote() {
    const t = useTranslations("coursesAndWorkshopsQuote");
    return (
        <div className="py-10 px-10 md:py-16 md:px-28 lg:px-40 lg:py-20 xl:px-72 xl:py-24 relative">
            <Image
                src={BGQuote}
                alt="BGQuote"
                className="absolute md:w-2/3 right-0 xl:w-1/2"
            />

            <div className="z-10">
                <p className="text-black text-center tracking-[8px] font-cambay font-bold border-[#263c2c] border-[3px] uppercase lg:border-[4px] rounded-2xl px-4 pt-2 mx-4 md:mx-36 md:py-3 lg:mx-48 lg:py-4 xl:mx-54 xl:py-6 md:text-lg lg:text-2xl xl:text-3xl">
                    {t("title")}
                </p>
                <p className="text-black text-center uppercase tracking-[3px] font-bold lg:px-10 py-10 font-cambay md:text-2xl md:py-16 lg:text-3xl lg:py-0 lg:pt-20 lg:pb-10">
                    {t.rich("description1", {
                        code: (chunks) => (
                            <code className="text-light-green-blog">
                                {chunks}
                            </code>
                        ),
                    })}
                </p>
            </div>

        </div>
    );
}

export default Quote;