export async function load({ params, fetch }) {
    const res = await fetch(`http://localhost/portfolio-cms/wordpress-6.8.1/wp-json/wp/v2/portfolio?slug=${params.slug}`);
  
    if (!res.ok) {
      return {
        status: res.status,
        error: new Error(`Could not load project: ${params.slug}`)
      };
    }
  
    const data = await res.json();
    if (data.length === 0) {
      return {
        status: 404,
        error: new Error('Project not found')
      };
    }
  
    return {
      project: data[0]
    };
  }
  