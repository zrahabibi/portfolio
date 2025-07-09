import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = { kit: { adapter: adapter() } };

export default config;

// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // مسیر پیش‌فرض خروجی
            pages: 'build',
            assets: 'build',
            // این گزینه برای SPAها در GitHub Pages بسیار مهم است
            fallback: '404.html',
            precompress: false,
            strict: true
        })
    }
};

export default config;
