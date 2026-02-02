"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

const ProfilePhotoUpload = ({ onChange, label = "Profile Photo" }) => {
	return (
		<>
			<CldUploadWidget
				onSuccess={(result) => {
					onChange(result.info.secure_url);
				}}
				uploadPreset={uploadPreset}
				options={{
					maxFiles: 1, // Allow only one file to be uploaded
					clientAllowedFormats: ["jpg", "png"], // Restrict to PDF files only
					resourceType: "raw", // Specify raw resource type for non-image files
				}}
				showPoweredBy={false}
				cropping={true}
			>
				{({ open }) => {
					return (
						<>
							<div
								onClick={() => open?.apply()}
								className="file-upload__input"
							>
								{/* <div className="text-center">
									Click to upload
									<div className="form-text">{label}</div>
								</div> */}
							</div>
						</>
					);
				}}
			</CldUploadWidget>
		</>
	);
};

export default ProfilePhotoUpload;
