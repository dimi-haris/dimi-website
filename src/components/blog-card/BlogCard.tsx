import Image from "next/image"
import Link from "next/link"
import { Blog } from "@/utils/types"

// Interface for the props of the component
interface BlogCardProps {
	id: Blog["id"]
	title: Blog["title"]
	thumbnail: Blog["thumbnail"]
}

export default function BlogCard(
	props: BlogCardProps
): React.ReactElement | null {
	return (
		// Main container
		<Link href={`/blogs/${props.id}`} className="flex flex-col gap-2">
			{/* Card container with background image */}
			<div className="flex items-center justify-center bg-[url(/images/card-background.png)] bg-cover bg-center size-[300px] rounded-[15px]">
				{/* Image */}
				<Image
					src={
						props.thumbnail
							? props.thumbnail
							: "/images/blog-image-1.png"
					}
					alt="blog-image"
					className="object-cover size-[212px] rounded-tr-2xl rounded-bl-2xl shadow-2xl"
					height={212}
					width={212}
				/>
			</div>
			{/* Title */}
			<p className="text-[22px] font-medium text-heading truncate max-w-[300px]">
				{props.title}
			</p>
		</Link>
	)
}
