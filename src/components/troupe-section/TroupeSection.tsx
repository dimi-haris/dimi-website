import Image from "next/image"
import TeamMemberCard from "../team-member-card/TeamMemberCard"
import { troupe } from "@/utils/constants"

export default function TroupeSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="flex flex-col gap-15 items-center pt-24 sm:pt-36 px-5 sm:px-20">
			{/* Title wrapper */}
			<div className="flex flex-col items-center gap-2.5 sm:gap-0">
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[32px] sm:text-[40px] font-semibold text-heading tracking-wide">
						The Troupe
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-1.5 sm:-bottom-3 right-0 object-contain"
						height={5}
						width={225}
					/>
				</div>
				{/* Sub title */}
				<p className="text-description text-center">
					Our values are the foundation of everything we create, so
					that you can thrive in what you create
				</p>
			</div>
			{/* Team member cards */}
			<div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start justify-center gap-5 w-full max-w-[750px]">
				{troupe.map((member, key) => (
					<TeamMemberCard {...member} key={key} />
				))}
			</div>
		</div>
	)
}
