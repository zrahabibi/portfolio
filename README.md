AI-Powered Headless Portfolio Builder


A high-performance, headless portfolio builder using WordPress as the CMS and a lightning-fast SvelteKit frontend. Features AI-powered content generation, full i18n & RTL support, and a modern, decoupled architecture.


<p align="center">
<img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte"/>
<img src="https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" alt="WordPress"/>
<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
<img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
</p>


![alt text](./assets/projectScreenshot.png)

🚀 About The Project

This project demonstrates a modern approach to web development by decoupling the content management system from the presentation layer. Using WordPress as a headless CMS provides a familiar, user-friendly interface for content creators, while the SvelteKit frontend delivers a superior, high-performance experience for end-users.

This architecture solves several key challenges:

Performance: The statically-generated frontend is incredibly fast, eliminating backend rendering bottlenecks.

Flexibility: The frontend can be rebuilt with any technology without affecting the content, making the system future-proof.

Security: The attack surface is minimized by separating the public-facing application from the WordPress admin and database.

Developer Experience: It combines the world's most popular CMS with a modern JavaScript framework, leveraging the best of both worlds.

______________________________________________________________________________________________

🎯 Key Features

Headless Architecture: Content managed in WordPress, served via its REST API.

Blazing-Fast Frontend: Built with SvelteKit for an optimal, snappy user experience.

AI-Powered Content Assistance: Integrated AI helps generate project descriptions directly within the WordPress editor.

Multi-Language & RTL Support: Fully functional in English and Persian (Farsi) with a seamless language switcher and correct Right-to-Left (RTL) styling.

Mobile-First Responsive Design: Looks and functions beautifully on all devices.

Automated Backups: A nightly cron job automatically backs up the MySQL database.

Custom WordPress Development: Includes a custom child theme and a plugin for shortcode functionality.

______________________________________________________________________________________________

🛠️ Tech Stack


Frontend:

![alt text](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white)
SvelteKit

![alt text](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
Tailwind CSS

![alt text](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
Bootstrap

![alt text](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
JavaScript (ES6+)


Backend:

![alt text](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
PHP

![alt text](https://img.shields.io/badge/WordPress-21759B?style=flat-square&logo=wordpress&logoColor=white)
WordPress (as Headless CMS)

![alt text](https://img.shields.io/badge/ACF_Plugin-_?style=flat-square&color=black&logo=wordpress)
Advanced Custom Fields (ACF) Plugin

![alt text](https://img.shields.io/badge/MySQL-005C84?style=flat-square&logo=mysql&logoColor=white)
MySQL


DevOps & Tooling:

![alt text](https://img.shields.io/badge/Apache-D22128?style=flat-square&logo=apache&logoColor=white)
Apache (via XAMPP)

![alt text](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
Git &
![alt text](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)
GitHub

![alt text](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)
VSCode

![alt text](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
Figma

Cron Job for automated tasks.

______________________________________________________________________________________________

⚙️ Getting Started

To get a local copy up and running, follow these steps.

Prerequisites

XAMPP: For a local Apache/MySQL environment. Download XAMPP

Git: For version control. Install Git

Node.js: JavaScript runtime (v16 or higher). Install Node.js

Installation

Clone the Repository

Generated sh
git clone https://github.com/zrahabibi/portfolio.git
cd portfolio

______________________________________________________________________________________________

Setup the Backend (WordPress)

<details>
<summary>Click to expand WordPress setup instructions</summary>


Start Apache and MySQL from the XAMPP control panel.

Create a new MySQL database named portfolio-cms using phpMyAdmin (http://localhost/phpmyadmin).

Move the backend/wordpress folder to your XAMPP htdocs directory.

Navigate to http://localhost/portfolio-cms/wordpress-6.8.1 and follow the WordPress installation steps.

Database Name: portfolio-cms

Username: root

Password: (leave blank by default)

Log in to the WordPress admin panel (http://localhost/portfolio-cms/wordpress-6.8.1/wp-admin).

Install and activate the Advanced Custom Fields (ACF) plugin.

Activate the "Hello Elementor child" theme from Appearance > Themes.

Navigate to the "Projects" custom post type and add a few sample projects to populate the API.

</details>

______________________________________________________________________________________________

Setup the Frontend (SvelteKit)

<details>
<summary>Click to expand SvelteKit setup instructions</summary>


Navigate to the frontend directory:

Generated sh
cd frontend
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Sh
IGNORE_WHEN_COPYING_END

Install NPM packages:

Generated sh
npm install
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Sh
IGNORE_WHEN_COPYING_END

Create an environment file from the example:

Generated sh
cp .env.example .env
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Sh
IGNORE_WHEN_COPYING_END

Open the .env file and set the WordPress API endpoint:

Generated env
# .env
VITE_WP_API_URL="http://localhost/wordpress/wp-json/wp/v2"
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Env
IGNORE_WHEN_COPYING_END

Start the development server:

Generated sh
npm run dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Sh
IGNORE_WHEN_COPYING_END

Open your browser and visit http://localhost:5173 to see your portfolio!

</details>
______________________________________________________________________________________________


🏗️ Architecture & Core Concepts

This project is a practical demonstration of several key modern web development concepts.

Headless CMS: By using the WordPress REST API, the backend is purely a data source. This is achieved by creating a "Projects" Custom Post Type and defining its data structure with the Advanced Custom Fields (ACF) plugin. All content is exposed as structured JSON.

Frontend Data Fetching: The SvelteKit frontend consumes the REST API endpoints. It uses fetch requests on page/component load to pull in project data, ensuring the content is always up-to-date with the CMS.

Internationalization (i18n): Multi-language support is implemented by creating duplicate sets of ACF fields (e.g., project_description_en and project_description_fa). The SvelteKit frontend includes a language switcher that dynamically fetches and displays content from the appropriate fields.

RTL Styling: Custom CSS is applied conditionally when the Persian (Farsi) language is selected, ensuring all layouts, text-alignments, and element directions correctly adapt to a Right-to-Left reading order.

Automation: A local cron job is configured to execute a PHP script nightly, which uses mysqldump to create a secure backup of the WordPress database, demonstrating a key DevOps practice.

### Project Architecture Flow

```mermaid
graph TD;
    subgraph "User Interaction"
        User[👤 User visits the website] --> SvelteKit;
    end

    subgraph "Frontend (SvelteKit)"
        SvelteKit[⚡ SvelteKit Frontend] -->|1. Fetches data| API;
        API{🌐 WordPress REST API};
        SvelteKit -->|4. Renders content| RenderedPage[🖼️ Displays the portfolio];
    end

    subgraph "Backend (WordPress CMS)"
        API -->|2. Requests content| WordPress;
        WordPress[🐘 WordPress Backend] -->|3. Queries database| DB[(🗄️ MySQL Database)];
        Admin[👩‍💻 Admin manages content] --> WordPress;
        AI[🤖 AI Content Assistant] -->|Helps admin| Admin;
    end

    style User fill:#D6EAF8,stroke:#333,stroke-width:2px
    style RenderedPage fill:#D5F5E3,stroke:#333,stroke-width:2px
```
______________________________________________________________________________________________

🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

______________________________________________________________________________________________

📄 License

Distributed under the MIT License. See LICENSE.txt for more information.

______________________________________________________________________________________________

📬 Contact

Zahra Habibi - izarahabibi01@gmail.com

Project Link: https://github.com/zrahabibi/portfolio

🙏 Acknowledgments

SvelteKit Documentation

WordPress REST API Handbook

Headless WordPress Community

Rodney Lab Tutorials