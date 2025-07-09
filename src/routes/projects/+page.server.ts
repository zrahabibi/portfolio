// src/routes/projects/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    try {
        const { lang } = await parent();

        const res = await fetch(`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio?_embed&lang=${lang}`);

        if (!res.ok) {
            return { projects: [], lang, error: 'Failed to fetch projects' };
        }

        const projects = await res.json();

        return { projects, lang };

    } catch (error) {
        console.error('Error loading projects:', error);
        return { projects: [], lang: 'en', error: 'An unexpected error occurred' };
    }
};
