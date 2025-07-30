export default function About(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen h-screen flex flex-col pt-72">
			<div className="flex flex-col items-center gap-3">
				<p className="text-[32px]/7 text-primary font-medium uppercase">
					fueling creative futures
				</p>
				<p className="text-[50px]/15 text-heading font-semibold text-center max-w-[500px]">
					Bringing Passion and Expertise Together
				</p>
				<p className="text-xl text-description text-center max-w-[650px]">
					A digital space where artists, creatives, and industry
					professionals connect, collaborate, and grow.
				</p>
			</div>
		</div>
	)
}
