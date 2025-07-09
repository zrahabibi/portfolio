// src/routes/projects/[slug]/+page.server.ts
export const csr = false;

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { lang } = await parent();

	const res = await fetch(`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio?slug=${params.slug}&_embed&lang=${lang}`);

	if (!res.ok) {
		throw error(res.status, 'Failed to fetch project');
	}

	const data = await res.json();
	const project = data[0];

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project,
		lang, 
		metadata: {
			title: `${project.title.rendered} | Portfolio`,
			description: project.acf.description
		}
	};
};