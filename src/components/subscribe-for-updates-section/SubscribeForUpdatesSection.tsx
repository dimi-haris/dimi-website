"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"

export default function SubscribeForUpdatesSection(): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback((): void => {
		console.log("Subscribe button clicked")
	}, [])

	return (
		// Main container
		<div className="flex flex-col items-center py-10 gap-10">
			{/* Title wrapper */}
			<div className="flex flex-col items-center gap-2">
				{/* Title */}
				<p className="text-primary text-xl uppercase font-medium">
					become a part of our community
				</p>
				{/* Sub title */}
				<p className="text-[#262626] text-[40px] font-semibold max-w-[750px] text-center">
					Don’t miss a beat—subscribe for updates from the creative
					front lines.
				</p>
				{/* Sub title */}
				<p className="text-xl text-description">
					A passionate team empowering artists and creators worldwide.
				</p>
			</div>
			{/* Subscribe form */}
			<div className="flex flex-row items-center justify-between gap-5">
				{/* Subscribe input container */}
				<div className="h-[60px] w-96 rounded-full border border-heading flex flex-row items-center gap-3 px-3">
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
						className="w-full outline-0"
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
					height="60px"
					onClick={handleSubscribe}
				/>
			</div>
		</div>
	)
}
