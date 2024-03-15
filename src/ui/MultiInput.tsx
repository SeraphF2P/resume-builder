"use client";

import { useListState, UseListStateHandlers } from "@mantine/hooks";
import { ReactNode } from "react";
import { Btn } from "./Btn";

type MultiInputProps<T> = {
	children: (val: UseListStateHandlers<T> & { fields: T[] }) => ReactNode;
	defaultValue: T;
	title: string;
	placeholder: string;
	limit: number;
	emty?: boolean;
};

export function MultiInput<T>({
	children,
	defaultValue,
	title,
	limit,
	placeholder,
	emty = false,
}: MultiInputProps<T>) {
	const [fields, handlers] = useListState<T>(emty ? [] : [defaultValue]);
	return (
		<>
			<label className="    my-4 capitalize">{title}</label>
			<div className="relative flex w-full flex-col  justify-center gap-4   ">
				{children({ fields, ...handlers })}

				{fields && fields.length < limit && (
					<Btn
						onClick={() => {
							handlers.append(defaultValue);
						}}
					>
						{placeholder}
					</Btn>
				)}
			</div>
		</>
	);
}
