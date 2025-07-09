// src/routes/projects/+page.ts

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
  const lang = url.searchParams.get('lang') || 'en';

  const res = await fetch(`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio?lang=${lang}`);
  const projects = await res.json();

  return { projects };
};
