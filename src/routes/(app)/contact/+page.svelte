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

	let height = 0;
	let width = 0;
	const gap = 80;
	let textShadow: string;

	function handleMousemove(event: MouseEvent) {
		const xGap = Math.round((event.clientX / width) * gap - gap / 2);
		const yGap = Math.round((event.clientY / height) * gap - gap / 2);

		return (textShadow = `
			${xGap * 4}px ${yGap * 4}px 2px rgba(17, 24, 39, 1),
			${xGap * 2}px ${yGap * 2}px 2px rgba(17, 24, 39, 1),
			${xGap * -2}px ${yGap * -2}px 2px rgba(17, 24, 39, 1),
			${xGap * -4}px ${yGap * -4}px 2px rgba(17, 24, 39, 1)
		`);
	}
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth={width} bind:innerHeight={height} />

<div class="flex flex-col justify-start items-start gap-12">
	<div class="flex justify-between items-stretch gap-4 w-full">
		<div
			class="hero bg-gray-850 rounded-2xl p-10 w-3/4 relative overflow-hidden flex justify-center items-center grow"
		>
			<p
				class="absolute whitespace-nowrap text-6xl font-black text-black uppercase transition-all duration-200 ease-in-out"
				style="text-shadow: {textShadow};"
			>
				Let's talk
			</p>
			<p
				class="absolute whitespace-nowrap text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 uppercase z-10"
			>
				Let's talk
			</p>
		</div>
		<div class="bg-gray-850 rounded-2xl p-1 w-1/4 aspect-square">
			<img class="rounded-2xl w-full h-full object-cover" src={MyImage} alt="alt" />
		</div>
	</div>
	<div class="flex justify-between items-center gap-4 bg-gray-900 rounded-2xl">
		<div class="rounded-2xl p-4 w-6/12 article-content">
			<h3>Looking for a contact form?</h3>
			<p>
				That's so 00's. In spite of the fact that email is still the best method for sending and
				receiving important documents, I find that first communications are better done via
				networking websites and direct messaging platforms.
			</p>
			<p>
				I am able to communicate with you in real time and provide a more personalized and
				responsive experience through direct messaging. You can do it by clicking any of the buttons
				on the right. For more formal messaging, you can use LinkedIn or Dribbble, although I check
				all of them frequently.
			</p>
			<p>
				So, if you have any questions or want to say hi, please message me through your preferred
				messaging app. can't wait to hear from you!
			</p>
		</div>
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
</div>
