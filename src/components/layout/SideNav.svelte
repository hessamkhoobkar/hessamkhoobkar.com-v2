<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import LogoCombo from '../../assets/images/LogoCombo.svelte';
	import Navigation from '../sidenav/Navigation.svelte';
	import UserCard from '../sidenav/UserCard.svelte';
	import Close from '@/assets/icons/Close.svelte';

	const dispatch = createEventDispatcher();

	function handleToggle() {
		dispatch('toggleMenu');
	}
</script>

<div class="nav-bg w-full h-full p-4 pt-8 flex flex-col">
	<div class="flex justify-between items-center mb-12">
		<LogoCombo />
		<button
			class="bg-[#111827] rounded-xl p-3 flex justify-center items-center lg:hidden"
			on:click={handleToggle}
		>
			<Close class="w-6 h-6" />
		</button>
	</div>
	<div class="flex-grow">
		<Navigation />
	</div>
	<UserCard />
</div>

<style>
	.nav-bg {
		background: linear-gradient(
				0deg,
				rgba(13, 18, 29, 1) 0%,
				rgba(13, 18, 29, 1) 65%,
				rgba(13, 18, 29, 0) 100%
			),
			linear-gradient(
				220deg,
				rgba(13, 18, 29, 0) 2.5%,
				rgba(12, 74, 110, 0.25) 17.5%,
				rgba(13, 18, 29, 0) 32.5%
			),
			#0d121d;
	}
</style>
