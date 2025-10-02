import Image from "next/image"

// Interface for the props of the component
interface PodcastPlatformProps {
	url: string
	image: string
	name: string
}

export default function PodcastPlatformPill(
	props: PodcastPlatformProps
): React.ReactElement | null {
	return (
		// Main container
		<a
			className="h-12 w-fit flex flex-row items-center gap-2 px-5 border border-b-2 border-[#bdbdbd] rounded-full cursor-pointer hover:bg-[#e5ab4e47]"
			href={props.url}
			target="_blank"
		>
			{/* Platform icon */}
			<Image
				src={props.image}
				alt={props.name}
				className="object-contain"
				height={20}
				width={20}
			/>
			{/* Platform name */}
			<p className="text-lg text-description font-medium">{props.name}</p>
		</a>
	)
}
