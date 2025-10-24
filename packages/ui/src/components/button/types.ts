import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import type * as React from "react";
import type { PopoverContent } from "../popover";
import type { TooltipContent } from "../tooltip";
import type { buttonVariants } from "./variants";

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
	/** Icon to display on the left side of the button */
	icon?: LucideIcon;
	/** Icon to display on the right side of the button */
	iconRight?: LucideIcon;
	/** Whether the button is in a loading state */
	isLoading?: boolean;
	/** Custom loader component to display when loading */
	loader?: React.ReactNode;
	/** Timer duration in seconds for countdown */
	timer?: number;
	/** Callback called when timer ends */
	onTimerEnd?: () => void;
	/** Whether the timer should start automatically when component mounts */
	autoStart?: boolean;
}
