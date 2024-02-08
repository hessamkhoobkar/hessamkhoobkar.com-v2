<script lang="ts">
	const summaryData = [
		{ title: 'Total Projects', value: '12', subNote: 'Projects finished and delivered' },
		{ title: 'Daily tea intake', value: '5', subNote: 'Cups of tea per day' },
		{ title: 'Life under control', value: '64%', subNote: '23% improvement from last year ' }
	];
</script>

{#each summaryData as { title, value, subNote }}
	<div
		class="col-span-1 md:col-span-2 xl:col-span-4 p-4 rounded-2xl bg-gray-800 shadow-lg shadow-gray-900"
	>
		<p class="text-base font-bold mb-6">
			{title}
		</p>
		<p
			class="text-6xl font-black bg-gradient-to-tr from-primary-500 to-tertiary-500 text-transparent bg-clip-text mb-2"
		>
			{value}
		</p>
		<p class="text-xs text-gray-400 font-medium">
			{subNote}
		</p>
	</div>
{/each}
