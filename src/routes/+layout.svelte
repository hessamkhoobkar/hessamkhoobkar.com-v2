<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import SideNav from '../components/layout/SideNav.svelte';

	let mousePostion = { x: 0, y: 0 };
	let bounds: any;

	onMount(() => {
		bounds = document.getElementById('pointer-layer')?.getBoundingClientRect();
	});

	function handleMousemove(event: MouseEvent) {
		mousePostion.x = event.clientX - bounds.left - 320;
		mousePostion.y = event.clientY - bounds.top - 320;
	}
</script>

<div class="relative">
	<div class="fixed w-80 inset-y-0 left-0 z-10">
		<SideNav />
	</div>
	<div
		class="ml-80 min-h-[calc(100vh_-_1rem)] rounded-tl-2xl bg-gray-900 mt-4 relative overflow-x-hidden"
		on:mousemove={handleMousemove}
	>
		<div class="fixed inset-0 top-4 left-80 rounded-tl-2xl overflow-hidden" style="z-index: 4;">
			<div id="pointer-layer" style="top: {mousePostion.y}px; left: {mousePostion.x}px;" />
		</div>
		<div class="relative p-8 max-w-[1440px] mx-auto" style="z-index: 5;">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-weight: theme(fontWeight.medium);
		@apply bg-gray-1000;
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

	@-webkit-keyframes rotating /* Safari and Chrome */ {
		0% {
			-webkit-transform: rotate(0deg) skew(0deg, 0deg);
			-o-transform: rotate(0deg) skew(0deg, 0deg);
			transform: rotate(0deg) skew(0deg, 0deg);
		}
		50% {
			-webkit-transform: rotate(180deg) skew(5deg, 5deg);
			-o-transform: rotate(180deg) skew(5deg, 5deg);
			transform: rotate(180deg) skew(5deg, 5deg);
		}
		100% {
			-webkit-transform: rotate(360deg) skew(0deg, 0deg);
			-o-transform: rotate(360deg) skew(0deg, 0deg);
			transform: rotate(360deg) skew(0deg, 0deg);
		}
	}
	@keyframes rotating {
		0% {
			-ms-transform: rotate(0deg) skew(0deg, 0deg);
			-moz-transform: rotate(0deg) skew(0deg, 0deg);
			-webkit-transform: rotate(0deg) skew(0deg, 0deg);
			-o-transform: rotate(0deg) skew(0deg, 0deg);
			transform: rotate(0deg) skew(0deg, 0deg);
		}
		50% {
			-ms-transform: rotate(180deg) skew(5deg, 5deg);
			-moz-transform: rotate(180deg) skew(5deg, 5deg);
			-webkit-transform: rotate(180deg) skew(5deg, 5deg);
			-o-transform: rotate(180deg) skew(5deg, 5deg);
			transform: rotate(180deg) skew(5deg, 5deg);
		}
		100% {
			-ms-transform: rotate(360deg) skew(0deg, 0deg);
			-moz-transform: rotate(360deg) skew(0deg, 0deg);
			-webkit-transform: rotate(360deg) skew(0deg, 0deg);
			-o-transform: rotate(360deg) skew(0deg, 0deg);
			transform: rotate(360deg) skew(0deg, 0deg);
		}
	}

	#pointer-layer {
		position: absolute;
		width: 40rem;
		height: 40rem;
		border-radius: 999999rem;
		background: rgb(14, 165, 233);
		background: linear-gradient(90deg, rgba(14, 165, 233, 1) 0%, rgba(6, 182, 212, 1) 100%);
		transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
		filter: blur(5rem);
		opacity: 0.05;
		-webkit-animation: rotating 20s linear infinite;
		-moz-animation: rotating 20s linear infinite;
		-ms-animation: rotating 20s linear infinite;
		-o-animation: rotating 20s linear infinite;
		animation: rotating 20s linear infinite;
	}
</style>
