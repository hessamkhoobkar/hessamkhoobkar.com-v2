<script lang="ts">
	import '../app.css';

	import SideNavWrap from '@/components/layout/SideNavWrap.svelte';
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

<!-- Todo

1. make header sticky or not

-->

<div class="bg-gray-900">
	<SideNavWrap />
	<div class="lg:ml-80 min-h-screen bg-gray-900">
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
