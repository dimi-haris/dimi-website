import { useMemo } from "react"
import Image from "next/image"
import { PodcastPlatform } from "@/utils/types"

export default function AboutPodcastSection(): React.ReactElement | null {
	const podcastPlatforms = useMemo<PodcastPlatform[]>(
		() => [
			{
				name: "Youtube",
				image: "/icons/youtube-dark.png",
				url: "#"
			},
			{
				name: "Spotify",
				image: "/icons/spotify.png",
				url: "#"
			},
			{
				name: "Amazon",
				image: "/icons/amazon.png",
				url: "#"
			},
			{
				name: "Apple Podcast",
				image: "/icons/apple-podcast.png",
				url: "#"
			}
		],
		[]
	)

	const podcastTags = useMemo<string[]>(
		() => ["Art", "Music", "Creatives", "Acknowledgement"],
		[]
	)

	return (
		// Main container
		<div className="w-[90%] flex flex-col gap-5">
			{/* Podcast platforms */}
			<div className="flex flex-col gap-2">
				{/* Title */}
				<p className="text-xs text-description uppercase">
					available on
				</p>
				{/* Platform tabs */}
				<div className="flex flex-row items-center gap-3">
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
						About
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute bottom-0 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Description */}
				<p className="text-xl text-description">
					Behind every successful artist is a journey—one filled with
					struggles, challenges, and hard-won victories. These are the
					stories that inspire, empower, and connect us all.
					<br />
					Dream It, Make It- Artists Unveiled, brought to you by DiMi,
					is a podcast that gives artists a voice to share their
					unique paths to success. Each episode dives deep into the
					personal journeys of successful performing artists who dared
					to dream and turned their visions into reality.
					<br />
					Each episode of Artists Unveiled: Passion to Performance
					brings powerful conversations with creatives from all walks
					of life — actors, musicians, dancers, directors, and more.
					Through candid, heartfelt conversations, we explore the
					highs, the lows, and the skills that helped these artists
					thrive. For our listeners—emerging creatives and art
					enthusiasts alike—these stories become a source of
					inspiration, offering lessons in perseverance, growth, and
					triumph. It’s more than a podcast; it’s a platform for
					creative exchange, where shared experiences fuel passion,
					empower dreams, and build a community connected by art and
					ambition. Because every artist’s story has the power to
					inspire the next.
				</p>
				{/* Tags */}
				<div className="flex flex-row items-center gap-3">
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
