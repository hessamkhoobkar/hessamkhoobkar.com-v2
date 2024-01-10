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
	repository: string;
	live: string;
};
