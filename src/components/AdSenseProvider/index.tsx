"use client";

import { useEffect } from "react";

export default function Index() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6543351954015298";
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null; // No renderiza nada, solo inyecta el script
}
