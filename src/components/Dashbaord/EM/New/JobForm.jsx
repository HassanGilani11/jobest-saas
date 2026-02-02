"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import CategorySelect from "./CategorySelect";
import CompanySelect from "./CompanySelect";
import InputField from "./InputField";
import { useState } from "react";
import TypewritingPlaceholder from "@/utils/TypewritingPlaceholder";
import { placeholdersTitles } from "@/utils/placeholder";
import JobTypeSelect from "./JobTypeSelect";
import TagsInput from "./TagsInput";
import RichTextEditor from "./RichTextEditor";
import JobImage from "./JobImage";
import { useParams, useRouter } from "next/navigation";

const JobForm = () => {
	const [currentPlaceholderTitle, setCurrentPlaceholder] = useState(""); // State to hold the typed placeholder
	const { lang } = useParams();
	const router = useRouter();

	// Function to update the placeholder state
	const handlePlaceholderChange = (placeholder) => {
		setCurrentPlaceholder(placeholder);
	};

	const {
		register,
		handleSubmit,
		setError,
		reset,
		watch,
		setValue,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			company: "",
			category: "",
			title: "",
			image: "",
			description: "",
			job_type: "",
			location: "",
			salary_range: "",
			position: "",
			experience: "",
			office_days: "",
			holidays: "",
			office_start_time: "",
			office_end_time: "",
		},
	});

	const category = watch("category");
	const company = watch("company");
	const job_type = watch("job_type");
	const image = watch("image");

	const onSubmit = async (data) => {
		if (!data.image) {
			toast.error("Please drop job image 570x335 before submitting.");
			return;
		}

		await axios
			.post(`/api/em/job/new`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.push(`/${lang}/dashboard/em/jobs`);
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<CompanySelect
					value={company}
					onChange={(value) => setCustomValue("company", value)}
				/>
				<CategorySelect
					value={category}
					onChange={(value) => setCustomValue("category", value)}
				/>
				<JobTypeSelect
					value={job_type}
					onChange={(value) => setCustomValue("job_type", value)}
				/>

				<RichTextEditor
					label="Description"
					id="description"
					placeholder={`Job Details`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<JobImage
					onChange={(value) => setCustomValue("image", value)}
					value={image}
				/>

				<InputField
					label="Job Title"
					id="title"
					placeholder={`e.g. ${currentPlaceholderTitle}`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Location"
					id="location"
					placeholder={`e.g. Gainesville, FL 32611`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Salary Range"
					id="salary_range"
					placeholder={`e.g. $2k - $2.5k/m or $40 - $50/y `}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Position"
					id="position"
					placeholder={`E.g. Senior Software Developer `}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Experience"
					id="experience"
					placeholder={`E.g. Fresher / 2 Years `}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Office Days"
					id="office_days"
					placeholder={`E.g. Monday to Friday" or "Weekdays `}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Office Start Time"
					id="office_start_time"
					placeholder={`E.g. 09:00 AM`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Office End Time"
					id="office_end_time"
					placeholder={`E.g. 05:00 PM`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Holidays"
					id="holidays"
					placeholder={`E.g. Saturday to Sunday`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<TagsInput
					label="Tags"
					id="tags"
					placeholder={`E.g. HTML, React, Angular, Vue`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
			</div>
			<TypewritingPlaceholder
				placeholdersTitles={placeholdersTitles}
				onPlaceholderChange={handlePlaceholderChange} // Pass the update function
			/>

			<div className="form-btn">
				<button className="btn style-four me-3" type="submit">
					Save
				</button>
			</div>
		</form>
	);
};

export default JobForm;
