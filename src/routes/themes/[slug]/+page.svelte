<script lang="ts">
	import { formatDate } from '$lib/utils';
	import PageHero from '@/components/layout/PageHero.svelte';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.thumbnail} />
</svelte:head>

<article class="w-full max-w-screen-lg mx-auto">
	<!-- Hero -->
	<div class="w-full rounded-2xl bg-gray-800 border border-gray-600 p-4 mb-12">
		<img
			class="w-full rounded-xl min-h-80"
			src={data.meta.coverImage}
			alt={data.meta.coverImageAlt}
		/>
		<p class="mt-6 font-medium text-gray-400 text-sm opacity-75">
			Published at {formatDate(data.meta.date)} . Author: Hessam Khoobkar (me)
		</p>
		<div class="bg-gradient-to-br from-primary-500 to-tertiary-500 text-transparent bg-clip-text">
			<h1 class="text-6xl font-bold">{data.meta.title}</h1>
		</div>
	</div>

	<!-- Post -->
	<div
		class="mx-auto prose prose-gray dark:prose-invert prose-img:rounded-xl prose-p:text-[#fff4ef] prose-p:text-opacity-75 prose-h2:text-primary-500 prose-headings:mb-2 pb-4"
	>
		<svelte:component this={data.content} />
	</div>
</article>
