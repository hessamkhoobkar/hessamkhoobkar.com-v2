<script lang="ts">
	import Buttton from '@/components/foundation/Button/Buttton.svelte';

	import MyImage from '@/assets/images/me-welcoming.webp';
	import Dribbble from '@/assets/icons/Dribbble.svelte';
	import Gmail from '@/assets/icons/Gmail.svelte';
	import Linkedin from '@/assets/icons/Linkedin.svelte';
	import Telegram from '@/assets/icons/Telegram.svelte';
	import Whatsapp from '@/assets/icons/Whatsapp.svelte';

	const linkData = [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/hessam-khoobkar/', icon: Linkedin },
		{ label: 'Dribbble', href: 'https://dribbble.com/hessam_khoobkar', icon: Dribbble },
		{ label: 'Telegram', href: 'https://t.me/AmirhessamKhan', icon: Telegram },
		{ label: 'WhatsApp', href: 'https://wa.me/9196230597', icon: Whatsapp },
		{ label: 'Gmail address', href: 'mailto:amirhessam.dev@gmail.com', icon: Gmail }
	];
</script>

<div class="flex flex-col justify-start items-start gap-12">
	<h1>Contact Page</h1>
	<div class="rounded-2xl p-4 w-4/12 xl:w-3/12 flex flex-col justify-start items-start gap-4">
		{#each linkData as { label, href, icon }}
			<!-- content here -->
			<Buttton
				color="plain"
				variant="outline"
				class="w-full"
				{href}
				target="_blank"
				{label}
				{icon}
			/>
		{/each}
	</div>
</div>
