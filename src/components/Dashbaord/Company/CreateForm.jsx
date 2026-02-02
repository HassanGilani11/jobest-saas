"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import InputField from "./InputField";
import Spinner from "@/components/Spinner";
import LogoUpload from "./LogoUpload";
import { useEffect } from "react";
import { dateInputFormate } from "@/utils/dateFormat";

const CreateForm = ({ company }) => {
	const router = useRouter();
	const { companyId } = useParams();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			name: "",
			description: "",
			location: "",
			revenue: "",
			phone: "",
			email: "",
			company_size: "",
			founded: "",
			logo_url: "",
			website: "",
			twitter: "",
			facebook: "",
			linkedin: "",
			youtube: "",
		},
	});

	useEffect(() => {
		setValue("name", company ? company.name : "");
		setValue("description", company ? company.description : "");
		setValue("location", company ? company.location : "");
		setValue("revenue", company ? company.revenue : "");
		setValue("phone", company ? company.phone : "");
		setValue("email", company ? company.email : "");
		setValue("company_size", company ? company.company_size : "");
		setValue("founded", company ? dateInputFormate(company.founded) : "");
		setValue("logo_url", company ? company.logo_url : "");
		setValue("website", company ? company.website_url : "");
		setValue("twitter", company ? company.twitter_url : "");
		setValue("facebook", company ? company.facebook_url : "");
		setValue("linkedin", company ? company.linkedin_url : "");
		setValue("youtube", company ? company.youtube_url : "");
	}, [company, setValue]);

	const logo_url = watch("logo_url");

	const onSubmit = async (data) => {
		if (!data.logo_url) {
			toast.error("Please drop company logo 50x50 before submitting.");
			return;
		}

		if (companyId) {
			await axios
				.put(`/api/em/company/${companyId}`, data)
				.then((response) => {
					toast.success(
						"Thank you! Your organization has been updated."
					);
					router.push(`/en/dashboard/em/companies`);
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			await axios
				.post("/api/em/company/new", data)
				.then((response) => {
					toast.success(
						"Thank you! Your organization has been added."
					);
					router.push(`/en/dashboard/em/companies`);
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		}
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
				<InputField
					label="Organization Name"
					id="name"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Location Address"
					id="location"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Description"
					id="description"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Revenue"
					id="revenue"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Phone"
					id="phone"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Email"
					id="email"
					type="email"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Founded Date"
					id="founded"
					type="date"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Company Size"
					id="company_size"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Website Address"
					id="website"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Twitter"
					id="twitter"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Facebook"
					id="facebook"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="Linkedin"
					id="linkedin"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>
				<InputField
					label="YouTube"
					id="youtube"
					disabled={isLoading || isSubmitting}
					register={register}
					errors={errors}
					required
				/>

				<LogoUpload
					onChange={(value) => setCustomValue("logo_url", value)}
					value={logo_url}
				/>

				<div className="form-btn">
					<button
						type="submit"
						className="btn style-four me-3"
						disabled={isLoading || isSubmitting || !isValid}
					>
						{isSubmitting ? (
							<>
								<Spinner /> Please Wait...
							</>
						) : (
							<>Save</>
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default CreateForm;
