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
		<h2 slot="header">
			modal
			<small><em>adjective</em> mod·al \ˈmō-dəl\</small>
		</h2>

		<ol class="definition-list">
			<li>of or relating to modality in logic</li>
			<li>
				containing provisions as to the mode of procedure or the manner of taking effect —used of a
				contract or legacy
			</li>
			<li>of or relating to a musical mode</li>
			<li>of or relating to structure as opposed to substance</li>
			<li>
				of, relating to, or constituting a grammatical form or category characteristically
				indicating predication
			</li>
			<li>of or relating to a statistical mode</li>
		</ol>

		<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
	</Modal>
{/if}
