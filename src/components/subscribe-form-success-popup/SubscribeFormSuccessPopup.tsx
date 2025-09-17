"use client"

import { useCallback } from "react"

// Interface for the props of the component
interface SubscribeFormSuccessPopupProps {
	setShowSuccessPopup: (value: boolean) => void
}

export default function SubscribeFormSuccessPopup(
	props: SubscribeFormSuccessPopupProps
): React.ReactElement | null {
	// Memoized callback for handling the Got It button click
	const handleGotIt = useCallback((): void => {
		// Close the popup
		props.setShowSuccessPopup(false)
	}, [props])

	return (
		// Main container
		<div className="h-full w-full flex items-center justify-center bg-[#1C1C1C08] backdrop-blur-sm fixed top-0 left-0 z-50">
			{/* Popup card */}
			<div className="h-fit w-[325px] sm:w-[450px] rounded-xl bg-white shadow-2xl flex flex-col gap-5 items-center p-8">
				{/* Title */}
				<p className="text-3xl font-bold text-center">
					Thanks for subscribing!
				</p>
				{/* Got it button */}
				<button
					className="h-15 w-full rounded-full cursor-pointer flex items-center justify-center text-lg text-white bg-heading"
					onClick={handleGotIt}
				>
					Got it
				</button>
			</div>
		</div>
	)
}
