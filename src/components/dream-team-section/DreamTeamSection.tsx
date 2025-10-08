"use client"
import Image from "next/image";
import TeamMemberCard from "../team-member-card/TeamMemberCard";
import { dreamTeam } from "@/utils/constants";
import { useState } from "react";
import TeamMemberDetails from "../team-member-card/TeamMemberDetails";

export default function DreamTeamSection(): React.ReactElement | null {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  return (
    // Main container
    <div
      className="flex flex-col gap-15 items-center pt-24 sm:pt-36 px-5 sm:px-20"
      id="team"
    >
      {/* Title wrapper */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-0">
        <div className="relative w-fit">
          {/* Title */}
          <p className="text-[32px] sm:text-[40px] font-semibold text-heading tracking-wide">
            The Dream Team
          </p>
          {/* Brush stroke */}
          <Image
            src={"/images/brush-stroke.png"}
            alt="brush-stroke"
            className="absolute -bottom-3 right-0 object-contain"
            height={5}
            width={225}
          />
        </div>
        {/* Sub title */}
        <p className="text-description text-center">
          The founders behind the Dream It, Make It who create the bold vision
          for the future of creatives.
        </p>
      </div>
      {/* Team member cards */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center gap-5 w-full max-w-[750px]">
        {/* {dreamTeam.map((member, key) => (
					<TeamMemberCard {...member} key={key} />
				))} */}
        {dreamTeam.map((member, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <TeamMemberCard {...member} />

            {/* Hover Detail Box */}
            {hoveredMember === index && (
              <div className="absolute left-[40%] top-[45%] z-30 transition-all duration-300">
                <TeamMemberDetails member={member} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
