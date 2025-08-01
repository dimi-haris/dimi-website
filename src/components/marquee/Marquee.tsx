export default function Marquee(): React.ReactElement | null {
	return (
		// Marquee container
		<div className="bg-[#2b313c] py-[14px] overflow-hidden w-full my-10">
			{/* Marquee text */}
			<div className="flex gap-5 animate-marquee">
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					DiMi Website remastered
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					/
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					DiMi Blog launched
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					/
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					Artists Unveiled Podcast Recording in Progress
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					/
				</p>
				<p className="text-[#bdbdbd] text-base font-semibold uppercase">
					Achieved 70% AI generated code
				</p>
			</div>
		</div>
	)
}
