import DatePicker from "react-datepicker";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Btn } from "../../ui/Btn";
import { Icon } from "../../ui/Icons";
import { MultiInputSection } from "../MultiInputSection";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Fragment } from "react/jsx-runtime";

export const Experiences = () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	const experiences = useFieldArray({ name: "experiences", control });
	const getlangError = (index: number) => {
		const err = errors.experiences && errors.experiences[index];
		if (err)
			return (
				err?.jobTitle?.message ||
				err?.location?.message ||
				err?.location?.message ||
				err?.location?.message
			);
	};
	return (
		<MultiInputSection title="experiences">
			{experiences.fields?.map((field, index) => (
				<Fragment key={field.id}>
					<div className="flex w-full border-2 border-neutral-revert rounded  ">
						<Btn
							onClick={() => {
								experiences.remove(index);
							}}
							variant="fill.alert"
							className=" h-full   "
						>
							<Icon.trash className="h-4 w-4" />
						</Btn>
						<div className=" flex flex-col">
							<input
								{...register(`experiences.${index}.jobTitle`)}
								placeholder="job title"
								className="   h-8 px-2  bg-transparent w-full "
							/>
							<input
								{...register(`experiences.${index}.location`)}
								placeholder="location"
								className="  bg-rose-500  h-8 px-2  bg-transparent w-full "
							/>
							<div className="flex">
								<Controller
									name={`experiences.${index}.timePeriod.from`}
									control={control}
									render={({ field: { value, ...props } }) => (
										<DatePicker
											placeholderText="from"
											selected={value}
											maxDate={field.timePeriod.to}
											dateFormat="yyyy/MM"
											className="  h-8 px-2 bg-transparent  w-full"
											{...props}
										/>
									)}
								/>
								<Controller
									name={`experiences.${index}.timePeriod.to`}
									control={control}
									render={({ field: { value, ...props } }) => (
										<DatePicker
											placeholderText="from"
											selected={value}
											maxDate={new Date()}
											minDate={field.timePeriod.from}
											dateFormat="yyyy/MM"
											className="  h-8 px-2 bg-transparent  w-full"
											{...props}
										/>
									)}
								/>
							</div>
						</div>
					</div>
					<ErrorMessage message={getlangError(index)} />
				</Fragment>
			))}
			{experiences.fields.length < 5 && (
				<Btn
					onClick={() =>
						experiences.append({
							jobTitle: "",
							location: "",
							timePeriod: { from: new Date(), to: new Date() },
						})
					}
				>
					add experiance
				</Btn>
			)}
		</MultiInputSection>
	);
};
