import { ComponentProps, forwardRef, useId } from "react";
import { cn } from "./../lib/cva";
import { Icon } from "./Icons";

interface InputProps extends ComponentProps<"input"> {
	label: string;
	errorMSG?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, errorMSG = "", type = "text", required, ...props }, ref) => {
		const id = useId();

		return (
			<div className="relative flex flex-col justify-start   pb-5">
				<label className=" flex capitalize" htmlFor={id}>
					{required ? (
						<Icon.textWithAsterisk>{label}</Icon.textWithAsterisk>
					) : (
						label
					)}
				</label>
				<input
					ref={ref}
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
				{errorMSG && (
					<span className="absolute bottom-0  w-full  text-center text-sm text-rose-500">
						{errorMSG}
					</span>
				)}
			</div>
		);
	}
);
