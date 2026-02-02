"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

const LogoUpload = ({
	onChange,
	value,
	label = "Organization Logo 50x50 pixels.",
}) => {
	return (
		<div className="col-6">
			<div className="form-group mb-20">
				<label className="text-dark">{label}:</label>
				<CldUploadWidget
					onSuccess={(result) => {
						onChange(result.info.secure_url);
					}}
					uploadPreset={uploadPreset}
					options={{
						maxFiles: 1, // Allow only one file to be uploaded
						clientAllowedFormats: ["jpg", "png"], // Restrict to PDF files only
					}}
					showPoweredBy={false}
					cropping={true}
				>
					{({ open }) => {
						return (
							<>
								<div
									onClick={() => open?.apply()}
									style={{
										border: "2px dashed #ccc", // Dashed border
										padding: "20px", // Padding inside the container
										borderRadius: "10px", // Optional, to round the corners
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										cursor: "pointer", // Indicate it's clickable
									}}
								>
									<div className="text-center">
										Click to upload
										<div className="form-text">{label}</div>
									</div>
								</div>
								{value && (
									<Image
										width={50}
										height={50}
										src={value}
										className="rounded-circle"
										style={{ marginTop: "10px" }}
										alt="image"
									/>
								)}
							</>
						);
					}}
				</CldUploadWidget>
			</div>
		</div>
	);
};

export default LogoUpload;
