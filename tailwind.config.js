/** @type {import('tailwindcss').Config} */

const daisy = require("daisyui");
const tailwindTypography = require("@tailwindcss/typography");
const plugin = require("tailwindcss/plugin");

const childrenSupport = ({ addVariant }) => {
	addVariant("child", "& > *");
	addVariant("child-hover", "& > *:hover");
};

const extendedTailwind = plugin(function ({ addComponents }) {
	addComponents({
		".axis-center": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		".test": {
			border: "1px solid red !important",
		},
	});
});

module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gray: {
					100: "#EBF1F5",
					200: "#D9E3EA",
					300: "#C5D2DC",
					400: "#9BA9B4",
					500: "#707D86",
					600: "#55595F",
					700: "#33363A",
					800: "#25282C",
					900: "#151719",
				},
				
			},
			spacing: {
				"9/16": "56.25%",
				"3/4": "75%",
				"1/1": "100%",
			},
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				"architects-daughter": [
					"var(--font-architects-daughter)",
					"sans-serif",
				],
			},
			fontSize: {
				xs: "0.75rem",
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "2rem",
				"4xl": "2.5rem",
				"5xl": "3.25rem",
				"6xl": "4rem",
			},
			inset: {
				full: "100%",
			},
			letterSpacing: {
				tighter: "-0.02em",
				tight: "-0.01em",
				normal: "0",
				wide: "0.01em",
				wider: "0.02em",
				widest: "0.4em",
			},
			minWidth: {
				10: "2.5rem",
			},
			scale: {
				98: ".98",
			},
		},
	},
    // theme: {
    //     extend: {
    //         keyframes: {
    //             "fade-in": {
    //                 from: { opacity: 0 },
    //                 to: { opacity: 1 },
    //             },
    //         },
    //         animation: {
    //             "fade-in": "fade-in 0.5s ease-in-out",
    //         },
    //     },
    //     screen: {
    //         sm: 425,
    //         md: 768,
    //         lg: 1024,
    //         xl: 1280,
    //         "2xl": 1440,
    //     },
    //     fontFamily: {
    //         satoshi: "Satoshi sans-serif",
    //     },
    // },
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")[
						"[data-theme=corporate]"
					],
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
	},
	plugins: [
		tailwindTypography,
		extendedTailwind,
		daisy,
		childrenSupport,
		require("@tailwindcss/forms"),
	],
};
