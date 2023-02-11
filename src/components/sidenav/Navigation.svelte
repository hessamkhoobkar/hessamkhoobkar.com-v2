<script lang="ts">
	import { page } from '$app/stores';

	import AppleIcon from '@/assets/icons/Apple.svelte';
	import AtSignIcon from '@/assets/icons/At.svelte';
	import ColorSwatchIcon from '@/assets/icons/ColorSwatch.svelte';
	import HomeIcon from '@/assets/icons/Home.svelte';
	import TagsIcon from '@/assets/icons/Tags.svelte';
	import TailwindIcon from '@/assets/icons/Tailwind.svelte';

	const links = [
		{ adress: '/', label: 'Dashboard', icon: HomeIcon },
		{ adress: '/work', label: 'My Work', icon: AppleIcon },
		{ adress: '/services', label: 'My Services', icon: TagsIcon },
		{ adress: '/themes', label: 'Free Themes', icon: ColorSwatchIcon },
		{ adress: '/tailwind-collection', label: 'Tailwind Collection', icon: TailwindIcon },
		{ adress: '/contact', label: 'Contact Me', icon: AtSignIcon }
	];
</script>

<ul>
	{#each links as { adress, label, icon }}
		<li>
			<a
				href={adress}
				class="flex gap-3 p-3 rounded-2xl border border-transparent group {$page.url.pathname ===
				adress
					? 'bg-sky-500 border-sky-400'
					: ''}"
			>
				<svelte:component
					this={icon}
					class="transition-colors duration-300 ease-in-out {$page.url.pathname === adress
						? 'text-white group-hover:text-white'
						: 'text-gray-500 group-hover:text-sky-500'}"
				/>
				<span
					class=" transition-colors duration-300 ease-in-out {$page.url.pathname === adress
						? 'text-white group-hover:text-white'
						: 'text-gray-200 group-hover:text-white'}"
				>
					{label}
				</span>
			</a>
		</li>
	{/each}
</ul>
