import OurVisionSection from "@/components/our-vision-section/OurVisionSection"
import OurMissionSection from "@/components/our-mission-section/OurMissionSection"
import OurValuesSection from "@/components/our-values-section/OurValuesSection"
import HowDiMiCanHelpYouSection from "@/components/how-dimi-can-help-you-section/HowDiMiCanHelpYouSection"
import DreamTeamSection from "@/components/dream-team-section/DreamTeamSection"
import TroupeSection from "@/components/troupe-section/TroupeSection"

export default function About(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen flex flex-col pt-64 sm:pt-72 pb-32 sm:pb-52">
			{/* Title wrapper */}
			<div className="flex flex-col items-center gap-3 px-5">
				{/* Title */}
				<p className="text-[22px] sm:text-[32px]/7 text-primary font-medium uppercase text-center">
					fueling creative futures
				</p>
				{/* Sub title */}
				<p className="text-3xl sm:text-[50px]/15 text-heading font-semibold text-center max-w-[500px]">
					Bringing Passion and Expertise Together
				</p>
				{/* Description */}
				<p className="sm:text-xl text-description text-center max-w-[650px]">
					A digital space where artists, creatives, and industry
					professionals connect, collaborate, and grow.
				</p>
			</div>
			{/* Content wrapper */}
			<div className="w-full max-w-[825px] self-center flex flex-col gap-5 pt-52 px-10">
				{/* Content */}
				<p className="text-[22px] sm:text-[32px] text-heading">
					At DiMi, we believe artists deserve more than survival -
					they deserve to thrive.{" "}
					<span className="text-[#42718D]">
						That’s why we’re building tools, community, and
						opportunities to change the story.
					</span>
				</p>
				{/* Content */}
				<p className="sm:text-lg text-[#42718D] max-w-[550px]">
					Giving{" "}
					<span className="font-semibold text-heading">
						creators & seekers
					</span>{" "}
					the tools because every creative deserves a future they
					shape on their own terms.
				</p>
			</div>
			{/* Our Vision section */}
			<OurVisionSection />
			{/* Our Mission section */}
			<OurMissionSection />
			{/* Our Values section */}
			<OurValuesSection />
			{/* How DiMi Can Help You section */}
			<HowDiMiCanHelpYouSection />
			{/* The Dream Team section */}
			<DreamTeamSection />
			{/* The Troupe section */}
			<TroupeSection />
		</div>
	)
}
