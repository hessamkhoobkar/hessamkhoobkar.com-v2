<script lang="ts">
	import Avatar from '@/assets/images/hessam-avatar.jpg';
	import Buttton from '@/components/foundation/Button/Buttton.svelte';

	import DoorExit from '@/assets/icons/DoorExit.svelte';
	import Dribbble from '@/assets/icons/Dribbble.svelte';
	import Github from '@/assets/icons/Github.svelte';
	import Instagram from '@/assets/icons/Instagram.svelte';
	import Linkedin from '@/assets/icons/Linkedin.svelte';
	import Settings from '@/assets/icons/Settings.svelte';

	function ModalCall() {
		alert('Called');
	}
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
			href="https://www.google.com"
			target="_blank"
			icon={Linkedin}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://www.google.com"
			target="_blank"
			icon={Instagram}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://www.google.com"
			target="_blank"
			icon={Dribbble}
		/>
		<Buttton
			color="plain"
			variant="outline"
			size="small"
			class="flex-grow"
			href="https://www.google.com"
			target="_blank"
			icon={Github}
		/>
	</div>
	<!-- Facade buttons -->
	<div class="flex flex-col gap-2 w-full">
		<Buttton color="plain" variant="outline" label="Setting" icon={Settings} on:click={ModalCall} />
		<Buttton color="plain" variant="filled" label="Log out" icon={DoorExit} on:click={ModalCall} />
	</div>
</div>
