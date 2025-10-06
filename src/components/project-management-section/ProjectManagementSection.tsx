import Image from "next/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function ProjectManagementSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-col-reverse sm:flex-row items-center gap-20 sm:gap-40 p-10 sm:p-20">
			{/* Image */}
			<Image
				src={"/images/project-management2.png"}
				alt="project-management"
				className="object-contain"
				width={500}
				height={500}
			/>
			<div className="flex-1 flex flex-col gap-10">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px]/12 font-semibold text-heading tracking-wide">
						Project Management
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
							Create and showcase personalized projects.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							In-app collaboration requests for engaging collab
							partners.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Manage small one-off collaborations to major team
							productions.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Automated project management system for team and
							timeline management.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							In app/email alerts and notifications.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Easy to connect to other modules to make business
							effortless and seamless.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
