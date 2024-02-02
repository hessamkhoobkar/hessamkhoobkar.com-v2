<script lang="ts">
	import WorkChip from '../work/WorkChip.svelte';

	const stacks = [
		'HTML',
		'CSS',
		'Javascript',
		'Typescript',
		'React',
		'Svelte',
		'Vue',
		'Next.JS',
		'Svelte Kit',
		'Nuxt.JS',
		'TailwindCSS',
		'Figma',
		'PocketBase',
		'Supabase',
		'Git',
		'Sass',
		'Node.JS',
		'...'
	];

	const languages = ['English', 'Turkish', 'Persian'];
</script>

<div class="col-span-4 flex flex-col justify-start items-start gap-6">
	<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-4 w-full">
		<h3
			class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-tertiary-500 uppercase"
		>
			My Tech stack
		</h3>

		<div class="flex flex-wrap gap-2">
			{#each stacks as label}
				<WorkChip {label} />
			{/each}
		</div>
	</div>
	<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-4 w-full">
		<h3
			class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-tertiary-500 uppercase"
		>
			I Speak in
		</h3>

		<div class="flex flex-wrap gap-2">
			{#each languages as language}
				<WorkChip label={language} />
			{/each}
		</div>
	</div>
</div>
