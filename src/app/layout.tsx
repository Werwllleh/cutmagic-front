import "@/styles/styles.scss";
import Providers from "@/app/providers";
import {ReactNode, Suspense} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import YandexMetrica from "@/components/yandex-metrica";
import Head from "next/head";


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {


  return (
    <html lang="ru">
    <Head>
      <meta name="yandex-verification" content="55c067d38c5b6b11"/>
    </Head>
    <body>
    <Providers>
      <Header/>
      <main>
      <Suspense fallback={null}>
          {children}
          <YandexMetrica />
        </Suspense>
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
