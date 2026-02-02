"use client";
const Input = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="col-md-6">
			<div className="form-group mb-20">
				<label className="text-dark" htmlFor={id}>
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
		</div>
	);
};

export default Input;
