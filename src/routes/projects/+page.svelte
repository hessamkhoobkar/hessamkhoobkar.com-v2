<script lang="ts">
	import PageHero from '@/components/layout/PageHero.svelte';
	import ProjectCard from '@/components/foundation/ProjectCard.svelte';

	import snowCover from '@/assets/images/content/snow.jpg';
</script>

<div class="flex flex-col justify-between items-center gap-8">
	<PageHero>
		<div class="p-10 pt-8 max-w-4xl font-medium">
			<h1 class="font-black text-4xl mb-4">Themes developed by me</h1>
			<p>
				These are the themes I've developed for various platforms. I've developed themes for
				WordPress, Ghost, and Hugo. I've also developed themes for static site generators like
				Eleventy and SvelteKit.
			</p>
		</div>
	</PageHero>

	<div class="-mt-48 w-full grid grid-cols-3 gap-8 p-8">
		<ProjectCard />
		<ProjectCard />
		<ProjectCard />
	</div>
</div>
