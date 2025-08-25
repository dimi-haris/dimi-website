import StayUpdatedSection from "@/components/stay-updated-section/StayUpdatedSection"
import CommunicationAndCollaborationSection from "@/components/communication-and-collaboration-section/CommunicationAndCollaborationSection"
import ProjectManagementSection from "@/components/project-management-section/ProjectManagementSection"
import FeaturesSection from "@/components/features-section/FeaturesSection"
import PaymentsHandlingSection from "@/components/payments-handling-section/PaymentsHandlingSection"
import ContractManagementSection from "@/components/contract-management-section/ContractManagementSection"
import TestimonialSection from "@/components/testimonial-section/TestimonialSection"

export default function Services(): React.ReactElement | null {
	return (
		// Main container
		<div className="w-screen flex flex-col items-center pt-60 sm:pt-72 pb-20">
			{/* Title container */}
			<div className="flex flex-col items-center gap-2.5 sm:gap-0 px-5 sm:px-0">
				{/* Title */}
				<p className="text-[22px] sm:text-[32px] text-primary uppercase tracking-tight">
					what we offer
				</p>
				{/* Sub title */}
				<p className="text-3xl sm:text-[50px]/15 text-[#262626] font-semibold max-w-[550px] text-center">
					Your Complete Art-kit, All in One Place
				</p>
				{/* Description */}
				<p className="text-base sm:text-xl text-description max-w-[550px] text-center">
					Every DiMi service is crafted with your artistic journey in
					mind. Scroll down to see how we turn visions into
					reality—together
				</p>
			</div>
			{/* Stay updated section */}
			<StayUpdatedSection />
			{/* Communication & Collaboration section */}
			<CommunicationAndCollaborationSection />
			{/* Project Management section */}
			<ProjectManagementSection />
			{/* Features section */}
			<FeaturesSection />
			{/* Payments handling section */}
			<PaymentsHandlingSection />
			{/* Contract Management section */}
			<ContractManagementSection />
			{/* Testimonial section */}
			<TestimonialSection />
		</div>
	)
}
