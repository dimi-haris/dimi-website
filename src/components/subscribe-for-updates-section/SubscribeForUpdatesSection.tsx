"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import axios from "axios"
import Button from "../button/Button"

// Interface for the props of the component
interface SubscribeFormProps {
	setShowSuccessPopup: (value: boolean) => void
}

export default function SubscribeForUpdatesSection(
	props: SubscribeFormProps
): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for resetting the form
	const handleResetForm = useCallback((): void => {
		setEmail("")
	}, [])

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback(async (): Promise<void> => {
		const payload = {
			email: email
		}

		// Initiate a fetch request to the API endpoint
		await axios
			.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe`, payload)
			.then((response) => {
				// Log the response data
				console.log(response.data)
				// Show the success popup
				props.setShowSuccessPopup(true)
				// Reset the form
				handleResetForm()
			})
			.catch((error) => {
				// Log the error
				console.error(error)
			})
	}, [email, props, handleResetForm])

	return (
		// Main container
		<div className="flex flex-col items-center py-10 gap-10">
			{/* Title wrapper */}
			<div className="flex flex-col items-center gap-2 px-5 sm:px-0">
				{/* Title */}
				<p className="text-primary text-base sm:text-xl uppercase font-medium">
					become a part of our community
				</p>
				{/* Sub title */}
				<p className="text-[#262626] text-3xl sm:text-[40px] font-semibold max-w-[750px] text-center">
					Don’t miss a beat—subscribe for updates from the creative
					front lines.
				</p>
				{/* Sub title */}
				<p className="text-base sm:text-xl text-description text-center">
					A passionate team empowering artists and creators worldwide.
				</p>
			</div>
			{/* Subscribe form */}
			<div className="flex flex-row items-center justify-between gap-2.5 sm:gap-5">
				{/* Subscribe input container */}
				<div className="h-[48px] w-52 sm:w-96 rounded-full border border-heading flex flex-row items-center gap-3 px-3">
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
						className="w-full outline-0 text-sm sm:text-base"
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
					onClick={handleSubscribe}
				/>
			</div>
		</div>
	)
}
