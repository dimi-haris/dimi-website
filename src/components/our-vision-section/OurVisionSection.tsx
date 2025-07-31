import Image from "next/image"

export default function OurVisionSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-row items-center gap-72 p-24">
			{/* Text container */}
			<div className="flex-1 flex flex-col justify-center gap-5">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px] font-semibold text-heading tracking-wide">
						Our Vision
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
				{/* Description wrapper */}
				<div className="flex flex-col gap-1">
					{/* Sub title */}
					<p className="text-[22px] text-heading italic">
						Bringing Ideas to Light
					</p>
					{/* Description */}
					<p className="text-[20px]/8 text-description">
						We aspire to illuminate the world by transforming
						creative dreams into reality through seamless
						collaboration and support.
					</p>
				</div>
			</div>
			{/* Our Vision image group */}
			<Image
				src={"/images/our-vision-image-group.png"}
				alt="our-vision"
				className="object-contain"
				height={500}
				width={500}
			/>
		</div>
	)
}
