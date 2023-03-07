<script lang="ts">
	import Buttton from '@/components/foundation/Button/Buttton.svelte';

	const workData = [
		{
			title: 'The title of the project',
			description:
				'As a UI designer and front-end developer for TravelBee, I was responsible for designing and developing the user interface of a travel booking website. I created high-fidelity mockups using design tools and brought them to life using HTML, CSS, and JavaScript. I collaborated with various teams to ensure the website was responsive, integrated with the database and APIs, and optimized for all devices.',
			duration: '6 Months',
			roles: ['UI/UX Designer', 'Front-end Developer'],
			images: ['img01', 'img02', 'img03']
		},
		{
			title: 'The title of the project',
			description:
				'As a web designer and front-end developer for a healthcare company called "HealthPro", you designed and developed the user interface of a patient portal using design tools and programming languages. You ensured that the portal was responsive, secure, and easy to use for patients and healthcare providers. You also collaborated with the back-end team to ensure that the front-end code was integrated seamlessly with database and APIs.',
			duration: '6 Months',
			roles: ['UI/UX Designer', 'Front-end Developer'],
			images: ['img01', 'img02', 'img03']
		},
		{
			title: 'The title of the project',
			description:
				'Working as a UX/UI designer and front-end developer for an e-commerce website called "ShopNow", you were responsible for creating user-friendly designs and developing them into responsive web pages. You worked with the marketing team to create promotional banners, email templates, and other marketing materials.',
			duration: '6 Months',
			roles: ['UI/UX Designer', 'Front-end Developer'],
			images: ['img01', 'img02', 'img03']
		},
		{
			title: 'The title of the project',
			description:
				'As a web designer and front-end developer for a healthcare company called "HealthPro", you designed and developed the user interface of a patient portal using design tools and programming languages. You ensured that the portal was responsive, secure, and easy to use for patients and healthcare providers. You also collaborated with the back-end team to ensure that the front-end code was integrated seamlessly with database and APIs.',
			duration: '6 Months',
			roles: ['UI/UX Designer', 'Front-end Developer'],
			images: ['img01', 'img02', 'img03']
		}
	];
</script>

<div class="flex flex-col justify-start items-start gap-6">
	<!-- Card List -->
	{#each workData as work}
		<!-- content here -->
		<div class="flex justify-start items-stretch p-6 gap-6 w-full max- bg-gray-850 rounded-2xl">
			<div class="w-1/2 h-96 flex flex-col justify-between items-start">
				<div class="w-full flex justify-start items-start flex-wrap">
					<h2 class="text-5xl font-bold mb-6">{work.title}</h2>
					<p class="text-base leading-normal">{work.description}</p>
				</div>
				<div class="w-full flex flex-col justify-start items-start">
					<span class="w-full flex flex-col justify-start items-start gap-2">
						<span class="flex justify-start items-center w-full gap-2">
							<span class="text-gray-400 font-bold mr-2 w-20">Duration:</span>
							<span class="text-white">{work.duration}</span>
						</span>
						<span class="flex justify-start items-center gap-2 w-full">
							<span class="text-gray-400 font-bold mr-1 w-20">My Role:</span>
							{#each work.roles as role}
								<span class="text-sky-500 text-sm bg-sky-500 bg-opacity-10 rounded-full py-1 px-2">
									{role}
								</span>
							{/each}
						</span>
					</span>
					<Buttton
						class="w-full mt-4"
						label="Read More"
						variant="filled"
						color="primary"
						disabled
					/>
				</div>
			</div>
			<div class="w-1/2 h-96 grid grid-cols-2 grid-rows-2 gap-4">
				<div class="rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-500 col-span-1 row-span-2" />
				<div
					class="rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 col-start-2 col-span-1 row-span-1"
				/>
				<div
					class="rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 col-start-2 col-span-1 row-span-1"
				/>
			</div>
		</div>
	{/each}
</div>
