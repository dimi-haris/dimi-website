import Image from "next/image"
import { DiMiHelp } from "@/utils/types"

export default function DiMiHelpCard(
	props: DiMiHelp
): React.ReactElement | null {
	return (
		// Main container
		<div className="flex flex-col items-center gap-3 w-60">
			<div className="size-12 rounded-full bg-[#FCF7ED] flex items-center justify-center">
				<Image
					src={props.icon}
					alt={props.title}
					width={20}
					height={20}
				/>
			</div>
			<p className="text-[22px] text-heading font-semibold text-center">
				{props.title}
			</p>
			<p className="text-base text-description text-center">
				{props.description}
			</p>
		</div>
	)
}
