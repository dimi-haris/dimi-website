"use client"

import { useState } from "react"
import SubscribeFormSuccessPopup from "@/components/subscribe-form-success-popup/SubscribeFormSuccessPopup"
import HeroSection from "@/components/hero-section/HeroSection"
import EmpoweringArtistsSection from "@/components/empowering-artists-section/EmpoweringArtistsSection"
import BringingIdeasSection from "@/components/bringing-ideas-section/BringingIdeasSection"
import FeaturedBlogsSection from "@/components/featured-blogs-section/FeaturedBlogsSection"
import SubscribeForUpdatesSection from "@/components/subscribe-for-updates-section/SubscribeForUpdatesSection"
import Marquee from "@/components/marquee/Marquee"

export default function Home(): React.ReactElement | null {
	// State for the subscribe form success popup visibility
	const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false)

	return (
		// Main container
		<div className="w-screen flex flex-col">
			{/* Subscribe form success popup */}
			{showSuccessPopup && (
				<SubscribeFormSuccessPopup
					setShowSuccessPopup={setShowSuccessPopup}
				/>
			)}
			{/* Hero section */}
			<HeroSection />
			{/* Bringing Ideas section */}
			<BringingIdeasSection />
			{/* Empowering Artists section */}
			<EmpoweringArtistsSection />
			{/* Featured blogs section */}
			<FeaturedBlogsSection />
			{/* Subscribe for updates section */}
			<SubscribeForUpdatesSection
				setShowSuccessPopup={setShowSuccessPopup}
			/>
			{/* Marquee */}
			<Marquee />
		</div>
	)
}
