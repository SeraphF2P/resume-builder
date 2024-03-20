import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { TextArea } from "../../ui/TextArea";
import { MultiInputSection } from "../MultiInputSection";
import { Select, SelectItem } from "../../ui/Select";
import { Btn } from "../../ui/Btn";
import { Icon } from "../../ui/Icons";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Fragment } from "react/jsx-runtime";

export const Profile = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	const languages = useFieldArray({ name: "languages", control });
	const getlangError = (index: number) => {
		const err = errors.languages && errors.languages[index];
		if (err) return err?.level?.message || err?.name?.message;
	};
	return (
		<>
			<TextArea
				label="profile"
				className=" w-full resize-none "
				placeholder="write a summury about yourself"
				{...register("profile")}
			/>
			<ErrorMessage message={errors.profile?.message} />
			<MultiInputSection title="languages">
				{languages.fields.map((field, index) => (
					<Fragment key={field.id}>
						<div className="flex w-full border-2 border-neutral-revert rounded items-center justify-between">
							<input
								{...register(`languages.${index}.name`)}
								placeholder="write a language"
								className="    h-8 px-2  bg-transparent w-full "
							/>
							<Controller
								name={`languages.${index}.level`}
								control={control}
								render={({ field: { onChange, ...field } }) => (
									<Select
										onValueChange={(value) => {
											onChange({ target: { value } });
										}}
										{...field}
										className="border-0"
									>
										{["intermediate", "advanced", "native", "fluent"].map(
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
									languages.remove(index);
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
				{languages.fields.length < 5 && (
					<Btn
						onClick={() => {
							languages.append({ name: "", level: "native" });
						}}
					>
						add language
					</Btn>
				)}
			</MultiInputSection>
		</>
	);
};
