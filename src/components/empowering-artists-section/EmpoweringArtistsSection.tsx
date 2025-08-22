import Image from "next/image"
import { scrollImages } from "@/utils/constants"

export default function EmpoweringArtistsSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="h-fit sm:h-[655px] w-full bg-black rounded-[80px] p-10 sm:p-0 sm:px-20 flex flex-col sm:flex-row gap-10 sm:gap-0 items-center overflow-hidden">
			{/* Text container */}
			<div className="flex flex-col gap-5 sm:gap-10 max-w-[420px] mx-auto">
				{/* Title */}
				<p className="text-3xl sm:text-[45px]/15 text-white font-semibold">
					Empowering Artists to thrive in the digital age
				</p>
				{/* Description */}
				<p className="text-[#eaeaea] text-sm sm:text-base">
					At DiMi, you’re not just making art—you’re building a
					future. Discover tools that help you connect, protect your
					work, and thrive sustainably in the creative world
				</p>
			</div>
			{/* Scrolling images wrapper */}
			<div className="h-[358.5px] sm:h-full w-fit flex flex-row gap-5 overflow-hidden">
				{/* Scrolling images container */}
				<div className="flex flex-col items-center gap-5 transition-transform -translate-y-full animate-scroll-down">
					{/* Scrolling images */}
					{scrollImages.slice(0, 3).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`image-${index}`}
						/>
					))}
					{/* Duplicate scrolling images */}
					{scrollImages.slice(0, 3).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`duplicate-image-${index}`}
						/>
					))}
				</div>
				{/* Scrolling images container */}
				<div className="flex flex-col items-center gap-5 animate-scroll-up">
					{/* Scrolling images */}
					{scrollImages.slice(3, 7).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`image-${index}`}
						/>
					))}
					{/* Duplicate scrolling images */}
					{scrollImages.slice(3, 7).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`duplicate-image-${index}`}
						/>
					))}
				</div>
				{/* Scrolling images container */}
				<div className="flex flex-col items-center gap-5 -translate-y-full animate-scroll-down">
					{/* Scrolling images */}
					{scrollImages.slice(7, 10).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`image-${index}`}
						/>
					))}
					{/* Duplicate scrolling images */}
					{scrollImages.slice(7, 10).map((image, index) => (
						<Image
							src={image}
							alt="scroll-image"
							className="object-cover min-h-[100px] h-[100px] sm:h-[200px] sm:min-h-[200px] w-[175px]"
							height={150}
							width={150}
							key={`duplicate-image-${index}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
