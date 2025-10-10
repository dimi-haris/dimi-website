"use client";
import { useTermlyEmbed } from "@/hooks/useTermlyEmbed";
import Image from "next/image";
import React, { useEffect } from "react";


export default function PrivacyPolicyPage() {
  // useEffect(() => {
  //   const scriptId = "termly-jssdk";
  //   const embedSelector = "[name='termly-embed']";

  //   // 🔹 Ensure embed container is empty before reload
  //   const embedContainer = document.querySelector(embedSelector);
  //   if (embedContainer) embedContainer.innerHTML = "";

  //   const ensureTermlyLoaded = () => {
  //     if (window.Termly && typeof window.Termly.loadEmbeds === "function") {
  //       window.Termly.loadEmbeds();
  //       return true;
  //     }
  //     return false;
  //   };

  //   // 🔹 If script exists, try reinitializing
  //   if (document.getElementById(scriptId)) {
  //     // Try immediately, then retry every 500ms until it works
  //     let tries = 0;
  //     const interval = setInterval(() => {
  //       if (ensureTermlyLoaded() || tries > 10) clearInterval(interval);
  //       tries++;
  //     }, 500);
  //     return;
  //   }

  //   // 🔹 Otherwise, load script fresh
  //   const js = document.createElement("script");
  //   js.id = scriptId;
  //   js.src = "https://app.termly.io/embed-policy.min.js";
  //   js.async = true;
  //   js.onload = () => {
  //     // Try multiple times in case Termly takes a bit to init
  //     let tries = 0;
  //     const interval = setInterval(() => {
  //       if (ensureTermlyLoaded() || tries > 10) clearInterval(interval);
  //       tries++;
  //     }, 500);
  //   };
  //   document.body.appendChild(js);
  // }, []); // runs once on mount

useTermlyEmbed();
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        {/* ✅ Keep the name attr for Termly using React spread trick */}
        <div
          className="py-10"
          {...{ name: "termly-embed" }}
          data-id="b536f2c1-ec3e-4b68-9564-ad2c5cc5509b"
        ></div>
      </div>
      <div className="border-t border-gray-200 flex justify-between py-6 px-4 ">
        <p className="text-sm font-normal">© DiMi Inc. All rights reserved</p>
        <div className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row items-center sm:justify-between">
          {/* Sectigo seal */}
          <Image
            src={"/images/sectigo-seal.png"}
            alt="sectigo-seal"
            className="object-contain"
            width={150}
            height={40}
          />
          {/* Social media links */}
          <div className="flex flex-row items-center">
            {/* Instagram link */}
            <a href="https://www.instagram.com/dimi.app.og" target="_blank">
              <Image
                src={"/icons/instagram.png"}
                alt="instagram"
                className="object-contain"
                width={35}
                height={35}
              />
            </a>
            {/* Facebook link */}
            <a
              href="https://www.facebook.com/profile.php?id=61573594612081"
              target="_blank"
            >
              <Image
                src={"/icons/facebook.png"}
                alt="facebook"
                className="object-contain"
                width={35}
                height={35}
              />
            </a>
            {/* X link */}
            <a href="https://www.x.com/dimiapp" target="_blank">
              <Image
                src={"/icons/x.png"}
                alt="x"
                className="object-contain"
                width={35}
                height={35}
              />
            </a>
            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/company/dream-it-make-it-inc"
              target="_blank"
            >
              <Image
                src={"/icons/linked-in.png"}
                alt="linked-in"
                className="object-contain"
                width={35}
                height={35}
              />
            </a>
            {/* Tik Tok link */}
            <a href="https://www.tiktok.com/@godimi.com" target="_blank">
              <Image
                src={"/icons/tik-tok.png"}
                alt="tik-tok"
                className="object-contain"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
