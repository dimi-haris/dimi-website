import DiMiBlogsBannerSection from "@/components/dimi-blogs-banner-section/DiMiBlogsBannerSection"
import FeaturedBlogsSection from "@/components/featured-blogs-section/FeaturedBlogsSection"
import LatestNewsSection from "@/components/latest-news-section/LatestNewsSection"
import EventCalendarSection from "@/components/event-calendar-section/EventCalendarSection"
import SubscribeToBlogsSection from "@/components/subscribe-to-blogs-section/SubscribeToBlogsSection"

export default function Blogs(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen flex flex-col py-40">
			{/* DiMi blogs banner section */}
			<DiMiBlogsBannerSection />
			{/* Featured blogs section */}
			<FeaturedBlogsSection />
			{/* Latest news section */}
			<LatestNewsSection />
			{/* Event calendar section */}
			<EventCalendarSection />
			{/* Subscribe to blogs section */}
			<SubscribeToBlogsSection />
		</div>
	)
}
