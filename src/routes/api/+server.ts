// src/routes/api/get-translation-slug/+server.ts
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const currentSlug = url.searchParams.get('slug');
	const targetLang = url.searchParams.get('targetLang');
	const sourceLang = targetLang === 'en' ? 'fa' : 'en';

	if (!currentSlug || !targetLang) {
		throw error(400, 'Missing slug or targetLang');
	}

	try {
		// ۱. ابتدا پست اصلی را با اسلاگ و زبان فعلی‌اش پیدا می‌کنیم
		const initialRes = await fetch(
			`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio?slug=${currentSlug}&lang=${sourceLang}&_fields=id,pll_translations`
		);
		if (!initialRes.ok) throw error(404, 'Original post not found');
		const initialData = await initialRes.json();
		const post = initialData[0];
		if (!post) throw error(404, 'Original post not found in API response');
		
		// ۲. از پلاگین Polylang (یا WPML) شناسه (ID) پست ترجمه شده را می‌گیریم
		// **نکته:** اگر از WPML استفاده می‌کنید، ممکن است به جای pll_translations از translations استفاده کنید
		const translationId = post.pll_translations?.[targetLang];
		if (!translationId) {
			throw error(404, 'Translation not found for the given language');
		}

		// ۳. حالا با استفاده از ID، اطلاعات کامل پست ترجمه‌شده (شامل اسلاگ جدید) را می‌گیریم
		const finalRes = await fetch(
			`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio/${translationId}?_fields=slug`
		);
		if (!finalRes.ok) throw error(404, 'Translated post data not found');
		const finalData = await finalRes.json();
		const translatedSlug = finalData.slug;

		// ۴. اسلاگ پیدا شده را به عنوان پاسخ برمی‌گردانیم
		return json({ slug: translatedSlug });

	} catch (e: any) {
		console.error("API Error in get-translation-slug:", e);
		throw error(e.status || 500, e.body?.message || 'Failed to resolve translation');
	}
};