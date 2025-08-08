"use client"

import { useState, useCallback } from "react"
import Button from "@/components/button/Button"

export default function Services(): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback((): void => {
		console.log("Subscribe button clicked")
	}, [])

	return (
		// Main container
		<div className="w-screen flex flex-col items-center pt-72 pb-20">
			<div className="flex flex-col items-center">
				<p className="text-[32px] text-primary uppercase tracking-tight">
					what we offer
				</p>
				<p className="text-[50px]/15 text-[#262626] font-semibold max-w-[550px] text-center">
					Your Complete Art-kit, All in One Place
				</p>
				<p className="text-xl text-description max-w-[550px] text-center">
					Every DiMi service is crafted with your artistic journey in
					mind. Scroll down to see how we turn visions into
					reality—together
				</p>
			</div>
			<div className="h-60 w-full bg-[#040607] mt-52 flex flex-row ga-15 items-center justify-between px-15">
				<p className="text-[40px] text-white font-semibold">
					Stay updated — straight to your inbox.
				</p>
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
		</div>
	)
}
