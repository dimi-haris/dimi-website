"use client"

import { useState, useCallback } from "react"
import Button from "../button/Button"

export default function StayUpdatedSection(): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback((): void => {
		console.log("Subscribe button clicked")
	}, [])

	return (
		// Main container
		<div className="h-60 w-full bg-[#040607] mt-52 flex flex-row ga-15 items-center justify-between px-15">
			{/* Title */}
			<p className="text-[40px] text-white font-semibold">
				Stay updated — straight to your inbox.
			</p>
			{/* Email input container */}
			<div className="h-15 w-[450px] rounded-full border border-[#eaeaea] flex flex-row items-center px-1">
				{/* Email input */}
				<input
					type="email"
					placeholder="Email Address"
					className="w-full outline-0 text-[#dfdfdf] text-sm mx-5"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
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
