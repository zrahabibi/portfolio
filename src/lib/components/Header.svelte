<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	let lang = 'en';
	$: lang = $page.url.searchParams.get('lang') || 'en';

	// State for controlling the mobile menu
	let isMenuOpen = false;

	const navLinks = [
		{ href: '/', text: 'Home', faText: 'خانه' },
		{ href: '/about',text: 'About', faText: 'درباره من' },
		{ href: '/projects', text: 'Projects', faText: 'پروژه ها' },
		// { href: '/services', text: 'Services', faText: 'خدمات' }, // Assuming you might have this page
	];

	// Function to dynamically check for the active link
	$: isActive = (href: string) => $page.url.pathname === href;

	// Close the menu when a navigation event occurs
	const unsubscribe = page.subscribe(() => {
		isMenuOpen = false;
	});

	$: {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
		}
	}

	onDestroy(() => {
		unsubscribe();
		if (typeof window !== 'undefined') {
			document.body.style.overflow = 'auto'; 
		}
	});
</script>

<header class="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm shadow-lg">
	<div class="container mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
		<!-- Portfolio Title/Logo -->
		<a href={`/?lang=${lang}`} class="text-3xl font-bold text-white hover:text-blue-400 transition-colors">
			{lang === 'fa' ? 'پورتفولیوی من ' : 'MY PORTFOLIO'}
		</a>

		<!-- Desktop Navigation (hidden on mobile) -->
		<nav class="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
			{#each navLinks as link}
				<a
					href={`${link.href}?lang=${lang}`}
					class="text-sm font-medium transition-colors hover:text-blue-400"
					class:text-white={isActive(link.href)}
					class:text-gray-400={!isActive(link.href)}
				>
					{lang === 'fa' ? link.faText : link.text}
				</a>
			{/each}
			<button
				on:click={() => goto(`/contact?lang=${lang}`)}
				class="bg-blue-600 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
			>
				{lang === 'fa' ? 'تماس با من' : 'Contact Me'}
			</button>
			<LanguageSwitcher />
		</nav>

		<!-- Mobile Menu Button (Hamburger Icon) - only visible on mobile -->
		<div class="md:hidden">
			<button
				on:click={() => (isMenuOpen = !isMenuOpen)}
				aria-label="Toggle menu"
				class="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				{#if isMenuOpen}
					<!-- Close (X) Icon -->
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<!-- Hamburger Icon -->
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</header>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-40 bg-black bg-opacity-95 md:hidden"
		dir={lang === 'fa' ? 'rtl' : 'ltr'}
	>
		<nav class="container mx-auto h-full flex flex-col items-center justify-center space-y-8">
			{#each navLinks as link}
				<a
					href={`${link.href}?lang=${lang}`}
					class="text-2xl font-semibold transition-colors hover:text-blue-400"
					class:text-white={isActive(link.href)}
					class:text-gray-400={!isActive(link.href)}
				>
					{lang === 'fa' ? link.faText : link.text}
				</a>
			{/each}
			<button
				on:click={() => goto(`/contact?lang=${lang}`)}
				class="bg-blue-600 text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
			>
				{lang === 'fa' ? 'تماس با من' : 'Contact Me'}
			</button>
			<div class="absolute bottom-10">
				<LanguageSwitcher />
			</div>
		</nav>
	</div>
{/if}