"use client";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import ProfilePhotoUpload from "./ProfilePhotoUpload";
import { useEffect } from "react";

const ProfilePhoto = ({ currentUser }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isLoading, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			image: "",
		},
	});

	useEffect(() => {
		setValue("image", currentUser.image);
	}, [currentUser, setValue]);

	const image = watch("image");

	const onSubmit = async (data) => {
		await axios
			.post("/api/user/profile-photo", data)
			.then((response) => {
				toast.success(
					"Thank you! Your profile photo has been updated."
				);
				router.refresh();
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

	const handleImageChange = (value) => {
		setCustomValue("image", value);
		handleSubmit(onSubmit)(); // Submit the form immediately after setting the image
	};
	return (
		<>
			<h3 className="db-content-title fs-20 fw-bold mb-22">
				Profile Photo
			</h3>
			<div className="user-photo-wrap d-inline-block position-relative index-1 rounded-circle mb-35">
				<div className="user-avatar d-inline-block rounded-circle">
					{image ? (
						<Image
							src={image}
							alt="User"
							className="rounded-circle"
							width={90}
							height={90}
						/>
					) : (
						<Image
							src={
								currentUser.image
									? currentUser.image
									: "/images/dashbboard/user-big.jpg"
							}
							alt="User"
							className="rounded-circle"
							width={90}
							height={90}
						/>
					)}
				</div>
				<div className="file-upload-btn position-absolute">
					<label
						htmlFor="upload"
						className="file-upload__label transition d-flex flex-column align-items-center justify-content-center bg-white rounded-circle"
					>
						{isLoading || isSubmitting ? (
							<div
								className="spinner-border spinner-border-sm"
								role="status"
							>
								<span className="visually-hidden">
									Loading...
								</span>
							</div>
						) : (
							<Image
								src="/images/icons/edit.svg"
								alt=""
								width="16"
								height="16"
							/>
						)}
					</label>
					<ProfilePhotoUpload onChange={handleImageChange} />
				</div>
			</div>
		</>
	);
};

export default ProfilePhoto;
