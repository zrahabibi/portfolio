<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	 
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	$: if (browser) {
		document.documentElement.dir = data.lang === 'fa' ? 'rtl' : 'ltr';
	}
</script>

<div class="min-h-screen bg-[white] flex flex-col bg-[gray-100]">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
