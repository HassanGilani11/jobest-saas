"use client";

const InputField = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
	errors,
	placeholder,
}) => {
	return (
		<div className="col-12">
			<div className="form-group mb-20">
				<label className="text-dark" htmlFor={id}>
					{label}:
				</label>
				<input
					id={id}
					type={type}
					className={`bg-gray border-0 w-100 round-4 ${
						errors[id] ? "is-invalid" : ""
					}`}
					placeholder={placeholder}
					{...register(id, { required })}
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default InputField;
