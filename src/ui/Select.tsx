import * as SelectPrimitive from "@radix-ui/react-select";
import { ElementRef, RefAttributes, forwardRef } from "react";
import { Icon } from "./Icons";
import { cn } from "../lib/cva";

export const Select = forwardRef<
	ElementRef<"button">,
	SelectPrimitive.SelectProps & { className?: string }
>(({ children, className, ...props }, forwardedRef) => {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger
				className={cn(
					" w-full   p-1 flex justify-center items-center border-2 border-black rounded",
					className
				)}
				ref={forwardedRef}
			>
				<SelectPrimitive.Value />
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content className="border-2 border-neutral-revert rounded-md overflow-hidden">
					<SelectPrimitive.ScrollUpButton className=" flex justify-center items-center p-0.5 bg-neutral">
						<Icon.chevronUp />
					</SelectPrimitive.ScrollUpButton>
					<SelectPrimitive.Viewport className="divide-y-2 divide-slate-300 ">
						{children}
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton className=" flex justify-center items-center p-0.5 bg-neutral">
						<Icon.chevronDown />
					</SelectPrimitive.ScrollDownButton>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
});

export const SelectItem = forwardRef<
	ElementRef<"div">,
	SelectPrimitive.SelectItemProps & RefAttributes<HTMLDivElement>
>(({ children, ...props }, forwardedRef) => {
	return (
		<SelectPrimitive.Item
			className=" relative select-none w-full p-1 flex justify-center bg-neutral items-center  "
			{...props}
			ref={forwardedRef}
		>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
			{/* <SelectPrimitive.ItemIndicator>
				<Icon.plusCircleDotted />
			</SelectPrimitive.ItemIndicator> */}
		</SelectPrimitive.Item>
	);
});
