import { zodResolver } from "@hookform/resolvers/zod";
import { motion as m, useCycle } from "framer-motion";
import { ElementRef, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FormProvider, useForm } from "react-hook-form";
import { Certifications } from "../component/forms/Certifications";
import { Experiences } from "../component/forms/Experiences";
import { PersonalInformation } from "../component/forms/PersonalInformation";
import { Profile } from "../component/forms/Profile";
import { Skills } from "../component/forms/Skills";
import { UsefullLinks } from "../component/forms/UsefullLinks";
import ZOD from "../lib/ZOD";
import { Btn } from "../ui/Btn";
import { Icon } from "../ui/Icons";
const forms = [
	{
		component: PersonalInformation,
	},
	{
		component: Profile,
	},
	{
		component: Skills,
	},
	{
		component: Experiences,
	},
	{
		component: UsefullLinks,
	},
	{
		component: Certifications,
	},
] as const;
export const HomePage = () => {
	const numOfSlides = forms.length;
	const [x, circle] = useCycle(...forms.map((_, index) => index));
	const methods = useForm<ResumeFormType>({
		resolver: zodResolver(ZOD.resume),
		defaultValues: {
			templateId: 1,
			languages: [{ name: "English", level: "native" }],
			skills: [{ name: "", level: "biggener" }],
			experiences: [
				{
					jobTitle: "",
					location: "",
					timePeriod: { from: new Date(), to: new Date() },
				},
			],
			links: [
				{
					name: "",
					link: "",
				},
			],
		},
		mode: "all",
	});

	const FormRef = useRef<ElementRef<"form">>(null);
	const submitHandler = async (values: ResumeFormType) => {
		if (!FormRef.current) return;
		FormRef.current.action =
			import.meta.env.VITE_APP_BASE_URL +
			`/api/preview/template/${values.templateId}`;
		FormRef.current.submit();
	};
	return (
		<>
			<main className="h-full w-full flex flex-col justify-center  items-center">
				<FormProvider {...methods}>
					<form
						ref={FormRef}
						onSubmit={methods.handleSubmit(submitHandler)}
						className=" relative space-y-4 w-full  overflow-hidden"
					>
						<m.div
							style={{
								right: `${x * 100}%`,
							}}
							className=" relative grid  transition-[right] auto-cols-auto grid-flow-col  "
						>
							{forms.map((form, index) => {
								const Form = form.component;
								return (
									<section
										key={index}
										className="  w-screen overflow-y-scroll remove-scroll-bar  grid  "
									>
										<div className=" bg-neutral    mx-auto  w-full  max-w-[520px]   p-4">
											<Form />
										</div>
									</section>
								);
							})}
						</m.div>
						<div className=" flex px-8 justify-center gap-8">
							{x > 0 && (
								<Btn
									className=" w-40 md:w-20 h-10 md:absolute md:top-0 md:left-0 md:h-full"
									onClick={() => circle(x - 1)}
								>
									<Icon.leftArrow className="size-6 md:size-10" />
								</Btn>
							)}
							{x < numOfSlides - 1 && (
								<Btn
									className=" w-40 md:w-20 h-10 md:absolute md:top-0 md:right-0 md:h-full"
									onClick={() => circle()}
								>
									<Icon.rightArrow className="size-6 md:size-10" />
								</Btn>
							)}
							{x === numOfSlides - 1 && (
								<>
									<Btn
										className=" w-40 md:w-20 h-10 md:absolute md:top-0 md:right-0 md:h-full"
										type="submit"
									>
										preview
									</Btn>
									{/* <Btn className=" w-40 md:w-20 h-10 md:absolute md:top-0 md:right-0 md:h-full">
										download
									</Btn> */}
								</>
							)}
						</div>
					</form>
				</FormProvider>
			</main>
		</>
	);
};
