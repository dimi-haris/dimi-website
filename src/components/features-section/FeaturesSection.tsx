"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import FeatureCard from "../feature-card/FeatureCard"
import { features } from "@/utils/constants"

export default function FeaturesSection(): React.ReactElement | null {
	// State for the selected feature
	const [selectedFeature, setSelectedFeature] = useState<number>(0)
	// State to keep track of animation
	const [isAnimating, setIsAnimating] = useState<boolean>(false)

	useEffect(() => {
		// Start the interval when the component mounts
		const interval = setInterval(() => {
			// Start slide out animation
			setIsAnimating(true)

			// After animation completes, change text and prepare for slide in
			setTimeout(() => {
				// Update current feature index
				setSelectedFeature(
					(prevIndex) => (prevIndex + 1) % features.length
				)

				// Small delay before removing the animation class
				requestAnimationFrame(() => {
					setIsAnimating(false)
				})
			}, 500) // Match transition duration
		}, 7500)

		// Cleanup interval when component unmounts
		return () => clearInterval(interval)
	}, [])

	return (
		// Main container
		<div className="h-[1000px] sm:h-[500px] w-[90%] bg-[#040607] rounded-[80px] self-center flex flex-col items-center justify-between overflow-hidden relative">
			{/* Background mesh top */}
			<Image
				src={"/images/background-mesh-top.png"}
				alt="background-mesh"
				className="w-full h-[30%] object-fill"
				width={900}
				height={150}
			/>
			{/* Background mesh bottom */}
			<Image
				src={"/images/background-mesh-bottom.png"}
				alt="background-mesh"
				className="w-full h-[30%] object-fill"
				width={900}
				height={150}
			/>
			{/* Overlay container */}
			<div className="w-full h-full absolute top-0 left-0 z-10 flex flex-col-reverse sm:flex-row justify-between px-5 sm:px-15 pt-15 sm:pt-0">
				{/* Animated feature image container */}
				<div className="h-96 sm:h-[85%] w-full sm:w-[45%] sm:self-end border-t border-l border-r border-[#E0E0E0] rounded-tr-xl flex items-center justify-center p-5 sm:p-0">
					{/* Animated feature image */}
					<Image
						src={features[selectedFeature].image}
						alt="feature"
						className={`object-contain transition-all duration-1000 ease-in-out ${
							isAnimating
								? "translate-y-full opacity-0"
								: "translate-y-0 opacity-100"
						}`}
						width={400}
						height={400}
					/>
				</div>
				{/* Feature cards */}
				<div className="w-full sm:w-[50%] flex flex-col items-center justify-center gap-5">
					{features.map((feature, index) => (
						<FeatureCard
							feature={feature}
							selectedFeature={selectedFeature}
							index={index}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
