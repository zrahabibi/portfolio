<script lang="ts">
	import { page } from '$app/stores';

	let name = '';
	let email = '';
	let message = '';
	let success = '';
	let error = '';
	let loading = false;

	// --- Language Detection and Translations ---
	let lang: 'en' | 'fa' = 'en';
	$: lang = $page.url.searchParams.get('lang') === 'fa' ? 'fa' : 'en';

	const t = {
		en: {
			title: 'Contact Me',
			namePlaceholder: 'Your Name',
			emailPlaceholder: 'Your Email',
			messagePlaceholder: 'Your Message',
			send: 'Send Message',
			sending: 'Sending...'
		},
		fa: {
			title: 'تماس با من',
			namePlaceholder: 'نام شما',
			emailPlaceholder: 'ایمیل شما',
			messagePlaceholder: 'پیام شما',
			send: 'ارسال پیام',
			sending: 'در حال ارسال...'
		}
	};

	$: translations = t[lang];

	async function handleSubmit(event: Event) {
		event.preventDefault();
		success = '';
		error = '';
		loading = true;

		try {
			// Using the proxy configured in svelte.config.js
			const res = await fetch('/api/contact-form/v1/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			const data = await res.json();
			if (!res.ok) throw new Error(data.message || 'Something went wrong');

			success = data.message;
			name = '';
			email = '';
			message = '';
		} catch (err: any) {
			error = err.message;
		} finally {
			loading = false;
		}
	}
</script>

<div class="bg-black text-white min-h-screen flex items-center justify-center p-6" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
	<div class="w-full max-w-lg">
		<h1 class="text-4xl md:text-5xl font-bold mb-8 text-center">{translations.title}</h1>

		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<!-- Name Input -->
			<div>
				<label for="name" class="sr-only">{translations.namePlaceholder}</label>
				<input
					id="name"
					bind:value={name}
					required
					placeholder={translations.namePlaceholder}
					class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#282dd4] focus:border-transparent transition {lang === 'en' ? 'text-left' : 'text-right'}"
				/>
			</div>

			<!-- Email Input -->
			<div>
				<label for="email" class="sr-only">{translations.emailPlaceholder}</label>
				<input
					id="email"
					bind:value={email}
					type="email"
					required
					placeholder={translations.emailPlaceholder}
					class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#282dd4] focus:border-transparent transition {lang === 'en' ? 'text-left' : 'text-right'}"
				/>
			</div>

			<!-- Message Textarea -->
			<div>
				<label for="message" class="sr-only">{translations.messagePlaceholder}</label>
				<textarea
					id="message"
					bind:value={message}
					required
					placeholder={translations.messagePlaceholder}
					rows="6"
					class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#282dd4] focus:border-transparent transition resize-none {lang === 'en' ? 'text-left' : 'text-right'}"
				></textarea>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				class="w-full bg-[#282dd4] text-white font-bold py-3 px-6 rounded-lg transition hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-wait"
				disabled={loading}
			>
				{loading ? translations.sending : translations.send}
			</button>

			<!-- Success and Error Messages -->
			{#if success}
				<div
					class="p-4 mt-4 text-sm text-green-400 bg-green-900/50 rounded-lg border border-green-800"
					role="alert"
				>
					{success}
				</div>
			{/if}
			{#if error}
				<div
					class="p-4 mt-4 text-sm text-red-400 bg-red-900/50 rounded-lg border border-red-800"
					role="alert"
				>
					{error}
				</div>
			{/if}
		</form>
	</div>
</div>