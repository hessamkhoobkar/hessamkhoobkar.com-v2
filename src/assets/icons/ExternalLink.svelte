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
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
	/>
</svg>
