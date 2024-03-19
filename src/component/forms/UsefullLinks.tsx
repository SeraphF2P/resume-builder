import { useFieldArray, useFormContext } from "react-hook-form";
import { Btn } from "../../ui/Btn";
import { Icon } from "../../ui/Icons";
import { MultiInputSection } from "../MultiInputSection";
import { Fragment } from "react/jsx-runtime";
import { ErrorMessage } from "../../ui/ErrorMessage";

export const UsefullLinks = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	const links = useFieldArray({ name: "links", control });
	const getlangError = (index: number) => {
		const err = errors.links && errors.links[index];
		if (err) return err?.link?.message || err?.name?.message;
	};
	return (
		<MultiInputSection title="useful links">
			{links.fields.map((field, index) => (
				<Fragment key={field.id}>
					<div className="  flex w-full border-2 border-neutral-revert rounded  ">
						<input
							{...register(`links.${index}.name`)}
							placeholder="name"
							className="   h-8 px-2  bg-transparent w-[12ch] "
						/>
						<span className="h-8 py-1 text-gray-500  ">:</span>
						<input
							{...register(`links.${index}.link`)}
							placeholder="link"
							type="url"
							className="   h-8 px-2  bg-transparent w-full "
						/>
						<Btn
							onClick={() => links.remove(index)}
							variant="fill.alert"
							className=" h-full   "
						>
							<Icon.trash className="h-4 w-4" />
						</Btn>
					</div>
					<ErrorMessage message={getlangError(index)} />
				</Fragment>
			))}
			{links.fields.length < 5 && (
				<Btn
					onClick={() => {
						links.append({ name: "", link: "" });
					}}
				>
					add link
				</Btn>
			)}
		</MultiInputSection>
	);
};
