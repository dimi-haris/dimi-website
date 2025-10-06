"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import PodcastPlaylistItem from "../podcast-playlist-item/PodcastPlaylistItem";
import { PodcastEpisode } from "@/utils/types";

// Interface for the props of the component
interface PodcastPlaylistProps {
  title: string;
  theme: "dark" | "light";
}

export default function PodcastPlaylist(
  props: PodcastPlaylistProps
): React.ReactElement | null {
  // State for the podcast episodes
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);

  // Fetch episodes from the API
  useEffect(() => {
    (async () => {
      // Initiate a fetch request to the API endpoint
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/podcasts`)
        .then((response) => {
          // Log the response data
          console.log(response.data);
          // Update the podcast episodes state with the fetched data
          setEpisodes(response.data);
        })
        .catch((error) => {
          // Log the error
          console.error(error);
        });
    })();
  }, []); // Empty array as dependency to only fetch once

  return (
    // Main container
    <div
      className={`max-h-[650px] w-full rounded-[40px] sm:rounded-[80px] flex flex-col gap-5 px-5 sm:px-15 py-10 sm:py-[50px] ${
        props.theme === "dark" ? "bg-[#16171e]" : "bg-white"
      }`}
    >
      {/* Title */}
      <p
        className={`text-[32px] ${
          props.theme === "dark" ? "text-white" : "text-heading"
        }`}
      >
        {props.title}
      </p>
      {/* Playlist table */}
      <div className="w-full flex-1 flex flex-col gap-5">
        {/* Table header */}
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-sm text-[#bdbdbd] pl-10">Title</p>
          <p className="hidden sm:flex text-sm text-[#bdbdbd] pl-40">
            Playlist
          </p>
          <Image
            src={
              props.theme === "dark"
                ? "/icons/playlist.png"
                : "/icons/playlist-dark.png"
            }
            alt="playlist"
            className="hidden sm:flex object-contain mr-20"
            height={15}
            width={15}
          />
        </div>
        {/* Table body */}
       
        <div className="w-full flex-1 flex flex-col overflow-y-scroll scrollbar-none">
          {episodes.map((episode) => (
            <PodcastPlaylistItem
              {...episode}
              theme={props.theme}
              key={episode.id}
            />
          ))}

          {/* Static dummy blurred rows */}
          {[...Array(3)].map((_, idx) => (
            <div
              key={`dummy-${idx}`}
              className="opacity-50 blur-sm pointer-events-none"
            >
              <PodcastPlaylistItem {...episodes[0]} theme={props.theme} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
