<script lang="ts">
	import placeholderBg from '@/assets/images/theme-placeholder-bg.png';
	export let title: string = 'Coming soon';
	export let price: string = 'Free';
	export let image: string = placeholderBg;
</script>

<div class="w-full rounded-2xl bg-gray-800 border border-gray-600">
	<a class="w-full h-full flex flex-col p-4" href="/theme/1">
		<div class="w-full aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
			<img class="object-cover" src={image} alt={title} />
		</div>
		<div class="flex justify-between fo font-medium pt-4">
			<h3>{title}</h3>
			<span>{price}</span>
		</div>
	</a>
</div>
