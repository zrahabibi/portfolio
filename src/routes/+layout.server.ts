// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, cookies }) => {

	const lang = url.searchParams.get('lang') || cookies.get('lang') || 'en';

	cookies.set('lang', lang, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365
	});

	return { lang };
};