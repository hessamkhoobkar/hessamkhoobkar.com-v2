<script lang="ts">
	import WorkPreviewSlide from './WorkPreviewSlide.svelte';

	const thumbnails = [
		{
			src: 'https://utfs.io/f/1c9ac6c4-f46d-4aa8-bd25-04c16c15b836-x6t485.webp',
			alt: 'Parallel universe archive'
		},
		{
			src: 'https://utfs.io/f/0e878267-3466-4034-84a0-7341f759afb1-rd5p91.webp',
			alt: 'Helpdesk - Youtab'
		},
		{
			src: 'https://utfs.io/f/a0dc2267-eb43-4b9c-ad9c-af6cd48a9af9-o5zgy7.webp',
			alt: 'Aquaculture management suite'
		},
		{
			src: 'https://utfs.io/f/b3e133c1-0fef-44d2-ae79-3118f6cf1ef2-22qy6h.webp',
			alt: 'Voice Communication System for Air Traffic Control'
		},
		{
			src: 'https://utfs.io/f/38e5e719-dab3-43c5-bd5c-b9de462c92b8-fg47ej.webp',
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
