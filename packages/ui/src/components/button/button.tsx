import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import type { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			popoverContent,
			popoverProps,
			tooltipContent,
			tooltipProps,
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
			return (
				<Popover>
					<PopoverTrigger asChild>{buttonElement}</PopoverTrigger>
					<PopoverContent {...popoverProps}>{popoverContent}</PopoverContent>
				</Popover>
			);
		}

		// If tooltip is provided, wrap with Tooltip
		if (tooltipContent) {
			return (
				<Tooltip>
					<TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
					<TooltipContent {...tooltipProps}>{tooltipContent}</TooltipContent>
				</Tooltip>
			);
		}

		// Otherwise, return simple button
		return buttonElement;
	},
);

Button.displayName = "Button";

export { Button };
