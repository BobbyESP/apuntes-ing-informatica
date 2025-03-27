import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b1d4ac', 600: '#0b7c00', 900: '#093e05', 950: '#0e2c0b' };
const gray = { 100: '#f6f6f5', 200: '#edeeec', 300: '#c1c2c0', 400: '#8a8c88', 500: '#575955', 700: '#373936', 800: '#262724', 900: '#181817' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};