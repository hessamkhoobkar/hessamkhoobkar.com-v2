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

	let showSettingModal = false;
	let showLogOutModal = false;

	const socialLinks = [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/hessam-khoobkar/', icon: Linkedin },
		{ label: 'Instagram', href: 'https://www.instagram.com/hessam_khoobkar/', icon: Instagram },
		{ label: 'Dribbble', href: 'https://dribbble.com/hessam_khoobkar', icon: Dribbble },
		{ label: 'Github', href: 'https://github.com/hessamkhoobkar', icon: Github }
	];
</script>

<div class="w-full bg-gray-900 p-4 border-t border-gray-600">
	<!-- Personal info -->
	<div class="flex gap-4 w-full mb-8">
		<img src={Avatar} class="w-12 h-12 rounded-xl" alt="my self in frint of a wall" />
		<div class="flex flex-col gap-1">
			<span class="font-bold">Hessam Khoobkar</span>
			<span class="text-sm text-gray-400">amirhessam.dev@gmail.com</span>
		</div>
	</div>
	<!-- social buttons -->
	<div class="flex gap-2 w-full mb-3">
		{#each socialLinks as socialLink}
			<!-- content here -->
			<Buttton
				size="small"
				color="plain"
				target="_blank"
				variant="outline"
				class="grow"
				href={socialLink.href}
				icon={socialLink.icon}
			/>
		{/each}
	</div>
	<!-- Facade buttons -->
	<div class="flex flex-col gap-2 w-full">
		<Buttton
			color="plain"
			variant="outline"
			label="Setting"
			icon={Settings}
			on:click={() => (showSettingModal = true)}
		/>
		<Buttton
			color="plain"
			variant="filled"
			label="Log out"
			icon={DoorExit}
			on:click={() => (showLogOutModal = true)}
		/>
	</div>
</div>

{#if showSettingModal}
	<Modal on:close={() => (showSettingModal = false)}>
		<div
			class="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-700 bg-opacity-50 border-2 border-primary-500 flex justify-center items-center"
			slot="header"
		>
			<Grineyes size="64" />
		</div>

		<h2 class="text-3xl font-bold mb-4">There are no settings here</h2>

		<p class="mb-2">
			This is a static website. There's no backend, no database, no user authentication, and no
			settings.
		</p>

		<p class="mb-4">But I'm glad you were intrigued by the website.</p>
	</Modal>
{/if}

{#if showLogOutModal}
	<Modal on:close={() => (showLogOutModal = false)}>
		<div
			class="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-700 bg-opacity-50 border-2 border-primary-500 flex justify-center items-center"
			slot="header"
		>
			<Grineyes size="64" />
		</div>

		<h2 class="text-3xl font-bold mb-2">Are you serious?</h2>

		<p class="mb-4">Did you try to log me out of my own website? 😄.</p>
		<p class="mb-2">
			No hard feelings, though. I'm the one who replicates an application dashboard as a personal
			website and put the button there.
		</p>
		<p class="mb-4">
			I'm glad you were intrigued by the website and curious to see what the logout button would do.
		</p>
	</Modal>
{/if}
