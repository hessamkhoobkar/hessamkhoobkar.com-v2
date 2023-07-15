<script lang="ts">
	import InfoCard from '@/components/dashboard/InfoCard.svelte';
	import TypeChart from '@/components/dashboard/TypeChart.svelte';
	import References from '@/components/dashboard/References.svelte';
	import CurrentBook from '@/components/dashboard/CurrentBook.svelte';
	import CurrentGame from '@/components/dashboard/CurrentGame.svelte';
	import Skills from '@/components/dashboard/Skills.svelte';
	import HistoryTree from '@/components/dashboard/HistoryTree.svelte';

	const summaryData = [
		{ title: 'Total Projects', value: '12', subNote: 'Projects finished and delivered' },
		{ title: 'Daily tea intake', value: '5', subNote: 'Cup of tea per day' },
		{ title: 'Life under control', value: '64%', subNote: '23% improvement from last year ' }
	];
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 w-full max-w-[1440px] mx-auto p-8"
>
	{#each summaryData as { title, value, subNote }}
		<div class="col-span-4 p-4 rounded-2xl bg-gray-850 shadow-lg shadow-gray-900">
			<p class="text-base mb-6">
				{title}
			</p>
			<p class="text-6xl font-bold text-sky-500 mb-2">
				{value}
			</p>
			<p class="text-xs text-sky-500 text-opacity-60">
				{subNote}
			</p>
		</div>
	{/each}
	<InfoCard />
	<TypeChart />
	<CurrentBook />
	<References />
	<CurrentGame />
	<div class="col-span-12 flex justify-start items-start gap-6">
		<HistoryTree />
		<Skills />
	</div>
</div>

<!-- 
	ToDo:
	1. Update my work history 
	2. Upodate skills and lkanguiage section 
	3. Update cards releated to responsive design
	4. update data of References section
 -->
