<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import khoobkarLogo from '@/assets/images/khoobkar-fulllogo.webp';
	import Menu from '@/assets/icons/Menu.svelte';

	export let scrollY: number = 0;
	const dispatch = createEventDispatcher();

	function handleToggle() {
		dispatch('toggleMenu');
	}
</script>

<div
	class="bg-gray-800 px-4 py-2 flex justify-between items-center xl:hidden {scrollY > 100
		? 'fixed inset-x-0'
		: ''}"
>
	<img
		src={khoobkarLogo}
		alt="The site's logo, a combination of a mark, which is the Persian letter H in a circle, and fully typed hessam khoobkar"
	/>
	<button
		class="bg-gray-700 rounded-xl p-3 flex justify-center items-center"
		on:click={handleToggle}
	>
		<Menu class="w-6 h-6" />
	</button>
</div>
