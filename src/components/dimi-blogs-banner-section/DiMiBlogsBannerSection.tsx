import Image from "next/image"

export default function DiMiBlogsBannerSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-full flex flex-col gap-10 px-20">
			{/* Title wrapper */}
			<div className="flex flex-col">
				{/* Title */}
				<p className="text-[32px]/10 text-primary">DiMi BLOGS</p>
				{/* Sub title */}
				<p className="text-[50px]/13 font-semibold">
					Analytics Explained:
				</p>
				{/* Sub title */}
				<p className="text-[50px]/13 font-semibold">
					What every musician should know
				</p>
			</div>
			{/* Banner image */}
			<Image
				src={"/images/dimi-blogs-banner.png"}
				alt="dimi-blogs-banner"
				className="object-contain w-full"
				width={1000}
				height={500}
			/>
		</div>
	)
}
