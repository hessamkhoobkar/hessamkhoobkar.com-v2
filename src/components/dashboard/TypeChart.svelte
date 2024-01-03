<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let canvas: HTMLCanvasElement;

	const data = {
		datasets: [
			{
				label: 'Projects',
				data: [12, 6, 2],
				borderWidth: 4,
				borderColor: 'rgb(24, 32, 47)',
				backgroundColor: ['#6366F1', '#0EA5E9', '#EAB308'],
				borderRadius: 9999
			}
		]
	};

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (ctx) {
			const chart = new Chart(ctx, {
				type: 'doughnut',
				data,
				options: {
					responsive: true,
					cutout: '80%'
				}
			});
		}
	});
</script>

<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-6 col-span-4">
	<h3
		class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-teal-500 uppercase"
	>
		My Work Categories
	</h3>
	<div class="max-h-52 w-full">
		<canvas bind:this={canvas} class="mx-auto" />
	</div>
	<div class="flex flex-col mt-8 gap-2 text-sm">
		<div class="flex justify-between items-center">
			<span class="bg-indigo-500 w-2 h-2 rounded-full mr-4" />
			<span class="mr-auto">UI Design Projects</span>
			<span class="text-gray-500 mr-2">12</span>
			<span class="text-indigo-500">53%</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="bg-sky-500 w-2 h-2 rounded-full mr-4" />
			<span class="mr-auto">Front-end Projects</span>
			<span class="text-gray-500 mr-2">6</span>
			<span class="text-sky-500">31%</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="bg-yellow-500 w-2 h-2 rounded-full mr-4" />
			<span class="mr-auto">Full-stack Projects</span>
			<span class="text-gray-500 mr-2">2</span>
			<span class="text-yellow-500">16%</span>
		</div>
	</div>
</div>
