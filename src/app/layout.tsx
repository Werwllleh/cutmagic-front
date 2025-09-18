import "@/styles/styles.scss";
import Providers from "@/app/providers";
import {ReactNode, Suspense} from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import YandexMetrica from "@/components/yandex-metrica";


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

  return (
    <html lang="ru">
    <body>
    <Providers>
      <Header />
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
