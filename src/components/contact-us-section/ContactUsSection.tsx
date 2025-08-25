"use client"

import { useState, useCallback } from "react"
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"
import Button from "../button/Button"

export default function ContactUsSection(): React.ReactElement | null {
	// State for the Full Name
	const [fullName, setFullName] = useState<string>("")
	// State for the Email
	const [email, setEmail] = useState<string>("")
	// State for the Topic
	const [topic, setTopic] = useState<string>("")
	// State for the Subject
	const [subject, setSubject] = useState<string>("")
	// State for the Description
	const [description, setDescription] = useState<string>("")

	// Memoized callback for handling the Send Message button click
	const handleSendMessage = useCallback((): void => {
		console.log("Send Message button clicked")
	}, [])

	return (
		// Main container
		<div className="w-full flex flex-col items-center gap-10">
			{/* Title wrapper */}
			<div className="flex flex-col items-center">
				{/* Title */}
				<p className="text-[40px] text-heading font-semibold">
					Contact Us
				</p>
				{/* Sub title */}
				<p className="text-lg/5 text-description text-center">
					Any question or remarks? Just write us a message!
				</p>
			</div>
			{/* Contact us form wrapper */}
			<div className="h-fit w-full max-w-[1250px] bg-[#f9f9f9] rounded-[10px] p-5 flex flex-col sm:flex-row gap-7">
				{/* Contact information card */}
				<div className="sm:flex-1 max-w-[450px] rounded-[10px] bg-card-radial p-5 flex flex-col gap-5">
					{/* Contact information title */}
					<p className="text-xl text-white font-semibold">
						Contact Information
					</p>
					{/* Email wrapper */}
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Email icon */}
						<EnvelopeIcon className="size-5 min-h-5 min-w-5 text-white" />
						{/* Email */}
						<p className="text-white text-base">
							publicrelations@godimi.com
						</p>
					</div>
					{/* Address wrapper */}
					<div className="flex flex-row items-start sm:items-center gap-3">
						{/* Address icon */}
						<MapPinIcon className="size-5 min-h-5 min-w-5 text-white" />
						{/* Address */}
						<p className="text-white text-base">
							35 W 31st St, Front A New York, NY 10001, USA
						</p>
					</div>
				</div>
				{/* Contact us form */}
				<div className="flex-1 flex flex-col gap-3">
					{/* Horizontal wrapper */}
					<div className="w-full flex flex-col sm:flex-row items-center gap-5">
						{/* Input field wrapper */}
						<div className="w-full flex-1 flex flex-col gap-1">
							{/* Label */}
							<p className="text-sm text-[#414651]">Full Name*</p>
							{/* Input field */}
							<input
								type="text"
								className="flex-1 min-h-10 px-2 bg-white rounded-lg border border-[#D5D7DA]"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						{/* Input field wrapper */}
						<div className="w-full flex-1 flex flex-col gap-1">
							{/* Label */}
							<p className="text-sm text-[#414651]">Email*</p>
							{/* Input field */}
							<input
								type="text"
								className="flex-1 min-h-10 px-2 bg-white rounded-lg border border-[#D5D7DA]"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					{/* Input field wrapper */}
					<div className="w-full flex-1 flex flex-col gap-1">
						{/* Label */}
						<p className="text-sm text-[#414651]">Category*</p>
						{/* Select input field container */}
						<div className="flex-1 max-h-10 px-2 bg-white rounded-lg border border-[#D5D7DA]">
							{/* Select input field */}
							<select
								className="h-10 w-full outline-0"
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							>
								<option value="">Select a topic...</option>
								<option value="general">Support</option>
								<option value="account">Sales</option>
								<option value="technical">Feedback</option>
							</select>
						</div>
					</div>
					{/* Input field wrapper */}
					<div className="w-full flex-1 flex flex-col gap-1">
						{/* Label */}
						<p className="text-sm text-[#414651]">Subject*</p>
						{/* Input field */}
						<input
							type="text"
							className="flex-1 min-h-10 px-2 bg-white rounded-lg border border-[#D5D7DA]"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
					</div>
					{/* Input field wrapper */}
					<div className="w-full flex-1 flex flex-col gap-1">
						{/* Label */}
						<p className="text-sm text-[#414651]">Description*</p>
						{/* Textarea input field */}
						<textarea
							rows={3}
							className="flex-1 min-h-10 px-2 bg-white rounded-lg border border-[#D5D7DA] resize-none"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					{/* Form button wrapper */}
					<div className="w-full flex justify-end pt-5">
						{/* Form button */}
						<Button
							title={"Send Message"}
							color={"secondary"}
							onClick={handleSendMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
