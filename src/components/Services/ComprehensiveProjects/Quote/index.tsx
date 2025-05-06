"use client";
import React from "react";
import { useTranslations } from "next-intl";

function Quote() {
    const t = useTranslations("comprehensiveProjectsQuote");

    return (
        <div className="bg-light-beige">
            <p className="text-black text-center uppercase tracking-[3px] font-bold px-10 py-10 font-cambay md:text-2xl md:px-16 md:py-16 lg:text-3xl lg:px-52 lg:py-0 lg:pt-20 lg:pb-10 xl:px-[400px]">
                {t.rich("quote", {
                    code: (chunks) => (
                        <code className="text-light-green-blog">
                            {chunks}
                        </code>
                    ),
                })}
            </p>
        </div>
    );
}

export default Quote;
