import { ReactNode } from "react";

export const MultiInputSection = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => (
	<>
		<label className=" my-4 capitalize">{title}</label>
		<div className="relative flex w-full flex-col  justify-center   ">
			{children}
		</div>
	</>
);
