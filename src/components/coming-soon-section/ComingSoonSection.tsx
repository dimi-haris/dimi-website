export default function ComingSoonSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="h-fit w-full rounded-[80px] bg-[#16171e] flex flex-col items-center px-15 py-[70px]">
			{/* Coming soon text */}
			<p className="text-xl/15 text-white text-center">
				🎧 The Art of Discovery Begins Soon
				<br />
				<span className="font-semibold">
					Real stories. Bold voices. Limitless creativity.
				</span>
				<br />
				<span className="italic">DiMi Podcast</span> is coming —
				featuring the artists and collaborators shaping the future of
				art.
				<br />
				<span className="font-semibold">
					Episodes launching soon. Stay tuned.
				</span>
			</p>
		</div>
	)
}
