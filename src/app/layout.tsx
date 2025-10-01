import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import AppLayout from "@/components/app-layout/AppLayout"
import "./globals.css"

// Define Montserrat font with variable
const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"]
})

// Define metadata for SEO
export const metadata: Metadata = {
	title: "Dream it Make it",
	description: "Dream it Make it"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// HTML and body tags
		<html lang="en" className="scrollbar-none">
			<body
				className={`${montserrat.variable} antialiased h-fit w-screen`}
			>
				{/* App layout */}
				<AppLayout>
					{/* Main content */}
					<main>{children}</main>
				</AppLayout>
			</body>
		</html>
	)
}
