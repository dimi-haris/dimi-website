"use client"

import { useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"

// Interface for the props of the component
interface ContactFormSuccessPopupProps {
	setShowSuccessPopup: (value: boolean) => void
}

export default function ContactFormSuccessPopup(
	props: ContactFormSuccessPopupProps
): React.ReactElement | null {
	// Memoized callback for handling the Submit Another Response button click
	const handleSubmitAnotherResponse = useCallback((): void => {
		// Close the popup
		props.setShowSuccessPopup(false)
	}, [props])

	// Memoized callback for handling the Got It button click
	const handleGotIt = useCallback((): void => {
		// Close the popup
		props.setShowSuccessPopup(false)
	}, [props])

	return (
		// Main container
		<div className="h-full w-full flex items-center justify-center bg-[#1C1C1C08] backdrop-blur-sm fixed top-0 left-0 z-50">
			{/* Popup card */}
			<div className="h-fit w-[325px] sm:w-[650px] rounded-xl bg-white shadow-2xl flex flex-col gap-5 items-center p-8">
				{/* Loading icon box */}
				<div className="size-20 rounded-2xl bg-[#D9FFE2] flex items-center justify-center">
					{/* Loading icon */}
					<Image
						src={"/icons/loading.png"}
						alt="loading"
						className="object-contain"
						width={65}
						height={65}
					/>
				</div>
				{/* Title */}
				<p className="text-3xl font-bold text-center">
					Thank you for your message!
				</p>
				{/* Description */}
				<p className="text-xl text-description text-center">
					We have received your query and will get back to you soon.
				</p>
				{/* Buttons wrapper */}
				<div className="w-full flex flex-col sm:flex-row items-center gap-5">
					{/* Submit another response button */}
					<Button
						title={"Submit another response"}
						color={"outline"}
						width="100%"
						onClick={handleSubmitAnotherResponse}
					/>
					{/* Got it button */}
					<Button
						title={"Got it"}
						color={"secondary"}
						width="100%"
						onClick={handleGotIt}
					/>
				</div>
			</div>
		</div>
	)
}
