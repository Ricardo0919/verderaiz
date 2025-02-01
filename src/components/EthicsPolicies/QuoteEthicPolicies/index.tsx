"use client";
import React from "react";
import Image from "next/image";
import QuoteEthicsPoliciesIMG from "@/assets/images/QuoteEthicsPolicies.png";
import QuoteEthicsPoliciesLG from "@/assets/images/QuoteEthicsPoliciesLG.png";
import {useTranslations} from "next-intl";

function QuoteEthicsPolicies() {
    const t = useTranslations("quoteEthicPolicies");
    return (
        <div className="bg-light-beige pb-10 md:pt-10 lg:pt-16">
            <div className="bg-light-green rounded-[40px] md:rounded-[80px] mx-10 md:mx-12 lg:mx-16 xl:mx-32 p-8 md:py-16 md:px-12 lg:py-24 lg:px-20 xl:py-32">
                <p className="text-center text-black font-bold text-sm md:text-base lg:text-lg xl:text-2xl">
                    {t("title")}
                </p>
            </div>

            <div className="flex flex-col items-center justify-center -mt-5 md:-mt-10 lg:-mt-16 xl:-mt-24">
                <div className="relative w-1/2">
                    <Image
                        src={QuoteEthicsPoliciesIMG}
                        alt="QuoteEthicsPoliciesIMG"
                        className="lg:hidden w-full h-auto"
                    />
                    <Image
                        src={QuoteEthicsPoliciesLG}
                        alt="QuoteEthicsPoliciesLG"
                        className="hidden lg:flex w-full h-auto"
                    />
                    <p className="absolute inset-0 flex items-center justify-center text-center text-white text-[12px] px-3 md:text-3xl md:px-12 lg:text-3xl xl:text-4xl xl:px-24">
                        {t("quote")}
                    </p>
                </div>
            </div>


        </div>
    );
}

export default QuoteEthicsPolicies;
