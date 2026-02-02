import React from "react";

const ModalTextArea = ({ id, label, disabled, register, required, errors }) => {
	return (
		<div className="mb-3">
			<label htmlFor={id} className="col-form-label">
				{label}:
			</label>
			<textarea
				className={`form-control ${errors[id] ? "is-invalid" : ""}`}
				id={id}
				placeholder={label}
				{...register(id, { required })}
				disabled={disabled}
			/>
		</div>
	);
};

export default ModalTextArea;
