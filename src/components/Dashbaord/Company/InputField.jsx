"use client";

const InputField = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="col-6">
			<div className="form-group mb-20">
				<label className="text-dark mb-1" htmlFor={id}>
					{label}:
				</label>
				<input
					style={{ height: "45px", fontSize: "14px" }}
					id={id}
					type={type}
					className={`bg-gray border-0 w-100 round-4 ${
						errors[id] ? "is-invalid" : ""
					}`}
					placeholder={label}
					{...register(id, { required })}
					disabled={disabled}
				/>
			</div>
		</div>
	);
};

export default InputField;
