"use client"

import { use, useState, useEffect, useMemo, useCallback } from "react"
import Image from "next/image"
import axios from "axios"
import { PlayIcon } from "@heroicons/react/24/solid"
import PodcastPlatformPill from "@/components/podcast-platform-pill/PodcastPlatformPill"
import TagPill from "@/components/tag-pill/TagPill"
import PodcastPlaylist from "@/components/podcast-playlist/PodcastPlaylist"
import { PodcastEpisode } from "@/utils/types"

export default function PodcastEpisodeByID({
	params
}: {
	params: Promise<{ id: string }>
}): React.ReactElement | null {
	// Destructure the id from the params
	 const { id } = use(params)

	// State for the podcast data
	const [podcast, setPodcast] = useState<PodcastEpisode | null>(null)
	// State for the podcast trailer video play status
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	// Memoized callback for playing the podcast trailer video
	const handlePlay = useCallback((): void => {
		// setIsPlaying(true)
		window.open("/videos/podcast-trailer.mp4", "_blank")
	}, [])

	// Memoized callback for pausing the podcast trailer video
	const handleStop = useCallback((): void => {
		setIsPlaying(false)
	}, [])

	const podcastDate = useMemo(() => {
		return podcast?.airDate
			? new Date(podcast.airDate).toLocaleDateString("en-US", {
					month: "long",
					day: "numeric",
					year: "numeric"
			  })
			: ""
	}, [podcast?.airDate])

	const podcastTags = useMemo<string[]>(
		() => ["Art", "Music", "Creatives", "Acknowledgement"],
		[]
	)

	useEffect(() => {
		;(async () => {
			// Initiate a fetch request to the API endpoint
			await axios
				.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/podcasts/${id}`)
				.then((response) => {
					// Log the response data
					console.log(response.data)
					// Update the podcast state with the fetched data
					setPodcast(response.data)
				})
				.catch((error) => {
					// Log the error
					console.error(error)
				})
		})()
	}, [id])

	return (
		// Main container
		<div className="min-h-screen w-screen flex flex-col gap-15">
			{/* Podcast trailer video container */}
			<div className="h-[750px] w-full relative">
				{!isPlaying && (
					<button
						className="size-20 rounded-full cursor-pointer bg-[#66666633] backdrop-blur-sm flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
						onClick={handlePlay}
					>
						{/* Play icons */}
						<PlayIcon className="size-8 text-white" />
					</button>
				)}
				{isPlaying ? (
					<video
						className="h-full w-full object-cover"
						autoPlay
						playsInline
						onEnded={handleStop}
					>
						<source
							src={"/videos/podcast-trailer.mp4"}
							type="video/mp4"
						/>
					</video>
				) : (
					<Image
						src={"/images/trailer-thumbnail.jpg"}
						alt="trailer-thumbnail"
						className="object-cover h-full w-full"
						height={650}
						width={1280}
					/>
				)}
			</div>
			{/* Podcast wrapper */}
			<div className="w-full flex flex-col gap-20 pb-20">
				{/* Wrapper */}
				<div className="w-full flex flex-col gap-5 px-20">
					{/* Podcast header */}
					<div className="flex flex-col">
						{/* Podcast date */}
						<p className="font-medium text-description">
							{podcastDate}
						</p>
						{/* Podcast title */}
						<p className="text-[40px] font-semibold text-heading">
							{podcast?.title}
						</p>
					</div>
					{/* Podcast platforms */}
					<div className="flex flex-col gap-2">
						{/* Title */}
						<p className="text-xs text-description uppercase">
							available on
						</p>
						{/* Platform tabs */}
						<div className="flex flex-row flex-wrap items-center gap-3">
							{/* Youtube pill */}
							{podcast?.youtube_link && (
								<PodcastPlatformPill
									url={podcast.youtube_link}
									image={"/icons/youtube-dark.png"}
									name={"Youtube"}
								/>
							)}
							{/* Tiktok pill */}
							{podcast?.tiktok_link && (
								<PodcastPlatformPill
									url={podcast.tiktok_link}
									image={"/icons/tiktok-dark.png"}
									name={"Tiktok"}
								/>
							)}
							{/* Spotify pill */}
							{podcast?.spotify_link && (
								<PodcastPlatformPill
									url={podcast.spotify_link}
									image={"/icons/spotify.png"}
									name={"Spotify"}
								/>
							)}
							{/* Apple Podcast pill */}
							{podcast?.apple_link && (
								<PodcastPlatformPill
									url={podcast.apple_link}
									image={"/icons/apple-podcast-outline.png"}
									name={"Apple Podcast"}
								/>
							)}
						</div>
					</div>
				</div>
				{/* Wrapper */}
				<div className="w-full flex flex-col gap-5 px-20">
					{/* Season & Episode */}
					<div className="flex flex-row items-center gap-1.5">
						{/* Season */}
						<p className="text-heading">S{podcast?.season}</p>
						{/* Circular separator */}
						<div className="size-1 rounded-full bg-heading" />
						{/* Episode */}
						<p className="text-heading">
							Episode {podcast?.episode}
						</p>
					</div>
					{/* Title wrapper */}
					<div className="relative w-fit">
						{/* Title */}
						<p className="text-[40px] font-semibold text-heading">
							Episode Description
						</p>
						{/* Brush stroke */}
						<Image
							src={"/images/brush-stroke.png"}
							alt="brush-stroke"
							className="absolute -bottom-2.5 right-0 object-contain"
							height={5}
							width={250}
						/>
					</div>
					{/* Podcast description */}
					<p className="text-xl text-description">
						{podcast?.podcastHtml}
					</p>
					{/* Tags */}
					<div className="flex flex-row flex-wrap items-center gap-3">
						{podcastTags.map((tag, key) => (
							<TagPill name={tag} key={key} />
						))}
					</div>
				</div>
				{/* Podcast playlist section */}
				<PodcastPlaylist title="Next Episode" theme="light" />
			</div>
		</div>
	)
}
