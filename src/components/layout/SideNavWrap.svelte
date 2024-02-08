<script lang="ts">
	import { navigating } from '$app/stores';
	import SideNav from '@/components/layout/SideNav.svelte';
	import MobileHeader from './MobileHeader.svelte';
	import { onMount } from 'svelte';

	let isMobile: boolean = false;
	let scrollY: number = 0;
	let menuVisible: boolean = false;

	function handleToggle() {
		menuVisible = !menuVisible;
	}

	onMount(() => {
		isMobile = window.innerWidth < 1280;
	});

	$: if ($navigating && isMobile) handleToggle();
</script>

<svelte:window bind:scrollY />

<MobileHeader {scrollY} on:toggleMenu={handleToggle} />
<div
	class="fixed w-72 2xl:w-80 inset-y-0 xl:left-0 z-30 {menuVisible
		? 'right-0 w-screen'
		: '-right-full'} transition-all duration-300 ease-in-out"
>
	<SideNav on:toggleMenu={handleToggle} />
</div>
