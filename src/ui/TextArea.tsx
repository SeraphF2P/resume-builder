"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";
import { cn } from "../lib/cva";
import { Icon } from "./Icons";

export const TextArea = forwardRef<
	ElementRef<"textarea">,
	ComponentPropsWithoutRef<"textarea"> & { label: string }
>(({ className, label, required, ...props }, forwardedRef) => {
	const id = useId();
	return (
		<>
			<label className=" flex capitalize" htmlFor={id}>
				{required ? (
					<Icon.textWithAsterisk>{label}</Icon.textWithAsterisk>
				) : (
					label
				)}
			</label>
			<textarea
				id={id}
				required={required}
				className={cn(" form-textarea  rounded", className)}
				ref={forwardedRef}
				{...props}
			/>
		</>
	);
});
