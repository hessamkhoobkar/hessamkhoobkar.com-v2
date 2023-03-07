<script lang="ts">
	import LogoCombo from '../../assets/images/LogoCombo.svelte';
	import Navigation from '../sidenav/Navigation.svelte';
	import UserCard from '../sidenav/UserCard.svelte';
</script>

<div class="nav-bg w-80 h-screen p-4 pt-8 flex flex-col">
	<LogoCombo class="mb-12" />
	<div class="flex-grow">
		<Navigation />
	</div>
	<UserCard />
</div>

<style>
	.nav-bg {
		background: linear-gradient(
				0deg,
				rgba(13, 18, 29, 1) 0%,
				rgba(13, 18, 29, 1) 65%,
				rgba(13, 18, 29, 0) 100%
			),
			linear-gradient(
				220deg,
				rgba(13, 18, 29, 0) 2.5%,
				rgba(12, 74, 110, 0.25) 17.5%,
				rgba(13, 18, 29, 0) 32.5%
			),
			#0d121d;
	}
</style>
