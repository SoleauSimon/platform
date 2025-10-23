import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"../../apps/web/**/*.{js,ts,jsx,tsx,mdx}",
		"../../apps/web/app/**/*.{js,ts,jsx,tsx,mdx}",
		"../../apps/web/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		zIndex: {
			1000: "1000",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
			},
			spacing: {
				"-20": "-5rem",
				6.5: "1.625rem",
				7.5: "1.875rem",
			},
			width: {
				112: "28rem",
			},
			margin: {
				"-2": "-0.5rem",
				"-4": "-10px",
				"-6": "-",
				0.75: "3px",
			},
			fontSize: {
				xxs: ["0.6875rem", "0.875rem"], // 11px
				ssm: ["0.8125rem", "1.375rem"], // 13px
				semibase: ["0.9375rem", "1.375rem"], // 15px
			},
			colors: {
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				avatar: {
					DEFAULT: "hsl(var(--avatar))",
					foreground: "hsl(var(--avatar-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				navigation: {
					DEFAULT: "hsl(var(--navigation))",
					foreground: "hsl(var(--navigation-foreground))",
					hovered: "hsl(var(--navigation-hovered))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-accent))",
					foreground: "hsl(var(--sidebar-accent-foreground))",
					hovered: "hsl(var(--sidebar-accent-hovered))",
				},
				buttonTransparent: {
					DEFAULT: "hsl(var(--button-transparent)/4%)",
				},
				system: {
					DEFAULT: "hsl(var(--navigation-system))",
					selected: "hsl(var(--selected-system))",
					hovered: "hsl(var(--selected-system)/13%)",
					color: "hsl(var(--color-system))",
				},
				buttondefault: {
					DEFAULT: "hsl(var(--button-default-bg))",
					selected: "hsl(var(--button-default-bg-hovered))",
					hovered: "hsl(var(--button-default-bg-hovered))",
					border: "hsl(var(--button-default-border-color))",
				},
				buttonEdit: {
					DEFAULT: "hsl(var(--button-edit-bg))",
					foreground: "hsl(var(--button-edit-foreground))",
				},
				buttonSuccess: {
					DEFAULT: "hsl(var(--button-success-bg))",
					foreground: "hsl(var(--button-success-foreground))",
				},
			},
			borderRadius: {},
			keyframes: {
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.3" },
				},
			},
			animation: {
				blink: "blink 1.5s infinite",
			},
		},
	},
	plugins: [],
};

export default config;
