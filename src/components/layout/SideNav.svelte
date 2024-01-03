<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import LogoCombo from '../../assets/images/LogoCombo.png';
	import Navigation from '../sidenav/Navigation.svelte';
	import UserCard from '../sidenav/UserCard.svelte';
	import Close from '@/assets/icons/Close.svelte';

	const dispatch = createEventDispatcher();

	function handleToggle() {
		dispatch('toggleMenu');
	}
</script>

<div class="bg-gray-900 w-full h-full pt-8 flex flex-col border-r border-gray-600">
	<div class="flex justify-between items-center px-7 mb-10">
		<img src={LogoCombo} alt="" />
		<button
			class="bg-[#111827] rounded-xl p-3 flex justify-center items-center xl:hidden"
			on:click={handleToggle}
		>
			<Close class="w-6 h-6" />
		</button>
	</div>
	<div class="flex-grow px-4">
		<Navigation />
	</div>
	<UserCard />
</div>
