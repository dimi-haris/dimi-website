"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import CalendarMonthDropdown from "../calendar-month-dropdown/CalendarMonthDropdown"

export default function EventCalendarSection(): React.ReactElement | null {
	// Memoized array of month names with year
	const months = useMemo(() => {
		// Create an array of 12 months starting from current month
		return Array.from({ length: 12 }, (_, i) => {
			// Create a new Date object with the current month and year
			const date = new Date()
			// Get current month and add index to get future months
			const currentMonth = date.getMonth()
			date.setMonth(currentMonth + i)
			// Return the month name and year
			return (
				date.toLocaleString("en-US", { month: "long" }) +
				" " +
				date.getFullYear()
			)
		})
	}, []) // Empty dependency array since this calculation only depends on the current year and month

	// State for the selected month initially set to the current month
	const [selectedMonth, setSelectedMonth] = useState<string>(months[0])

	// Get number of days in selected month
	const daysInMonth = useMemo(() => {
		// Split the selected month into month and year
		const [month, year] = selectedMonth.split(" ")
		// Create a new Date object with the current month and year
		return new Date(
			parseInt(year),
			new Date(`${month} 1, ${year}`).getMonth() + 1,
			0
		).getDate()
	}, [selectedMonth])

	// Get the first day of the month
	const firstDay = new Date(`${selectedMonth}-01`).getDay()

	return (
		// Main container
		<div className="flex flex-col items-center gap-15 py-20" id="calendar">
			{/* Header wrapper */}
			<div className="w-fit sm:w-[1225px] flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-5 sm:gap-0">
				{/* Title wrapper */}
				<div className="relative w-fit">
					{/* Title */}
					<p className="text-[40px] font-semibold text-heading tracking-wide">
						Events Calendar
					</p>
					{/* Brush stroke */}
					<Image
						src={"/images/brush-stroke.png"}
						alt="brush-stroke"
						className="absolute -bottom-2.5 right-0 object-contain"
						height={5}
						width={250}
					/>
				</div>
				{/* Calendar month dropdown */}
				<CalendarMonthDropdown
					months={months}
					selectedMonth={selectedMonth}
					setSelectedMonth={setSelectedMonth}
				/>
			</div>
			{/* Calendar grid */}
			<div className="grid grid-cols-1 sm:grid-cols-7">
				{/* Empty days */}
				{Array.from({ length: firstDay }, (_, index) => (
					<div className="hidden sm:flex" key={`empty-${index}`} />
				))}
				{/* Calendar days */}
				{Array.from({ length: daysInMonth }, (_, index) => (
					// Calendar cell
					<div
						className="size-[175px] border border-[#e6e6e6] bg-white p-3"
						key={index}
					>
						{/* Date number */}
						<p className="text-2xl">{index + 1}</p>
					</div>
				))}
			</div>
		</div>
	)
}
