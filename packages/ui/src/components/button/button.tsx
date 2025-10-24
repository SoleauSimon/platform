"use client";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@workspace/ui/lib/utils";
import { LoaderCircle } from "lucide-react";
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
			icon,
			iconRight,
			children,
			isLoading: externalIsLoading,
			loader,
			onClick,
			center,
			fullWidth,
			selected,
			shape,
			...props
		},
		ref,
	) => {
		const [internalIsLoading, setInternalIsLoading] = React.useState(false);

		// Use external loading state if provided, otherwise use internal state
		const isLoading = externalIsLoading ?? internalIsLoading;

		// Handle click with promise detection
		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (onClick) {
				try {
					const result = (onClick as any)(e);
					// Check if result is a promise-like object
					if (
						result &&
						typeof result === "object" &&
						typeof result.then === "function"
					) {
						setInternalIsLoading(true);
						result.finally(() => setInternalIsLoading(false));
					}
				} catch (error) {
					// Handle synchronous errors
					console.error("Button click error:", error);
				}
			}
		};

		// Validate that popover and tooltip are not used together
		if (popoverContent && tooltipContent) {
			return <div>Must use only one overlay at a time</div>;
		}

		const Comp = asChild ? Slot : "button";

		// Detect if button has only icons (no text)
		const hasChildren = children && children !== "";
		const hasOnlyIcons = !hasChildren && (icon || iconRight);

		// Map regular sizes to onlyIcon sizes when button has only icons
		const getIconOnlySize = (
			currentSize:
				| "small"
				| "default"
				| "large"
				| "onlyIconDefault"
				| "onlyIconSmall"
				| "onlyIconXs"
				| "onlyIconLarge"
				| null
				| undefined,
		) => {
			if (!hasOnlyIcons) return currentSize;

			switch (currentSize) {
				case "default":
					return "onlyIconDefault";
				case "small":
					return "onlyIconSmall";
				case "large":
					return "onlyIconLarge";
				case "onlyIconDefault":
				case "onlyIconSmall":
				case "onlyIconXs":
				case "onlyIconLarge":
					return currentSize; // Already an onlyIcon size
				default:
					return "onlyIconDefault";
			}
		};

		// Render button content with icons
		const renderButtonContent = () => {
			if (!hasChildren && !icon && !iconRight && !isLoading) {
				// No content at all
				return null;
			}

			if (hasOnlyIcons || (isLoading && !hasChildren)) {
				// Only icons, no text (or loading without text)
				return (
					<>
						{isLoading
							? loader || <LoaderCircle className="h-4 w-4 animate-spin" />
							: icon && React.createElement(icon, { className: "h-4 w-4" })}
						{!isLoading &&
							iconRight &&
							React.createElement(iconRight, { className: "h-4 w-4" })}
					</>
				);
			}

			// Has children (text), render with icons
			return (
				<>
					{isLoading
						? loader || <LoaderCircle className="h-4 w-4 animate-spin" />
						: icon && React.createElement(icon, { className: "h-4 w-4" })}
					{children}
					{iconRight &&
						React.createElement(iconRight, { className: "h-4 w-4" })}
				</>
			);
		};

		const buttonElement = (
			<Comp
				ref={ref}
				data-slot="button"
				className={cn(
					buttonVariants({
						variant,
						size: getIconOnlySize(size),
						center,
						fullWidth,
						selected,
						shape,
						className,
					}),
				)}
				onClick={handleClick}
				disabled={isLoading || props.disabled}
				{...props}
			>
				{renderButtonContent()}
			</Comp>
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
