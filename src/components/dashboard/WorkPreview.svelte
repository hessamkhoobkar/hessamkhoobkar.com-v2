<script lang="ts">
	import Button from '../foundation/Button/Button.svelte';

	const pics = [
		{
			src: 'http://localhost:5173/content/works/helpdesk-thumbnail-01.webp',
			alt: 'Helpdesk - Youtab'
		},
		{
			src: 'http://localhost:5173/content/works/aquaculture-management-thumbnail-01.webp',
			alt: 'Aquaculture management suite'
		},
		{
			src: 'http://localhost:5173/content/works/vcs-thumbnail-01.webp',
			alt: 'Voice Communication System for Air Traffic Control'
		}
	];
</script>

<div
	class="col-span-4 bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-4 relative overflow-hidden"
>
	<h3
		class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-tertiary-500 uppercase"
	>
		My Works
	</h3>
	<div class="absolute left-0 w-full flex flex-col gap-4 p-4">
		{#each pics as { src, alt }}
			<div class="rounded-2xl overflow-hidden">
				<img {src} {alt} />
			</div>
		{/each}
	</div>

	<div
		class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-800 via-gray-800/80 to-gray-800/0"
	/>

	<div class="absolute bottom-0 left-0 w-full p-4">
		<Button
			class="w-full"
			color="primary"
			variant="filled"
			label="See all my work here"
			href="/work"
		/>
	</div>
</div>
