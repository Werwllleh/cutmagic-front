import "@/styles/styles.scss";
import Providers from "@/app/providers";
import React, {ReactNode, Suspense} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import YandexMetrica from "@/components/yandex-metrica";


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

  return (
    <html lang="ru">
    <head>
      <meta name="yandex-verification" content="55c067d38c5b6b11"/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Парикмахерская Волшебные Ножницы",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "улица Академика В.Н.Челомея, 12, Чебоксары, Чувашская Республика — Чувашия",
              "addressLocality": "Чебоксары",
              "addressRegion": "Чувашская Республика",
              "postalCode": "428000",
              "addressCountry": "RU"
            },
            "telephone": "+79004515900",
            "url": "https://cutmagic.ru/",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "19:00"
            }
          }, null, 2)
        }}
      />
    </head>
    <body>
    <Providers>
      <Header/>
      <main>
      <Suspense fallback={null}>
          {children}
          <YandexMetrica/>
        </Suspense>
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
