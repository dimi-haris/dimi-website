"use client"

import { useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"

export default function BringingIdeasSection(): React.ReactElement | null {
	// Memoized callback for handling the Learn More button click
	const handleLearnMore = useCallback((): void => {
		console.log("Learn More button clicked")
	}, [])

	return (
		// Main container
		<div className="w-full flex flex-row items-center gap-72 p-24">
			{/* Ideas image group */}
			<Image
				src={"/images/ideas-image-group.png"}
				alt="ideas"
				className="object-contain"
				height={500}
				width={500}
			/>
			{/* Text container */}
			<div className="flex-1 flex flex-col justify-center gap-5">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px] font-semibold text-heading tracking-wide">
						Bringing Ideas to Light
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-3 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Description */}
				<p className="text-[20px]/8 text-description">
					DiMi is a digital space where artists, creatives, and
					industry professionals come together to connect,
					collaborate, and thrive. DiMi supports your artistic journey
					from inspiration to community building to managing your
					artistic career.
				</p>
				{/* Learn more button */}
				<Button
					title={"Learn More"}
					color={"secondary"}
					onClick={handleLearnMore}
				/>
			</div>
		</div>
	)
}
