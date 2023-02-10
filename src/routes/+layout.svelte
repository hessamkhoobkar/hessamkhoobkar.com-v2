<script>
	import '../app.css';
	import SideNav from '../components/layout/SideNav.svelte';
</script>

<div class="flex flex-row">
	<div class="w-80">
		<SideNav />
	</div>
	<div class="flex-grow max-w-[1440px] mx-auto">
		<slot />
	</div>
</div>
