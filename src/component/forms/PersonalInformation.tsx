import { useFormContext } from "react-hook-form";
import { Input } from "../../ui/Input";
export const PersonalInformation = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<ResumeFormType>();
	return (
		<>
			<Input
				errorMSG={errors.fullName?.message}
				{...register("fullName")}
				label="full name"
			/>
			<Input
				errorMSG={errors.email?.message}
				{...register("email")}
				label="email"
			/>
			<Input
				errorMSG={errors.phone?.message}
				{...register("phone")}
				label="phone"
				inputMode="numeric"
			/>
			<Input
				errorMSG={errors.jobTitle?.message}
				{...register("jobTitle")}
				label="job title"
			/>
			<Input
				errorMSG={errors.home?.message}
				{...register("home")}
				label="home"
			/>
		</>
	);
};
