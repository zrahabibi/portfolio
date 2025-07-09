<!-- src/lib/components/LanguageSwitcher.svelte -->
<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	function changeLang(lang: string) {
		const url = new URL($page.url);
		url.searchParams.set('lang', lang);

		goto(url, { invalidateAll: true });
	}

	$: currentLang = $page.data.lang || 'en';
</script>

<div class="flex items-center border-l ml-4 pl-4 space-x-2 rtl:border-l-0 rtl:border-r rtl:ml-0 rtl:mr-4 rtl:pl-0 rtl:pr-4">
	<button
		on:click={() => changeLang('en')}
		class="bg-[#ffffff] text-[#000000] rounded-full text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#444444] transition-all duration-300 transform hover:scale-105"
		class:font-bold={currentLang === 'en'}
	>
		EN
	</button>
	<button
		on:click={() => changeLang('fa')}
		class="bg-[#ffffff] text-[#000000] rounded-full text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#444444]  transition-all duration-300 transform hover:scale-105"
		class:font-bold={currentLang === 'fa'}
	>
		فا
	</button>
</div>