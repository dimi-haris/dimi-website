"use client"

import { useState } from "react"
import SubscribeFormSuccessPopup from "@/components/subscribe-form-success-popup/SubscribeFormSuccessPopup"
import SubscribeFormErrorPopup from "@/components/subscribe-form-error-popup/SubscribeFormErrorPopup"
import DiMiBlogsBannerSection from "@/components/dimi-blogs-banner-section/DiMiBlogsBannerSection"
import FeaturedBlogsSection from "@/components/featured-blogs-section/FeaturedBlogsSection"
import LatestNewsSection from "@/components/latest-news-section/LatestNewsSection"
import EventCalendarSection from "@/components/event-calendar-section/EventCalendarSection"
import SubscribeToBlogsSection from "@/components/subscribe-to-blogs-section/SubscribeToBlogsSection"

export default function Blogs(): React.ReactElement | null {
	// State for the subscribe form success popup visibility
	const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false)
	// State for the subscribe form error popup visibility
	const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false)

	return (
		// Main container
		<div className="w-screen flex flex-col py-24 sm:py-40">
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
			{/* DiMi blogs banner section */}
			<DiMiBlogsBannerSection />
			{/* Featured blogs section */}
			<FeaturedBlogsSection />
			{/* Latest news section */}
			<LatestNewsSection />
			{/* Event calendar section */}
			<EventCalendarSection />
			{/* Subscribe to blogs section */}
			<SubscribeToBlogsSection
				setShowSuccessPopup={setShowSuccessPopup}
				setShowErrorPopup={setShowErrorPopup}
			/>
		</div>
	)
}
