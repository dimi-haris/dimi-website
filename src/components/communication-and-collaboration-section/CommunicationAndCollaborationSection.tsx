import Image from "next/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export default function CommunicationAndCollaborationSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-col sm:flex-row items-center gap-20 sm:gap-40 p-10 sm:p-20">
			<div className="flex-1 flex flex-col gap-10">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px]/12 font-semibold text-heading tracking-wide">
						Communication & Collaboration
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
							Role based custom user views - Creator, Seeker,
							Investor, Patron.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Personalized user views based on art forms, location
							and user type and art interests.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Groups and Chat.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Offer services, entertain custom requests.
						</p>
					</div>
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Check circle icon */}
						<CheckCircleIcon className="size-8 min-h-8 min-w-8 text-primary" />
						{/* Bullet point text */}
						<p className="text-base text-description">
							Build a fan community, and collaboration.
						</p>
					</div>
				</div>
			</div>
			{/* Image */}
			<Image
				src={"/images/communication-and-collaboration.png"}
				alt="communication-and-collaboration"
				className="object-contain"
				width={500}
				height={500}
			/>
		</div>
	)
}
