import { Dimension } from "@/utils/types"

// Interface for the props of the component
interface ButtonProps {
	title: string
	color: "primary" | "secondary"
	height?: Dimension
	width?: Dimension
	onClick: () => void
}

export default function Button(props: ButtonProps): React.ReactElement | null {
	return (
		<button
			className={`${props.height ? `h-[${props.height}]` : "h-[48px]"} ${
				props.width ? `w-[${props.width}]` : "w-fit"
			} rounded-full px-10 flex items-center justify-center ${
				props.color === "primary" ? "bg-primary" : "bg-secondary"
			} text-white inset-shadow-sm`}
			onClick={props.onClick}
		>
			{props.title}
		</button>
	)
}
