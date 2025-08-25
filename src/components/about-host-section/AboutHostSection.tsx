import Image from "next/image"

export default function AboutHostSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-[85%] sm:w-[90%] flex flex-col gap-15 pb-15">
			{/* Title wrapper */}
			<div className="relative w-fit">
				{/* Title */}
				<p className="text-[32px] font-medium text-heading tracking-wide">
					About The Host
				</p>
				{/* Brush stroke */}
				<Image
					src={"/images/brush-stroke.png"}
					alt="brush-stroke"
					className="absolute -bottom-1.5 right-0 object-contain"
					height={5}
					width={175}
				/>
			</div>
			<div className="w-full flex flex-col sm:flex-row items-center gap-20">
				{/* Host image */}
				<Image
					src={"/images/host.png"}
					alt="host"
					className="object-contain"
					height={300}
					width={300}
				/>
				{/* Host info */}
				<div className="w-full flex flex-col gap-5">
					{/* Host name */}
					<p className="text-xl text-heading font-bold uppercase">
						holiday
					</p>
					{/* Host description */}
					<p className="text-xl text-description">
						Holiday is a multi-hyphenate artist, content creator,
						consultant & manager who works with world renowned
						creatives and top tier content. Holiday founded AMG
						Music and Belle Étoile Music & Films after her tenure as
						an executive and signed artist.
						<br />
						<br />
						She is a strong advocate for peace and the environment.
						Her song “ Believe,” was chosen twice by the United
						Nations as the peace song for the peace installation
						showcased on the international day of peace.
						<br />
						<br />
						This podcast is produced in collaboration with Brooklyn
						Podcasting Studio.
					</p>
				</div>
			</div>
		</div>
	)
}
