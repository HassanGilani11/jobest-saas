"use client";

const TagsInput = ({
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
		<div className="col-6">
			<div className="form-group mb-20">
				<label className="text-dark" htmlFor={id}>
					{label}:
				</label>
				<textarea
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

export default TagsInput;
