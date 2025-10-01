import { useMemo } from "react";
import Image from "next/image";
import { PodcastPlatform } from "@/utils/types";
export default function PodcastEpisodeSection(): React.ReactElement | null {
  const podcastPlatforms = useMemo<PodcastPlatform[]>(
    () => [
      {
        name: "Youtube",
        image: "/icons/youtube-dark.png",
        url: "#",
      },
      {
        name: "Spotify",
        image: "/icons/spotify.png",
        url: "#",
      },
      {
        name: "Amazon",
        image: "/icons/amazon.png",
        url: "#",
      },
      {
        name: "Apple Podcast",
        image: "/icons/apple-podcast.png",
        url: "#",
      },
    ],
    []
  );

  const podcastTags = useMemo<string[]>(
    () => ["Art", "Music", "Creatives", "Acknowledgement"],
    []
  );
  return (
    // Main container
    <div className="w-[85%] sm:w-[90%] flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium text-[#737373]">
          March 19, 2025
        </div>
        <h1 className="text-[40px] font-semibold ">
          Zayn: Finding Art Within Nature
        </h1>
      </div>
      {/* Podcast platforms */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <p className="text-xs text-description uppercase">available on</p>
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
          Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* Tags */}
        <div className="flex flex-row flex-wrap items-center gap-3">
          {podcastTags.map((tag, key) => (
            <div
              className="h-12 w-fit flex items-center justify-center px-5 bg-[#E5AB4E47] border-b-2 border-[#bdbdbd] rounded-full cursor-pointer"
              key={key}
            >
              <p className="text-lg text-heading font-medium">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
