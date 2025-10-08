import { useState, useCallback } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

// Interface for the props of the component
interface CalendarMonthDropdownProps {
	months: string[]
	selectedMonth: string
	setSelectedMonth: (month: string) => void
}

export default function CalendarMonthDropdown(
	props: CalendarMonthDropdownProps
): React.ReactElement | null {
	// State for the visibility of the month dropdown
	const [isMonthDropdownVisible, setIsMonthDropdownVisible] =
		useState<boolean>(false)

	// Memoized callback for changing the visibility of the month dropdown
	const handleChangeMonthDropdownVisibility = useCallback((): void => {
		// Toggle the visibility of the month dropdown
		setIsMonthDropdownVisible((prev) => !prev)
	}, [])

	return (
		// Main container
		<button
			className="flex flex-row items-center justify-between bg-transparent rounded-full border border-[#eaeaea] shadow h-12 w-52 px-5 cursor-pointer relative"
			onClick={handleChangeMonthDropdownVisibility}
		>
			{/* Selected month */}
			<p className="text-lg font-medium">{props.selectedMonth}</p>
			{/* Down arrow */}
			<ChevronDownIcon className="size-6 text-black" />
			{/* Month dropdown */}
			{isMonthDropdownVisible && (
				<div className="absolute top-12 left-2 h-fit w-48 bg-white rounded-lg shadow-2xl flex flex-col gap-1 items-start px-5 py-2 z-1">
					{/* Month items */}
					{props.months.map((month, index) => (
						<p
							className="text-lg font-medium"
							onClick={() => props.setSelectedMonth(month)}
							key={index}
						>
							{month}
						</p>
					))}
				</div>
			)}
		</button>
	)
}
