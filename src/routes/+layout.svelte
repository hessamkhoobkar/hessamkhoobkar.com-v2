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

<SideNavWrap />
<div class="min-h-screen xl:ml-80">
	<div class="w-full max-w-screen-2xl p-4 bg-gray-900">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		@apply antialiased;
		scroll-behavior: smooth;
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-family: theme(fontFamily.sans);
		background-color: theme(colors.gray.900);
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

	:global(::-webkit-scrollbar) {
		width: 10px;
	}

	:global(::-webkit-scrollbar-track) {
		box-shadow: inset 0 0 1px #a8aaaf;
		border-radius: 0px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: #fe5b2f;
		border-radius: 0px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: #fe5b2f;
	}
</style>
