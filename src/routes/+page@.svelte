<script lang="ts">
	import InfoCard from '@/components/dashboard/InfoCard.svelte';
	import GameChart from '@/components/dashboard/GameChart.svelte';
	import TypeChart from '@/components/dashboard/TypeChart.svelte';
	import References from '@/components/dashboard/References.svelte';
	import CurrentBook from '@/components/dashboard/CurrentBook.svelte';
	import CurrentGame from '@/components/dashboard/CurrentGame.svelte';
	import Skills from '@/components/dashboard/Skills.svelte';

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

	<div class="bg-gray-850 shadow-lg shadow-gray-900 rounded-2xl p-6 col-span-7">
		<span>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed in rerum reprehenderit
			fuga, eum at fugiat quibusdam quis distinctio fugit eaque, minima quasi! Neque officia dolores
			cumque totam perferendis.
		</span>
	</div>
	<div class="col-span-5 flex flex-col justify-start items-start gap-6">
		<Skills />
	</div>
</div>

<!-- Skills, programming languages, frameworks, tools, and languages  -->
<!-- Work history -->
