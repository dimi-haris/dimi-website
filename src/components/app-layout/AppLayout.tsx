"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current pathname
  const pathname = usePathname();

  return (
    // Layout wrapper with background
    <div
      className={`h-fit w-screen ${
        pathname === "/about" ||
        pathname === "/blogs" ||
        pathname === "/services"
          ? "bg-screen-radial"
          : "bg-white"
      }`}
    >
      {(pathname === "/about" || pathname === "/services") && (
        <Image
          src={"/images/brush-stroke-2.png"}
          alt="brush-stroke"
          className="absolute top-24 right-0 object-contain z-0 w-[20%] sm:w-[12.5%]"
          height={535}
          width={215}
        />
      )}
      {(pathname === "/about" || pathname === "/services") && (
        <Image
          src={"/images/music-1.png"}
          alt="music"
          className="absolute top-64 left-0 object-contain z-0"
          height={185}
          width={185}
        />
      )}
      {(pathname === "/about" || pathname === "/services") && (
        <Image
          src={"/images/music-2.png"}
          alt="music"
          className="absolute top-[450px] sm:top-[500px] left-[22.5%] object-contain z-0"
          height={200}
          width={200}
        />
      )}
      {/* Layout container */}
      <div className="w-full flex flex-col">
        {/* Header */}
        <Header />
        {/* Children */}
        <div className="w-full flex flex-col">{children}</div>
        {/* {Footer} */}
        {!(
          pathname === "/cookie-policy" ||
          pathname === "/privacy-policy" ||
          pathname === "/terms&Condition"
        ) && <Footer />}
      </div>
      {/* {cookies} */}
      <Script
        src="https://app.termly.io/resource-blocker/ea6fcd80-7ee8-4819-9f42-9399cb502d2e?autoBlock=on"
        strategy="afterInteractive"
      />
      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZLYLTJFSB0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLYLTJFSB0');
          `}
      </Script>
    </div>
  );
}
