"use client"

import { useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"
import BlogCard from "../blog-card/BlogCard"

export default function FeaturedBlogsSection(): React.ReactElement | null {
	// Memoized callback for handling the Explore More button click
	const handleExploreMore = useCallback((): void => {
		console.log("Explore More button clicked")
	}, [])

	return (
		// Main container
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
	)
}
