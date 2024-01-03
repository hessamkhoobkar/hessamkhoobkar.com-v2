<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import LogoCombo from '@/assets/images/LogoCombo.svelte';
	import Menu from '@/assets/icons/Menu.svelte';

	export let scrollY: number = 0;
	const dispatch = createEventDispatcher();

	function handleToggle() {
		dispatch('toggleMenu');
	}
</script>

<div
	class="bg-[#0D121D] px-4 py-2 flex justify-between items-center xl:hidden {scrollY > 100
		? 'fixed inset-x-0'
		: ''}"
>
	<LogoCombo class="scale-75 origin-left" />
	<button
		class="bg-[#111827] rounded-xl p-3 flex justify-center items-center"
		on:click={handleToggle}
	>
		<Menu class="w-6 h-6" />
	</button>
</div>
