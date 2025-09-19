"use client"

import { use, useState, useEffect } from "react"
import axios from "axios"
import { NewsItem } from "@/utils/types"

export default function NewsPost({
	params
}: {
	params: Promise<{ id: string }>
}): React.ReactElement | null {
	// Destructure the id from the params
	const { id } = use(params)

	// State for the news data
	const [news, setNews] = useState<NewsItem | null>(null)

	useEffect(() => {
		;(async () => {
			// Initiate a fetch request to the API endpoint
			await axios
				.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/${id}`)
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
	}, [id])

	return (
		// Main container
		<div className="min-h-screen w-screen flex flex-col items-center pt-5 sm:pt-40">
			{/* Blog HTML fragment */}
			{news?.newsHtml && (
				<div dangerouslySetInnerHTML={{ __html: news?.newsHtml }} />
			)}
		</div>
	)
}
