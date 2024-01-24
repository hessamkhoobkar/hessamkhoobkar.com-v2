<script lang="ts">
	import { formatDate } from '$lib/utils';
	import ExternalLink from '@/assets/icons/ExternalLink.svelte';
	import WorkChip from '@/components/work/WorkChip.svelte';

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
			class="w-full rounded-xl 2xl:min-h-80"
			src={data.meta.coverImage}
			alt={data.meta.coverImageAlt}
		/>
		<div class="bg-gradient-to-br from-gray-500 to-white text-transparent bg-clip-text mt-4">
			<h1 class="text-3xl md:text-4xl 2xl:text-6xl font-bold">{data.meta.title}</h1>
		</div>
	</div>

	<!-- Details -->

	<div class="w-full rounded-2xl bg-gray-800 flex flex-col gap-4 p-4 border border-gray-500 mb-4">
		<div>
			<h3 class="text-sm font-bold text-gray-400">Client:</h3>
			<p class="text-lg font-bold">{data.meta.client}</p>
		</div>
		<div class="flex gap-8">
			<div>
				<h3 class="text-sm font-bold text-gray-400">Date:</h3>
				<p>{data.meta.year}</p>
			</div>
			<div>
				<h3 class="text-sm font-bold text-gray-400">Duration:</h3>
				<p>{data.meta.ProjectDuration}</p>
			</div>
		</div>
		<div>
			<h3 class="text-sm font-bold text-gray-400 mb-2">My Role:</h3>
			<div class="flex gap-2">
				{#each data.meta.role as role}
					<WorkChip label={role} />
				{/each}
			</div>
		</div>
		<div>
			<h3 class="text-sm font-bold text-gray-400 mb-2">Stack used:</h3>
			<div class="flex flex-wrap gap-2">
				{#each data.meta.stack as stack}
					<WorkChip label={stack} />
				{/each}
			</div>
		</div>
	</div>

	{#if data.meta.repository && data.meta.live}
		<div class="flex max-md:flex-col gap-4 mb-12 font-bold">
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
				<span> live demo </span>
				<ExternalLink class="w-6 h-6" />
			</a>
		</div>
	{/if}

	<!-- Post -->
	<div
		class="mx-auto prose prose-gray dark:prose-invert prose-img:rounded-xl prose-p:text-[#fff4ef] prose-p:text-opacity-75 prose-headings:mb-2 pb-4"
	>
		<svelte:component this={data.content} />
	</div>
</article>
