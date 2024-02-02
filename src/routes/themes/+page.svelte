<script lang="ts">
	import PageHero from '@/components/layout/PageHero.svelte';
	import ThemeCard from '@/components/foundation/ThemeCard.svelte';

	export let data;
</script>

<div class="flex flex-col justify-between items-center gap-4 md:gap-8">
	<PageHero>
		<div class="p-6 md:p-10 md:pt-8 xl:pb-28 max-w-4xl font-medium">
			<h1 class="font-black text-4xl mb-4">Discover the themes developed by me</h1>
			<p>
				These are the themes I've developed for various purposes and platforms. I've created themes
				for Astro, Next.js, and Sveltekit. I've also developed themes for Headless CMS like Strapi,
				contentful, payload, and headless WordPress.
			</p>
		</div>
	</PageHero>

	<div
		class="md:-mt-36 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 md:p-8"
	>
		{#each data.posts as { title, thumbnail, thumbnailAlt, slug }}
			<ThemeCard {title} {thumbnail} {thumbnailAlt} href={`themes/${slug}`} />
		{/each}

		<ThemeCard />
	</div>
</div>
