import Image from "next/image"

// Interface for the props of the component
interface BlogCardProps {
	title: string
	image: string
}

export default function BlogCard(
	props: BlogCardProps
): React.ReactElement | null {
	return (
		// Main container
		<div className="flex flex-col gap-2">
			{/* Card container with background image */}
			<div className="flex items-center justify-center bg-[url(/images/card-background.png)] bg-cover bg-center size-[300px] rounded-[15px]">
				{/* Image */}
				<Image
					src={props.image}
					alt="blog-image"
					className="object-cover size-[212px] rounded-tr-2xl rounded-bl-2xl shadow-2xl"
					height={212}
					width={212}
				/>
			</div>
			{/* Title */}
			<p className="text-[22px] font-medium text-heading">
				{props.title}
			</p>
		</div>
	)
}
