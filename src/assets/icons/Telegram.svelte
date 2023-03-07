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
		d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
