"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Button from "../button/Button"

export default function BringingIdeasSection(): React.ReactElement | null {
	// Initialize router instance for navigation
	const router = useRouter()

	// Memoized callback for handling the Learn More button click
	const handleLearnMore = useCallback((): void => {
		router.push("/about")
	}, [router])

	return (
		// Main container
		<div className="w-full flex flex-col sm:flex-row items-center gap-15 sm:gap-72 px-5 sm:px-24 py-15 sm:py-24">
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
					<p className="text-2xl sm:text-[40px] font-semibold text-heading tracking-wide">
						Bringing Ideas to Light
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-5 sm:-bottom-3 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Description */}
				<p className="sm:text-[20px]/8 text-description">
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
