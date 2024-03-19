import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Btn } from "../../ui/Btn";
import { Icon } from "../../ui/Icons";
import { Select, SelectItem } from "../../ui/Select";
import { MultiInputSection } from "../MultiInputSection";
import { Fragment } from "react/jsx-runtime";
import { ErrorMessage } from "../../ui/ErrorMessage";

export const Skills = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	const skills = useFieldArray({ name: "skills", control });
	const getlangError = (index: number) => {
		const err = errors.skills && errors.skills[index];
		if (err) return err?.level?.message || err?.name?.message;
	};
	return (
		<MultiInputSection title="skills">
			{skills.fields.map((field, index) => (
				<Fragment key={field.id}>
					<div className="flex w-full border-2 border-neutral-revert rounded items-center justify-between">
						<input
							{...register(`skills.${index}.name`)}
							placeholder="write a language"
							className="    h-8 px-2  bg-transparent w-full "
						/>
						<Controller
							name={`skills.${index}.level`}
							control={control}
							render={({ field: { onChange, ...field } }) => (
								<Select
									onValueChange={(value) => {
										onChange({ target: { value } });
									}}
									{...field}
									className="border-0"
								>
									{["biggener", "intermediate", "advanced", "expert"].map(
										(level, index) => (
											<SelectItem key={index} value={level}>
												{level}
											</SelectItem>
										)
									)}
								</Select>
							)}
						/>

						<Btn
							onClick={() => {
								skills.remove(index);
							}}
							variant="fill.alert"
							className=" aspect-square p-2 "
						>
							<Icon.trash className="h-4 w-4" />
						</Btn>
					</div>
					<ErrorMessage message={getlangError(index)} />
				</Fragment>
			))}
			{skills.fields.length < 5 && (
				<Btn
					onClick={() => {
						skills.append({ name: "", level: "biggener" });
					}}
				>
					add language
				</Btn>
			)}
		</MultiInputSection>
	);
};
