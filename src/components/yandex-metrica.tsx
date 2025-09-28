"use client"

import React, {useEffect, useState} from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import Script from "next/script";
import {ymReach} from "@/utils";

const base = "https://cutmagic.ru";

const YandexMetrica = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();

    const [isDev, setIsDev] = useState(true);


    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDev(window.location.hostname === "localhost");
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && window.ym) {
            const params = searchParams.toString();
            const url = base + pathName + (params ? "?" + params : "");
            ymReach("hit", url);
        }
    }, [pathName, searchParams]);

    if (isDev) return null;

    return (
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],
          k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${Number(process.env.NEXT_PUBLIC_YMETRIKA)}, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        });
      `}
        </Script>
    );
};

export default YandexMetrica;
