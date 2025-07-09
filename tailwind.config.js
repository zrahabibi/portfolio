/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {fontFamily: {
      // Add Vazirmatn as the default 'sans' font
      sans: ['Vazirmatn', ...defaultTheme.fontFamily.sans],
    },
  },
  },
  plugins: [forms, typography],
};
