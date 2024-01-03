<script lang="ts">
	export let variant: 'primary' | 'surface' = 'primary';
	let variantStyle: string;

	$: switch (true) {
		case variant === 'primary':
			variantStyle = 'bg-gradient-to-tr from-primary-600 to-tertiary-500 text-gray-900';
			break;

		case variant === 'surface':
			variantStyle = 'bg-gray-800 text-white';
			break;

		default:
			variantStyle = '';
			break;
	}
</script>

<div class="w-full max-w-[1440px] mx-auto rounded-2xl mt-6 xl:h-[32rem] font-medium {variantStyle}">
	<slot />
</div>
