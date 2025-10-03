"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { NewsItem } from "@/utils/types"

export default function News(): React.ReactElement | null {
	// State for the news data
	const [news, setNews] = useState<NewsItem | null>(null)

	useEffect(() => {
		;(async () => {
			// Initiate a fetch request to the API endpoint
			await axios
				.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/latest`)
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
	}, [])

	return (
		// Main container
		<div className="min-h-screen w-screen flex flex-col items-center pt-5 sm:pt-40">
			{/* News HTML fragment */}
			{news?.newsHtml && (
				<div  className="px-[70px] html-content  max-w-none leading-[1.5]"
				 dangerouslySetInnerHTML={{ __html: news?.newsHtml }} />
			)}
		</div>
	)
}
