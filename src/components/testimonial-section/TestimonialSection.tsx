export default function TestimonialSection(): React.ReactElement | null {
	return (
		// Main container
		<div className="h-[350px] w-[90%] rounded-[80px] px-32 bg-black bg-[url(/images/ceo-quote-background.png)] bg-center bg-cover flex items-center justify-center">
			{/* Quote */}
			<p className="text-white text-2xl">
				“What we are doing is simple: Empower Creatives with Smart,
				Seamless Tools, So You Can Focus on Making Art and Building
				Meaningful Connections.”
				<br />
				<br /> — <span className="font-bold">Hussain Rizvi</span>, CEO &
				Chairperson, DiMi
			</p>
		</div>
	)
}
