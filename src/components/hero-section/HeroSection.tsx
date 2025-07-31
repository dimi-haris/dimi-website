"use client"

import { useState, useEffect } from "react"
import { artists } from "@/utils/constants"

export default function HeroSection(): React.ReactElement | null {
	// State to keep track of current text
	const [currentTextIndex, setCurrentTextIndex] = useState<number>(0)
	// State to keep track of animation
	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	useEffect(() => {
		// Start the interval when the component mounts
		const interval = setInterval(() => {
			// Start slide out animation
			setIsAnimating(true)

			// After animation completes, change text and prepare for slide in
			setTimeout(() => {
				// Update current text index
				setCurrentTextIndex(
					(prevIndex) => (prevIndex + 1) % artists.length
				)

				// Small delay before removing the animation class
				requestAnimationFrame(() => {
					setIsAnimating(false)
				})
			}, 500) // Match transition duration
		}, 3000)

		// Cleanup interval when component unmounts
		return () => clearInterval(interval)
	}, [])

	return (
		// Container with video background and text
		<div className="h-[760px] w-full rounded-b-[50px] overflow-hidden relative">
			{/* Video background */}
			<video className="h-fit w-full" autoPlay loop muted playsInline>
				<source src={"/videos/background-video.mp4"} type="video/mp4" />
			</video>
			{/* Text container */}
			<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
				{/* Main Title */}
				<p className="uppercase text-primary text-[32px] font-semibold tracking-tight">
					empowering artists
				</p>
				{/* Sub Title */}
				<p className="text-white text-[72px] font-semibold">
					Dream it, Make it
				</p>
				{/* Animated text section */}
				<div className="flex flex-row items-center justify-center gap-3">
					<p className="text-[#dfdfdf]">A discovery engine for</p>
					<div className="h-10 px-5 flex items-center justify-center rounded-full border border-[#bdbdbd] overflow-hidden">
						{/* Animated text */}
						<p
							className={`text-white text-lg transition-transform duration-500 ease-out ${
								isAnimating
									? "translate-y-full"
									: "translate-y-0"
							}`}
						>
							{artists[currentTextIndex]}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
