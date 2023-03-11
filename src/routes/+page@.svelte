<script lang="ts">
	import Profile from '@/assets/images/profile-pic.png';

	const links = [
		{ label: 'linkedin', href: 'https://www.linkedin.com/in/hessam-khoobkar/' },
		{ label: 'dribbble', href: 'https://dribbble.com/hessam_khoobkar' },
		{ label: 'github', href: 'https://github.com/hessamkhoobkar' },
		{ label: 'codepen', href: 'https://codepen.io/hessamkhoobkar' }
	];
</script>

<div class="h-screen w-screen grid grid-rows-4 grid-cols-1">
	<div class="col-span-1 row-span-3 custom-gradient overflow-hidden relative">
		<div
			class="font-headSans text-9xl text-gray-1000 uppercase fixed top-2 left-0 whitespace-nowrap flex justify-start items-start"
		>
			<div class="marquee">
				<span> * Hessam Khoobkar </span>
				<span> * Hessam Khoobkar </span>
				<span class="mr-8"> * Hessam Khoobkar </span>
			</div>
			<div class="marquee">
				<span> * Hessam Khoobkar </span>
				<span> * Hessam Khoobkar </span>
				<span class="mr-8"> * Hessam Khoobkar </span>
			</div>
		</div>
		<div class="h-full w-[50rem] ml-[20%] relative">
			<div class="absolute bottom-4 flex flex-col justify-start items-start gap-1">
				<span class="text-base text-white font-bold">hessam khoobkar</span>
				<span class="text-xl text-white font-bold">UI Designer / Front-end Developer</span>
			</div>
		</div>
	</div>
	<div class="col-span-1 row-span-1 bg-white">
		<div
			class="content h-full w-[50rem] ml-[20%] pt-4 pb-3 flex flex-col justify-between items-start relative"
		>
			<img
				class="rounded-xl absolute h-24 w-24 border-2 border-gray-1000 -left-32 -top-16"
				src={Profile}
				alt="Me standing in front of some histrorical building with perisan style design in blue and cyan colors"
			/>
			<p class="text-gray-1000 text-sm leading-snug font-medium tracking-[-0.04em]">
				I am a front-end developer with a strong focus on building user interfaces and components.
				My expertise lies in converting design concepts and ideas into functional front-end code
				that is visually appealing and user-friendly. I have a keen eye for detail and take pride in
				delivering high-quality work that meets or exceeds client expectations. Due to my ability to
				effortlessly transform existing UI designs into code, colleagues and clients often refer to
				me as the <span class="text-sky-500">"Magician"</span>. My dedication to my craft and
				passion for creating beautiful and intuitive UIs make me an invaluable asset to any team or
				project.
			</p>
			<div
				class="text-gray-400 text-xs leading-snug font-bold w-full flex justify-between items-center"
			>
				<div class="flex justify-start items-center">
					{#each links as { label, href }}
						<a
							{href}
							target="_blank"
							rel="noreferrer"
							class="not px-6 first:pl-0 hover:text-sky-500 duration-150"
						>
							{label}
						</a>
						<span class="">.</span>
					{/each}
				</div>

				<span>
					Working on
					<a href="/dashboard" class="hover:text-sky-500 duration-150"> V2 </a>
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	/* Section gradient */
	.custom-gradient {
		background-color: hsla(221, 37%, 8%, 1);
		background-image: radial-gradient(at 7% 93%, hsla(221, 37%, 8%, 1) 0px, transparent 50%),
			radial-gradient(at 13% 76%, hsla(221, 37%, 8%, 1) 0px, transparent 50%),
			radial-gradient(at 21% 69%, hsla(221, 38%, 8%, 1) 0px, transparent 50%),
			radial-gradient(at 12% 34%, hsla(217, 90%, 59%, 1) 0px, transparent 50%),
			radial-gradient(at 13% 14%, hsla(198, 87%, 48%, 1) 0px, transparent 50%),
			radial-gradient(at 53% 23%, hsla(217, 90%, 59%, 1) 0px, transparent 50%),
			radial-gradient(at 81% 48%, hsla(198, 87%, 48%, 1) 0px, transparent 50%),
			radial-gradient(at 66% 84%, hsla(217, 90%, 59%, 1) 0px, transparent 50%),
			radial-gradient(at 63% 67%, hsla(217, 91%, 59%, 1) 0px, transparent 50%),
			radial-gradient(at 60% 16%, hsla(198, 88%, 48%, 1) 0px, transparent 50%),
			radial-gradient(at 98% 94%, hsla(198, 87%, 48%, 1) 0px, transparent 50%),
			radial-gradient(at 54% 44%, hsla(217, 90%, 59%, 1) 0px, transparent 50%),
			radial-gradient(at 3% 3%, hsla(199, 94%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 97% 4%, hsla(199, 94%, 73%, 1) 0px, transparent 50%),
			radial-gradient(at 91% 3%, hsla(199, 95%, 73%, 1) 0px, transparent 50%);
	}

	/* Top of the page marquee or ribbon */
	.marquee {
		-webkit-animation: loop 20s infinite linear;
		animation: loop 20s infinite linear;
	}

	@keyframes loop {
		100% {
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}
</style>
