<script lang="ts">
	import { page } from '$app/stores';

	import AppleIcon from '@/assets/icons/Apple.svelte';
	import AtSignIcon from '@/assets/icons/At.svelte';
	import ColorSwatchIcon from '@/assets/icons/ColorSwatch.svelte';
	import HomeIcon from '@/assets/icons/Home.svelte';
	import TagsIcon from '@/assets/icons/Tags.svelte';
	import TailwindIcon from '@/assets/icons/Tailwind.svelte';

	const links = [
		{ adress: '/', label: 'Dashboard', icon: HomeIcon, disabled: false },
		{ adress: '/work', label: 'My Work', icon: AppleIcon, disabled: false },
		{ adress: '/services', label: 'My Services', icon: TagsIcon, disabled: false },
		{ adress: '#', label: 'Free Themes', icon: ColorSwatchIcon, disabled: true },
		{ adress: '#', label: 'Tailwind Collection', icon: TailwindIcon, disabled: true },
		{ adress: '/contact', label: 'Contact Me', icon: AtSignIcon, disabled: false }
	];
</script>

<ul>
	{#each links as { adress, label, icon, disabled }}
		<li>
			<a
				href={adress}
				class="flex gap-3 p-3 rounded-2xl border border-transparent group {$page.url.pathname ===
				adress
					? 'bg-sky-500 border-sky-400'
					: ''}					
					{disabled ? 'cursor-not-allowed' : ''}
					"
			>
				<svelte:component
					this={icon}
					class="transition-colors duration-300 ease-in-out {$page.url.pathname === adress
						? 'text-white group-hover:text-white'
						: 'text-gray-500 group-hover:text-sky-500'}
						{disabled ? 'text-gray-600 group-hover:text-gray-600' : ''}
						"
				/>
				<span
					class=" transition-colors duration-300 ease-in-out {$page.url.pathname === adress
						? 'text-white group-hover:text-white'
						: 'text-gray-200 group-hover:text-white'}
						{disabled ? 'text-gray-500 group-hover:text-gray-500' : ''}
						"
				>
					{label}
				</span>
			</a>
		</li>
	{/each}
</ul>
