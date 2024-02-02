<script lang="ts">
	export let label: string;
	export let icon: string;
</script>

<div
	class="flex items-center gap-2 text-sm font-bold p-4 py-2 rounded-full bg-gray-500 bg-opacity-30 text-gray-100"
>
	<img src={icon} alt={label} class="max-w-4 max-h-4" />
	{label}
</div>
