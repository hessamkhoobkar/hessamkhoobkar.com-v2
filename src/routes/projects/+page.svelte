<script lang="ts">
	import PageHero from '@/components/layout/PageHero.svelte';
	import ThemeCard from '@/components/foundation/ThemeCard.svelte';
	import ProjectCard from '@/components/foundation/ProjectCard.svelte';

	export let data;
</script>

<div class="flex flex-col justify-between items-center gap-4 md:gap-8">
	<PageHero>
		<div class="p-6 md:p-10 md:pt-8 xl:pb-32 max-w-4xl font-medium">
			<h1 class="font-black text-4xl mb-4">Collection of experiments & projects</h1>
			<p>
				These are the projects I've developed for various purposes and platforms. This projects are
				to showcase my skills and knowledge in web development and to experiment and quench my
				thirst for building things.
			</p>
		</div>
	</PageHero>

	<div
		class="md:-mt-36 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 md:p-8"
	>
		{#each data.posts as { title, thumbnail, thumbnailAlt, slug, stack }}
			<ProjectCard {title} {thumbnail} {thumbnailAlt} {stack} href={`projects/${slug}`} />
		{/each}
	</div>
</div>
