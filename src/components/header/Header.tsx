"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header(): React.ReactElement | null {
  const [showTooltip, setShowTooltip] = useState(false);
  // Get the current pathname
  const pathname = usePathname();

  // State for the visibility of the mobile menu
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  // Memoized callback for handling the dropdown menu toggle
  const handleToggleDropDown = useCallback((): void => {
    // Toggle the dropdown menu visibility
    setIsDropDownOpen((prev) => !prev);
  }, []);

  // Effect for closing the dropdown menu when the pathname changes
  useEffect(() => {
    // Close the dropdown menu
    setIsDropDownOpen(false);
  }, [pathname]);

  return (
    // Header container
    <div className="h-16 w-[95%] sm:w-[72.5%] rounded-full sm:bg-[#1C1C1C08] sm:backdrop-blur-sm border border-[#E0E0E033] absolute top-5 sm:top-10 left-[2.5%] sm:left-[13.75%] z-50 flex flex-row items-center justify-between px-2 sm:px-7">
      {/* Line stroke */}
      <Image
        src={"/images/line-stroke.png"}
        alt="line-stroke"
        className="absolute -top-0.5 left-[50%] translate-x-[-50%] object-contain"
        width={250}
        height={5}
      />
      {/* Logo */}
      <div className="sm:basis-1/5 flex items-center">
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      {/* Navigation links */}
      <div className="hidden lg:flex flex-1 justify-center sm:basis-1/3">
        <div
          className={`hidden sm:flex flex-row items-center justify-center gap-5 text-nav-link ${
            pathname === "/" || pathname.startsWith("/podcast")
              ? "text-white"
              : "text-heading"
          } font-semibold`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/podcast"}>Podcast</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/news"}>News</Link>
        </div>
      </div>
      {/* Hamburger menu button */}
      <button
        className="lg:hidden flex items-center justify-center mr-2.5"
        onClick={handleToggleDropDown}
      >
        {/* Hamburger menu icon */}
        <Bars3Icon
          className={`size-6 ${
            pathname === "/" || pathname === "/podcast" || pathname === "/news"
              ? "text-white"
              : "text-heading"
          }`}
        />
      </button>
      {/* Mobile menu */}
      {isDropDownOpen && (
        <div
          className={`sm:hidden absolute left-0 top-16 h-fit w-full py-5 rounded-4xl bg-[#1C1C1C08] backdrop-blur-sm border border-[#E0E0E033] flex flex-col items-center gap-2.5 font-semibold text-nav-link 
            ${
              pathname === "/" || pathname === "/podcast"
                ? "text-white"
                : "text-heading"
            }`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/podcast"}>Podcast</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/news"}>News</Link>
        </div>
      )}
      <div className="flex items-center justify-center sm:basis-1/3">
        <button
          onClick={() => window.open("https://app.godimi.com", "_blank")}
          className={`rounded-full w-[130px] h-[48px] font-medium text-lg ${
            pathname === "/" || pathname === "/podcast"
              ? "text-white"
              : "text-heading"
          } relative cursor-pointer`}
        >
          Log In
        </button>
        <div className="relative group">
          <button
            onClick={() =>
              window.open("https://app.godimi.com/signup", "_blank")
            }
            className="bg-[#E5AB4E] rounded-full w-[130px] h-[48px] font-medium text-lg text-[#FFF] relative cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
