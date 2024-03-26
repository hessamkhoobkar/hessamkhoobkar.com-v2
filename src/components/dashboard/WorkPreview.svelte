<script lang="ts">
	import WorkPreviewSlide from './WorkPreviewSlide.svelte';

	const thumbnails = [
		{
			src: 'https://khoobkar.com/content/projects/pua-thumbnail.webp',
			alt: 'Parallel universe archive'
		},
		{
			src: 'https://khoobkar.com/content/works/helpdesk-thumbnail-01.webp',
			alt: 'Helpdesk - Youtab'
		},
		{
			src: 'https://khoobkar.com/content/works/aquaculture-management-thumbnail-01.webp',
			alt: 'Aquaculture management suite'
		},
		{
			src: 'https://khoobkar.com/content/works/vcs-thumbnail-01.webp',
			alt: 'Voice Communication System for Air Traffic Control'
		},
		{
			src: 'https://khoobkar.com/content/projects/helpdesk-project-thumbnail.webp',
			alt: 'Helpdesk - Youtab'
		}
	];

	const revThumbnails = () => {
		const revThumbnails = [...thumbnails];
		revThumbnails.reverse();
		return revThumbnails;
	};
</script>

<div
	class="col-span-1 md:col-span-3 xl:col-span-4 bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-4 relative overflow-hidden"
>
	<h3
		class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-tertiary-500 uppercase"
	>
		My Works
	</h3>
	<div class="w-full h-96 xl:h-[90%] grid grid-cols-1 grid-rows-2 gap-4">
		<div class="relative col-span-1 row-span-1">
			<WorkPreviewSlide slideData={thumbnails} interval={6100} />
		</div>
		<div class="relative col-span-1 row-span-1">
			<WorkPreviewSlide slideData={revThumbnails()} interval={4000} />
		</div>
	</div>
</div>
