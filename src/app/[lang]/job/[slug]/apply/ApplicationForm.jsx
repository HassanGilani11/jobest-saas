"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import TextArea from "./TextArea";
import InputField from "./InputField";
import Spinner from "@/components/Spinner";
import { useEffect } from "react";

const ApplicationForm = ({ id: jobId }) => {
	const { lang } = useParams();
	const router = useRouter();

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
			cover_letter: "",
			expected_salary: "",
		},
	});

	useEffect(() => {
		setValue("jobId", jobId);
	}, [jobId, setValue]);

	const onSubmit = async (data) => {
		await axios
			.post(`/api/em/job/apply`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.push(`/${lang}/dashboard/my-applications`);
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};

	return (
		<form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<InputField
					label="Expected Salary"
					id="expected_salary"
					placeholder="Expected Salary"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<TextArea
					label="Cover Letter"
					id="cover_letter"
					placeholder={`Cover Letter`}
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
			</div>

			<div className="form-btn">
				<button
					className="btn style-four me-3"
					type="submit"
					disabled={isLoading || isSubmitting || !isValid}
				>
					{isLoading || isSubmitting ? (
						<>
							<Spinner />
							Please wait....
						</>
					) : (
						"Apply"
					)}
				</button>
			</div>
		</form>
	);
};

export default ApplicationForm;
