<script lang="ts">
	import { formatDate } from '$lib/utils';
	import ExternalLink from '@/assets/icons/ExternalLink.svelte';
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
	<div class="w-full rounded-2xl bg-gray-800 border border-gray-600 p-4 mb-4">
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

	<div class="flex gap-4 mb-12 font-bold">
		<a
			target="_blank"
			href={data.meta.repository}
			class="w-full h-full flex justify-between p-4 py-6 grow rounded-2xl bg-gray-800 border border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 ease-in-out"
		>
			<span> GitHub repository </span>
			<ExternalLink class="w-6 h-6" />
		</a>

		<a
			target="_blank"
			href={data.meta.live}
			class="w-full h-full flex justify-between p-4 py-6 grow rounded-2xl bg-gray-800 border border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 ease-in-out"
		>
			<span> Live demo </span>
			<ExternalLink class="w-6 h-6" />
		</a>
	</div>

	<!-- Post -->
	<div
		class="mx-auto prose prose-gray dark:prose-invert prose-img:rounded-xl prose-p:text-[#fff4ef] prose-p:text-opacity-75 prose-h2:text-primary-500 prose-headings:mb-2 pb-4"
	>
		<svelte:component this={data.content} />
	</div>
</article>
