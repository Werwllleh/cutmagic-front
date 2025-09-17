import "@/styles/styles.scss";
import Providers from "@/app/providers";
import {ReactNode, Suspense} from "react";
import Footer from "@/components/footer";
import Head from "next/head";


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {

  return (
    <html lang="ru">
    <body>
    <Providers>
      <main>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  );
}
