<script lang="ts">
	let klass: string | null = null;
	export { klass as class };
	export let size: string = '24';
</script>

<svg
	width={size}
	height={size}
	class={klass}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M18 6L6 18M6 6L18 18"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
