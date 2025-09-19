"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import axios from "axios"
import Button from "../button/Button"
import BlogAndNewsCard from "../blog-and-news-card/BlogAndNewsCard"
import { BlogItem } from "@/utils/types"

export default function FeaturedIBlogItemsSection(): React.ReactElement | null {
	// State for the blogs
	const [blogs, setBlogs] = useState<BlogItem[]>([])

	// Memoized callback for handling the Explore More button click
	const handleExploreMore = useCallback((): void => {
		console.log("Explore More button clicked")
	}, [])

	// Fetch featured blogs from the API
	useEffect(() => {
		;(async () => {
			// Initiate a fetch request to the API endpoint
			await axios
				.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`)
				.then((response) => {
					// Log the response data
					console.log(response.data)
					// Update the blogs state with the fetched data
					setBlogs(response.data)
				})
				.catch((error) => {
					// Log the error
					console.error(error)
				})
		})()
	}, []) // Empty array as dependency to only fetch once

	return (
		// Main container
		<div className="flex flex-col items-center py-20 gap-10">
			{/* Title wrapper */}
			<div className="flex flex-col items-center">
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[32px] sm:text-[40px] font-semibold text-heading tracking-wide">
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
				<p className="text-description text-center text-sm sm:text-base px-5 sm:px-0">
					Browse featured artists, ongoing projects, and success
					stories.
				</p>
			</div>
			{/* Blog cards */}
			<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5">
				{blogs.slice(0, 3).map((blogItem, index) => (
					<BlogAndNewsCard
						id={blogItem.id}
						title={blogItem.title}
						thumbnail={blogItem.thumbnail}
						type="blog"
						key={index}
					/>
				))}
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
