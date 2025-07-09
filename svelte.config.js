// svelte.config.js - این باید تنها محتوای این فایل باشد

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// این متغیر به ما کمک می‌کند که مسیر پایه را برای محیط توسعه و پروداکشن به درستی تنظیم کنیم
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // از adapter-static برای ساخت سایت استاتیک استفاده می‌کنیم
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),

        // این بخش برای دیپلوی روی GitHub Pages حیاتی است
        // به SvelteKit می‌گوید که سایت در یک زیرپوشه به نام /portfolio قرار خواهد گرفت
        paths: {
            base: dev ? '' : '/portfolio'
        }
    }
};

export default config;