"use client"

import { useCallback } from "react"
import Button from "../button/Button"

// Interface for the props of the component
interface SubscribeFormErrorPopupProps {
	setShowErrorPopup: (value: boolean) => void
}

export default function SubscribeFormErrorPopup(
	props: SubscribeFormErrorPopupProps
): React.ReactElement | null {
	// Memoized callback for handling the Got It button click
	const handleGotIt = useCallback((): void => {
		// Close the popup
		props.setShowErrorPopup(false)
	}, [props])

	return (
		// Main container
		<div className="h-full w-full flex items-center justify-center bg-[#1C1C1C08] backdrop-blur-sm fixed top-0 left-0 z-50">
			{/* Popup card */}
			<div className="h-fit w-[325px] sm:w-[450px] rounded-xl bg-white shadow-2xl flex flex-col gap-5 items-center p-10">
				{/* Title */}
				<p className="text-3xl font-bold text-center">
					You’re already subscribed!
				</p>
				{/* Description */}
				<p className="text-sm text-description text-center">
					Looks like you’re already on our list. Thanks for staying
					with us!
				</p>
				{/* Got it button */}
				<Button
					title={"Got it"}
					color={"secondary"}
					width="100%"
					onClick={handleGotIt}
				/>
			</div>
		</div>
	)
}
