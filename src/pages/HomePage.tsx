import { zodResolver } from "@hookform/resolvers/zod";
import { motion as m, useCycle } from "framer-motion";
import { ChangeEvent, ReactNode } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ZOD from "../lib/ZOD";
import { Btn } from "../ui/Btn";
import { Icon } from "../ui/Icons";
import { Input } from "../ui/Input";
import { MultiInput } from "../ui/MultiInput";
import { Select, SelectItem } from "../ui/Select";
import { TextArea } from "../ui/TextArea";
type pageProps = {};
type ResumeFormType = z.infer<typeof ZOD.resume>;
type LanguageInputType = Zod.infer<typeof ZOD.resume>["languages"][number];
type SkillInputType = Zod.infer<typeof ZOD.resume>["skills"][number];
type ExperienceInputType = Zod.infer<typeof ZOD.resume>["experiences"][number];
type LinkInputType = Zod.infer<typeof ZOD.resume>["links"][number];
export const HomePage = ({}: pageProps) => {
	const slides = [0, 1, 2, 3, 4];
	const numOfSlides = slides.length;
	const [x, circle] = useCycle(...slides);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<ResumeFormType>({
		resolver: zodResolver(ZOD.resume),
	});
	const submitHandler = (values: ResumeFormType) => {
		console.log(values);
	};
	console.log(errors);
	return (
		<>
			<main className="h-full w-full flex flex-col justify-center  items-center">
				<form
					onSubmit={handleSubmit(submitHandler)}
					className=" relative space-y-4 w-full  overflow-hidden"
				>
					<m.div
						style={{
							right: `${x * 100}%`,
						}}
						className=" relative grid  transition-[right] auto-cols-auto grid-flow-col  "
					>
						<Slide>
							<Input required {...register("fullName")} label="full name" />
							<Input required {...register("email")} label="email" />
							<Input {...register("phone")} label="phone" />
							<Input {...register("jobTitle")} label="job title" />
							<Input {...register("city")} label="city" />
						</Slide>
						<Slide>
							<TextArea
								label="summery"
								className=" w-full resize-none"
								placeholder="write a summury about yourself"
								{...register("summery")}
							/>
							<MultiInput<LanguageInputType>
								title="languages"
								placeholder="add a language"
								limit={4}
								defaultValue={{ name: "english", level: "native" }}
							>
								{({ fields, remove, setItemProp }) =>
									fields?.map((field, index) => (
										<div
											key={index}
											className="flex w-full border-2 border-neutral-revert rounded items-center justify-between"
										>
											<input
												{...register(`languages.${index}.name`, {
													onChange: (e: ChangeEvent) => {
														const input = e.target as HTMLInputElement;
														const value = input.value;
														setItemProp(index, "name", value);
													},
													value: field.name,
												})}
												placeholder="write a language"
												className="    h-8 px-2  bg-transparent w-full "
											/>
											<Select
												onValueChange={(value: LanguageInputType["level"]) => {
													setValue(`languages.${index}.level`, value);
												}}
												defaultValue="native"
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
											<Btn
												onClick={() => remove(index)}
												variant="fill.alert"
												className=" aspect-square p-2 "
											>
												<Icon.trash className="h-4 w-4" />
											</Btn>
										</div>
									))
								}
							</MultiInput>
						</Slide>
						<Slide>
							<MultiInput<SkillInputType>
								title="skills"
								placeholder="add a skill"
								limit={30}
								defaultValue={{ name: "", level: "biggener" }}
							>
								{({ fields, remove, setItemProp }) =>
									fields?.map((field, index) => (
										<div
											key={index}
											className="flex w-full border-2 border-neutral-revert rounded items-center justify-between"
										>
											<input
												{...register(`skills.${index}.name`, {
													onChange: (e: ChangeEvent) => {
														const input = e.target as HTMLInputElement;
														const value = input.value;
														setItemProp(index, "name", value);
													},
													value: field.name,
												})}
												placeholder="write a skill"
												className="    h-8 px-2  bg-transparent w-full "
											/>
											<Select
												onValueChange={(value: SkillInputType["level"]) => {
													setValue(`skills.${index}.level`, value);
												}}
												defaultValue="biggener"
												className="border-0"
											>
												{["intermediate", "advanced", "biggener", "expert"].map(
													(level, index) => (
														<SelectItem key={index} value={level}>
															{level}
														</SelectItem>
													)
												)}
											</Select>
											<Btn
												onClick={() => remove(index)}
												variant="fill.alert"
												className=" aspect-square p-2 "
											>
												<Icon.trash className="h-4 w-4" />
											</Btn>
										</div>
									))
								}
							</MultiInput>
						</Slide>
						<Slide>
							<MultiInput<ExperienceInputType>
								title="experiences"
								placeholder="add an experiance"
								limit={30}
								emty
								defaultValue={{
									jobTitle: "",
									location: "",
									timePeriod: { from: new Date(), to: new Date() },
								}}
							>
								{({ fields, remove, setItemProp }) =>
									fields?.map((field, index) => (
										<div
											key={index}
											className="flex w-full border-2 border-neutral-revert rounded  "
										>
											<Btn
												onClick={() => remove(index)}
												variant="fill.alert"
												className=" h-full   "
											>
												<Icon.trash className="h-4 w-4" />
											</Btn>
											<div className=" flex flex-col">
												<input
													{...register(`experiences.${index}.jobTitle`, {
														onChange: (e: ChangeEvent) => {
															const input = e.target as HTMLInputElement;
															const value = input.value;
															setItemProp(index, "jobTitle", value);
														},
														value: field.jobTitle,
													})}
													placeholder="job title"
													className="   h-8 px-2  bg-transparent w-full "
												/>
												<input
													{...register(`experiences.${index}.location`, {
														onChange: (e: ChangeEvent) => {
															const input = e.target as HTMLInputElement;
															const value = input.value;
															setItemProp(index, "location", value);
														},
														value: field.jobTitle,
													})}
													placeholder="location"
													className="  bg-rose-500  h-8 px-2  bg-transparent w-full "
												/>
												<div className="flex">
													<DatePicker
														placeholderText="from"
														selected={field.timePeriod.from}
														maxDate={field.timePeriod.to}
														{...register(
															`experiences.${index}.timePeriod.from`,
															{
																value: field.timePeriod.from,
															}
														)}
														onChange={(date) => {
															if (date == null) return null;

															setItemProp(index, "timePeriod", {
																to: field.timePeriod.to,
																from: date,
															});
														}}
														dateFormat="yyyy/MM"
														className="  h-8 px-2 bg-transparent  w-full"
													/>
													<DatePicker
														placeholderText="to"
														selected={field.timePeriod.to}
														maxDate={new Date()}
														minDate={field.timePeriod.from}
														{...register(`experiences.${index}.timePeriod.to`, {
															value: field.timePeriod.to,
														})}
														onChange={(date) => {
															if (date == null) return null;
															setItemProp(index, "timePeriod", {
																to: date,
																from: field.timePeriod.to,
															});
														}}
														dateFormat="yyyy/MM"
														className="  h-8 px-2 bg-transparent  w-full"
													/>
												</div>
											</div>
										</div>
									))
								}
							</MultiInput>
						</Slide>
						<Slide>
							<MultiInput<LinkInputType>
								title="useful links"
								placeholder="add an link"
								limit={5}
								defaultValue={{
									name: "",
									link: "",
								}}
							>
								{({ fields, remove, setItemProp }) =>
									fields?.map((field, index) => (
										<div
											key={index}
											className="  flex w-full border-2 border-neutral-revert rounded  "
										>
											<input
												{...register(`links.${index}.name`, {
													onChange: (e: ChangeEvent) => {
														const input = e.target as HTMLInputElement;
														const value = input.value;
														setItemProp(index, "name", value);
													},
													value: field.name,
												})}
												placeholder="name"
												className="   h-8 px-2  bg-transparent w-[12ch] "
											/>
											<span className="h-8 py-1 text-gray-500  ">//:</span>
											<input
												{...register(`links.${index}.link`, {
													onChange: (e: ChangeEvent) => {
														const input = e.target as HTMLInputElement;
														const value = input.value;
														setItemProp(index, "link", value);
													},
													value: field.link,
												})}
												placeholder="link"
												className="   h-8 px-2  bg-transparent w-full "
											/>
											<Btn
												onClick={() => remove(index)}
												variant="fill.alert"
												className=" h-full   "
											>
												<Icon.trash className="h-4 w-4" />
											</Btn>
										</div>
									))
								}
							</MultiInput>
						</Slide>
					</m.div>
					<div className=" flex px-8 justify-center gap-8">
						{x > 0 && (
							<Btn
								className=" w-40 h-10 md:absolute md:top-0 md:left-0 md:h-full"
								onClick={() => circle(x - 1)}
							>
								<Icon.leftArrow />
							</Btn>
						)}
						{x < numOfSlides - 1 && (
							<Btn
								className=" w-40 h-10 md:absolute md:top-0 md:right-0 md:h-full"
								onClick={() => circle()}
							>
								<Icon.rightArrow />
							</Btn>
						)}
						{x === numOfSlides - 1 && (
							<Btn
								className=" w-40 h-10 md:absolute md:top-0 md:right-0 md:h-full"
								type="submit"
							>
								submit
							</Btn>
						)}
					</div>
				</form>
			</main>
		</>
	);
};
const Slide = ({ children }: { children: ReactNode }) => {
	return (
		<section className="  w-screen  grid  ">
			<div className=" bg-neutral  overfloe-y-scroll  mx-auto  w-full  max-w-[520px]   p-4">
				{children}
			</div>
		</section>
	);
};
