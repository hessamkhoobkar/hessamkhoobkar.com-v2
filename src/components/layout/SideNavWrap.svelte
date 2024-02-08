<script lang="ts">
	import SideNav from '@/components/layout/SideNav.svelte';
	import MobileHeader from './MobileHeader.svelte';

	let scrollY: number = 0;
	let menuVisible: boolean = false;

	function handleOpenToggle() {
		menuVisible = true;
	}

	function handleCloseToggle() {
		menuVisible = false;
	}
</script>

<svelte:window bind:scrollY />

<MobileHeader {scrollY} on:toggleMenu={handleOpenToggle} />
<div
	class="fixed w-72 2xl:w-80 inset-y-0 xl:left-0 z-30 {menuVisible
		? 'right-0 w-screen'
		: '-right-full'} transition-all duration-300 ease-in-out"
>
	<SideNav on:toggleMenu={handleCloseToggle} />
</div>
