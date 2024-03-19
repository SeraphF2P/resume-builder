import { useFieldArray, useFormContext } from "react-hook-form";
import { Btn } from "../../ui/Btn";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Icon } from "../../ui/Icons";
import { MultiInputSection } from "../MultiInputSection";
import { Fragment } from "react/jsx-runtime";

export const Certifications = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	const certifications = useFieldArray({ name: "certifications", control });
	const getlangError = (index: number) => {
		const err = errors.certifications && errors.certifications[index];
		if (err) return err?.link?.message || err?.name?.message;
	};
	return (
		<MultiInputSection title="certifications">
			{certifications.fields.map((field, index) => (
				<Fragment key={field.id}>
					<div className="  flex w-full border-2 border-neutral-revert rounded  ">
						<input
							{...register(`certifications.${index}.name`)}
							placeholder="name"
							className="   h-8 px-2  bg-transparent w-[12ch] "
						/>
						<span className="h-8 py-1 text-gray-500  ">:</span>
						<input
							{...register(`certifications.${index}.link`)}
							type="url"
							placeholder="link"
							className="   h-8 px-2  bg-transparent w-full "
						/>
						<Btn
							onClick={() => certifications.remove(index)}
							variant="fill.alert"
							className=" h-full   "
						>
							<Icon.trash className="h-4 w-4" />
						</Btn>
					</div>
					<ErrorMessage message={getlangError(index)} />
				</Fragment>
			))}
			{certifications.fields.length < 5 && (
				<Btn
					onClick={() => {
						certifications.append({ name: "", link: "" });
					}}
				>
					add certificate
				</Btn>
			)}
		</MultiInputSection>
	);
};
