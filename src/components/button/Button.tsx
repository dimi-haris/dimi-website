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
			className={`${
				props.height ? `h-[48px] sm:h-[${props.height}]` : "h-[48px]"
			} ${
				props.width ? `w-[${props.width}]` : "w-fit"
			} rounded-full px-5 sm:px-10 flex items-center justify-center ${
				props.color === "primary" ? "bg-primary" : "bg-secondary"
			} text-white text-sm sm:text-base inset-shadow-sm cursor-pointer`}
			onClick={props.onClick}
		>
			{props.title}
		</button>
	)
}
