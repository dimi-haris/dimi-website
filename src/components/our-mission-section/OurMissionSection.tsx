import Image from "next/image"

export default function OurMissionSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-col sm:flex-row items-center gap-20 sm:gap-72 px-10 sm:px-24 py-20 sm:py-24">
			{/* Our Mission image group */}
			<Image
				src={"/images/our-mission-image-group.png"}
				alt="our-mission"
				className="object-contain"
				height={500}
				width={500}
			/>
			{/* Text container */}
			<div className="flex-1 flex flex-col justify-center gap-5">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[32px] sm:text-[40px] font-semibold text-heading tracking-wide">
						Our Mission
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
				{/* Description */}
				<p className="text-[20px]/8 text-description">
					Our mission is to facilitate effortless creative
					collaboration, investment, and patronage, enabling artists
					to thrive in a supportive ecosystem.
				</p>
			</div>
		</div>
	)
}
