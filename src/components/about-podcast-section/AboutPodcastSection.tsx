import { useMemo } from "react"
import Image from "next/image"
import PodcastPlatformPill from "../podcast-platform-pill/PodcastPlatformPill"
import TagPill from "../tag-pill/TagPill"
import { PodcastPlatform } from "@/utils/types"

export default function AboutPodcastSection(): React.ReactElement | null {
	const podcastPlatforms = useMemo<PodcastPlatform[]>(
		() => [
			{
				name: "Youtube",
				image: "/icons/youtube-dark.png",
				url: "https://www.youtube.com/watch?v=Q00xEQtMkjc"
			},
			{
				name: "Apple Podcast",
				image: "/icons/apple-podcast.png",
				url: "https://podcasts.apple.com/us/podcast/dream-it-make-it-artists-unveiled/id1843258067"
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
		<div className="w-[85%] sm:w-[90%] flex flex-col gap-5">
			{/* Podcast platforms */}
			<div className="flex flex-col gap-2">
				{/* Title */}
				<p className="text-xs text-description uppercase">
					available on
				</p>
				{/* Platform tabs */}
				<div className="flex flex-row flex-wrap items-center gap-3">
					{podcastPlatforms.map((platform, key) => (
						<PodcastPlatformPill
							url={platform.url}
							name={platform.name}
							image={platform.image}
							key={key}
						/>
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
				<p className="text-lg sm:text-xl text-description">
					Behind every successful artist is a journey one filled with
					struggles, challenges, and hard-won victories. These are the
					stories that inspire, empower, and connect us all.
					<br />
					<br />
					Dream It, Make It - Artists Unveiled, brought to you by
					DiMi, is a podcast that gives artists a voice to share their
					unique paths to success. Each episode dives deep into the
					personal journeys of successful performing artists who dared
					to dream and turned their visions into reality.
					<br />
					<br />
					Each episode of Artists Unveiled: Passion to Performance
					brings powerful conversations with creatives from all walks
					of life - actors, musicians, dancers, directors, and more.
					Through candid, heartfelt conversations, we explore the
					highs, the lows, and the skills that helped these artists
					thrive. For our listeners emerging creatives and art
					enthusiasts alike - these stories become a source of
					inspiration, offering lessons in perseverance, growth, and
					triumph. It’s more than a podcast; it’s a platform for
					creative exchange, where shared experiences fuel passion,
					empower dreams, and build a community connected by art and
					ambition. Because every artist’s story has the power to
					inspire the next.
				</p>
				{/* Tags */}
				<div className="flex flex-row flex-wrap items-center gap-3">
					{podcastTags.map((tag, key) => (
						<TagPill name={tag} key={key} />
					))}
				</div>
			</div>
		</div>
	)
}
