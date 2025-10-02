// Interface for the props of the component
interface TagProps {
	name: string
}

export default function TagPill(props: TagProps): React.ReactElement | null {
	return (
		// Main container
		<div className="h-12 w-fit flex items-center justify-center px-5 bg-[#E5AB4E47] border-b-2 border-[#bdbdbd] rounded-full cursor-pointer">
			{/* Tag name */}
			<p className="text-lg text-heading font-medium">{props.name}</p>
		</div>
	)
}
