<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;

	const project = data.project;
	const lang = data.lang || 'en';
	const isFA = lang === 'fa';

	const backToProjectsURL = `/projects?lang=${lang}`;
</script>

{#if !project}
	<div class="flex items-center justify-center min-h-[50vh]">
		<p class="text-center text-red-500 text-lg font-semibold">
			{isFA ? 'پروژه مورد نظر پیدا نشد.' : 'Project not found.'}
		</p>
	</div>
{:else}
	<div class="bg-white min-h-screen">
		<div class="container mx-auto max-w-10xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
			<article
				class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
				dir={isFA ? 'rtl' : 'ltr'}
			>
        <div class="order-last md:order-none">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 text-start">
            {project.title.rendered}
          </h1>

					<p class="text-lg text-gray-600 mb-8 leading-relaxed text-start">
						{project.acf.description || (isFA ? 'توضیحات موجود نیست.' : 'No description available.')}
					</p>

					<div class="space-y-4 text-start mb-10">
						<div class="flex">
							<strong class="font-semibold text-gray-800 w-32 shrink-0">
								{isFA ? 'تکنولوژی‌ها:' : 'Technologies:'}
							</strong>
							<span class="text-gray-600">
								{project.acf.technologies || (isFA ? 'مشخص نشده' : 'Not specified')}
							</span>
						</div>
					</div>

					<div class="text-start">
						<button
							on:click={() => goto(backToProjectsURL)}
							class="inline-flex items-center gap-x-2 bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 group"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{isFA ? 'بازگشت به پروژه‌ها' : 'Back to Projects'}</span>
						</button>
					</div>
				</div>

				<div class="w-full order-first md:order-none">
					<img
						src={project.acf.image}
						alt={project.title.rendered}
						class="w-full h-auto object-cover rounded-xl shadow-2xl"
					/>
				</div>
			</article>
		</div>
	</div>
{/if}

<svelte:head>
	{#if project}
		<title>{project.title.rendered}</title>
		<meta name="description" content={project.acf.description || ''} />
	{/if}
</svelte:head>