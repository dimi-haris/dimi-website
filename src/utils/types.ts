export type Dimension = `${number}px` | `${number}rem` | `${number}%`

export type OurValue = {
	title: string
	description: string
	icon: string
}

export type DiMiHelp = {
	title: string
	description: string
	icon: string
}

export type TeamMember = {
	name: string
	designation: string
	image: string
}

export type PodcastPlatform = {
	name: string
	image: string
	url: string
}

export type Feature = {
	title: string
	description: string
	image: string
}

export type BlogItem = {
	id: string
	title: string
	isFeatured: boolean
	thumbnail: string | null
	bannerImage: string | null
	slug: string
	blogHtml: string
	date: string
	createdAt: string
	updatedAt: string
	deletedAt: string | null
}

export type NewsItem = {
	id: string
	title: string
	isFeatured: boolean
	thumbnail: string | null
	bannerImage: string | null
	slug: string
	newsHtml: string
	date: string
	createdAt: string
	updatedAt: string
	deletedAt: string | null
}
