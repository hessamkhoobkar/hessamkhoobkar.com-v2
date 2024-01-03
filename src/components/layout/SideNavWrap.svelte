<script lang="ts">
	import SideNav from '@/components/layout/SideNav.svelte';
	import MobileHeader from './MobileHeader.svelte';

	let scrollY: number = 0;
	let menuVisible: boolean = false;

	function handleToggle() {
		menuVisible = !menuVisible;
	}
</script>

<svelte:window bind:scrollY />

<MobileHeader {scrollY} on:toggleMenu={handleToggle} />
<div
	class="fixed w-80 inset-y-0 xl:left-0 z-10 {menuVisible
		? 'right-0 w-screen'
		: '-right-full'} transition-all duration-300 ease-in-out"
>
	<SideNav on:toggleMenu={handleToggle} />
</div>
