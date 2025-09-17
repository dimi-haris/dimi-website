"use client"

import { useState } from "react"
import Image from "next/image"
import SubscribeFormSuccessPopup from "@/components/subscribe-form-success-popup/SubscribeFormSuccessPopup"
import AboutPodcastSection from "@/components/about-podcast-section/AboutPodcastSection"
import ComingSoonSection from "@/components/coming-soon-section/ComingSoonSection"
import AboutHostSection from "@/components/about-host-section/AboutHostSection"
import SubscribeToBlogsSection from "@/components/subscribe-to-blogs-section/SubscribeToBlogsSection"

export default function Podcast(): React.ReactElement | null {
	// State for the subscribe form success popup visibility
	const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false)

	return (
		// Main container
		<div className="w-screen flex flex-col items-center gap-10 sm:gap-20 pb-15">
			{/* Subscribe form success popup */}
			{showSuccessPopup && (
				<SubscribeFormSuccessPopup
					setShowSuccessPopup={setShowSuccessPopup}
				/>
			)}
			{/* Banner image */}
			<Image
				src={"/images/podcast-banner.png"}
				alt="podcast-banner"
				className="object-contain h-fit w-full"
				height={500}
				width={1000}
			/>
			{/* About podcast section */}
			<AboutPodcastSection />
			{/* Coming soon section */}
			<ComingSoonSection />
			{/* About host section */}
			<AboutHostSection />
			{/* Subscribe to blogs section */}
			<SubscribeToBlogsSection
				setShowSuccessPopup={setShowSuccessPopup}
			/>
		</div>
	)
}
