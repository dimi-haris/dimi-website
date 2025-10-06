import Image from "next/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function ContractManagementSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-col-reverse sm:flex-row items-center gap-20 sm:gap-40 p-10 sm:p-20">
			{/* Image */}
			<Image
				src={"/images/contract-management2.png"}
				alt="contract-management"
				className="object-contain"
				width={500}
				height={500}
			/>
			<div className="flex-1 flex flex-col gap-10">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px]/12 font-semibold text-heading tracking-wide">
						Contract Management
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-5 right-0 object-contain"
						height={5}
						width={300}
					/>
				</div>
				{/* Bullet points */}
				<div className="w-full flex flex-col gap-5">
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Standardized Contract Templates.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Personalized Contracts.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Contract Management.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Important Version Tracking.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							In-App Notifications.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
