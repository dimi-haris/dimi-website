import { useMemo } from "react"
import Image from "next/image"
import { PodcastPlatform } from "@/utils/types"
export default function PodcastEpisodeSection(): React.ReactElement | null {
	const podcastPlatforms = useMemo<PodcastPlatform[]>(
		() => [
			{
				name: "Youtube",
				image: "/icons/youtube-dark.png",
				url: "https://www.youtube.com/watch?v=Q00xEQtMkjc"
			}
			// {
			// 	name: "Spotify",
			// 	image: "/icons/spotify.png",
			// 	url: "#"
			// },
			// {
			// 	name: "Amazon",
			// 	image: "/icons/amazon.png",
			// 	url: "#"
			// },
			// {
			// 	name: "Apple Podcast",
			// 	image: "/icons/apple-podcast.png",
			// 	url: "#"
			// }
		],
		[]
	)

	const podcastTags = useMemo<string[]>(
		() => ["Art", "Music", "Creatives", "Acknowledgement"],
		[]
	)
	return (
		// Main container
		<div className="w-[85%] sm:w-[90%] flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<div className="text-base font-medium text-[#737373]">
					October 1, 2025
				</div>
				<h1 className="text-[40px] font-semibold ">
					Paul Richard: Renegade Artist-Redefining What We Call Art
				</h1>
			</div>
			{/* Podcast platforms */}
			<div className="flex flex-col gap-2">
				{/* Title */}
				<p className="text-xs text-description uppercase">
					available on
				</p>
				{/* Platform tabs */}
				<div className="flex flex-row flex-wrap items-center gap-3">
					{podcastPlatforms.map((platform, key) => (
						<div
							className="h-12 w-fit flex flex-row items-center gap-2 px-5 border border-b-2 border-[#bdbdbd] rounded-full cursor-pointer hover:bg-[#e5ab4e47]"
							key={key}
						>
							<Image
								src={platform.image}
								alt={platform.name}
								className="object-contain"
								height={20}
								width={20}
							/>
							<p className="text-lg text-description font-medium">
								{platform.name}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* Podcast description container */}
			<div className="w-full flex flex-col gap-5">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[32px] font-medium text-heading tracking-wide">
						Episode Description
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute top-4 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				<div className="flex items-center gap-2 mb-1 text-base">
					<span>S1</span>
					<span className="w-1 h-1 bg-gray-400 rounded-full"></span>
					<span>Episode 01</span>
				</div>
				{/* Description */}
				<p className="text-lg sm:text-xl text-description">
					Welcome to the launch episode of Artists Unveiled, the new
					podcast series from Dream It Make It, a company committed to
					empowering artists to turn their passion into a thriving
					career. On this inaugural episode, we{"'"}re setting the bar
					high as we sit down with Paul Richard, an icon of New York
					City street art known for his trailblazing sidewalk drip
					drawings and his reputation as a {'"'}renegade artist.{'"'}
					In a candid conversation, Paul shares his journey from
					showing paintings in Boston cafes to that moment of {'"'}
					desperation{'"'} that led to his most unexpected and
					successful show: an immediate art exhibit inside a Kmart
					super discount store, which was covered by the New York
					Times and the Wall Street Journal. Discover his philosophy
					of trial and error, experimentation, and a methodical work
					ethic, along with his vital advice for emerging creators:{" "}
					{'"'}Don{"'"}t be your own curator{'"'}, always take a
					chance, read the contract and change it if you want. If you
					{"'"}re an artist looking to move from striving to thriving,
					this premiere episode is a must-listen for insight into
					innovative marketing and uncompromising creativity!
				</p>
				{/* Tags */}
				<div className="flex flex-row flex-wrap items-center gap-3">
					{podcastTags.map((tag, key) => (
						<div
							className="h-12 w-fit flex items-center justify-center px-5 bg-[#E5AB4E47] border-b-2 border-[#bdbdbd] rounded-full cursor-pointer"
							key={key}
						>
							<p className="text-lg text-heading font-medium">
								{tag}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
