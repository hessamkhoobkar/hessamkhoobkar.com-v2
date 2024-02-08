<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import khoobkarLogo from '@/assets/images/khoobkar-fulllogo.webp';
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
		<img
			src={khoobkarLogo}
			alt="The site's logo, a combination of a mark, which is the Persian letter H in a circle, and fully typed hessam khoobkar"
		/>
		<button
			class="bg-gray-800 rounded-xl p-3 flex justify-center items-center xl:hidden"
			on:click={handleToggle}
		>
			<Close class="w-6 h-6" />
		</button>
	</div>
	<div class="flex-grow px-4">
		<Navigation on:linkClick={handleToggle} />
	</div>
	<UserCard />
</div>
