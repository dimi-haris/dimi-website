"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import HeroSection from "@/components/hero-section/HeroSection"
import Button from "@/components/button/Button"
import EmpoweringArtistsSection from "@/components/empowering-artists-section/EmpoweringArtistsSection"
import BlogCard from "@/components/blog-card/BlogCard"

export default function Home(): React.ReactElement | null {
	// State for the email input
	const [email, setEmail] = useState<string>("")

	// Memoized callback for handling the Learn More button click
	const handleLearnMore = useCallback((): void => {
		console.log("Learn More button clicked")
	}, [])

	// Memoized callback for handling the Learn More button click
	const handleExploreMore = useCallback((): void => {
		console.log("Learn More button clicked")
	}, [])

	// Memoized callback for handling the Subscribe button click
	const handleSubscribe = useCallback((): void => {
		console.log("Subscribe button clicked")
	}, [])

	return (
		// Main container
		<div className="w-screen flex flex-col">
			{/* Hero section */}
			<HeroSection />
			{/* Bringing Ideas section */}
			<div className="w-full flex flex-row items-center gap-24 p-24">
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
						collaborate, and thrive. DiMi supports your artistic
						journey from inspiration to community building to
						managing your artistic career.
					</p>
					{/* Learn more button */}
					<Button
						title={"Learn More"}
						color={"secondary"}
						onClick={handleLearnMore}
					/>
				</div>
			</div>
			<EmpoweringArtistsSection />
			{/* Featured blogs section */}
			<div className="flex flex-col items-center py-24 gap-10">
				{/* Title wrapper */}
				<div className="flex flex-col items-center">
					<div className="relative w-fit">
						{/* Title */}
						<p className="text-[40px] font-semibold text-heading tracking-wide">
							Featured Blogs
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
					{/* Sub title */}
					<p className="text-description">
						Browse featured artists, ongoing projects, and success
						stories.
					</p>
				</div>
				{/* Blog cards */}
				<div className="flex flex-row items-start justify-center gap-5">
					<BlogCard
						title="New Art Galleries"
						image="/images/blog-image-1.png"
					/>
					<BlogCard
						title="New Art Galleries"
						image="/images/blog-image-2.png"
					/>
					<BlogCard
						title="New Art Galleries"
						image="/images/blog-image-3.png"
					/>
				</div>
				{/* Explore more button */}
				<Button
					title={"Explore More"}
					color={"primary"}
					onClick={handleExploreMore}
				/>
			</div>
			{/* Subscribe section */}
			<div className="flex flex-col items-center py-10 gap-10">
				{/* Title wrapper */}
				<div className="flex flex-col items-center gap-2">
					{/* Title */}
					<p className="text-primary text-xl uppercase font-medium">
						become a part of our community
					</p>
					{/* Sub title */}
					<p className="text-[#262626] text-[40px] font-semibold max-w-[750px] text-center">
						Don’t miss a beat—subscribe for updates from the
						creative front lines.
					</p>
					{/* Sub title */}
					<p className="text-xl text-description">
						A passionate team empowering artists and creators
						worldwide.
					</p>
				</div>
				{/* Subscribe form */}
				<div className="flex flex-row items-center justify-between gap-5">
					{/* Subscribe input container */}
					<div className="h-[60px] w-96 rounded-full border border-heading flex flex-row items-center gap-3 px-3">
						{/* Search icon */}
						<Image
							src={"/icons/search.png"}
							alt="search"
							className="object-contain"
							height={15}
							width={15}
						/>
						{/* Email input */}
						<input
							type="email"
							placeholder="Email Address"
							className="w-full outline-0"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
						/>
					</div>
					{/* Subscribe button */}
					<Button
						title={"Subscribe"}
						color={"primary"}
						height="60px"
						onClick={handleSubscribe}
					/>
				</div>
			</div>
			{/* Marquee wrapper */}
			<div className="bg-[#2b313c] py-[14px] overflow-hidden w-full my-10">
				{/* Marquee text */}
				<div className="flex gap-5 animate-marquee">
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						DiMi Website remastered
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						/
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						DiMi Blog launched
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						/
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						Artists Unveiled Podcast Recording in Progress
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						/
					</p>
					<p className="text-[#bdbdbd] text-base font-semibold uppercase">
						Achieved 70% AI generated code
					</p>
				</div>
			</div>
		</div>
	)
}
