import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";

//import 'bulma/css/bulma.min.css';
import './index.scss'

import "./globals.css";
//import { config } from '@fortawesome/fontawesome-svg-core'
//import '@fortawesome/fontawesome-svg-core/styles.css'
//config.autoAddCss = false

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kadirli Dil Kursu",
  description: "Kadirli Dil Kursu, her yaşa ve seviyeye uygun İngilizce eğitim programlarıyla dil öğrenmeyi kolay ve keyifli hale getiriyor. Hedefinize ulaşmak için doğru yerdesiniz.",
  keywords: "İngilizce kursu Kadirli",
};
*/
export const metadata: Metadata = {
  title: {
    template: '%s | Kadirli Dil Kursu',
    default: 'Kadirli Dil Kursu',
  },
  description: 'Kadirli Dil Kursu, her yaşa ve seviyeye uygun İngilizce eğitim programlarıyla dil öğrenmeyi kolay ve keyifli hale getiriyor. Hedefinize ulaşmak için doğru yerdesiniz.',
  keywords: 'İngilizce kursu Kadirli',
  
  //metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

interface RootesLayoutProps {
  children: React.ReactNode
}


const RootLayout = ({children}: RootesLayoutProps) => {
  return (
    <html lang="tr">
      <body className="index has-navbar-fixed-top theme-light">
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
    
  )
}

export default RootLayout

/*

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <header className="navbar">
        <ul>
          <li>
            <Link href="/">Ana sayfa</Link>
          </li>
          <li>
            <Link href="/about">Hakkımızda</Link>
          </li>
          <li>
            <Link href="/contact">İletişim</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Blog Post</Link>
          </li>
        </ul>
        </header>

        {children}
        <footer>Site Footer</footer>
      </body>
    </html>
  );
}
*/