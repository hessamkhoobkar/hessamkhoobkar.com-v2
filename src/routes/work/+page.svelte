<script lang="ts">
	import PageHero from '@/components/layout/PageHero.svelte';
	import WorkCard from '@/components/work/WorkCard.svelte';

	export let data;
</script>

<div class="flex flex-col justify-start items-start gap-6">
	<PageHero variant="surface">
		<div class="p-10 pt-8 pb-0 max-w-4xl font-medium">
			<h1 class="font-black text-4xl mb-4">A curated collection of my work</h1>
			<p>
				Embark on a visual journey through the meticulously curated world of design and innovation.
				I am Hessam khoobkar, a passionate front-end developer and UI designer, and I invite you to
				explore this carefully selected compilation of my most cherished works. Each piece is a
				testament to my dedication to craft, blending form and function to create digital
				experiences that resonate.
			</p>
		</div>
	</PageHero>

	<div class="flex flex-col gap-40 pb-16">
		{#each data.posts as work}
			<WorkCard {work} />
		{/each}
	</div>
</div>
