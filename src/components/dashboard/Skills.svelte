<script lang="ts">
	import figmaIcon from '@/assets/icons/skills/figma.png';
	import firebaseIcon from '@/assets/icons/skills/firebase.png';
	import gitIcon from '@/assets/icons/skills/git-icon.png';
	import nativescriptIcon from '@/assets/icons/skills/nativescript.png';
	import pocketbaseIcon from '@/assets/icons/skills/pocket-base.png';
	import pythonIcon from '@/assets/icons/skills/python.png';
	import reactIcon from '@/assets/icons/skills/react.png';
	import sassIcon from '@/assets/icons/skills/sass.png';
	import solidjsIcon from '@/assets/icons/skills/solidjs-icon.png';
	import sqliteIcon from '@/assets/icons/skills/sqlite.png';
	import storybookIcon from '@/assets/icons/skills/storybook-icon.png';
	import supabaseIcon from '@/assets/icons/skills/supabase-icon.png';
	import svelteIcon from '@/assets/icons/skills/svelte-icon.png';
	import tailwindcssIcon from '@/assets/icons/skills/tailwindcss-icon.png';
	import flagIran from '@/assets/icons/skills/twemoji_flag-iran.png';
	import flagTurkey from '@/assets/icons/skills/twemoji_flag-turkey.png';
	import flagUk from '@/assets/icons/skills/twemoji_flag-united-kingdom.png';
	import typescriptIcon from '@/assets/icons/skills/typescript-icon.png';
	import vitestIcon from '@/assets/icons/skills/vitest.png';
	import vueIcon from '@/assets/icons/skills/vue.png';

	const allSkills = [
		{
			title: 'I BUILD MY FRONT END IN',
			skills: [
				{
					name: 'Svelte',
					icon: svelteIcon
				},
				{
					name: 'Typescript',
					icon: typescriptIcon
				},
				{
					name: 'SolidJS',
					icon: solidjsIcon
				},
				{
					name: 'React',
					icon: reactIcon
				},
				{
					name: 'Vue',
					icon: vueIcon
				}
			]
		},
		{
			title: 'I Design and style with',
			skills: [
				{
					name: 'Figma',
					icon: figmaIcon
				},
				{
					name: 'TailwindCSS',
					icon: tailwindcssIcon
				},
				{
					name: 'Storybook',
					icon: storybookIcon
				},
				{
					name: 'Vitest',
					icon: vitestIcon
				},
				{
					name: 'Sass',
					icon: sassIcon
				}
			]
		},

		{
			title: 'I develop and store my data with',
			skills: [
				{
					name: 'PocketBase',
					icon: pocketbaseIcon
				},
				{
					name: 'Firebase',
					icon: firebaseIcon
				},
				{
					name: 'Supabase',
					icon: supabaseIcon
				},
				{
					name: 'SQLite',
					icon: sqliteIcon
				}
			]
		},

		{
			title: 'I also use the following',
			skills: [
				{
					name: 'Git',
					icon: gitIcon
				},
				{
					name: 'Nativescript',
					icon: nativescriptIcon
				},
				{
					name: 'Python',
					icon: pythonIcon
				}
			]
		}
	];

	const languages = {
		title: 'I speak in the following languages',
		skills: [
			{
				name: 'English',
				icon: flagUk
			},
			{
				name: 'Turkish',
				icon: flagTurkey
			},
			{
				name: 'Persian / Farsi',
				icon: flagIran
			}
		]
	};
</script>

<div class="w-5/12 flex flex-col justify-start items-start gap-6">
	<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-6 w-full">
		{#each allSkills as { title, skills }}
			<div class="w-full mb-8">
				<h3
					class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-teal-500 uppercase"
				>
					{title}
				</h3>
				<div class="flex justify-start items-center gap-4">
					{#each skills as skill}
						<div class="bg-[#111827] rounded-2xl flex justify-center items-center h-16 w-16">
							<img src={skill.icon} alt={skill.name} class="max-w-6 max-h-6 " />
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="bg-gray-800 shadow-lg shadow-gray-900 rounded-2xl p-6 w-full">
		<div class="w-full mb-8">
			<h3
				class="text-lg mb-4 font-black bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-teal-500 uppercase"
			>
				{languages.title}
			</h3>
			<div class="flex justify-start items-center gap-6">
				{#each languages.skills as skill}
					<div class="bg-[#111827] rounded-2xl flex justify-center items-center h-20 w-20">
						<img src={skill.icon} alt={skill.name} class="max-w-12 max-h-12 " />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
