import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {
	/** Render as a child component instead of a button */
	asChild?: boolean;
	/** Content to display in a popover */
	popoverContent?: React.ReactNode;
	/** Props to pass to the PopoverContent component */
	popoverProps?: React.ComponentProps<typeof PopoverContent>;
	/** Content to display in a tooltip */
	tooltipContent?: React.ReactNode;
	/** Props to pass to the TooltipContent component */
	tooltipProps?: React.ComponentProps<typeof TooltipContent>;
	/** Convenience prop for popover side position */
	popoverSide?: "top" | "right" | "bottom" | "left";
	/** Convenience prop for tooltip side position */
	tooltipSide?: "top" | "right" | "bottom" | "left";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			popoverContent,
			popoverProps,
			popoverSide,
			tooltipContent,
			tooltipProps,
			tooltipSide,
			...props
		},
		ref,
	) => {
		// Validate that popover and tooltip are not used together
		if (popoverContent && tooltipContent) {
			return <div>Must use only one overlay at a time</div>;
		}

		const Comp = asChild ? Slot : "button";

		const buttonElement = (
			<Comp
				ref={ref}
				data-slot="button"
				className={cn(buttonVariants({ variant, size, className }))}
				{...props}
			/>
		);

		// If popover is provided, wrap with Popover
		if (popoverContent) {
			const mergedPopoverProps = {
				...(popoverSide && { side: popoverSide }),
				...popoverProps,
			};

			return (
				<Popover>
					<PopoverTrigger asChild>{buttonElement}</PopoverTrigger>
					<PopoverContent {...mergedPopoverProps}>
						{popoverContent}
					</PopoverContent>
				</Popover>
			);
		}

		// If tooltip is provided, wrap with Tooltip
		if (tooltipContent) {
			const mergedTooltipProps = {
				...(tooltipSide && { side: tooltipSide }),
				...tooltipProps,
			};

			return (
				<Tooltip>
					<TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
					<TooltipContent {...mergedTooltipProps}>
						{tooltipContent}
					</TooltipContent>
				</Tooltip>
			);
		}

		// Otherwise, return simple button
		return buttonElement;
	},
);

Button.displayName = "Button";

export { Button, buttonVariants };
