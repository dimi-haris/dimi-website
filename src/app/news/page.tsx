import Image from "next/image"

export default function News(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen flex flex-col items-center pt-40">
			{/* Banner image */}
			<Image
				src={"/images/news-banner.png"}
				alt="news-banner"
				className="object-contain h-fit w-full"
				height={500}
				width={1000}
			/>
			{/* News wrapper */}
			<div className="w-full flex flex-col gap-10 px-15 py-10">
				{/* News title wrapper */}
				<div className="w-full flex flex-col">
					{/* News title */}
					<p className="text-[40px] text-heading font-semibold tracking-wide">
						Dream It, Make It Announces Holiday as Host of the
						Artists Unveiled Podcast
					</p>
					{/* News date */}
					<p>July 14, 2025</p>
				</div>
				{/* News description */}
				<p className="text-xl text-description">
					<span className="font-bold">Brooklyn, NY</span> — Dream It,
					Make It is thrilled to announce that celebrated performing
					artist <span className="font-bold">Holiday</span> will join
					as the official host of the upcoming podcast Artists
					Unveiled: Passion to Performance, premiering this summer.
				</p>
				{/* News host image */}
				<Image
					src={"/images/host.png"}
					alt="host"
					className="object-contain self-center"
					height={300}
					width={300}
				/>
				{/* News description */}
				<p className="text-xl text-description">
					<span className="italic">Artists Unveiled</span> is a
					bi-weekly podcast that takes listeners behind the curtain
					into the real lives of performing artists, highlighting
					their journeys, breakthroughs, and the passion that fuels
					their craft. With each 20-25 minute episode, the show aims
					to inspire emerging creatives by sharing honest
					conversations, career insights, and artistic wisdom from
					performers across disciplines.
				</p>
				{/* News description */}
				<p className="text-xl text-description">
					Holiday brings a vibrant presence, deep artistic experience,
					and a unique empathy for fellow artists to the mic, making
					her the perfect voice to guide these candid, engaging
					interviews.
				</p>
				{/* News description */}
				<p className="text-xl text-description">
					Coming soon on{" "}
					<span className="font-bold">
						Spotify, Apple Podcasts, YouTube, and all major podcast
						platforms.
					</span>{" "}
					To learn more about the show and upcoming guests, visit{" "}
					<a
						href="https://www.godimi.com/"
						className="text-blue-700 underline"
						target="_blank"
					>
						www.godimi.com
					</a>{" "}
					or contact publicrelations@godimi.com.
				</p>
				{/* News publisher info */}
				<p className="text-xl text-description">
					<span className="font-bold">Media Contact:</span>
					<br />
					publicrelations@godimi.com
					<br />
					Dream It, Make It
				</p>
			</div>
		</div>
	)
}
