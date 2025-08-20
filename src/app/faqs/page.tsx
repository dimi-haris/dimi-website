"use client"

import { useState } from "react"
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"
import ContactUsSection from "@/components/contact-us-section/ContactUsSection"

export default function FAQs(): React.ReactElement | null {
	// State for the selected FAQ
	const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null)

	return (
		// Main container
		<div className="w-screen max-w-[1250px] flex flex-col gap-5 mx-auto px-20 py-36">
			{/* Breadcrumbs */}
			<p className="text-[#6B7A85]">DiMi Help Center / Account Setup</p>
			{/* Title container */}
			<div className="flex flex-col items-center gap-5">
				{/* Title */}
				<p className="text-heading text-[40px] font-semibold tracking-wide">
					Frequently Asked Questions
				</p>
				{/* Sub title */}
				<p className="text-lg text-description">
					Got questions? We’ve got answers, how DiMi supports you,
					insights, and everything in between.
				</p>
			</div>
			{/* FAQs container */}
			<div className="w-full flex flex-col gap-10 pt-15">
				{/* FAQ 1 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 1 ? null : 1))
					}
				>
					{/* FAQ 1 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 1 title */}
						<p className="text-heading text-[26px] font-semibold">
							What is DiMi and why should artists care?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 1 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 1 answer */}
					<p
						className={`${
							selectedFAQ === 1 ? "h-24" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full text-xl text-description text-start`}
					>
						DiMi is a global platform built for artists of all
						forms, from musicians and painters to filmmakers,
						photographers, dancers, and digital creators. We help
						you find collaborators, manage your creative work, and
						protect your rights, all in one place. If you’re tired
						of scattered tools, unpaid gigs, or ghosted
						collaborators, DiMi is here to change that.
					</p>
				</button>
				{/* FAQ 2 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 2 ? null : 2))
					}
				>
					{/* FAQ 2 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 2 title */}
						<p className="text-heading text-[26px] font-semibold">
							How is DiMi different from social media or portfolio
							sites?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 2 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 2 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 2 ? "h-64" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 2 answer */}
						<p className="text-xl text-description text-start">
							Social media helps you share your art. DiMi helps
							you build it, professionally. With DiMi, you don’t
							just post your work. You:
						</p>
						{/* FAQ 2 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>Start or join real projects</li>
							<li>Generate contracts</li>
							<li>Secure payments</li>
							<li>Communicate with your team</li>
							<li>Get funded or supported by real backers</li>
						</ul>
						{/* FAQ 2 answer */}
						<p className="text-xl text-description text-start">
							Everything is made for artists.
						</p>
					</div>
				</button>
				{/* FAQ 3 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 3 ? null : 3))
					}
				>
					{/* FAQ 3 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 3 title */}
						<p className="text-heading text-[26px] font-semibold">
							What creative problems does DiMi actually solve?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 3 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 3 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 3 ? "h-60" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 3 answer */}
						<p className="text-xl text-description text-start">
							We’re focused on the 4 core struggles artists face:
						</p>
						{/* FAQ 3 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>Struggling to find reliable collaborators</li>
							<li>No easy way to manage creative projects</li>
							<li>Risk of unprotected work and unpaid deals</li>
							<li>Difficulty getting noticed or funded</li>
						</ul>
						{/* FAQ 3 answer */}
						<p className="text-xl text-description text-start">
							DiMi fixes this by giving you a verified, all-in-one
							platform that blends creation, collaboration, and
							protection — made by creatives, for creatives.
						</p>
					</div>
				</button>
				{/* FAQ 4 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 4 ? null : 4))
					}
				>
					{/* FAQ 4 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 4 title */}
						<p className="text-heading text-[26px] font-semibold">
							Can I trust the people I work with on DiMi?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 4 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 4 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 4 ? "h-60" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 4 answer */}
						<p className="text-xl text-description text-start">
							Yes, we take trust seriously.
							<br />
							DiMi includes:
						</p>
						{/* FAQ 4 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>Artist verification and optional ID checks</li>
							<li>Project-based ratings and peer reviews</li>
							<li>Secure digital contracts for every collab</li>
							<li>Milestone-based payouts</li>
						</ul>
						{/* FAQ 4 answer */}
						<p className="text-xl text-description text-start">
							You’ll know exactly who you’re working with, and
							under what terms.
						</p>
					</div>
				</button>
				{/* FAQ 5 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 5 ? null : 5))
					}
				>
					{/* FAQ 5 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 5 title */}
						<p className="text-heading text-[26px] font-semibold">
							How will DiMi protect my creative work and make sure
							I get paid?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 5 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 5 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 5 ? "h-48" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 5 answer */}
						<p className="text-xl text-description text-start">
							Every DiMi project comes with built-in tools for:
						</p>
						{/* FAQ 5 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>
								Customized contracts (covering royalties, IP
								rights, payment terms, and timelines)
							</li>
							<li>Digital signatures and legal compliance</li>
							<li>
								Secure payments (held safely and released only
								after agreed work is completed)
							</li>
						</ul>
						{/* FAQ 5 answer */}
						<p className="text-xl text-description text-start">
							You focus on your craft. DiMi handles the legal and
							financial side.
						</p>
					</div>
				</button>
				{/* FAQ 6 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 6 ? null : 6))
					}
				>
					{/* FAQ 6 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 6 title */}
						<p className="text-heading text-[26px] font-semibold">
							Can I raise funds or earn support for my projects on
							DiMi?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 6 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 6 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 6 ? "h-48" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 6 answer */}
						<p className="text-xl text-description text-start">
							Yes! Once our full platform is live, you’ll be able
							to:
						</p>
						{/* FAQ 6 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>Pitch to creative investors for funding</li>
							<li>
								Receive support from patrons using DiMi Coins
								(our in-app support currency)
							</li>
							<li>
								Promote your profile or project through search
								ads and artist showcases
							</li>
						</ul>
						{/* FAQ 6 answer */}
						<p className="text-xl text-description text-start">
							Backers can directly support artists they believe
							in, without middlemen.
						</p>
					</div>
				</button>
				{/* FAQ 7 */}
				<button
					className="w-full flex flex-col gap-5 cursor-pointer"
					onClick={() =>
						setSelectedFAQ((prev) => (prev === 7 ? null : 7))
					}
				>
					{/* FAQ 7 title wrapper */}
					<div className="w-full flex flex-row items-center justify-between">
						{/* FAQ 7 title */}
						<p className="text-heading text-[26px] font-semibold">
							How do I get started with DiMi?
						</p>
						{/* Arrow icon */}
						<ArrowUpCircleIcon
							className={`${
								selectedFAQ === 7 ? "rotate-180" : "rotate-0"
							} transition-all duration-300 ease-in-out size-10 text-[#B3B3B3]`}
						/>
					</div>
					{/* FAQ 7 answer wrapper */}
					<div
						className={`${
							selectedFAQ === 7 ? "h-80" : "h-0"
						} overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col gap-5 items-start`}
					>
						{/* FAQ 7 answer */}
						<p className="text-xl text-description text-start">
							Right now, we’re opening early access for artists
							around the world.
							<br />
							👉 Just join our waitlist to stay updated.
							<br />
							When we launch, you’ll be able to:
						</p>
						{/* FAQ 7 answer bullet points */}
						<ul className="text-xl text-description list-disc ml-10 text-start">
							<li>Create your profile</li>
							<li>Launch or join projects</li>
							<li>Sign contracts</li>
							<li>Find your creative team</li>
							<li>Get funded and grow your art</li>
						</ul>
						{/* FAQ 7 answer */}
						<p className="text-xl text-description text-start">
							We’re building the future of creative collaboration,
							and you’re invited.
						</p>
					</div>
				</button>
			</div>
			{/* FAQ footer */}
			<div className="w-full flex flex-col items-center gap-5 my-10">
				{/* FAQ footer question */}
				<p className="text-lg text-black font-semibold">
					Was this article helpful?
				</p>
				{/* FAQ footer answer options */}
				<div className="flex flex-row items-center justify-center">
					{/* FAQ footer answer button */}
					<button className="h-10 w-32 rounded-full cursor-pointer border border-[#BDBDBD] flex items-center justify-center">
						<p className="text-lg text-heading font-medium">Yes</p>
					</button>
					{/* FAQ footer answer button */}
					<button className="h-10 w-32 rounded-full cursor-pointer border border-[#BDBDBD] flex items-center justify-center">
						<p className="text-lg text-heading font-medium">No</p>
					</button>
				</div>
			</div>
			{/* Contact us section */}
			<ContactUsSection />
		</div>
	)
}
