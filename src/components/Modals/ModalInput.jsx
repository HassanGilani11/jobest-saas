"use client";
import React from "react";

const ModalInput = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="mb-3">
			<label htmlFor={id} className="col-form-label">
				{label}:
			</label>
			<input
				id={id}
				type={type}
				className={`form-control ${errors[id] ? "is-invalid" : ""}`}
				placeholder={label}
				{...register(id, { required })}
				disabled={disabled}
			/>
		</div>
	);
};

export default ModalInput;
