import { TeamMember } from "@/utils/types"

export default function TeamMemberCard(
	props: TeamMember
): React.ReactElement | null {
	return (
		// Main container
		<div
			className="h-[235px] w-[215px] rounded-[20px] bg-cover bg-center overflow-hidden"
			style={{ backgroundImage: `url(${props.image})` }}
		>
			{/* Background gradient */}
			<div className="size-full bg-linear-to-t from-black to-transparent to-85% flex flex-col justify-end p-5">
				{/* Name */}
				<p className="text-[22px] text-[#EFEEE0]">{props.name}</p>
				{/* Designation */}
				<p className="text-[10px] text-[#EFEEE0] font-kaushan">
					{props.designation}
				</p>
			</div>
		</div>
	)
}
