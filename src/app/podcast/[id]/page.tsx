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
  // State for the popup player visibility
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  // ▶️ Open popup and play YouTube Short
  const handlePlay = useCallback((): void => {
    setIsPlaying(true)
  }, [])

  // ⏹️ Close popup
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
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/podcasts/${id}`)
        .then((response) => {
          console.log(response.data)
          setPodcast(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    })()
  }, [id])

  // Extract YouTube ID from the provided Shorts URL
  const YT_ID = "fHdM-ecvrpk"

  return (
    <div className="min-h-screen w-screen flex flex-col gap-15">
      {/* Trailer thumbnail + play button */}
      <div className="h-[750px] w-full relative">
        {!isPlaying && (
          <button
            className="size-20 rounded-full cursor-pointer bg-[#66666633] backdrop-blur-sm flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            onClick={handlePlay}
            aria-label="Play trailer"
          >
            <PlayIcon className="size-8 text-white" />
          </button>
        )}
        <Image
          src={"/images/trailer-thumbnail.jpg"}
          alt="trailer-thumbnail"
          className="object-cover h-full w-full"
          height={650}
          width={1280}
          priority
        />
      </div>

      {/* Popup overlay with YouTube Short */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={handleStop}
          role="dialog"
          aria-modal="true"
          aria-label="Video popup"
        >
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Make clicks close the popup by disabling pointer events on the iframe */}
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl pointer-events-none"
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
              title="YouTube Shorts player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Podcast wrapper */}
      <div className="w-full flex flex-col gap-20 pb-20">
        {/* Wrapper */}
        <div className="w-full flex flex-col gap-5 px-20">
          {/* Podcast header */}
          <div className="flex flex-col">
            <p className="font-medium text-description">{podcastDate}</p>
            <p className="text-[40px] font-semibold text-heading">
              {podcast?.title}
            </p>
          </div>

          {/* Platforms */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-description uppercase">available on</p>
            <div className="flex flex-row flex-wrap items-center gap-3">
              {podcast?.youtube_link && (
                <PodcastPlatformPill
                  url={podcast.youtube_link}
                  image={"/icons/youtube-dark.png"}
                  name={"Youtube"}
                />
              )}
              {podcast?.tiktok_link && (
                <PodcastPlatformPill
                  url={podcast.tiktok_link}
                  image={"/icons/tiktok-dark.png"}
                  name={"Tiktok"}
                />
              )}
              {podcast?.spotify_link && (
                <PodcastPlatformPill
                  url={podcast.spotify_link}
                  image={"/icons/spotify.png"}
                  name={"Spotify"}
                />
              )}
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
          <div className="flex flex-row items-center gap-1.5">
            <p className="text-heading">S{podcast?.season}</p>
            <div className="size-1 rounded-full bg-heading" />
            <p className="text-heading">Episode {podcast?.episode}</p>
          </div>

          <div className="relative w-fit">
            <p className="text-[40px] font-semibold text-heading">
              Episode Description
            </p>
            <Image
              src={"/images/brush-stroke.png"}
              alt="brush-stroke"
              className="absolute -bottom-2.5 right-0 object-contain"
              height={5}
              width={250}
            />
          </div>

          <p className="text-xl text-description article-paragraph">{podcast?.podcastHtml}</p>

          <div className="flex flex-row flex-wrap items-center gap-3">
            {podcastTags.map((tag, key) => (
              <TagPill name={tag} key={key} />
            ))}
          </div>
        </div>

        <PodcastPlaylist title="Next Episode" theme="light" />
      </div>
    </div>
  )
}
