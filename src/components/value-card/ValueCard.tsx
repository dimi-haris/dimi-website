import Image from "next/image"
import { OurValue } from "@/utils/types"

export default function ValueCard(props: OurValue): React.ReactElement | null {
	return (
		// Main container
		<div className="h-fit min-h-80 w-full bg-[#1C1C1C52] rounded-lg flex flex-col items-center gap-5 px-5 py-10 relative">
			{/* Line stroke */}
			<Image
				src={"/images/line-stroke.png"}
				alt="line-stroke"
				className="absolute w-[85%] -top-0.5 left-[7.5%] object-contain"
				width={250}
				height={5}
			/>
			{/* Value icon container */}
			<div className="size-[50px] border border-[#E0E0E0] rounded-md bg-heading flex items-center justify-center">
				{/* Value icon */}
				<Image
					src={props.icon}
					alt={props.title}
					className="object-contain"
					width={25}
					height={25}
				/>
			</div>
			{/* Value title */}
			<p className="text-[22px] text-white">{props.title}</p>
			{/* Value description */}
			<p className="text-lg text-white text-center">
				{props.description}
			</p>
		</div>
	)
}
