/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#B7E08A", // Primary (Green)
					2: "#CFECAB",
					3: "#E0F5BD",
				},
				grey: {
					DEFAULT: "#6F6D7C", // Secondary Grey
					2: "#9BA9B9",
					3: "#BCC0C4",
				},
				"light-grey": {
					DEFAULT: "#F1F1F1", // Light background grey (iGrey)
					2: "#F6F6F6",
					3: "#F9F9F9",
				},
				accent: "#E54124", // Accent / Support Red
				black: {
					DEFAULT: "#0B0F0E", // Main text/background black
					2: "#102322",
					3: "#313736",
				},
			},
			fontFamily: {
				sans: ["var(--font-sora)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
