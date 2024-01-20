export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	published: boolean;
	coverImage: string;
	coverImageAlt: string;
	thumbnail: string;
	thumbnailAlt: string;
	thumbnailArray: { url: string; alt: string }[];
	client: string;
	role: [];
	ProjectDuration: string;
	year: string;
	stack: [];
	repository: string;
	live: string;
};
