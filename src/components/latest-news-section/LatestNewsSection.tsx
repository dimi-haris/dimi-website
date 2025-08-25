"use client"

import { useCallback } from "react"
import Image from "next/image"
import Button from "../button/Button"
import BlogCard from "../blog-card/BlogCard"

export default function LatestNewsSection(): React.ReactElement | null {
	// Memoized callback for handling the Explore More button click
	const handleExploreMore = useCallback((): void => {
		console.log("Explore More button clicked")
	}, [])

	return (
		// Main container
		<div className="flex flex-col items-center pb-15 gap-10">
			{/* Title wrapper */}
			<div className="flex flex-col items-center">
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[32px] sm:text-[40px] font-semibold text-heading tracking-wide">
						Latest News
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-1.5 sm:-bottom-3 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Sub title */}
				<p className="text-description text-center text-sm sm:text-base px-5 sm:px-0">
					Browse featured artists, ongoing projects, and success
					stories.
				</p>
			</div>
			{/* Blog cards */}
			<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5">
				<BlogCard
					id=""
					title="New Art Galleries"
					thumbnail="/images/blog-image-1.png"
				/>
				<BlogCard
					id=""
					title="New Art Galleries"
					thumbnail="/images/blog-image-2.png"
				/>
				<BlogCard
					id=""
					title="New Art Galleries"
					thumbnail="/images/blog-image-3.png"
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
