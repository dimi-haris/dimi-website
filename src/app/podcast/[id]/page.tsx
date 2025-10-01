"use client"

import React from "react"
import Image from "next/image"
import PodcastEpisodeSection from "@/components/podcast-episode-section/PodcastEpisodeSection"

interface Episode {
	id: number
	title: string
	author: string
	season: string
	episode: string
	duration: string
	description: string
	isPlaying?: boolean
}

interface Platform {
	name: string
	icon: string
}

const PodcastEpisodePage: React.FC = () => {
	const episodes: Episode[] = [
		{
			id: 1,
			title: "Jared: Finding Art Within Nature",
			author: "Holiday",
			season: "S1",
			episode: "Episode 01",
			duration: "01:10:56",
			description: "How his life revolves around art",
			isPlaying: true
		},
		{
			id: 2,
			title: "Zayn: Finding Art Within Nature",
			author: "Holiday",
			season: "S1",
			episode: "Episode 02",
			duration: "01:10:56",
			description: "How his life revolves around art"
		},
		{
			id: 3,
			title: "Roger: Finding Art Within Nature",
			author: "Holiday",
			season: "S1",
			episode: "Episode 03",
			duration: "01:10:56",
			description: "How his life revolves around art"
		},
		{
			id: 4,
			title: "Mike: Invest in art tools",
			author: "Holiday",
			season: "S1",
			episode: "Episode 04",
			duration: "01:10:56",
			description: "How his life revolves around art"
		}
	]

	const platforms: Platform[] = [
		{ name: "Youtube", icon: "/icons/youtube-dark.png" },
		{ name: "Spotify", icon: "/icons/spotify.png" },
		{ name: "Amazon", icon: "/icons/amazon.png" },
		{ name: "Apple Podcast", icon: "/icons/apple-podcast.png" }
	]
	return (
		<div className="w-screen flex flex-col items-center gap-10 sm:gap-20 pb-15">
			<Image
				src={"/images/podcast-banner.png"}
				alt="podcast-banner"
				className="object-contain h-fit w-full"
				height={500}
				width={1000}
			/>
			{/* Podcast Section */}
			<div className="w-[85%] sm:w-[90%] flex flex-col gap-5">
				<PodcastEpisodeSection />
				{/* Next Episodes Section */}
				<div className="bg-white py-8">
					<div className=" px-4">
						<h2 className="text-3xl font-bold mb-8">
							Next Episode
						</h2>

						{/* Table Header */}
						<div className="mb-4">
							<div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm font-semibold text-[#BDBDBD] ">
								<div className="col-span-5">Title</div>
								<div className="col-span-4">Playlist</div>
								<div className="col-span-2 flex justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
									>
										<g>
											<path
												d="M11.5503 2.57769C10.1275 0.678936 7.86771 -0.262564 5.51396 0.0617696C2.59963 0.46252 0.291959 2.8851 0.026542 5.82277C-0.119291 7.4386 0.339209 9.03169 1.31863 10.3092C1.59688 10.6732 1.74971 11.1609 1.74971 11.6829V12.2494C1.74971 13.2142 2.53488 13.9994 3.49971 13.9994H7.58304C8.54788 13.9994 9.33304 13.2142 9.33304 12.2494H9.62121C11.0784 12.2494 12.3215 11.1603 12.5128 9.71477L12.6405 8.74935H12.833C13.5908 8.74935 13.9997 8.14852 13.9997 7.58269C13.9997 6.75435 12.2894 3.49177 11.5503 2.57769ZM6.41638 5.24994C7.05979 5.24994 7.58304 5.77319 7.58304 6.4166C7.58304 7.06002 7.05979 7.58327 6.41638 7.58327C5.77296 7.58327 5.24971 7.06002 5.24971 6.4166C5.24971 5.77319 5.77296 5.24994 6.41638 5.24994ZM12.1295 7.58327C11.8367 7.58327 11.5894 7.80027 11.5515 8.09019L11.3566 9.56194C11.2417 10.4288 10.4956 11.0827 9.62121 11.0827H8.74971C8.42713 11.0827 8.16638 11.3434 8.16638 11.666V12.2494C8.16638 12.5714 7.90504 12.8327 7.58304 12.8327H3.49971C3.17771 12.8327 2.91638 12.5714 2.91638 12.2494V11.6829C2.91638 10.9059 2.67779 10.1657 2.24496 9.59985C1.44463 8.5551 1.06896 7.25077 1.18854 5.92719C1.40554 3.52502 3.29088 1.54402 5.67263 1.21735C5.72629 1.20977 5.77996 1.20335 5.83304 1.19752V4.15619C4.82738 4.41577 4.08304 5.33044 4.08304 6.41602C4.08304 7.70285 5.12954 8.74935 6.41638 8.74935C7.70321 8.74935 8.74971 7.70285 8.74971 6.41602C8.74971 5.33044 8.00538 4.41577 6.99971 4.15619V1.1981C8.42771 1.35444 9.72563 2.08827 10.6298 3.2946C11.3922 4.23727 12.759 7.05885 12.8319 7.58385H12.1295V7.58327Z"
												fill="#BDBDBD"
											/>
										</g>
										<defs>
											<clipPath id="clip0_372_970">
												<rect
													width="14"
													height="14"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
						</div>

						{/* Episodes List */}
						<div className="space-y-2">
							{episodes.map((episode: Episode) => (
								<div
									key={episode.id}
									className="grid grid-cols-12 gap-6 items-center px-4 py-3 hover:bg-gray-50 rounded-lg transition border-b border-[#EAEAEA]"
								>
									{/* Play Button & Thumbnail & Title Section */}
									<div className="col-span-5 flex items-center gap-3">
										{/* Play/Pause Button */}
										<button
											className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition ${
												episode.isPlaying
													? "bg-[#E5AB4E]"
													: "bg-[#FFF] "
											}`}
											aria-label={
												episode.isPlaying
													? "Pause"
													: "Play"
											}
										>
											{episode.isPlaying ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
												>
													<g>
														<path
															d="M5.0625 0.374878H1.78125V11.6249H5.0625V0.374878Z"
															fill="white"
														/>
														<path
															d="M10.2188 0.374878H6.9375V11.6249H10.2188V0.374878Z"
															fill="white"
														/>
													</g>
													<defs>
														<clipPath id="clip0_372_1107">
															<rect
																width="11.25"
																height="11.25"
																fill="white"
																transform="translate(0.375 0.374878)"
															/>
														</clipPath>
													</defs>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
												>
													<path
														d="M13.0931 5.91503L3.875 0.0300293V14.9932L13.0894 9.08753C13.3576 8.91892 13.5787 8.6851 13.7321 8.4079C13.8855 8.13069 13.9662 7.81913 13.9665 7.50231C13.9669 7.1855 13.887 6.87375 13.7343 6.59618C13.5815 6.31861 13.361 6.08427 13.0931 5.91503Z"
														fill="#737373"
													/>
												</svg>
											)}
										</button>

										{/* Thumbnail */}
										<div className="relative flex-shrink-0">
											<img
												src={
													"/images/podcast-Episode.png"
												}
												alt={episode.title}
												width="64"
												height="64"
												className="rounded-lg object-cover"
											/>
										</div>

										{/* Episode Info */}
										<div className="flex-1/3 min-w-0">
											<h3 className="font-medium  truncate mb-1">
												{episode.title}
											</h3>
											<div className="flex items-center gap-2 text-sm text-[#BDBDBD]">
												<span>{episode.author}</span>
											</div>
											<div className="flex items-center gap-2 text-xs  mt-1">
												<span>{episode.season}</span>
												<span>•</span>
												<span>{episode.episode}</span>
												<span className="ml-auto text-[#BDBDBD]">
													{episode.duration}
												</span>
											</div>
										</div>
									</div>

									{/* Description */}
									<div className="col-span-4">
										<p className="text-base font-medium  text-description">
											{episode.description}
										</p>
									</div>

									{/* Platform Icons & Menu */}
									<div className="col-span-2 flex items-center justify-end gap-8">
										{/* Platform Icons (visible on hover) */}
										<div className="flex flex-row items-center gap-1">
											{platforms.map(
												(platform: Platform) => (
													<button
														key={platform.name}
														className="w-8 h-8 rounded-full border border-[#BDBDBD] hover:bg-gray-200 flex items-center justify-center transition"
														aria-label={
															platform.name
														}
													>
														<img
															src={platform.icon}
															alt={platform.name}
															width="16"
															height="16"
														/>
													</button>
												)
											)}
										</div>

										{/* Menu Button */}
										<button
											className="w-8 h-8 rounded-[10px] bg-[#F8F8F8] hover:bg-gray-200 flex items-center justify-center transition"
											aria-label="More options"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="4"
												height="16"
												viewBox="0 0 4 16"
												fill="none"
											>
												<circle
													cx="2"
													cy="2"
													r="2"
													fill="#9CA3AF"
												/>
												<circle
													cx="2"
													cy="8"
													r="2"
													fill="#9CA3AF"
												/>
												<circle
													cx="2"
													cy="14"
													r="2"
													fill="#9CA3AF"
												/>
											</svg>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PodcastEpisodePage
