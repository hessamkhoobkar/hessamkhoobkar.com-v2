<script lang="ts">
	import Button from '@/components/foundation/Button/Button.svelte';
	import Link from '@/assets/icons/Link.svelte';

	const workHistory = [
		{
			title: 'Front end Lead - Coinhaven',
			details: 'Dec 2021 - Present · Full-time · 1 yr 6 mos · Berlin, Germany',
			tools: 'Svelte · Svelte · TypeScript · GraphQL · WebSocket · Tailwind CSS · Git · GitLab'
		},
		{
			title: 'Frontend Developer & UI Designer - Freelance',
			details: 'Nov 2019 - Dec 2021 · Contracts · 2 yr 2 mos · Istanbul, Turkey - Tehran, Iran ',
			tools:
				'Svelte · Svelte · TypeScript · GraphQL · WebSocket · Tailwind CSS · Git · GitLab · Figma · JavaScript · CSS · SASS · React · Next.JS'
		},
		{
			isLink: true,
			title: 'See all my work here'
		},
		{
			title: 'Frontend Developer & UI Designer - Shabakeh Gostar Kayer',
			details: 'Aug 2017 - Sep 2019 · Full-time · 2 yr 2 mos · Tehran, Iran',
			tools: 'Adobe XD · Adobe illustrator · JavaScript · jQuery · CSS · SASS'
		}
	];
</script>

<div class="w-7/12 flex flex-col justify-start items-start gap-6">
	{#each workHistory as { title, details, tools, isLink }}
		{#if !isLink}
			<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-6 pb-8 w-full relative">
				<div class="absolute top-0 left-0 h-full">
					<div class="absolute bg-[#111827] top-0 left-8 w-2 h-full" />
					<div
						class="absolute bg-[#111827] top-6 left-6 w-6 h-6 rounded-full border-4 border-cyan-500"
					/>
				</div>
				<div class="flex flex-col justify-start items-start gap-1 ml-10">
					<h3 class="text-lg">{title}</h3>
					<span class="text-xs">{details}</span>
					<span class="text-[#9EA5BA] text-[0.625rem]">{tools}</span>
				</div>
			</div>
		{:else}
			<Button
				color="plain"
				variant="outline"
				label={title}
				icon={Link}
				href="https://github.com/hessamkhoobkar"
			/>
		{/if}
	{/each}
</div>
