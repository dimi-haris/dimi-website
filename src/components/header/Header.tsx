"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header(): React.ReactElement | null {
	// Get the current pathname
	const pathname = usePathname()

	return (
		// Header container
		<div className="h-16 w-[72.5%] rounded-full bg-[#1C1C1C08] backdrop-blur-sm border border-[#E0E0E033] absolute top-10 left-[13.75%] z-50 flex flex-row items-center justify-between px-7">
			{/* Line stroke */}
			<Image
				src="/images/header-stroke.png"
				alt="logo"
				className="absolute -top-0.5 left-[50%] translate-x-[-50%] object-contain"
				width={250}
				height={5}
			/>
			{/* Logo */}
			<Image
				src="/icons/logo.png"
				alt="logo"
				className="object-contain"
				width={50}
				height={50}
			/>
			{/* Navigation links */}
			<div
				className={`flex flex-row items-center justify-center gap-5 text-nav-link ${
					pathname === "/" ? "text-white" : "text-heading"
				} font-semibold`}
			>
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/blogs"}>Blogs</Link>
				<Link href={"/podcast"}>Podcast</Link>
				<Link href={"/services"}>Services</Link>
				<Link href={"/news"}>News</Link>
			</div>
			{/* Empty div to balance the logo */}
			<div className="w-[50px]" />
		</div>
	)
}
