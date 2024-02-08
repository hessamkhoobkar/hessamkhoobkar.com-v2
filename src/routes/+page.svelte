<script lang="ts">
	import InfoCard from '@/components/dashboard/InfoCard.svelte';
	import TypeChart from '@/components/dashboard/TypeChart.svelte';
	import References from '@/components/dashboard/References.svelte';
	import CurrentBook from '@/components/dashboard/CurrentBook.svelte';
	import CurrentGame from '@/components/dashboard/CurrentGame.svelte';
	import Skills from '@/components/dashboard/Skills.svelte';
	import HistoryTree from '@/components/dashboard/HistoryTree.svelte';
	import WorkPreview from '@/components/dashboard/WorkPreview.svelte';

	const summaryData = [
		{ title: 'Total Projects', value: '12', subNote: 'Projects finished and delivered' },
		{ title: 'Daily tea intake', value: '5', subNote: 'Cups of tea per day' },
		{ title: 'Life under control', value: '64%', subNote: '23% improvement from last year ' }
	];
</script>

<!-- 
	- Update my works card
	- Responsive design audit 
	- update resume button
	- Add resume to website
 -->

<div
	class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 w-full max-w-[1440px] mx-auto p-8"
>
	{#each summaryData as { title, value, subNote }}
		<div class="col-span-4 p-4 rounded-2xl bg-gray-800 shadow-lg shadow-gray-900">
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
	<InfoCard />
	<TypeChart />
	<WorkPreview />
	<HistoryTree />
	<References />
	<Skills />
</div>
