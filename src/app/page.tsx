"use client"

import { useState } from "react"
import SubscribeFormSuccessPopup from "@/components/subscribe-form-success-popup/SubscribeFormSuccessPopup"
import SubscribeFormErrorPopup from "@/components/subscribe-form-error-popup/SubscribeFormErrorPopup"
import HeroSection from "@/components/hero-section/HeroSection"
import EmpoweringArtistsSection from "@/components/empowering-artists-section/EmpoweringArtistsSection"
import BringingIdeasSection from "@/components/bringing-ideas-section/BringingIdeasSection"
import FeaturedBlogsSection from "@/components/featured-blogs-section/FeaturedBlogsSection"
import SubscribeForUpdatesSection from "@/components/subscribe-for-updates-section/SubscribeForUpdatesSection"
import Marquee from "@/components/marquee/Marquee"

export default function Home(): React.ReactElement | null {
	// State for the subscribe form success popup visibility
	const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false)
	// State for the subscribe form error popup visibility
	const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false)

	return (
		// Main container
		<div className="w-screen flex flex-col">
			{/* Subscribe form success popup */}
			{showSuccessPopup && (
				<SubscribeFormSuccessPopup
					setShowSuccessPopup={setShowSuccessPopup}
				/>
			)}
			{/* Subscribe form error popup */}
			{showErrorPopup && (
				<SubscribeFormErrorPopup
					setShowErrorPopup={setShowErrorPopup}
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
				setShowErrorPopup={setShowErrorPopup}
			/>
			{/* Marquee */}
			<Marquee />
		</div>
	)
}
