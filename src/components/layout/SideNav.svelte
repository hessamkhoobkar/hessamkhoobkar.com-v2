<script>
	import LogoCombo from '../../assets/images/LogoCombo.svelte';
</script>

<div class="nav-bg w-80 h-screen p-4 pt-8 flex flex-col">
	<!-- <img src={LogoCombo} alt="hessam khoobkar's website logo" class="mb-12 h-12" /> -->
	<LogoCombo class="mb-12" />
	<div class="flex-grow">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit repellat laudantium
			quaerat rem dolores in reiciendis quos delectus accusantium doloribus voluptatum, quasi veniam
			nobis quod reprehenderit nesciunt eius dolorem.
		</p>
	</div>

	<div class="w-full h-64 bg-gray-900 rounded-2xl p-4">
		<p>user card</p>
	</div>
	<!-- Head Logo -->
	<!-- Nav links -->
	<!-- Footer Card -->
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
