import { ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { cn } from "./../lib/cva";
import { Icon } from "./Icons";
import { ErrorMessage } from "./ErrorMessage";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	label: string;
	errorMSG?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ label, errorMSG = "", type = "text", required, ...props },
		forwardedRef
	) => {
		const id = useId();

		return (
			<div className="relative flex flex-col justify-start ">
				<label className=" flex capitalize" htmlFor={id}>
					{required ? (
						<Icon.textWithAsterisk>{label}</Icon.textWithAsterisk>
					) : (
						label
					)}
				</label>
				<input
					ref={forwardedRef}
					id={id}
					className={cn(
						"form-input h-10 text-neutral-revert  rounded placeholder:capitalize  ",
						{
							"border-rose-500": !!errorMSG,
						}
					)}
					required={required}
					type={type}
					{...props}
				/>
				<ErrorMessage message={errorMSG} />
			</div>
		);
	}
);
