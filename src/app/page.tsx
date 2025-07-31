import HeroSection from "@/components/hero-section/HeroSection"
import EmpoweringArtistsSection from "@/components/empowering-artists-section/EmpoweringArtistsSection"
import BringingIdeasSection from "@/components/bringing-ideas-section/BringingIdeasSection"
import FeaturedBlogsSection from "@/components/featured-blogs-section/FeaturedBlogsSection"
import SubscribeForUpdatesSection from "@/components/subscribe-for-updates-section/SubscribeForUpdatesSection"
import Marquee from "@/components/marquee/Marquee"

export default function Home(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen flex flex-col">
			{/* Hero section */}
			<HeroSection />
			{/* Bringing Ideas section */}
			<BringingIdeasSection />
			{/* Empowering Artists section */}
			<EmpoweringArtistsSection />
			{/* Featured blogs section */}
			<FeaturedBlogsSection />
			{/* Subscribe for updates section */}
			<SubscribeForUpdatesSection />
			{/* Marquee */}
			<Marquee />
		</div>
	)
}
