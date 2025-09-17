import { Dimension } from "@/utils/types"

// Interface for the props of the component
interface ButtonProps {
	title: string
	color: "primary" | "secondary" | "outline"
	height?: Dimension
	width?: Dimension
	onClick: () => void
}

export default function Button(props: ButtonProps): React.ReactElement | null {
	return (
		<button
			className={`rounded-full px-5 sm:px-10 flex items-center justify-center ${
				props.color === "primary"
					? "bg-primary"
					: props.color === "secondary"
					? "bg-secondary"
					: "bg-white"
			} ${props.color === "outline" ? "text-heading" : "text-white"} ${
				props.color === "outline" ? "border border-heading" : "border-0"
			} text-sm sm:text-base inset-shadow-sm cursor-pointer`}
			style={{
				height: props.height || "48px",
				width: props.width || "fit-content"
			}}
			onClick={props.onClick}
		>
			{props.title}
		</button>
	)
}
