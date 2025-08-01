import Image from "next/image"
import TeamMemberCard from "../team-member-card/TeamMemberCard"
import { dreamTeam } from "@/utils/constants"

export default function DreamTeamSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="flex flex-col gap-15 items-center pt-36 px-20">
			{/* Title wrapper */}
			<div className="flex flex-col items-center">
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px] font-semibold text-heading tracking-wide">
						The Dream Team
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-3 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Sub title */}
				<p className="text-description">
					The founders behind the Dream It, Make It who create the
					bold vision for the future of creatives.
				</p>
			</div>
			{/* Team member cards */}
			<div className="flex flex-row flex-wrap items-start justify-center gap-5 w-full max-w-[750px]">
				{dreamTeam.map((member, key) => (
					<TeamMemberCard {...member} key={key} />
				))}
			</div>
		</div>
	)
}
