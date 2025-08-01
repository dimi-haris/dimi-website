import Image from "next/image"
import DiMiHelpCard from "../dimi-help-card/DiMiHelpCard"
import { dimiHelps } from "@/utils/constants"

export default function HowDiMiCanHelpYouSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="flex flex-col gap-15 items-center pt-24 px-20">
			{/* Title wrapper */}
			<div className="flex flex-col items-center">
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px] font-semibold text-heading tracking-wide">
						How DiMi Can Help You
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
					From finding inspiration to building your brand, DiMi
					supports every step of your artistic path.
				</p>
			</div>
			{/* DiMi Help cards */}
			<div className="flex flex-row flex-wrap items-start justify-center gap-10 w-full max-w-[1200px]">
				{dimiHelps.map((help, key) => (
					<DiMiHelpCard {...help} key={key} />
				))}
			</div>
		</div>
	)
}
