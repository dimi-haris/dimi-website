"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	// Get the current pathname
	const pathname = usePathname()

	return (
		// Layout wrapper with background
		<div
			className={`h-fit w-screen ${
				pathname === "/about" || pathname === "/blogs"
					? "bg-screen-radial"
					: "bg-white"
			}`}
		>
			{pathname === "/about" && (
				<Image
					src={"/images/brush-stroke-2.png"}
					alt="brush-stroke"
					className="absolute top-24 right-0 object-contain z-0"
					height={535}
					width={215}
				/>
			)}
			{pathname === "/about" && (
				<Image
					src={"/images/music-1.png"}
					alt="music"
					className="absolute top-64 left-0 object-contain z-0"
					height={185}
					width={185}
				/>
			)}
			{pathname === "/about" && (
				<Image
					src={"/images/music-2.png"}
					alt="music"
					className="absolute top-[500px] left-[22.5%] object-contain z-0"
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
				{/* Footer */}
				<Footer />
			</div>
		</div>
	)
}
