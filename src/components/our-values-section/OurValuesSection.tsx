import Image from "next/image"
import ValueCard from "../value-card/ValueCard"
import { ourValues } from "@/utils/constants"

export default function OurValuesSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="h-fit w-full bg-[#040607] rounded-[80px] p-10 flex flex-col items-center gap-1">
			{/* Title wrapper */}
			<div className="relative w-fit">
				{/* Title */}
				<p className="text-[40px] font-semibold text-white tracking-wide">
					Our Values
				</p>
				{/* Brush stroke */}
				<Image
					src={"/images/brush-stroke.png"}
					alt="brush-stroke"
					className="absolute -bottom-1 right-0 object-contain"
					height={5}
					width={165}
				/>
			</div>
			{/* Sub title */}
			<p className="text-base text-white text-center">
				Our values are the foundation of everything we create—so that
				you can thrive in what you create
			</p>
			{/* Value cards grid */}
			<div className="w-full max-w-[1350px] pt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
				{ourValues.map((value, key) => (
					// Value card
					<ValueCard {...value} key={key} />
				))}
			</div>
		</div>
	)
}
