import { Feature } from "@/utils/types"

// Interface for the props of the component
interface FeatureCardProps {
	feature: Feature
	selectedFeature: number
	index: number
}

export default function FeatureCard(
	props: FeatureCardProps
): React.ReactElement | null {
	return (
		// Main container
		<div
			className={`h-fit w-full ${
				props.selectedFeature === props.index
					? "bg-linear-to-r from-[#0F1213] to-[#617179]"
					: "bg-[#0F1213AD]"
			} rounded-[10px] p-5 flex flex-col gap-3 transition ease-in-out duration-1000`}
		>
			{/* Title */}
			<p
				className={`${
					props.selectedFeature === props.index
						? "text-primary"
						: "text-description"
				} text-lg font-medium transition ease-in-out duration-1000`}
			>
				{props.feature.title}
			</p>
			{/* Description */}
			<p
				className={`text-sm ${
					props.selectedFeature === props.index
						? "text-[#DFDFDF]"
						: "text-[#454545]"
				} truncate transition ease-in-out duration-1000`}
			>
				{props.feature.description}
			</p>
		</div>
	)
}
