import Image from "next/image"
import Link from "next/link"
import { BlogItem, NewsItem } from "@/utils/types"

// Interface for the props of the component
interface CardProps {
	id: BlogItem["id"] | NewsItem["id"]
	title: BlogItem["title"] | NewsItem["title"]
	thumbnail: BlogItem["thumbnail"] | NewsItem["thumbnail"]
	type: "blog" | "news"
}

export default function BlogAndNewsCard(
	props: CardProps
): React.ReactElement | null {
	return (
		// Main container
		<Link
			href={`/${props.type === "blog" ? "blogs" : "news"}/${props.id}`}
			className="flex flex-col gap-2"
		>
			{/* Card container with background image */}
			<div className="flex items-center justify-center bg-[url(/images/card-background.png)] bg-cover bg-center size-[300px] rounded-[15px]">
				{/* Image */}
				<Image
					src={
						props.thumbnail
							? props.thumbnail
							: `${props.type === "blog" ? "/images/blog-img.jpeg" : "/images/news-img.jpeg"}`
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
