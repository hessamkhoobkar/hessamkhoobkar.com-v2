<script lang="ts">
	import InfoCard from '@/components/dashboard/InfoCard.svelte';
	import TypeChart from '@/components/dashboard/TypeChart.svelte';
	import References from '@/components/dashboard/References.svelte';
	import Skills from '@/components/dashboard/Skills.svelte';
	import HistoryTree from '@/components/dashboard/HistoryTree.svelte';
	import WorkPreview from '@/components/dashboard/WorkPreview.svelte';
	import SummaryData from '@/components/dashboard/SummaryData.svelte';
</script>

<!-- 
	- Responsive design audit
	- Add resume to website
 -->

<div
	class="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-6 w-full max-w-[1440px] mx-auto xl:p-8"
>
	<SummaryData />
	<InfoCard />
	<TypeChart />
	<WorkPreview />
	<HistoryTree />
	<References />
	<Skills />
</div>
