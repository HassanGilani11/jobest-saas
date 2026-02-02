"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import TypewritingPlaceholder from "@/utils/TypewritingPlaceholder";
import { placeholdersTitles } from "@/utils/placeholder";

import { useParams, useRouter } from "next/navigation";
import CompanySelect from "@/components/Dashbaord/EM/New/CompanySelect";
import CategorySelect from "@/components/Dashbaord/EM/New/CategorySelect";
import JobTypeSelect from "@/components/Dashbaord/EM/New/JobTypeSelect";
import RichTextEditor from "@/components/Dashbaord/EM/New/RichTextEditor";
import JobImage from "@/components/Dashbaord/EM/New/JobImage";
import InputField from "@/components/Dashbaord/EM/New/InputField";
import TagsInput from "@/components/Dashbaord/EM/New/TagsInput";

const EditForm = ({ job }) => {
	// console.log(job);
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
			jobId: "",
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

	useEffect(() => {
		setValue("jobId", job.id);
		setValue("category", job.category);
		setValue("title", job.title);
		setValue("image", job.image);
		setValue("description", job.description);
		setValue("job_type", job.job_type);
		setValue("location", job.location);
		setValue("salary_range", job.salary_range);
		setValue("position", job.position);
		setValue("experience", job.experience);
		setValue("office_days", job.office_days);
		setValue("holidays", job.holidays);
		setValue("office_start_time", job.office_start_time);
		setValue("office_end_time", job.office_end_time);
		const tagNames = job.tags.map((t) => t.tag.name);
		const formattedTagNames = tagNames.join(", ");
		setValue("tags", formattedTagNames);
	}, [job, setValue]);

	const category = watch("category");
	const job_type = watch("job_type");
	const image = watch("image");

	const onSubmit = async (data) => {
		if (!data.image) {
			toast.error("Please drop job image 570x335 before submitting.");
			return;
		}

		await axios
			.put(`/api/em/job/new`, data)
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
				<CategorySelect
					value={category}
					onChange={(value) => setCustomValue("category", value)}
					classAtts="col-md-6"
				/>

				<JobTypeSelect
					value={job_type}
					onChange={(value) => setCustomValue("job_type", value)}
					classAtts="col-md-6"
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
					Update
				</button>
			</div>
		</form>
	);
};

export default EditForm;
