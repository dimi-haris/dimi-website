"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
// import Button from "../button/Button"
import BlogAndNewsCard from "../blog-and-news-card/BlogAndNewsCard"
import { NewsItem } from "@/utils/types"

export default function LatestNewsSection(): React.ReactElement | null {
	// State for the News
	const [news, setNews] = useState<NewsItem[]>([])

	// Memoized callback for handling the Explore More button click
	// const handleExploreMore = useCallback((): void => {
	// 	console.log("Explore More button clicked")
	// }, [])

	// Fetch featured news from the API
	useEffect(() => {
		;(async () => {
			// Initiate a fetch request to the API endpoint
			await axios
				.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news`)
				.then((response) => {
					// Log the response data
					console.log(response.data)
					// Update the news state with the fetched data
					setNews(response.data)
				})
				.catch((error) => {
					// Log the error
					console.error(error)
				})
		})()
	}, []) // Empty array as dependency to only fetch once

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
				{news.slice(0, 3).map((newsItem, index) => (
					<BlogAndNewsCard
						id={newsItem.id}
						title={newsItem.title}
						thumbnail={newsItem.thumbnail}
						type="news"
						key={index}
					/>
				))}
			</div>
			{/* Explore more button */}
			{/* <Button
				title={"Explore More"}
				color={"primary"}
				onClick={handleExploreMore}
			/> */}
		</div>
	)
}
