<script lang="ts">
	import '../app.css';
	import SideNav from '@/components/layout/SideNav.svelte';
</script>

<svelte:head>
	<meta name="title" content="Hessam Khoobkar | Front End Developer and UI Designer Portfolio" />
	<meta
		name="description"
		content="Hessam Khoobkar's portfolio website showcasing his front-end development and UI design skills. Get in touch for web development collaborations."
	/>
	<meta
		name="keywords"
		content="front-end developer, front end developer, UI designer, web development, HTML, CSS, JavaScript, responsive design, user experience, user interface, portfolio"
	/>
</svelte:head>

<div>
	<div class="fixed w-80 inset-y-0 left-0 z-10">
		<SideNav />
	</div>
	<div class="ml-80 p-8 min-h-screen max-w-[1440px] mx-auto bg-gray-900">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-weight: theme(fontWeight.medium);
		@apply bg-gray-1000;
	}

	:global(.article-content h3) {
		font-size: 2.5rem;
		line-height: 1.25em;
		font-weight: normal;
		margin-bottom: 1rem;
		color: theme(colors.sky.500);
	}

	:global(.article-content p) {
		font-size: 1rem;
		line-height: 1.5em;
		font-weight: normal;
		margin-bottom: 1rem;
	}
</style>
