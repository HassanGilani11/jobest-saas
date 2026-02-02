"use client";
import React from "react";

const FormInput = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
}) => {
	return (
		<div className="form-group mb-20">
			<label className="text-dark" htmlFor="name">
				{label}
			</label>
			<input
				type={type}
				name="name"
				id={id}
				placeholder={label}
				className="bg-white border-0 w-100 round-4"
				disabled={disabled}
				{...register(id, { required })}
			/>
		</div>
	);
};

export default FormInput;
