<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;

	$: projects = data.projects || [];
	$: lang = $page.url.searchParams.get('lang') || 'en';

	// Data for the "Why Work With Me" section
	const features = [
		{
			icon: 'tailored_design',
			title: 'Tailored Design',
			faTitle: 'طراحی سفارشی',
			description:
				"I delve into your brand's unique soul and personality to create a website that is just as distinctive.",
			faDescription:
				'من در روح و شخصیت منحصر به فرد برند شما جستجو می‌کنم تا وب‌سایتی بسازم که به همان اندازه متمایز باشد.'
		},
		{
			icon: 'user_centric',
			title: 'User-Centric Approach',
			faTitle: 'رویکرد کاربر-محور',
			description:
				'With a focus on user experience, I design websites that are intuitive and easy to navigate.',
			faDescription:
				'با تمرکز بر تجربه کاربری، من وب‌سایت‌هایی را طراحی می‌کنم که استفاده از آنها آسان و شهودی باشد.'
		},
		{
			icon: 'trending_tech',
			title: 'Trending Technologies',
			faTitle: 'فناوری‌های روز',
			description:
				'I stay at the forefront of the latest design trends and technologies to offer you the most innovative solutions.',
			faDescription:
				'من در خط مقدم آخرین روندهای طراحی و فناوری‌ها باقی می‌مانم تا نوآورانه‌ترین راه‌حل‌ها را به شما ارائه دهم.'
		}
	];

	// Data for the "My Creative Workflow" section
	const workflowSteps = [
		{
			title: 'Discovery',
			faTitle: 'کشف',
			description:
				'I delve deep into understanding your brand, goals, and target audience. Through comprehensive research, I garner essential insights that inform the entire design process.',
			faDescription:
				'من به طور عمیق به درک برند، اهداف و مخاطبان شما می‌پردازم. از طریق تحقیقات جامع، به بینش‌های ضروری دست می‌یابم که کل فرآیند طراحی را هدایت می‌کند.'
		},
		{
			title: 'Design',
			faTitle: 'طراحی',
			description:
				'I begin crafting visually compelling and strategic designs. This step focuses on translating ideas into tangible visual concepts that align with your brand.',
			faDescription:
				'من شروع به ساخت طراحی‌های بصری جذاب و استراتژیک می‌کنم. این مرحله بر ترجمه ایده‌ها به مفاهیم بصری ملموس که با برند شما همخوانی دارد، تمرکز دارد.'
		},
		{
			title: 'Development',
			faTitle: 'توسعه',
			description:
				'I bring the approved designs to life with seamless functionality. This phase involves meticulous coding and integration to ensure your site is responsive and performs flawlessly across devices.',
			faDescription:
				'من طراحی‌های تأیید شده را با عملکردی بی‌نقص به واقعیت تبدیل می‌کنم. این فاز شامل کدنویسی دقیق و یکپارچه‌سازی است تا اطمینان حاصل شود که سایت شما واکنش‌گرا بوده و در تمام دستگاه‌ها بی‌عیب و نقص عمل می‌کند.'
		},
		{
			title: 'Launch',
			faTitle: 'راه‌اندازی',
			description:
				'Once the website is live, my dedication to your success continues. Beyond launch, I provide support and guidance to help you maximize your new online presence.',
			faDescription:
				'پس از راه‌اندازی وب‌سایت، تعهد من به موفقیت شما ادامه دارد. فراتر از راه‌اندازی، من پشتیبانی و راهنمایی لازم را برای کمک به شما در به حداکثر رساندن حضور آنلاین جدیدتان ارائه می‌دهم.'
		}
	];

	// Data for the "Empowering Brands Through Design" section
	const services = [
		{
			icon: 'web_design',
			title: 'Web Design',
			faTitle: 'طراحی وب',
			description: 'Aesthetic, intuitive, and user-friendly websites are at the heart of what I do.',
			faDescription: 'وب‌سایت‌های زیبا، شهودی و کاربرپسند در قلب کاری است که من انجام می‌دهم.',
			features: ['Custom Tailored-Design', 'Responsive Layouts', 'Intuitive Navigation'],
			faFeatures: ['طراحی سفارشی', 'طرح‌بندی واکنش‌گرا', 'ناوبری شهودی'],
			style: 'bg-[#282dd4] text-white',
			buttonStyle: 'bg-white text-black'
		},
		{
			icon: 'development',
			title: 'Development',
			faTitle: 'توسعه',
			description: 'Bringing designs to life with clean, efficient, and high-performing code.',
			faDescription: 'جان بخشیدن به طرح‌ها با کدی تمیز، کارآمد و با عملکرد بالا.',
			features: ['HTML, CSS, & JS Expertise', 'Cross-Browser Compatibility', 'Fast Load Times'],
			faFeatures: ['تخصص در HTML, CSS, & JS', 'سازگاری با مرورگرهای مختلف', 'زمان بارگذاری سریع'],
			style: 'bg-[#1a1a1a] text-white',
			buttonStyle: 'bg-[#282dd4] text-white'
		},
		{
			icon: 'brand_identity',
			title: 'Brand Identity',
			faTitle: 'هویت برند',
			description: 'A cohesive brand identity is essential for standing out in a crowded market.',
			faDescription: 'یک هویت برند منسجم برای برجسته شدن در بازاری شلوغ ضروری است.',
			features: ['Logo Design', 'Cohesive Color Palettes', 'Brand Guidelines'],
			faFeatures: ['طراحی لوگو', 'پالت‌های رنگی منسجم', 'راهنمای برند'],
			style: 'bg-white text-black',
			buttonStyle: 'bg-[#282dd4] text-white'
		}
	];
	export let testimonials = [
		{
		name: 'Jerome Bell',
		role: 'CEO, Vereena',
		image: 'https://placehold.co/100x100/333/fff', // Replace with actual image path
		review: 'Working with Wilson was a game-changer for our online presence. The new website exceeded our expectations in both design and functionality.',
		faReview: 'کار با ویلسون تجربه‌ای متحول‌کننده برای حضور آنلاین ما بود. وب‌سایت جدید از نظر طراحی و عملکرد فراتر از انتظارات ما بود.',
		style: 'bg-[#1a1a1a] text-white',
		stars: 5
		},
		{
		name: 'Wade Warren',
		role: 'Founder, Cresty',
		image: 'https://placehold.co/100x100/eee/000', // Replace with actual image path
		review: 'Wilson delivered a stunning website that truly reflects our brand\'s essence. He continuously involves in feedbacks. Highly recommend his expertise!',
		faReview: 'ویلسون یک وب‌سایت خیره‌کننده ارائه داد که واقعاً جوهره برند ما را منعکس می‌کند. او به طور مداوم در بازخوردها مشارکت دارد. تخصص او را به شدت توصیه می‌کنم!',
		style: 'bg-white text-black',
		stars: 5
		}
	];
