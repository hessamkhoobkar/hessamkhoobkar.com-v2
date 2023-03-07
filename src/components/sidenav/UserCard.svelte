<script lang="ts">
	import Buttton from '@/components/foundation/Button/Buttton.svelte';
	import Modal from '@/components/foundation/Modal.svelte';

	import Avatar from '@/assets/images/hessam-avatar.jpg';
	import DoorExit from '@/assets/icons/DoorExit.svelte';
	import Dribbble from '@/assets/icons/Dribbble.svelte';
	import Github from '@/assets/icons/Github.svelte';
	import Instagram from '@/assets/icons/Instagram.svelte';
	import Linkedin from '@/assets/icons/Linkedin.svelte';
	import Settings from '@/assets/icons/Settings.svelte';
	import Grineyes from '@/assets/icons/Grineyes.svelte';

	let showModal = false;
</script>

<div class="w-full bg-gray-900 rounded-2xl p-4">
	<!-- Personal info -->
	<div class="flex gap-4 w-full mb-8">
		<img src={Avatar} class="w-12 h-12 rounded-xl" alt="my self in frint of a wall" />
		<div class="flex flex-col gap-1">
			<span>Hessam Khoobkar</span>
			<span class="text-sm text-gray-500">amirhessam.dev@gmail.com</span>
		</div>
	</div>
	<!-- social buttons -->
	<div class="flex gap-2 w-full mb-3">
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://www.linkedin.com/in/hessam-khoobkar/"
			target="_blank"
			icon={Linkedin}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://www.instagram.com/hessam_khoobkar/"
			target="_blank"
			icon={Instagram}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://dribbble.com/hessam_khoobkar"
			target="_blank"
			icon={Dribbble}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://github.com/hessamkhoobkar"
			target="_blank"
			icon={Github}
		/>
	</div>
	<!-- Facade buttons -->
	<div class="flex flex-col gap-2 w-full">
		<Buttton
			color="plain"
			variant="outline"
			label="Setting"
			icon={Settings}
			on:click={() => (showModal = true)}
		/>
		<Buttton
			color="plain"
			variant="filled"
			label="Log out"
			icon={DoorExit}
			on:click={() => (showModal = true)}
		/>
	</div>
</div>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<div
			class="w-24 h-24 rounded-full bg-gradient-to-tr from-sky-900 bg-opacity-50 border-2 border-sky-700 flex justify-center items-center"
			slot="header"
		>
			<Grineyes size="64" />
		</div>

		<h2 class="text-3xl font-bold mb-2">Are you serious?</h2>

		<p class="mb-4">
			Did you try to log me out of my own website? 😄. No hard feelings, though. I'm the one who
			replicates a user panel as a personal website and put the button there.
		</p>
		<p>
			I'm glad you were intrigued by the website and curious to see what the logout button would do.
		</p>
	</Modal>
{/if}
