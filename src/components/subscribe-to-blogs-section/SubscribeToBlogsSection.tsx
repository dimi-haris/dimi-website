"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"

export default function SubscribeToBlogsSection(): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback((): void => {
		console.log("Subscribe button clicked")
	}, [])

	return (
		// Main container
		<div className="h-fit w-[95%] sm:w-[75%] rounded-[50px] bg-card-radial px-5 sm:px-20 py-7 sm:py-10 self-center flex flex-col gap-3 items-center">
			{/* Subscribe to blogs title */}
			<p className="text-lg sm:text-xl text-primary tracking-tight uppercase">
				stay connected
			</p>
			{/* Subscribe to blogs description */}
			<p className="text-[25px]/8 sm:text-[40px]/10 font-semibold text-white text-center">
				Subscribe to our blog and stay in the know about the latest in
				the world!
			</p>
			{/* Subscribe to blogs description */}
			<p className="text-lg sm:text-xl text-[#bdbdbd] text-center">
				A passionate team empowering artists and creators worldwide.
			</p>
			{/* Subscribe form */}
			<div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
				{/* Subscribe input container */}
				<div className="h-[50px] w-[90%] sm:w-96 rounded-full border border-[#bdbdbd] flex flex-row items-center gap-3 px-3">
					{/* Search icon */}
					<Image
						src={"/icons/search.png"}
						alt="search"
						className="object-contain"
						height={15}
						width={15}
					/>
					{/* Email input */}
					<input
						type="email"
						placeholder="Email Address"
						className="w-full outline-0 text-[#dfdfdf] text-sm"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</div>
				{/* Subscribe button */}
				<Button
					title={"Subscribe"}
					color={"primary"}
					height="50px"
					onClick={handleSubscribe}
				/>
			</div>
		</div>
	)
}
