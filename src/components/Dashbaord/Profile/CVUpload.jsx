"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

const CVUpload = ({ onChange, value, label = "CV .pdf" }) => {
	const router = useRouter();
	const handleOpenInNewTab = (url) => {
		window.open(url, "_blank"); // '_blank' opens the URL in a new tab
	};
	return (
		<div className="col-md-6">
			<div className="form-group mb-20">
				<label className="text-dark">{label}:</label>
				<CldUploadWidget
					onSuccess={(result) => {
						onChange(result.info.secure_url);
					}}
					uploadPreset={uploadPreset}
					options={{
						maxFiles: 1, // Allow only one file to be uploaded
						clientAllowedFormats: ["pdf"], // Restrict to PDF files only
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
									className="img-thumbnail mb-3"
								>
									<div className="text-center">
										Click to upload
										<div className="form-text">{label}</div>
									</div>
								</div>
							</>
						);
					}}
				</CldUploadWidget>
				{value && (
					<button
						type="button"
						className="btn btn-outline-secondary border"
						onClick={() => handleOpenInNewTab(value)}
					>
						View CV
					</button>
				)}
			</div>
		</div>
	);
};

export default CVUpload;