</script>

<main class="overflow-x-hidden"> <!-- Prevent horizontal scroll -->
	<!-- Hero Section -->
	<section class="bg-black text-white relative">
		<div
			class="container mx-auto px-4 sm:px-6 min-h-screen flex flex-col justify-center text-center md:text-start"
            dir={lang === 'fa' ? 'rtl' : 'ltr'}
		>
			<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
				<!-- Left Text Content -->
				<div class="z-10">
					<span
						class="inline-flex items-center bg-gray-800 text-[#282dd4] text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
					>
						<svg class="w-2.5 h-2.5 text-[#282dd4] me-2" fill="currentColor" viewBox="0 0 8 8">
							<circle cx="4" cy="4" r="4" />
						</svg>
						{lang === 'fa' ? 'آماده برای کار' : 'AVAILABLE FOR WORK'}
					</span>

					<h1 class="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter">WILSON</h1>
					<h1 class="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter">BROCK©</h1>

					<p class="mt-8 mb-10 max-w-md text-base md:text-lg text-gray-300 mx-auto md:mx-0">
						{lang === 'fa'
							? 'من هنر را با فناوری پیشرفته ترکیب می کنم تا وب سایت هایی ارائه دهم که نه تنها خیره کننده به نظر می رسند بلکه نتایج را نیز به ارمغان می آورند.'
							: 'I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also drive results.'}
					</p>

					<button
						on:click={() => goto(`/contact?lang=${lang}`)}
						class="bg-[#282dd4] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-transform hover:scale-105 inline-flex items-center group"
					>
						{lang === 'fa' ? 'مشاوره رزرو کنید' : 'Schedule a consultation'}
						<span
							class="ms-2 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
							aria-hidden="true">→</span
						>
					</button>
				</div>

				<div class="relative w-full max-w-md mx-auto hidden md:block">
					<img
						src="src/static/images/OIP.webp"
						alt="Wilson Brock"
						class="w-full h-auto object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-l from-transparent to-black rtl:bg-gradient-to-r"></div>
				</div>
			</div>
		</div>
	</section>

