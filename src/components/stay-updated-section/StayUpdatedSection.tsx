"use client"

import { useState, useCallback } from "react"
import axios from "axios"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Button from "../button/Button"

// Interface for the props of the component
interface ContactFormProps {
	setShowSuccessPopup: (value: boolean) => void
	setShowErrorPopup: (value: boolean) => void
}

export default function StayUpdatedSection(
	props: ContactFormProps
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
				// Show the error popup
				props.setShowErrorPopup(true)
				// Reset the form
				handleResetForm()
			})
	}, [email, props, handleResetForm])

	return (
		// Main container
		<div className="h-fit sm:h-60 w-full bg-[#040607] mt-52 flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between px-5 sm:px-15 py-5 sm:py-0">
			{/* Title */}
			<p className="text-[32px] sm:text-[40px] text-white font-semibold">
				Stay updated, straight to your inbox.
			</p>
			{/* Email input container */}
			<div className="h-15 w-full sm:w-[450px] rounded-full border border-[#eaeaea] flex flex-row items-center px-1">
				{/* Mail icon */}
				<EnvelopeIcon className="min-h-5 min-w-5 size-5 text-[#eaeaea] ml-2.5" />
				{/* Email input */}
				<input
					type="email"
					placeholder="Email Address"
					className="w-full outline-0 text-[#dfdfdf] text-sm mx-2.5"
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
