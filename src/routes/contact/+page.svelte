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
	<!-- Hero -->
	<div class="bg-[#18202F] w-full h-[30rem] hero">
		<div class="w-full max-w-[1440px] mx-auto p-8">
			<div class="w-full max-w-2xl mx-auto">
				<h2 class="text-5xl mb-8">Welcome to my contact page</h2>
				<p class="mb-4">
					I'm thrilled that you're interested in getting in touch. Whether you have a question, a
					collaboration idea, or simply want to say hello, I'd love to hear from you. Communication
					is key, and I'm here to ensure that connecting with me is easy and convenient.
				</p>
				<p class="mb-4">
					I value your feedback, suggestions, and ideas, so please don't hesitate to share them.
					Your input helps me continually improve and create content that resonates with you.
				</p>
				<p>
					Thank you for taking the time to visit my website and explore what I have to offer. I'm
					excited to connect with you and look forward to hearing from you soon!
				</p>
			</div>
		</div>
	</div>
	<!-- Body -->
	<div class="w-full max-w-[1440px] mx-auto p-8">
		<div class="flex justify-start items-stretch gap-4 w-full -mt-40">
			<div class="bg-[#18202F] w-1/2 p-4 rounded-2xl thecard">
				<!-- <form
					id="fs-frm"
					name="simple-contact-form"
					accept-charset="utf-8"
					action="https://formspree.io/f/{form_id}"
					method="post"
				> -->
				<form
					id="fs-frm"
					name="simple-contact-form"
					method="post"
					class="flex flex-col justify-start items-start gap-6 w-full"
				>
					<div class="flex justify-start items-start gap-6 w-full">
						<div class="flex flex-col justify-start items-start gap-2 w-full">
							<label for="full-name">Full Name</label>
							<input
								class="input"
								type="text"
								name="name"
								id="full-name"
								placeholder="First and Last"
							/>
						</div>
						<div class="flex flex-col justify-start items-start gap-2 w-full">
							<label for="email-address">Email Address</label>
							<input
								class="input"
								type="email"
								name="_replyto"
								id="email-address"
								placeholder="email@domain.tld"
							/>
						</div>
					</div>
					<div class="flex flex-col justify-start items-start gap-2 w-full">
						<label for="subject">Subject</label>
						<input
							class="input"
							type="text"
							name="subject"
							id="subject"
							placeholder="Your message subject"
						/>
					</div>

					<div class="flex flex-col justify-start items-start gap-2 w-full">
						<label for="message">Message</label>
						<textarea
							class="input"
							rows="11"
							name="message"
							id="message"
							placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
						/>
					</div>
					<!-- <div class="flex justify-start items-center gap-2 bg-[#151D2D] rounded-xl p-4">
						<input class="check-box" type="checkbox" name="flash" id="as-flash" />
						<div class="flex flex-col justify-start items-start gap-2">
							<label for="as-flash">Beep beep, boop boop?</label>
							<span class="text-xs text-gray-500"
								>Check the box if you are from the flesh kind?</span
							>
						</div>
					</div> -->
					<input
						class="w-full py-5 bg-sky-500 flex justify-center items-center rounded-xl text-gray-900 font-bold cursor-pointer mt-4 hover:bg-sky-600 hover:text-white transition-all duration-200 ease-in-out active:bg-sky-700"
						type="submit"
						value="Send Message"
					/>
				</form>
			</div>
			<div class="w-1/2 flex flex-col justify-start items-start gap-4">
				<div class="bg-[#18202F] w-full p-4 rounded-2xl thecard">
					<img class="rounded-xl" src={MyImage} alt="" />
				</div>
				<div class="bg-[#18202F] w-full p-4 rounded-2xl shadow-lg text-[#4F5D72]">
					<p class="mb-4">
						The king had recently lost his wife and son during childbirth and was thoroughly
						depressed, crying himself to sleep every night. He sought out a ring that would cheer
						his spirits, appease his suffering.
					</p>

					<p>
						People from all over tried to help, but nothing of importance resonated with king. Then,
						the scholar, now not so young, was sought out to advise the king and perhaps suggest a
						phrase. Shortly thereafter, a ring appeared from the scholar with a phrase inscribed
						inside of the gold and ruby ring:
						<span class="text-white capitalize font-bold"> this too shall pass </span>
					</p>
				</div>
			</div>
		</div>

		<div class=" max-w-[1440px] py-8">
			<div class="w-full flex justify-start items-start gap-4">
				{#each linkData as { label, href, icon }}
					<a
						{href}
						class="bg-[#18202F] grow flex flex-col justify-center items-center py-8 rounded-2xl gap-3 hover:bg-gray-800 transition-all duration-200 ease-in-out group"
					>
						<svelte:component
							this={icon}
							size="32"
							class="opacity-30 group-hover:opacity-100 group-hover:text-sky-500 transition-all duration-200 ease-in-out"
						/>
						<span>{label}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		background: radial-gradient(
				40% 95% at 50% 0%,
				rgba(14, 165, 233, 0.15) 0%,
				rgba(14, 165, 233, 0) 100%
			),
			#18202f;
	}

	.thecard {
		background: linear-gradient(180deg, rgba(13, 18, 29, 0.2) 0%, rgba(13, 18, 29, 0) 100%), #1a2233;
		box-shadow: 0px 12px 25px 4px rgba(13, 18, 29, 0.6);
	}

	.input {
		@apply w-full px-4 py-4 rounded-xl bg-[#111827] bg-opacity-50 border border-transparent transition-all duration-200 ease-in-out ring-0 outline-none;
	}

	.input::placeholder {
		@apply text-gray-600;
	}

	.input:hover {
		@apply bg-opacity-90 border-sky-900;
	}

	.input:focus {
		@apply bg-opacity-90 border-sky-500 ring-0 outline-none;
	}
</style>
