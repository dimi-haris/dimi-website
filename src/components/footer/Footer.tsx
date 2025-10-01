import Image from "next/image"
import Link from "next/link"

export default function Footer(): React.ReactElement | null {
	return (
		// Footer container
		<div className="w-full bg-[#040607] px-5 sm:px-[120px] py-[50px] sm:py-[80px] rounded-t-[80px] flex flex-col gap-10 sm:gap-5">
			<div className="w-full flex flex-col gap-10 sm:gap-0 sm:flex-row items-center sm:items-start sm:justify-between">
				{/* Logo */}
				<Image
					src={"/icons/logo-full.png"}
					alt="logo"
					className="object-contain"
					width={200}
					height={80}
				/>
				{/* About navigation links */}
				<div className="flex flex-col gap-3 items-center sm:items-start">
					{/* Title */}
					<p className="text-primary text-base font-medium">About</p>
					{/* Navigation links */}
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<Link
							href={"/about#team"}
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
				{/* Community navigation links */}
				<div className="flex flex-col gap-3 items-center sm:items-start">
					{/* Title */}
					<p className="text-primary text-base font-medium">
						Community
					</p>
					{/* Navigation links */}
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<Link
							href={"/news"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							News
						</Link>
						<Link
							href={"/blogs"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Blog
						</Link>
						<Link
							href={"/podcast"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Podcasts
						</Link>
						<Link
							href={"/blogs#calendar"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Calendar
						</Link>
					</div>
				</div>
				{/* Legal navigation links */}
				<div className="flex flex-col gap-3 items-center sm:items-start">
					{/* Title */}
					<p className="text-primary text-base font-medium">Legal</p>
					{/* Navigation links */}
					<div className="flex flex-col gap-2 items-center sm:items-start">
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
				{/* Contact Us navigation links */}
				<div className="flex flex-col gap-3 items-center sm:items-start">
					{/* Title */}
					<p className="text-primary text-base font-medium">
						Contact Us
					</p>
					{/* Navigation links */}
					<div className="flex flex-col gap-2 items-center sm:items-start">
						<Link
							href={"/faqs#contact-us"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Contact
						</Link>
						<Link
							href={"/faqs"}
							className="text-sm text-[#eaeaea] hover:text-primary transition ease-in-out duration-500"
						>
							Help & Support
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row items-center sm:justify-between">
				{/* Sectigo seal */}
				<Image
					src={"/images/sectigo-seal.png"}
					alt="sectigo-seal"
					className="object-contain"
					width={150}
					height={40}
				/>
				{/* Social media links */}
				<div className="flex flex-row items-center">
					{/* Instagram link */}
					<a
						href="https://www.instagram.com/dimi.app.og"
						target="_blank"
					>
						<Image
							src={"/icons/instagram.png"}
							alt="instagram"
							className="object-contain"
							width={35}
							height={35}
						/>
					</a>
					{/* Facebook link */}
					<a
						href="https://www.facebook.com/profile.php?id=61573594612081"
						target="_blank"
					>
						<Image
							src={"/icons/facebook.png"}
							alt="facebook"
							className="object-contain"
							width={35}
							height={35}
						/>
					</a>
					{/* X link */}
					<a href="https://www.x.com/dimiapp" target="_blank">
						<Image
							src={"/icons/x.png"}
							alt="x"
							className="object-contain"
							width={35}
							height={35}
						/>
					</a>
					{/* LinkedIn link */}
					<a
						href="https://www.linkedin.com/company/dream-it-make-it-inc"
						target="_blank"
					>
						<Image
							src={"/icons/linked-in.png"}
							alt="linked-in"
							className="object-contain"
							width={35}
							height={35}
						/>
					</a>
					{/* Tik Tok link */}
					<a
						href="https://www.tiktok.com/@godimi.com"
						target="_blank"
					>
						<Image
							src={"/icons/tik-tok.png"}
							alt="tik-tok"
							className="object-contain"
							width={35}
							height={35}
						/>
					</a>
				</div>
			</div>
			{/* Copyright notice */}
			<p className="text-sm text-[#bdbdbd] self-center sm:self-start">
				© DiMi Inc. All rights reserved
			</p>
		</div>
	)
}