<!-- Projects Section -->
<section class="bg-black text-white" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
    <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <!-- Header Section -->
        <div class="mb-12 sm:mb-20">
            <h2 class="text-[#282dd4] font-semibold text-sm mb-4 tracking-wide">
                ● {lang === 'fa' ? 'پروژه‌های من' : 'MY PROJECTS'}
            </h2>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
                {lang === 'fa' ? 'پورتفولیوی من' : 'My Portfolio'}
            </h1>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {#each projects as project}
                <div
                    class="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:border-gray-700 text-start"
                >
                    <!-- این div دیگر به dir="ltr" نیازی ندارد -->
                    <div class="p-4 sm:p-5 flex justify-between items-center border-b border-gray-800">
                        <h4 class="font-semibold text-gray-200 flex items-center">
                            <!-- ✅ اصلاح شده: mr-3 به me-3 تغییر کرد -->
                            <span class="text-[#282dd4] text-xs me-3">●</span>
                            {project.title.rendered}
                        </h4>
                        <span class="text-gray-500 text-sm">2023</span>
                    </div>
                    <div class="relative aspect-video bg-black group">
                        <img
                            src={project.acf?.image || '/placeholder.jpg'}
                            alt={project.title.rendered}
                            class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            loading="lazy"
                        />
                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                        ></div>
                        <!-- Button -->
                        <button
                            on:click={() => goto(`/projects/${project.slug}?lang=${lang}`)}
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#282dd4] text-white font-bold py-3 px-6 rounded-md shadow-xl hover:scale-110"
                        >
                            {lang === 'fa' ? 'مشاهده جزئیات' : 'view details'}
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Browse All Work Button -->
        <div class="mt-16 sm:mt-20">
            <button
                on:click={() => goto(`/projects?lang=${lang}`)}
                class="bg-[#282dd4] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-transform hover:scale-105"
            >
                {lang === 'fa' ? 'مرور همه کارها' : 'Browse all work'}
            </button>
        </div>
    </div>
</section>

	<!-- Why Work With Me Section -->
	<section class="bg-white text-black py-16 sm:py-24">
		<div class="container mx-auto px-4 sm:px-6">
			<!-- Section Header -->
			<div class="text-center mb-12 sm:mb-16">
				<span
					class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full"
				>
					<svg class="w-2.5 h-2.5 text-[#282dd4] me-1.5" fill="currentColor" viewBox="0 0 8 8">
						<circle cx="4" cy="4" r="4" />
					</svg>
					{lang === 'fa' ? 'چرا من را انتخاب کنید' : 'WHY CHOOSE ME'}
				</span>
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
					{lang === 'fa' ? 'چرا با من کار کنید' : 'Why Work with Me'}
				</h2>
			</div>

			<!-- Features Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
				{#each features as feature}
					<div
						class="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
					>
						<div class="flex justify-center md:justify-start">
							<div class="bg-[#e0e0ff] p-4 inline-block rounded-full">
								{#if feature.icon === 'tailored_design'}
									<svg class="w-8 h-8 text-[#282dd4]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z" /></svg>
								{:else if feature.icon === 'user_centric'}
									<svg class="w-8 h-8 text-[#282dd4]" viewBox="0 0 24 24" fill="currentColor"><path d="M12,12A4,4 0 0,0 8,8A4,4 0 0,0 4,12A4,4 0 0,0 8,16A4,4 0 0,0 12,12M12,14C10.67,14 9.42,14.34 8.28,14.94C6.46,15.86 5,17.61 5,19.5V21H19V19.5C19,17.61 17.54,15.86 15.72,14.94C14.58,14.34 13.33,14 12,14Z" /></svg>
								{:else if feature.icon === 'trending_tech'}
									<svg class="w-8 h-8 text-[#282dd4]" viewBox="0 0 24 24" fill="currentColor"><path d="M12,3L1,9L12,15L23,9L12,3M5,10.6L12,14.2L19,10.6L12,7L5,10.6Z" /></svg>
								{/if}
							</div>
						</div>
						<h3 class="text-xl font-bold text-gray-900 mt-6 mb-2 text-start">
							{lang === 'fa' ? feature.faTitle : feature.title}
						</h3>
						<p class="text-gray-600 text-start">
							{lang === 'fa' ? feature.faDescription : feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- My Creative Workflow Section -->
	<section class="bg-white text-black py-16 sm:py-24" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
		<div class="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
			<!-- Left Column -->
			<div class="text-center md:text-start">
				<span
					class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
				>
					<svg class="w-2.5 h-2.5 text-[#282dd4] me-1.5" fill="currentColor" viewBox="0 0 8 8">
						<circle cx="4" cy="4" r="4" />
					</svg>
					{lang === 'fa' ? 'فرآیند من' : 'MY PROCESS'}
				</span>
				<h2 class="text-4xl sm:text-5xl font-bold mb-6">
					{lang === 'fa' ? 'گردش کار خلاقانه من' : 'My Creative Workflow'}
				</h2>
				<button
					on:click={() => goto(`/contact?lang=${lang}`)}
					class="bg-[#282dd4] text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 inline-flex items-center group"
				>
					{lang === 'fa' ? 'مشاوره رزرو کنید' : 'Schedule a consultation'}
				</button>
			</div>

			<!-- Right Column -->
			<div class="space-y-8 text-start">
				{#each workflowSteps as step, i}
					<div class="border-b border-gray-200 pb-6 last:border-b-0">
						<h3 class="text-xl sm:text-2xl font-bold mb-2">
							<span class="text-[#282dd4]">{i + 1}.</span> {lang === 'fa' ? step.faTitle : step.title}
						</h3>
						<p class="text-gray-600">
							{lang === 'fa' ? step.faDescription : step.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

    <!-- Empowering Brands Section -->
    <section class="bg-black text-white py-16 sm:py-24" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div class="container mx-auto px-4 sm:px-6">
            <!-- Section Header -->
            <div class="text-center mb-12 sm:mb-16">
                <span class="inline-flex items-center bg-gray-800 text-[#282dd4] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                    <svg class="w-2.5 h-2.5 text-[#282dd4] me-1.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                    {lang === 'fa' ? 'آنچه من بر آن تمرکز دارم' : 'WHAT I FOCUS ON'}
                </span>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
                    {lang === 'fa' ? 'توانمندسازی برندها از طریق طراحی' : 'Empowering Brands Through Design'}
                </h2>
            </div>
            <!-- Services Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start">
                {#each services as service}
                    <div class="p-6 sm:p-8 rounded-2xl {service.style} flex flex-col">
                        <div class="w-16 h-16 rounded-lg flex items-center justify-center {service.icon === 'web_design' ? 'bg-white' : service.icon === 'brand_identity' ? 'bg-gray-200' : 'bg-gray-700'}">
							{#if service.icon === 'web_design'}<svg class="w-8 h-8 text-[#282dd4]" viewBox="0 0 24 24" fill="currentColor"><path d="M19,4H5A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4M11,16H9V14H11V16M15,16H13V14H15V16M19,10H5V7H19V10Z" /></svg>
							{:else if service.icon === 'development'}<svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41,8.59L12,13.17L16.59,8.59L18,10L12,16L6,10L7.41,8.59Z" /></svg>
							{:else if service.icon === 'brand_identity'}<svg class="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>
							{/if}
						</div>
                        <div class="flex-grow">
                            <h3 class="text-2xl font-bold mt-6 mb-2">{lang === 'fa' ? service.faTitle : service.title}</h3>
                            <p class="opacity-80 mb-6">{lang === 'fa' ? service.faDescription : service.description}</p>
                            <ul class="space-y-3 mb-8">
                                {#each lang === 'fa' ? service.faFeatures : service.features as feature}
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 me-3 {service.style.includes('text-white') ? 'text-white' : 'text-black'}" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10,18A8,8 0 1,0 2,10A8,8 0 0,0 10,18M13.71,8.71L9.5,12.93L7.29,10.71A1,1 0 0,0 5.88,12.12L9.5,15.75L15.12,10.12A1,1 0 0,0 13.71,8.71Z" clip-rule="evenodd" /></svg>
                                        {feature}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                        <button class="w-full py-3 font-bold rounded-full transition-transform hover:scale-105 {service.buttonStyle} mt-auto">
                            {lang === 'fa' ? 'مشاوره رزرو کنید' : 'Schedule a consultation'}
                        </button>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="bg-[#292929] text-white py-16 sm:py-24" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div class="container mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div class="p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] flex flex-col justify-between text-start">
                    <div>
                        <span class="text-[#282dd4] font-bold text-sm">WILSON BROCK</span>
                        <h3 class="text-2xl sm:text-3xl font-bold mt-4 mb-6">{lang === 'fa' ? 'داستان‌های موفقیت من' : 'My Success Stories'}</h3>
                    </div>
                    <p class="opacity-70 mt-auto">
                        {lang === 'fa' ? 'من با افتخار در همکاری با مشتریان متنوعی، از استارتاپ‌های بلندپرواز تا شرکت‌های معتبر، همکاری می‌کنم.' : 'I take pride in collaborating with a diverse range of clients, from ambitious startups to established enterprises.'}
                    </p>
                </div>
                {#each testimonials as testimonial}
                    <div class="p-6 sm:p-8 rounded-2xl {testimonial.style} flex flex-col h-full text-start">
                        <div class="flex mb-4">
                            {#each Array(testimonial.stars) as _}<svg class="w-5 h-5 text-[#282dd4]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.365-2.446a1 1 0 00-1.176 0l-3.365 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.35 9.384c-.783-.57-.38-1.81.588-1.81h4.161a1 1 0 00.95-.69L9.049 2.927z" /></svg>{/each}
                        </div>
                        <p class="mb-6 flex-grow">"{lang === 'fa' ? testimonial.faReview : testimonial.review}"</p>
                        <div class="flex items-center mt-auto">
                            <div>
                                <p class="font-bold">{testimonial.name}</p>
                                <p class="text-sm opacity-70">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- CALL TO ACTION (HAVE PROJECT) SECTION -->
    <section class="bg-[#1a1a1a]  py-16 sm:py-24">
        <div class="container max-w-4xl mx-auto px-4 sm:px-6">
            <div class="bg-black rounded-2xl p-8 sm:p-12 text-center">
                <span class="inline-flex items-center bg-gray-800 text-[#282dd4] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                    <svg class="w-2.5 h-2.5 text-[#282dd4] me-1.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" /></svg>
                    {lang === 'fa' ? 'پروژه‌ای در ذهن دارید؟' : 'HAVE PROJECT IN MIND?'}
                </span>
                <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {lang === 'fa' ? 'بیایید ایده‌های شما را به واقعیت تبدیل کنیم' : "Let's Turn your Ideas into Reality"}
                </h2>
                <a href="mailto:hello@wilsonbrock.com" class="inline-flex items-center text-lg text-white mt-8 group">
                    <svg class="w-6 h-6 me-3 transform transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    hello@wilsonbrock.com
                </a>
            </div>
        </div>
    </section>
</main>