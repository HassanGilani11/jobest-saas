"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

const ImageUpload = ({
	onChange,
	value,
	label = "Portfolio Image 550x600",
}) => {
	return (
		<div className="mb-3">
			<label className="col-form-label">{label}</label>
			<CldUploadWidget
				onSuccess={(result) => {
					onChange(result.info.secure_url);
				}}
				uploadPreset={uploadPreset}
				options={{ maxFiles: 1 }}
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

							{value && (
								<Image
									src={value}
									alt="listings"
									width={550}
									height={600}
								/>
							)}
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;
