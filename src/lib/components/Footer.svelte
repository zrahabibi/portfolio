<script lang="ts">
	import { page } from '$app/stores';

	const navLinks = [
		{ href: '/', text: 'Home', faText: 'خانه' },
		{ href: '/about', text: 'About', faText: 'درباره من' },
		{ href: '/projects', text: 'Projects', faText: 'پروژه‌ها' },
		{ href: '/contact', text: 'Contact', faText: 'تماس' }
	];

	let lang: 'en' | 'fa' = 'en';
	$: lang = $page.url.searchParams.get('lang') === 'fa' ? 'fa' : 'en';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-black text-gray-400 border-t border-gray-800">
	<div class="container mx-auto px-6 py-12">
		<div class="flex flex-col items-center justify-center gap-y-8">
			<nav class="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8">
				{#each navLinks as link}
					<a
						href={`${link.href}?lang=${lang}`}
						class="hover:text-white transition-colors duration-300"
					>
						{lang === 'fa' ? link.faText : link.text}
					</a>
				{/each}
			</nav>

			<!-- Social Media Links -->
			<div class="flex items-center gap-x-6">
				<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="hover:text-white transition-colors">
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>
				</a>
				<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-white transition-colors">
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
				</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="hover:text-white transition-colors">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.214 3.793 4.654-.666.18-1.371.226-2.093.083.626 1.954 2.439 3.378 4.583 3.419-1.728 1.348-3.893 2.15-6.252 2.15-.407 0-.808-.024-1.207-.07 2.22 1.424 4.857 2.26 7.699 2.26 9.239 0 14.29-7.653 14.29-14.29 0-.217-.005-.432-.014-.646.98-.704 1.83-1.582 2.51-2.61z"/></svg>
                </a>
			</div>

			<!-- Copyright Notice -->
			<p class="text-sm text-gray-500 text-center">
				© {currentYear} My Portfolio. All Rights Reserved.
			</p>
		</div>
	</div>
</footer>