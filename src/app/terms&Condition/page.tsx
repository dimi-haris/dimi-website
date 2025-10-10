"use client";

import { useTermlyEmbed } from "@/hooks/useTermlyEmbed";
import Image from "next/image"
import React, { useEffect } from "react";
export default function TermsOfServicePage() {
  useTermlyEmbed();

  return (
    <>
    <div className="p-6 max-w-4xl mx-auto">

      {/* ✅ Keep the name attribute using spread trick */}
      <div
      className="py-20"
        {...{ name: "termly-embed" }}
        data-id="fd29bd2b-08b9-4d1e-974f-ab8859a12d8c"
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
					<a
						href="https://www.instagram.com/dimi.app.og"
						target="_blank"
					>
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
					<a
						href="https://www.tiktok.com/@godimi.com"
						target="_blank"
					>
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
