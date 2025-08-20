import Image from "next/image"
import Link from "next/link"

export default function Footer(): React.ReactElement | null {
	return (
		// Footer container
		<div className="w-full bg-[#040607] px-[120px] py-[80px] rounded-t-[80px] flex flex-col gap-5">
			<div className="w-full flex flex-row items-start justify-between">
				<Image
					src={"/icons/logo-full.png"}
					alt="logo"
					className="object-contain"
					width={200}
					height={80}
				/>
				<div className="flex flex-col gap-3">
					<p className="text-primary text-base font-medium">About</p>
					<div className="flex flex-col gap-2">
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Team
						</Link>
						<Link
							href={"/faqs"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							FAQs
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-primary text-base font-medium">
						Community
					</p>
					<div className="flex flex-col gap-2">
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							News
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Blog
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Podcasts
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Calendar
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-primary text-base font-medium">Legal</p>
					<div className="flex flex-col gap-2">
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Terms
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Privacy
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Cookies
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							License
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<p className="text-primary text-base font-medium">
						Contact Us
					</p>
					<div className="flex flex-col gap-2">
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Contact
						</Link>
						<Link
							href={"#"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Help & Support
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-row items-center justify-between">
				<Image
					src={"/images/sectigo-seal.png"}
					alt="sectigo-seal"
					className="object-contain"
					width={150}
					height={40}
				/>
				<div className="flex flex-row items-center gap-1">
					<Link href={"#"}>
						<Image
							src={"/icons/youtube.png"}
							alt="youtube"
							className="object-contain"
							width={35}
							height={35}
						/>
					</Link>
					<Link href={"#"}>
						<Image
							src={"/icons/instagram.png"}
							alt="instagram"
							className="object-contain"
							width={35}
							height={35}
						/>
					</Link>
					<Link href={"#"}>
						<Image
							src={"/icons/facebook.png"}
							alt="facebook"
							className="object-contain"
							width={35}
							height={35}
						/>
					</Link>
					<Link href={"#"}>
						<Image
							src={"/icons/twitter.png"}
							alt="twitter"
							className="object-contain"
							width={35}
							height={35}
						/>
					</Link>
				</div>
			</div>
			<p className="text-sm text-[#bdbdbd]">
				© DiMi Inc. All rights reserved
			</p>
		</div>
	)
}
