<script lang="ts">
	import Close from '@/assets/icons/Close.svelte';
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div
	class="fixed inset-0 w-screen h-screen bg-gray-1000 bg-opacity-70 cursor-pointer"
	on:click={close}
	on:keydown={handle_keydown}
/>

<div
	class="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 w-[calc(100vw - 4rem)] max-w-lg max-h-[calc(100vh - 4rem)] bg-gray-850 rounded-2xl p-8"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<!-- svelte-ignore a11y-autofocus -->
	<button
		class="absolute -top-12 right-0 flex justify-center items-center rounded-2xl px-4 py-2 bg-gray-850 text-white border border-transparent hover:text-red-500 hover:border-red-500 focus:outline-none focus:text-red-500 focus:border-red-500 transition-colors duration-200 ease-in-out"
		autofocus
		on:click={close}
	>
		<Close size="20" class="mr-1" />
		<span> Close </span>
	</button>
	<slot name="header" />
	<hr />
	<slot />
</div>
