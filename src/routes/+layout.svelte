<script lang="ts">
	import '../app.css';
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

<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-weight: theme(fontWeight.medium);
		@apply bg-gray-1000;
	}
</style>
