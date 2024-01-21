<script lang="ts">
	import type { Post } from '@/lib/types';
	import WorkCardDetails from './WorkCardDetails.svelte';
	import Button from '../foundation/Button/Button.svelte';

	export let work: Post;
</script>

<div class="w-full flex flex-col gap-4">
	<div
		class="w-full rounded-2xl bg-gray-800 border border-gray-500 hover:border-primary-900 hover:border-opacity-50 transition-all duration-200 ease-out"
	>
		<a
			class="flex justify-between items-center p-4 hover:text-primary-500 transition-all duration-200 ease-out"
			href={`work/${work.slug}`}
		>
			<h2 class="text-4xl font-bold underline">
				{work.title}
			</h2>

			<Button color="primary" variant="filled" label="View More Details" />
		</a>
	</div>
	<div class="w-full grid grid-cols-12 grid-rows-3 gap-4">
		{#each work.thumbnailArray as thumbnail, i}
			{#if i === 0}
				<div
					class="col-span-3 row-span-3 col-start-1 row-start-1 rounded-2xl bg-gray-800 overflow-hidden"
				>
					<img src={thumbnail.url} alt={thumbnail.alt} />
				</div>
			{:else}
				<div
					class="col-span-3 row-span-1 col-start-4 row-start-1 rounded-2xl bg-gray-800 overflow-hidden"
				>
					<img src={thumbnail.url} alt={thumbnail.alt} />
				</div>
			{/if}
		{/each}

		<WorkCardDetails
			client={work.client}
			year={work.year}
			ProjectDuration={work.ProjectDuration}
			roles={work.role}
			stacks={work.stack}
		/>

		<div
			class="col-span-6 row-span-3 col-start-7 row-start-1 rounded-2xl bg-gray-800 aspect-w-4 aspect-h-3 relativ overflow-hidden"
		>
			<img class="object-cover w-full" src={work.thumbnail} alt={work.thumbnailAlt} />
		</div>
	</div>
</div>
