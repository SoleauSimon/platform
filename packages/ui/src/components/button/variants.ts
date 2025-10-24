import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"igap-1 flex items-center whitespace-nowrap cursor-pointer select-none touch-manipulation font-medium",
	{
		variants: {
			variant: {
				default:
					"border border-solid border-buttondefault-border bg-buttondefault hover:bg-buttondefault-hovered",
				ghostDefault:
					"border-none bg-[#f4f5f7] text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-all duration-200",
				primary: "bg-primary !text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive !text-destructive-foreground hover:bg-destructive/90",
				ghostDestructive: "text-destructive hover:bg-destructive/25",
				ghost:
					"text-accent-foreground hover:bg-accent/25 hover:text-accent-foreground",
				transparent:
					"bg-transparent hover:bg-buttonTransparent border-none shadow-none",
				link: "!text-primary hover:text-primary/90",
				success:
					"bg-buttonSuccess !text-buttonSuccess-foreground hover:bg-buttonSuccess/90",
				edit: "bg-buttonEdit text-buttonEdit-foreground hover:bg-buttonEdit/90",
				menu: "!font-normal flex w-full items-center gap-2 overflow-hidden rounded-md p-2 !px-2 text-left outline-none transition-[width,height,padding] active:bg-system-hovered active:text-sidebar-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-system-hovered hover:text-sidebar-foreground !h-8 text-sm",

				// Variants avec couleurs exactes de buttonV1 (préfixe Default pour les doublons existants)
				primaryDefault:
					"bg-[#1890ff] text-white hover:bg-[#3892dc] active:bg-[#40a9ff] border-none",
				destructiveDefault:
					"bg-[#e15055] text-white hover:bg-[#dd1b21] active:bg-[#e15055] border-none",
				transparentDefault:
					"bg-transparent hover:bg-[#f4f5f7] border-none shadow-none text-inherit",
				linkDefault:
					"!text-[#40a9ff] hover:text-[#40a9ff]/90 border-none bg-transparent",
				successDefault:
					"bg-[#26a69a] text-white hover:bg-[#1B8177] border-none",
				editDefault: "bg-[#7765E2] text-white hover:bg-[#6454C3] border-none",

				// Nouveaux variants de buttonV1 (sans préfixe car n'existaient pas avant)
				modify: "bg-[#7765E2] text-white hover:bg-[#6454C3] border-none",
				save: "bg-[#26a69a] text-white hover:bg-[#1B8177] border-none",
				delete:
					"bg-[#e15055] text-white hover:bg-[#dd1b21] active:bg-[#e15055] border-none",
				create:
					"bg-[#1890ff] text-white hover:bg-[#3892dc] active:bg-[#1890ff] border-none",
				cancel:
					"bg-[#e15055] text-white hover:bg-[#dd1b21] active:bg-[#e15055] border-none",
				next: "bg-[#1890ff] text-white hover:bg-[#3892dc] active:bg-[#40a9ff] border-none",
				reopen:
					"bg-[#1890ff] text-white hover:bg-[#3892dc] active:bg-[#40a9ff] border-none",
				subscribe: "bg-[#1B365D] text-white hover:bg-[#1f3e6a] border-none",
				unsubscribe:
					"bg-[#e15055] text-white hover:bg-[#dd1b21] active:bg-[#e15055] border-none",
				external:
					"border border-[#40a9ff] text-[#40a9ff] bg-white hover:bg-[#40a9ff] hover:text-white",
				light:
					"bg-white text-[#1B365D] hover:bg-[#1B365D] hover:text-white border-none",
				dark: "bg-[#1B365D] text-white hover:bg-[#1f3e6a] border-none",
				list: "bg-white text-[#4AADFF] hover:bg-[#f4f5f7] border-none",
				trash:
					"text-[#e15055] hover:bg-[#e15055]/25 border-none bg-transparent",
				danger:
					"bg-[#e15055] text-white hover:bg-[#dd1b21] active:bg-[#e15055] border-none",
			},
			size: {
				default: "text-sm h-7.5 px-3",
				small: "text-ssm h-6.5 px-1.5",
				large: "text-semibase h-9 px-3",
				onlyIconDefault: "h-7.5 w-7.5 p-0 flex justify-center items-center",
				onlyIconSmall: "h-6.5 w-6.5 p-0 flex justify-center items-center",
				onlyIconXs: "h-5.5 w-5.5 p-0 flex justify-center items-center",
				onlyIconLarge: "h-9 w-9 p-0 text-xl flex justify-center items-center",
			},
			fullWidth: { true: "w-full", false: "" },
			selected: {
				true: "bg-system-selected text-system-color hover:bg-system-selected hover:text-system-color",
				false: "",
			},
			center: { true: "justify-center", false: "justify-left" },
			shape: {
				default: "rounded",
				circle: "rounded-full",
				round: "rounded-lg",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			fullWidth: false,
			center: false,
			shape: "default",
		},
	},
);
