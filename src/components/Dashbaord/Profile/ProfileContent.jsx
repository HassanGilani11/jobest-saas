"use client";

import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import Navbar from "../Navbar";
import Input from "./Input";
import CVUpload from "./CVUpload";
import ProfilePhoto from "./ProfilePhoto";

const ProfileContent = ({ currentUser }) => {
	const router = useRouter();
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
			designation: "",
			description: "",
			cv: "",
			expected_salary: "",
			video_intro: "",
			location: "",
			phone: "",
			website: "",
			twitter: "",
			facebook: "",
			linkedin: "",
			youtube: "",
		},
	});

	useEffect(() => {
		setValue("name", currentUser.name);
		setValue("designation", currentUser.designation);
		setValue("description", currentUser.description);
		setValue("cv", currentUser.cv);
		setValue("expected_salary", currentUser.expected_salary);
		setValue("video_intro", currentUser.video_intro);
		setValue(
			"location",
			currentUser.profile ? currentUser.profile.location : ""
		);
		setValue("phone", currentUser.profile ? currentUser.profile.phone : "");
		setValue(
			"website",
			currentUser.profile ? currentUser.profile.website : ""
		);
		setValue(
			"twitter",
			currentUser.profile ? currentUser.profile.twitter : ""
		);
		setValue(
			"facebook",
			currentUser.profile ? currentUser.profile.facebook : ""
		);
		setValue(
			"linkedin",
			currentUser.profile ? currentUser.profile.linkedin : ""
		);
		setValue(
			"youtube",
			currentUser.profile ? currentUser.profile.youtube : ""
		);
	}, [currentUser, setValue]);

	const cv = watch("cv");

	const onSubmit = async (data) => {
		await axios
			.post("/api/user/profile", data)
			.then((response) => {
				toast.success("Thank you! Your profile has been updated.");
				router.push(`/en/dashboard/profile`);
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
		<div className="db-main transition">
			<Navbar />
			<div className="db-content">
				<div className="db-content-box bg-white mb-25">
					<ProfilePhoto currentUser={currentUser} />
					<h3 className="db-content-title fs-20 fw-bold mb-22">
						Information
					</h3>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="comment-form"
					>
						<div className="row">
							<Input
								label="Name"
								id="name"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								label="Designation"
								id="designation"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								label="About Me"
								id="description"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								type="number"
								label="Expected Salary (month)"
								id="expected_salary"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								label="Address"
								id="location"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								label="Phone"
								id="phone"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required
							/>
							<Input
								label="Website"
								id="website"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required={false}
							/>
							<Input
								label="Twitter"
								id="twitter"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required={false}
							/>
							<Input
								label="Facebook"
								id="facebook"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required={false}
							/>
							<Input
								label="Linkedin"
								id="linkedin"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required={false}
							/>
							<Input
								label="Youtube"
								id="youtube"
								disabled={isLoading || isSubmitting}
								register={register}
								errors={errors}
								required={false}
							/>
							<CVUpload
								onChange={(value) =>
									setCustomValue("cv", value)
								}
								value={cv}
							/>
						</div>
						<div className="form-btn">
							<button
								type="submit"
								className="btn style-four me-3"
								disabled={isLoading || isSubmitting}
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileContent;
