<script lang="ts">
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-weight: theme(fontWeight.medium);
		@apply bg-gray-1000;
	}
</style>
