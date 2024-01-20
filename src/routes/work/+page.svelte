<script lang="ts">
	import ExternalLink from '@/assets/icons/ExternalLink.svelte';
	import PageHero from '@/components/layout/PageHero.svelte';
	import WorkCard from '@/components/work/WorkCard.svelte';

	export let data;
</script>

<div class="flex flex-col justify-start items-start gap-6">
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

	{#each data.posts as work}
		<WorkCard {work} />
	{/each}
</div>
