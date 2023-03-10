<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	const splideOptions = {
		fixedHeight: '18rem',
		gap: '1rem',
		pagination: false,
		arrows: false,
		rewind: true,
		autoplay: true,
		pauseOnHover: true,
		interval: 10000
	};

	interface Reference {
		name: string;
		company: string;
		position: string;
		quote: string;
		avatar: string;
	}

	const references: Reference[] = [
		{
			name: 'Vidhi Gupta',
			company: 'Coinhaven',
			position: 'Senior Product Manager',
			quote:
				"Hessam is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline-oriented, and intelligent person. He is well versed with the technologies and has the hunger to learn on the go. Hessam's background in UX also renders him with an eye for detail and an understanding of user needs. He is a very proactive and helpful person with strong leadership capabilities. Hessam knows how to make peaceful outcomes out of chaotic situations. He is well suited for a fast-changing environment and start-up culture. I highly recommend working with him.",
			avatar:
				'https://media.licdn.com/dms/image/C4D03AQHJeWCsIU8b5w/profile-displayphoto-shrink_100_100/0/1629895786528?e=1683158400&v=beta&t=np3ELHvCOZbHpIdKcdcGisMTGZzUft8etO5VKBUEK3o'
		},
		{
			name: 'co-worker name',
			company: 'company name',
			position: 'thier postion',
			quote:
				'Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).',
			avatar: 'https://i.pravatar.cc/300?img=24'
		},
		{
			name: 'co-worker name',
			company: 'company name',
			position: 'thier postion',
			quote:
				'Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).',
			avatar: 'https://i.pravatar.cc/300?img=25'
		},
		{
			name: 'co-worker name',
			company: 'company name',
			position: 'thier postion',
			quote:
				'Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).',
			avatar: 'https://i.pravatar.cc/300?img=26'
		},
		{
			name: 'co-worker name',
			company: 'company name',
			position: 'thier postion',
			quote:
				'Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).',
			avatar: 'https://i.pravatar.cc/300?img=27'
		},
		{
			name: 'co-worker name',
			company: 'company name',
			position: 'thier postion',
			quote:
				'Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content (this is why we proofread, kids).',
			avatar: 'https://i.pravatar.cc/300?img=28'
		}
	];
</script>

<div class="relative bg-gray-850 shadow-lg shadow-gray-900 rounded-2xl p-6 col-span-8">
	<h3
		class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-teal-500 uppercase"
	>
		Refrances and recomandatoins
	</h3>

	<Splide
		hasTrack={false}
		class="cursor-pointer"
		options={splideOptions}
		aria-label="Svelte Splide Example"
	>
		<SplideTrack>
			{#each references as { name, company, position, quote, avatar }}
				<SplideSlide class="flex flex-col justify-start items-start">
					<p class="mb-4">{quote}</p>
					<div class="flex justify-start items-center gap-4 mt-auto">
						<img src={avatar} alt={name} class="rounded-full w-12 h-12" />
						<div class="flex flex-col justify-start items-start">
							<span class="text-xl">{name}</span>
							<div class="flex justify-start items-center gap-2">
								<span class="text-gray-400">{position}</span>
								<span class="text-gray-400">-</span>
								<span class="text-gray-400">{company}</span>
							</div>
						</div>
					</div>
				</SplideSlide>
			{/each}
		</SplideTrack>
		<div class="absolute -bottom-8 inset-x-0 flex flex-col">
			<div class="splide__progress">
				<div class="splide__progress__bar" />
			</div>
		</div>
	</Splide>
</div>

<style lang="postcss">
	.splide__progress {
		@apply bg-gray-900 rounded-full p-1;
	}
	.splide__progress__bar {
		@apply h-2 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full;
	}
</style>
