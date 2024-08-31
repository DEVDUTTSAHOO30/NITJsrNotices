import "./globals.css";

import ThemeProvider from "@/theme";
import Nav from "@/components/nav"; //..................
import { DrawerContextProvider } from "@/context/drawer-context";
import Sidenav from "@/components/sidenav"; //...............

import Footer from "@/components/footer"; //......................
import ScrollTop from "@/components/scroll-top/scroll-top";
import { defaultLocale } from "@/middleware";
import HomePageLinks from "@/sections/home/home-page-links";
import SectionLinks from "@/sections/home/section-links";
import { notFound } from "next/navigation";
import getLocaleServer from "@/utils/get-locale-server";

export const metadata = {
  title: "NIT Jamshedpur",
  description: "none",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  {
    console.log(params.locale);
  }
  const locale = getLocaleServer();
  return (
    <html lang={params.locale ?? defaultLocale}>
      <body>
        <ThemeProvider>
          <DrawerContextProvider>
            <Nav />
            <Sidenav currentLocale={locale} />
            <ScrollTop />
            <div style={{ minHeight: "80vh" }}>{children}</div>
            {/* <HomePageLinks />
            <SectionLinks /> */}
            <Footer />
          </DrawerContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
