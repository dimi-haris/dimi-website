import Image from "next/image"
import Link from "next/link"
import { PlayIcon } from "@heroicons/react/24/solid"
import { PodcastEpisode } from "@/utils/types"

// Interface for the props of the component
interface PodcastPlaylistItemProps {
	id: PodcastEpisode["id"]
	podcast_thumbnail: PodcastEpisode["podcast_thumbnail"]
	title: PodcastEpisode["title"]
	artist: PodcastEpisode["artist"]
	season: PodcastEpisode["season"]
	episode: PodcastEpisode["episode"]
	length: PodcastEpisode["length"]
	playlist: PodcastEpisode["playlist"]
	youtube_link: PodcastEpisode["youtube_link"]
	tiktok_link: PodcastEpisode["tiktok_link"]
	spotify_link: PodcastEpisode["spotify_link"]
	apple_link: PodcastEpisode["apple_link"]
	theme: "dark" | "light"
}

export default function PodcastPlaylistItem(
	props: PodcastPlaylistItemProps
): React.ReactElement | null {
	return (
		// Main container
		<div className="h-24 w-full flex flex-row items-center justify-between border-t border-b border-[#FFFFFF08]">
			{/* Podcast details wrapper */}
			<Link
				href={`/podcast/${props.id}`}
				className="w-fit max-w-[165px] sm:max-w-[500px] flex flex-row items-center gap-5"
			>
				{/* Play button */}
				<PlayIcon
					className={`min-h-5 min-w-5 ${
						props.theme === "dark"
							? "text-white"
							: "text-description"
					}`}
				/>
				{/* Thumbnail */}
				<Image
					src={props.podcast_thumbnail || "/images/trailer-thumbnail.jpg"}
					alt="podcast"
					className="object-cover h-17 w-24 rounded-lg"
					height={25}
					width={35}
				/>
				{/* Episode details wrapper */}
				<div className="flex-1 flex flex-col justify-center gap-1.5">
					{/* Wrapper */}
					<div className="flex flex-col">
						{/* Episode title */}
						<p
							className={`${
								props.theme === "dark"
									? "text-white"
									: "text-heading"
							} max-w-[165px] sm:max-w-[500px] truncate`}
						>
							{props.title}
						</p>
						{/* Artist */}
						<p className="text-sm text-[#bdbdbd]">{props.artist}</p>
					</div>
					{/* Wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* Season & Episode */}
						<div className="flex flex-row items-center gap-1.5">
							{/* Season */}
							<p
								className={`text-xs ${
									props.theme === "dark"
										? "text-white"
										: "text-heading"
								}`}
							>
								S{props.season}
							</p>
							{/* Circular separator */}
							<div
								className={`size-1 rounded-full ${
									props.theme === "dark"
										? "text-white"
										: "text-heading"
								}`}
							/>
							{/* Episode */}
							<p
								className={`text-xs ${
									props.theme === "dark"
										? "text-white"
										: "text-heading"
								}`}
							>
								Episode {props.episode}
							</p>
						</div>
						{/* Duration */}
						<p className="text-xs text-[#bdbdbd]">{props.length}</p>
					</div>
				</div>
			</Link>
			{/* Playlist name */}
			<p className="hidden sm:flex text-description text-center w-60 truncate">
				{props.playlist}
			</p>
			{/* Platform icons wrapper */}
			<div className="hidden sm:flex flex-row items-center gap-1.5">
				{/* Youtube icon and link */}
				<a
					href={props.youtube_link || "#"}
					className="size-10 rounded-full border border-description flex items-center justify-center"
					target="_blank"
				>
					<Image
						src={"/icons/youtube-dark.png"}
						alt="youtube"
						className="object-contain"
						height={25}
						width={25}
					/>
				</a>
				{/* Spotify icon and link */}
				<a
					href={props.spotify_link || "#"}
					className="size-10 rounded-full border border-description flex items-center justify-center"
					target="_blank"
				>
					<Image
						src={
							props.theme === "dark"
								? "/icons/spotify-dark.png"
								: "/icons/spotify.png"
						}
						alt="spotify"
						className="object-contain"
						height={25}
						width={25}
					/>
				</a>
				{/* Apple Podcast icon and link */}
				<a
					href={props.apple_link || "#"}
					className="size-10 rounded-full border border-description flex items-center justify-center"
					target="_blank"
				>
					<Image
						src={"/icons/apple-podcast-outline.png"}
						alt="apple-podcast"
						className="object-contain"
						height={25}
						width={25}
					/>
				</a>
			</div>
		</div>
	)
}
