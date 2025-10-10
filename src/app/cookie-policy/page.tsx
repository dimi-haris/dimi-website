"use client";

import { useTermlyEmbed } from "@/hooks/useTermlyEmbed";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CookiePolicyPage() {
  useTermlyEmbed();
  return (
    <>
      <div className="px-6 pt-24 max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1> */}

        {/* ✅ Trick: use data-name instead of name to avoid React errors */}
        <div
          {...{ name: "termly-embed" }} // force React to render name attr
          data-id="1ae3d29b-129f-4718-8acf-a8c9a8c78676"
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
